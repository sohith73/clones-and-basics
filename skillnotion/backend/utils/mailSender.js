const nodemailer = require("nodemailer")
require("dotenv").config()

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            auth: {
                user: 'sohith73@gmail.com',
                pass: 'ayed ylfn xfcr jxoh'
            }
        });

        const info = await transporter.sendMail({
            from: "STUDY NOTION",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(`info : - > ${info}`);
        return info

    } catch (err) {
        console.log("unable to send mail");
        console.log(err);
    }
}

module.exports = mailSender