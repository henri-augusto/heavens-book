const nodemail = require('nodemailer');
const User = require('../models/userModels');
const fs = require('fs');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('file not founded');
      resolve(data);
    });
  });
};

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const transporter = nodemail.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.DATA_MAILTRAP_USER,
        pass: process.env.DATA_MAILTRAP_PASSWORD,
      },
    });

    const data = await readFilePro(
      './public/cozinhe-como-chefe-compressed.pdf'
    );

    const mailOptions = {
      from: "Heaven's Book Team, <heavensbook@mail.com>",
      to: newUser.email,
      subject: "Here's a gift for you!",
      text: 'testing',
      attachments: [
        // {
        //   filename: 'cozinhe-como-chefe-compressed.pdf',
        //   path: path.join(
        //     __dirname,
        //     './public/cozinhe-como-chefe-compressed.pdf'
        //   ),
        //   contentType: 'application/pdf',
        // },

        {
          filename: 'cozinhe-como-chefe-compressed.pdf',
          content: data,
          contentType: 'application/pdf',
        },
      ],
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        consel.log(info);
      }
    });

    res.status(200).json({
      status: 'success',
      message: 'Check your email box',
      newUser,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getStream = async (req, res) => {
  try {
    const data = await readFilePro(
      './public/cozinhe-como-chefe-compressed.pdf'
    );

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};
