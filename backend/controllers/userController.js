const sendContact = require("../utils/sendContact");

exports.contact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const userMessage = `Hey, I am ${name}.
    \n My email is ${email}.
    \n My phone is ${phone}.
    \n My subject is ${subject}.
    \n My message is ${message}.`;

    await sendContact(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
