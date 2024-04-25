import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import EmailIcon from '@mui/icons-material/Email';
import { Typography, Container, Grid, TextField, TextareaAutosize, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/submitform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      if (response.ok) {
        window.alert('Email sent successfully!');
        event.target.reset();
      } else {
        const responseData = await response.json();
        window.alert(responseData.error || 'An error occurred while sending the email.');
      }
    } catch (error) {
      console.error(error);
      window.alert('An error occurred while sending the email. Please try again later.');
    }
  };

  return (
    <section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      backgroundImage: `url('/images/bg3.jpg')`,
      backgroundSize: 'cover',
      padding: '50px 0',
    }}
  >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>{title}</Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <EmailIcon style={{ color: 'red', marginRight: '0.5rem' }} />
                <Typography variant="h4" style={{ color: 'red', marginBottom: 0 }}>{info.title}</Typography>
              </div>
              <Typography variant="body1" style={{ color: 'white', marginBottom: '1rem' }}>{markdownify(info.description, "p")}</Typography>
              <Typography variant="h6" style={{ color: 'red', marginBottom: '0.5rem' }}>Note:</Typography>
              <Typography variant="body1" style={{ color: 'white', marginBottom: '1rem' }}>{markdownify(info.note, "p")}</Typography>
              <ul style={{ padding: 0 }}>
                {info.contacts.map((contact, index) => (
                  <li key={index} style={{ color: 'white', marginBottom: '0.5rem' }}>
                    <strong>{markdownify(contact)}</strong>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                type="email"
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Subject"
                name="subject"
                required
              />
              <TextareaAutosize
                rowsMin={5}
                style={{ width: '100%', marginBottom: '1rem' }}
                placeholder="Your message"
                name="message"
              />
              <Button 
                variant="contained" 
                type="submit" 
                style={{ backgroundColor: '#00308F', color: 'white' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Now
              </Button>
            </motion.form>
          </Grid>
        </Grid>
      </Container>
      </section>
  );
};

export default Contact;
