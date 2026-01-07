import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="title">Education</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>B.Tech – Artificial Intelligence and Data Science</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>K.L.N College of Engineering, Sivagangai</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ color: 'var(--accent)' }}>NOV 2022 - MAY 2026</span>
                            <span style={{ fontWeight: 'bold' }}>CGPA: 8.0%</span>
                        </div>
                    </div>

                    <div style={{ borderLeft: '4px solid var(--text-secondary)', paddingLeft: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>HSC (Class XII)</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>St. Joseph’s Matriculation Higher Secondary School, Madurai</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>JUN 2020 - MAY 2022</span>
                            <span style={{ fontWeight: 'bold' }}>Score: 80%</span>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    );
};

export default Education;
