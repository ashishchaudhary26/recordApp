
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Record Taking System</h1>
      </header>
      <main>
        <section className="cta-section">
          <h2>Welcome to our Record Taking System!</h2>
          <p>Effortlessly manage and organize your records.</p>
          <Link to="/" className="cta-button">
            Get Started
          </Link>
        </section>
        <section className="features-section">
          <div className="feature">
            <h3>Easy Record Entry</h3>
            <p>Quickly add and update records with our user-friendly interface.</p>
          </div>
          <div className="feature">
            <h3>Data Security</h3>
            <p>Your data is secure and private with our advanced security measures.</p>
          </div>
          <div className="feature">
            <h3>Customization</h3>
            <p>Customize the system to suit your specific record-keeping needs.</p>
          </div>
        </section>
      </main>
      <footer>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ashish-chaudhary-598097228/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <br />
        <a href="https://auth.geeksforgeeks.org/user/ashishchaudhary26/practice/" target="_blank" rel="noopener noreferrer">
          GeeksforGeeks
        </a>
        <br />
        <a href="https://www.instagram.com/ashishchaudhary.26/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <br />
        <p>chaudharyash2002@gmail.com</p>
      </div>
      <p>&copy; 2023 ASHISH CHAUDHARY</p>
      </footer>
    </div>
  );
};

// export default HomePage;
