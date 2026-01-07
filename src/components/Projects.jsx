import React from 'react';

const projectsData = [
    {
        title: "AI-Based Skin Disease Detection",
        tech: "Deep Learning, CNN, TensorFlow, Python",
        date: "OCT 2025",
        points: [
            "Implemented a CNN-based deep learning model for automated skin disease detection.",
            "Optimized preprocessing and training pipelines to improve prediction efficiency.",
            "Developed a real-time prediction interface using Python and TensorFlow."
        ]
    },
    {
        title: "AI-Based Text Summarization",
        tech: "Hugging Face Transformers, Python",
        date: "DEC 2025", // Inferred from resume context or use "Recent"
        points: [
            "Implemented an AI-based text summarization system using Hugging Face Transformer models.",
            "Optimized text preprocessing and inference to generate concise and accurate summaries.",
            "Developed a user-friendly interface for real-time document summarization."
        ]
    },
    {
        title: "HireYou – Interview Preparation Website",
        tech: "HTML, CSS, JavaScript",
        date: "NOV 2024 - DEC 2025",
        points: [
            "Developed HireYou, an interview preparation website.",
            "Provided domain-specific preparation for Data Science, AI, ML, Statistics, and Aptitude."
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="title">Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projectsData.map((project, index) => (
                        <div key={index} style={{
                            background: 'var(--bg-card)',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border)',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <span className="subtitle" style={{ fontSize: '0.8rem' }}>{project.date}</span>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                            <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.tech}</p>

                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                                {project.points.map((point, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
