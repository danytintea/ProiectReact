import axios from 'axios';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('tLwEavUEQlKpVWQt80U3zQ');

app.post('/send-email', (req, res) => {
    const { to, from, subject, text, html } = req.body;
  
    const msg = {
      to,
      from,
      subject,
      text,
      html,
    };
  
    sgMail.send(msg)
      .then(() => {
        res.status(200).json({ message: 'Email sent successfully' });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email' });
      });
  });

const sendEmail = () => {
  const emailData = {
    to: 'softwareplatform2023@gmail.com',
    from: 'tinteadanieldanny@yahoo.com',
    subject: 'Test Email',
    text: 'This is a test email sent from SendGrid.',
    html: '<p>This is a test email sent from <strong>SendGrid</strong>.</p>',
  };

  axios.post('/send-email', emailData)
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default sendEmail;