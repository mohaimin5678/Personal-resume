function sendMail(){
    let templateParams = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    // console.log(templateParams);
    emailjs.send("service_5p5zlf9","template_fji2yfi",templateParams)
    .then(() => {
        alert("Email Sent!");
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send email");
    });
}