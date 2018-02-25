function validate() {

    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/g;
    let passwordRegex = /^[a-zA-Z0-9_]{5,15}$/g;
    let emailRegex = /^.*?@.*?\..*?$/g;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let repeatPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');

    let isCompanyChecked = $('#company').is(':checked');
    let isCompanyNumberValid = (number) => {return number >= 1000 && number <= 9999};
    let passwordsMatch = password.val() === password.val();

    $('#company').on('change',showCompanyInfo);


    $('#submit').on('click', function(ev){
        ev.preventDefault();
        checkInputs();
    });


    function checkInputs(){

        let areFieldsCorrect = true;

        function checkEmail() {
            if (emailRegex.test(email.val())) {
                changeBorders(email, true);
                console.log("email correct")
            } else {
                changeBorders(email, false);
                areFieldsCorrect = false;
            }
        }

        checkEmail();


        function checkUsername() {
            if (usernameRegex.test(username.val())) {
                // console.log("username tested");
                changeBorders(username, true);
            } else {
                // console.log("username incorrect");
                changeBorders(username, false);
                areFieldsCorrect = false;
            }
        }

        checkUsername();


        function checkPassword() {
            if (passwordRegex.test(password.val())) {
                changeBorders(password, true);
            } else {
                changeBorders(password, false);
                areFieldsCorrect = false;
            }
        }

        checkPassword();

        function checkPasswordsMatch() {
            if (passwordsMatch && (repeatPassword.val() !== '')) {
                changeBorders(repeatPassword, true);
            } else {
                changeBorders(repeatPassword, false);
                areFieldsCorrect = false;
            }
        }

        checkPasswordsMatch();

        if(isCompanyNumberValid(Number(companyNumber.val()) && isCompanyChecked)){
            changeBorders(companyNumber, true);
        }else if((!isCompanyNumberValid(Number(companyNumber.val())) && isCompanyChecked)){
            changeBorders(companyNumber, false);
            areFieldsCorrect = false;
        }

        if(areFieldsCorrect){
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }

        return areFieldsCorrect;
    }

    function showCompanyInfo(){
        if($('#companyInfo').css('display') === 'block'){
            $('#companyInfo').css('display', 'none');
        }else {
            $('#companyInfo').css('display', 'block');
        }
    }

    function changeBorders(element, bool){
        if(!bool){
            element.css('border', '3px solid red')
        }else{
            element.css('border', 'none')
        }
    }

}
