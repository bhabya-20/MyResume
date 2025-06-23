// src/components/Resume.js
import React from 'react';

const Resume = () => (
  <section id="resume" className="section">
    <h2>Resume</h2>
    <p>You can <a href="/Bhabya(Resume).pdf" download>download my resume</a> or view it below:</p>
    <iframe
      src="/Bhabya(Resume).pdf"
      width="100%"
      height="600px"
      title="Resume PDF"
    ></iframe>
  </section>
);

export default Resume;

