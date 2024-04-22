import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    try {
      // Send the email using nodemailer
      await transporter.sendMail(mailOptions);

      // Respond with a plain text success message
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      // Handle any errors and respond with a plain text server error message
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    // If the request method is not POST, respond with a plain text method not allowed message
    res.status(405).send('Method Not Allowed');
  }
}
