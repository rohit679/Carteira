import nodemailer from "nodemailer";
import { getSecret } from "../configuration.js";

const sendEmail = async (to, subject, text) => {
  const secret = getSecret();
  try {
    const transporter = nodemailer.createTransport({
      host: secret.host,
      service: secret.service,
      port: 587,
      secure: true,
      auth: {
        user: secret.user,
        pass: secret.pass,
      },
    });

    await transporter.sendMail({
      from: secret.user,
      to,
      subject: subject,
      text: text,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

export default sendEmail;
