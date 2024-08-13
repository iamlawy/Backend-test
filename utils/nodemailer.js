const mailer = require("nodemailer")

const useremail = async(email, firstname) =>{

    const messageTemplate = `
    <div>
    <h2>Welcome message</h2>
    <ul>
        <li>Name: ${firstname}</li>
        <li>Email: ${email}</li>
    </ul>
    <div>
        <p> Dear ${firstname},</p>
        <p>Welcome to Sutiron Nigeria limited</p>
    </div>
    </div>
    `



    const transporter = mailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.user,
            pass: process.env.pass 
        }
    })
    const mailOptions = {
        from:process.env.user,
        to:email,
        subject:"welcome message",
        html: messageTemplate
    } 
    try {
        const sentmail = await transporter.sendMail(mailOptions);
        if (sentmail) {
            console.log("mail sent succesfull");
        }
    } catch (error) {
        throw{
            errorname:"mailerror",
            message: error.message
        }
    }

}





module.exports = {useremail}