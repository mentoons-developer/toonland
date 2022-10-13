const express = require("express");
const nodeMail = require("nodemailer");
const port = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const transporter = nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: "detterminedd@gmail.com",
      pass: "zgykwyksykgetcjf",
    },
    port: 465,
    host: "smpt.gmail.com",
  });

  const toonlandFeedback = {
    from: req.body.email,
    to: "mentoonsdeveloper@gmail.com",
    subject: "Tooonland User's feedback",

    html: `You got a message from
  Feedback : ${req.body.feedback}
  `,
  };

  const mentoonsCareers = {
    from: req.body.email,
    to: "mentoonsdeveloper@gmail.com",
    subject: req.body.subject,
    attachments: [
      {
        filename: req.body.attachcv,
        contentType: "application/pdf",
      },
    ],

    html: `You got a message from
  Email : ${req.body.email}
  Name: ${req.body.name}
  Message: ${req.body.message}
  Designation: ${req.body.designation}
  Mobile: ${req.body.phone}
  `,
  };

  const toonlandWorkshops = {
    from: req.body.email,
    to: "mentoonsdeveloper@gmail.com",
    subject: req.body.subject,
    attachments: [
      {
        filename: req.body.attachcv,
        contentType: "application/pdf",
      },
    ],

    html: `You got a message from 
  Email : ${req.body.email}
  Name: ${req.body.name}
  Message: ${req.body.message}
  Designation: ${req.body.designation}
  Mobile: ${req.body.phone}
  `,
  };

  transporter.sendMail(toonlandFeedback, (err, info) => {
    if (err) {
      console.log(err);
      res.send("Message Could not be Sent");
    } else {
      console.log(info);
      res.send("Message Sent Successfully!");
    }
  });

  transporter.sendMail(mentoonsCareers, (err, info) => {
    if (err) {
      console.log(err);
      res.send("Message Could not be Sent");
    } else {
      console.log(info);
      res.send("Message Sent Successfully!");
    }
  });

  transporter.sendMail(toonlandWorkshops, (err, info) => {
    if (err) {
      console.log(err);
      res.send("Message Could not be Sent");
    } else {
      console.log(info);
      res.send("Message Sent Successfully!");
    }
  });
});

app.listen(port, () => console.log("Server is running!"));
