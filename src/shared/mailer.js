const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const handlebars = require('handlebars');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

dotenv.config();
const transporter = nodemailer.createTransport(sendgridTransport({
	auth: {
		api_key: process.env.SENDGRID_API
	}
}));

/**
 * Handlr the process of sending an email
 * 
 * @param  
 * @return 
 */
module.exports = async (templateFile, sendTo, subject, params) => {
    const filePath = path.join(__dirname, `../server/emails/${templateFile}`);
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = params;
    const htmlToSend = template(replacements);

    return await transporter.sendMail({
        to: sendTo,
        html: htmlToSend,
        subject: subject,
        from: 'abel@hirefreehands.tech',
    });
}
