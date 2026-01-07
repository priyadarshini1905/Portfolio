import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="title">About Me</h2>

                <div style={{
                    background: 'var(--bg-primary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)'
                }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Career Objective</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        To apply my knowledge in AI and Data Science in real-world projects that challenge me to think,
                        learn, and grow. I’m passionate about turning data into solutions and ideas into impact. I’m looking
                        for opportunities where I can explore my potential, contribute meaningfully to a team, and build a
                        career rooted in purpose and continuous learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
