function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let repeatPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');
    let companyCheckBox = $('#company');
    let companyInfo = $('#companyInfo');
    let submitButton = $('#submit');
    let validBox = $('#valid');

    let areFieldsCorrect = true;

    let isCompanyNumberValid = (number) => {
        return number >= 1000 && number <= 9999
    };
    let passwordsMatch = password.val() === repeatPassword.val();

    companyCheckBox.on('change', function () {
        if (companyInfo.css('display') === 'none') {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitButton.on("click", function (ev) {
        ev.preventDefault();
        checkInputs();

        if (areFieldsCorrect) {
            validBox.css('display', 'block');
        } else {
            validBox.css('display', 'none');
        }

        areFieldsCorrect = true;

    });


    function checkInputs() {

        regexCheck(username, /^[a-zA-Z0-9]{3,20}$/g);
        regexCheck(email, /^.*?@.*?\..*?$/g);

        if (password.val() === repeatPassword.val()) {
            regexCheck(password, /^\w{5,15}$/g);
            regexCheck(repeatPassword, /^\w{5,15}$/g)
        } else {
            password.css('border', 'solid red');
            repeatPassword.css('border', 'solid red');
            areFieldsCorrect = false;
        }

        if (companyCheckBox.is(':checked')) {
            console.log("here");
            if (isCompanyNumberValid(Number(companyNumber.val()))) {
                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border', 'solid red');
                areFieldsCorrect = false;
            }
        }
    }

    function regexCheck(input, regex) {
        if (regex.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
            areFieldsCorrect = false;
        }
    }
}
