import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="title">Contact Me</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)' }}>
                    I am currently looking for opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    <a href="mailto:priyaramesh01948@gmail.com" className="btn" style={{ textTransform: 'none' }}>
                        priyaramesh01948@gmail.com
                    </a>
                    <a href="tel:+917904436501" className="btn" style={{ textTransform: 'none' }}>
                        +91 7904436501
                    </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <a href="https://www.linkedin.com/in/priyadarshini2005" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontSize: '2rem', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#0077b5'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                        <FaLinkedin />
                    </a>
                    <a href="https://leetcode.com/u/Priyaramesh19" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontSize: '2rem', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#FFA116'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                        <SiLeetcode />
                    </a>
                    <a href="https://github.com/priyadarshini1905" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontSize: '2rem', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                        <FaGithub />
                    </a>
                </div>

                <div style={{ color: 'var(--text-secondary)' }}>
                    <p>Madurai, TamilNadu, India</p>
                </div>
            </div>

            <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Priya Darshini R. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
