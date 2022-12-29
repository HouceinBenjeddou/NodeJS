var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'hou52cine@gmail.com',
        pass: 'pass'
    }
});

//

var mailOptions = {
    form : 'from email',
    to : 'to email',
    subject :"subject node js bla",
    text : "some dummy text",
}

transporter.sendMail(mailOptions, function(err, info){
    if(err) {
        console.log(err);
    }
    else {
        console.log('email sent: ' +info.response);
    }
})