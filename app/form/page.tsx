import React from 'react';

const ContactForm: React.FC = () => {
  

  return (
    <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

    <p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
    </p>
    <p>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
    </p>
    <p>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"></textarea>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>

  );
};

export default ContactForm;
