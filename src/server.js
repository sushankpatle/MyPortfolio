const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3033;

app.use(bodyParser.json());
app.use(cors());

// Replace with your email and password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILEREMAIL,
    pass: process.env.NODEMAILERPASS,
  },
});

app.post("/api/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "sushankpatle999@gmail.com",
    subject: `Contact form submission from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
