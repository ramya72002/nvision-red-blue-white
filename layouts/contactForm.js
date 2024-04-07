import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a nodemailer transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nsriramya7@gmail.com', // Replace with your Gmail email address
        pass: 'Ramya@2002', // Replace with your Gmail email password or app password
      },
    });

    const mailOptions = {
      from: email, // Replace with your Gmail email address
      to: 'nsriramya7@gmail.com', // Replace with your destination email address
      subject: `New Contact Form Submission - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

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
