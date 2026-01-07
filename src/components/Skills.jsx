import React from 'react';

const skills = [
    { category: "Languages", items: ["Python", "Java", "SQL"] },
    { category: "Data Science & ML", items: ["TensorFlow", "Pandas", "NumPy", "Deep Learning", "Machine Learning"] },
    { category: "Tools & Platforms", items: ["PowerBI", "Excel", "N8N", "GitHub", "Microsoft Azure"] },
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="title">Technical Skills</h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {skills.map((group, index) => (
                        <div key={index}>
                            <h3 style={{
                                color: 'var(--accent)',
                                marginBottom: '1rem',
                                fontSize: '1.2rem',
                                borderBottom: '1px solid var(--border)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block'
                            }}>
                                {group.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {group.items.map(skill => (
                                    <div key={skill} style={{
                                        padding: '1rem 2rem',
                                        background: 'var(--bg-primary)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--border)',
                                        fontSize: '1.1rem',
                                        fontWeight: '500',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.2s, border-color 0.2s',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                            e.currentTarget.style.borderColor = 'var(--accent)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = 'var(--border)';
                                        }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
