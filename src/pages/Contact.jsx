import React, { useEffect } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  useEffect(() => {
    // Dynamically add the JotForm script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/251386549200052';
    script.async = true;
    document.getElementById('jotform-embed')?.appendChild(script);
    return () => {
      // Clean up script if component unmounts
      document.getElementById('jotform-embed')?.removeChild(script);
    };
  }, []);

  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <div id="jotform-embed" style={{ marginTop: '2rem' }} />
    </section>
  );
};

export default Contact;
