const nodeMailer = require("nodemailer");

const sendContact = async (text, email) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM ST UNITED",
    to: process.env.SMPT_MAIL,
    from: email,
    text,
  });
};

module.exports = sendContact;
