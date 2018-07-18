function getMessage() {
    alert("Message!");
    $.get('/data/messages').then(data => {
        console.log(data);
    })
};