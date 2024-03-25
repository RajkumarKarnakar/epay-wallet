import React from "react";
import './About.css'
const About = () => {
  return (
    <div className="about-us-container">
      <h2>About ePay</h2>
      <p>
        At ePay, we're committed to democratizing financial services and empowering people and businesses to join and thrive in the global economy.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to give people better ways to connect with each other and break down barriers to trade and commerce around the world.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Secure Transactions: We use advanced security measures to protect your financial information.</li>
        <li>Global Reach: ePay is accepted in over 200 countries and regions worldwide.</li>
        <li>Convenience: Send money, make online payments, and manage your finances from your device.</li>
      </ul>
      <br/>
      <h3>Contact Information</h3>
      <p>
        Have questions or need assistance? Contact our support team at support@epay.com.
      </p>

      <p>
        Join millions of people who trust ePay for their online transactions and financial needs.
      </p>
    </div>
  );
};

export default About;