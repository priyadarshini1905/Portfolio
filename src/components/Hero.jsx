import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%)'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '2rem' }}>

                <div style={{ flex: '1 1 500px' }}>
                    <span className="subtitle">Artificial Intelligence & Data Science</span>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Hi, I'm <br />
                        <span style={{ color: 'var(--accent)' }}>Priya Darshini R</span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}>
                        Passionate about turning data into solutions and ideas into impact.
                        Building a career rooted in purpose and continuous learning.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="/resume.pdf" download="Priya_Darshini_Resume.pdf" className="btn">Download Resume</a>
                        <a href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>Contact Me</a>
                    </div>
                </div>

                <div style={{ flex: '0 1 400px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--accent)',
                        boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)'
                    }}>
                        <img
                            src="/profile.jpeg"
                            alt="Priya Darshini"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
