import React from 'react';
import { FaPython, FaJava, FaDatabase, FaBrain, FaGithub, FaFileExcel, FaChartBar, FaPlug, FaMagic } from 'react-icons/fa';
import { SiTensorflow, SiPandas, SiNumpy, SiN8N, SiScikitlearn, SiReact, SiStreamlit, SiFastapi, SiHuggingface, SiLangchain, SiOpenai, SiAnthropic, SiGithubcopilot } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: <FaPython color="#3776AB" /> },
            { name: "Java", icon: <FaJava color="#007396" /> },
            { name: "SQL", icon: <FaDatabase color="#4479A1" /> }
        ]
    },
    {
        category: "Libraries & Frameworks",
        items: [
            { name: "NumPy", icon: <SiNumpy color="#013243" /> },
            { name: "Pandas", icon: <SiPandas color="#150458" /> },
            { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
            { name: "Hugging Face", icon: <SiHuggingface color="#FFD21E" /> },
            { name: "React", icon: <SiReact color="#61DAFB" /> },
            { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> },
            { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
            { name: "Machine Learning", icon: <SiScikitlearn color="#F7931E" /> },
            { name: "CNN", icon: <FaBrain color="#FF69B4" /> }
        ]
    },
    {
        category: "AI / Gen AI",
        items: [
            { name: "LangChain", icon: <SiLangchain color="#1C3C3C" /> },
            { name: "RAG", icon: <FaMagic color="#8B5CF6" /> },
            { name: "OpenAI (GPT-4)", icon: <SiOpenai color="#412991" /> },
            { name: "Anthropic (Claude)", icon: <SiAnthropic color="#D4A373" /> },
            { name: "API Integration", icon: <FaPlug color="#10B981" /> }
        ]
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "Git", icon: <FaGithub color="#F05032" /> },
            { name: "GitHub", icon: <FaGithub color="#181717" /> },
            { name: "Excel", icon: <FaFileExcel color="#217346" /> },
            { name: "Power BI", icon: <FaChartBar color="#F2C811" /> },
            { name: "N8N", icon: <SiN8N color="#EA4B71" /> },
            { name: "Antigravity IDE", icon: <FaMagic color="#6366F1" /> },
            { name: "GitHub Copilot", icon: <SiGithubcopilot color="#000000" /> },
            { name: "Azure", icon: <VscAzure color="#0078D4" /> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="title">Technical Skills</h2>

                <div style={{ display: 'grid', gap: '3rem' }}>
                    {skills.map((group, index) => (
                        <div key={index}>
                            <h3 style={{
                                color: 'var(--accent)',
                                marginBottom: '1.5rem',
                                fontSize: '1.5rem',
                                borderLeft: '4px solid var(--accent)',
                                paddingLeft: '1rem',
                                display: 'inline-block'
                            }}>
                                {group.category}
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                {group.items.map(skill => (
                                    <div key={skill.name} style={{
                                        padding: '1.5rem',
                                        background: 'var(--bg-primary)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--border)',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.borderColor = 'var(--accent)';
                                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = 'var(--border)';
                                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {skill.icon}
                                        </div>
                                        <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                                            {skill.name}
                                        </span>
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
