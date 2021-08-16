

function show() {
    document.getElementById("side-menu").classList.toggle("show");
}

// ----- E-mail -----

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "vladislava.nirca@gmail.com",
//         Password: "coeuhufwkgbllekk",
//         To: 'vladislava.nirca@gmail.com',
//         From: "vladislava.nirca@gmail.com",
//         Subject: "Sending Email using javascript",
//         Body: "Articolul tau",
//     })
//         .then(function (message) {
//             alert("Emailul a fost trimis cu succes")
//         });
// }

function sendE(params) {
    var templateParams = {
        nume: document.getElementById("nume").value,
        prenume: document.getElementById("prenume").value,
        email: document.getElementById("email").value,
        clasa: document.getElementById("clasa").value,
        titlu: document.getElementById("titlu").value,
        articol: document.getElementById("articol").value
    };

    emailjs.send('service_4cq43kr', 'template_lccxeha', templateParams) //Insert your email service ID and email template ID
        .then(function (response) {
            alert("Articolul domneavostră a fost trimis cu succes. Vă mulțumim!");
        }, function (error) {
            alert("Aveti o eroare, verificati datele dumneavoastra");
        });
}


