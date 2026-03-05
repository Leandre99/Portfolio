import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Database, Server, Smartphone, Award, Briefcase, GraduationCap, ExternalLink, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = {};
    const sections = ['about', 'skills', 'experience', 'projects', 'certifications'];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [section]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observers[section].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const skills = {
    frontend: [
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'React Native', level: 80, icon: '⚛️' },
      { name: 'Bootstrap', level: 90, icon: '🅱️' },
      { name: 'JavaScript', level: 85, icon: '🟨' }
    ],
    backend: [
      { name: 'Python/Django', level: 85, icon: '🐍' },
      { name: 'Laravel/PHP', level: 80, icon: '🐘' },
      { name: 'FastAPI', level: 75, icon: '⚡' },
      { name: 'Java', level: 70, icon: '☕' }
    ],
    database: [
      { name: 'PostgreSQL', level: 85, icon: '🐘' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'SQL', level: 90, icon: '💾' }
    ],
    tools: [
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'Git', level: 85, icon: '📦' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Postman', level: 85, icon: '📮' }
    ]
  };

  const experiences = [
    {
      title: 'Stage Professionnel',
      company: 'Ministère de l\'Économie et des Finances',
      period: 'Février 2026 - En cours',
      location: 'Cotonou, Bénin',
      description: 'Développement d\'applications web pour la gestion administrative et financière',
      achievements: ['Optimisation des processus', 'Solutions numériques innovantes']
    },
    {
      title: 'Stage Professionnel',
      company: 'JTEKSolutions',
      period: 'Novembre 2024 - Mai 2025',
      location: 'Bénin',
      description: 'Conception et développement d\'applications web complètes',
      achievements: ['Application Intranet en Angular/Python', 'Architecture logicielle robuste']
    },
    {
      title: 'Stage Académique',
      company: 'MEGATECH',
      period: 'Avril 2024 - Septembre 2024',
      location: 'Bénin',
      description: 'Développement web et maintenance d\'applications',
      achievements: ['Apprentissage technologies modernes', 'Travail en équipe']
    },
    {
      title: 'Stage Académique',
      company: 'UPPERSOFTGROUP',
      period: 'Août 2023 - Septembre 2023',
      location: 'Bénin',
      description: 'Initiation au développement professionnel',
      achievements: ['Premières expériences en entreprise', 'Bases du développement web']
    }
  ];

  const projects = [
    {
      title: 'Application Intranet JTESolutions',
      tech: ['Angular', 'Python', 'PostgreSQL'],
      description: 'Application web complète pour la gestion interne de l\'entreprise avec authentification, gestion des utilisateurs et modules métier.',
      highlights: ['Architecture MVC', 'API REST', 'Interface responsive']
    },
    {
      title: 'Application Web NOVATECH VISION',
      tech: ['React', 'Django', 'PostgreSQL'],
      description: 'Plateforme web pour entreprise avec gestion de contenu et tableau de bord analytique.',
      highlights: ['Dashboard interactif', 'Performance optimisée', 'UX/UI moderne']
    },
    {
      title: 'Gestion d\'Élevage au Bénin',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      description: 'Application de gestion complète pour le secteur de l\'élevage avec suivi des animaux, santé et production.',
      highlights: ['Modules métier spécialisés', 'Rapports automatisés', 'Multi-utilisateurs']
    },
    {
      title: 'Design & Création Graphique',
      tech: ['Adobe Suite', 'Sketch'],
      description: 'Conception de logos et affiches pour divers clients, alliant créativité et communication visuelle.',
      highlights: ['Identité visuelle', 'Design personnalisé', 'Supports marketing']
    }
  ];

  const certifications = [
    { name: 'Machine Learning with Python', org: 'FreeCodeCamp', year: '2025' },
    { name: 'Data Analysis with Python', org: 'FreeCodeCamp', year: '2025' },
    { name: 'Backend Development & API', org: 'FreeCodeCamp', year: '2025' },
    { name: 'AI Powered Apps with LangChain', org: 'Cognitive Class', year: '2025' },
    { name: 'CRUD Operations in MongoDB', org: 'MongoDB', year: '2025' },
    { name: 'Google Analytics', org: 'Google', year: '2025' },
    { name: 'Predictive Modeling', org: 'CodeSignal', year: '2025' },
    { name: 'Java Programming', org: 'SoloLearn', year: '2023' },
    { name: 'SQL Database', org: 'SoloLearn', year: '2022' }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">&lt;Léandre</span>
            <span className="logo-accent">/&gt;</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Accueil</a>
            <a href="#about" className="nav-link">À propos</a>
            <a href="#skills" className="nav-link">Compétences</a>
            <a href="#experience" className="nav-link">Expérience</a>
            <a href="#projects" className="nav-link">Projets</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span> Bonjour, je suis
            </div>
            <h1 className="hero-name">
              <span className="name-first">Léandre</span>
              <span className="name-last">ELISHA</span>
            </h1>
            <div className="hero-titles">
              <div className="title-line">
                <ChevronRight className="chevron" />
                <span className="gradient-text">Développeur Fullstack</span>
              </div>
              <div className="title-line">
                <ChevronRight className="chevron" />
                <span className="gradient-text">Web & Mobile</span>
              </div>
              <div className="title-line">
                <ChevronRight className="chevron" />
                <span className="gradient-text">Ingénieur Logiciel</span>
              </div>
            </div>
            <p className="hero-description">
              Passionné par l'innovation et les technologies émergentes, je crée des applications web performantes 
              et des solutions numériques sur mesure. Spécialisé en IA, Machine Learning et développement fullstack.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                <Code size={20} />
                Voir mes projets
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={20} />
                Me contacter
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-bg"></div>
              <div className="profile-placeholder">
                <div className="placeholder-text"> <img src="/votre-photo.png" alt="Léandre ELISHA" className="profile-image" /></div>
              </div>
            </div>
            <div className="floating-card tech-card">
              <Code size={24} className="card-icon" />
              <span>Clean Code</span>
            </div>
            <div className="floating-card ai-card">
              <Database size={24} className="card-icon" />
              <span>AI/ML</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible.about ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">01.</span> À propos
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p className="lead">
                Actuellement en <strong>Licence Informatique - Génie Logiciel</strong> à l'IFRI-UAC, 
                je suis un développeur fullstack passionné par la création de solutions numériques innovantes.
              </p>
              <p>
                Mon parcours m'a permis d'acquérir une <strong>expertise polyvalente</strong> allant du développement 
                frontend avec <span className="highlight">Angular</span> et <span className="highlight">React</span>, 
                au backend avec <span className="highlight">Python/Django</span> et <span className="highlight">Laravel</span>.
              </p>
              <p>
                Particulièrement intéressé par l'<strong>Intelligence Artificielle</strong> et le <strong>Machine Learning</strong>, 
                j'ai obtenu plusieurs certifications professionnelles et je poursuis actuellement le programme <strong>FORCE-N</strong> 
                sur l'IA pour tous.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <GraduationCap className="icon" />
                  <div>
                    <strong>Formation</strong>
                    <span>Licence Génie Logiciel - IFRI-UAC</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <Briefcase className="icon" />
                  <div>
                    <strong>Expérience</strong>
                    <span>2+ ans en développement web</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <Award className="icon" />
                  <div>
                    <strong>Certifications</strong>
                    <span>9+ certifications professionnelles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`skills ${isVisible.skills ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">02.</span> Compétences Techniques
          </h2>
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-category">
              <div className="category-header">
                <Code className="category-icon" />
                <h3>Frontend</h3>
              </div>
              <div className="skills-list">
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category">
              <div className="category-header">
                <Server className="category-icon" />
                <h3>Backend</h3>
              </div>
              <div className="skills-list">
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="skill-category">
              <div className="category-header">
                <Database className="category-icon" />
                <h3>Base de données</h3>
              </div>
              <div className="skills-list">
                {skills.database.map((skill, idx) => (
                  <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <div className="category-header">
                <Smartphone className="category-icon" />
                <h3>Outils & DevOps</h3>
              </div>
              <div className="skills-list">
                {skills.tools.map((skill, idx) => (
                  <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`experience ${isVisible.experience ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">03.</span> Expérience Professionnelle
          </h2>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <div className="timeline-company">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  <div className="timeline-location">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects ${isVisible.projects ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">04.</span> Projets Réalisés
          </h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="project-header">
                  <Code className="project-icon" />
                  <ExternalLink className="project-link-icon" />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`certifications ${isVisible.certifications ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">05.</span> Certifications
          </h2>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card" style={{ animationDelay: `${idx * 0.05}s` }}>
                <Award className="cert-icon" />
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.org} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cert-ongoing">
            <div className="ongoing-badge">En cours</div>
            <strong>Intelligence Artificielle pour tous</strong>
            <span>Programme FORCE-N</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">06.</span> Restons en contact
          </h2>
          <div className="contact-content">
            <p className="contact-intro">
              Je suis actuellement <strong>disponible</strong> pour des opportunités freelance et des postes en CDI/CDD. 
              N'hésitez pas à me contacter !
            </p>
            <div className="contact-cards">
              <a href="mailto:leandreelisha20@gmail.com" className="contact-card">
                <Mail className="contact-icon" />
                <span>leandreelisha20@gmail.com</span>
              </a>
              <a href="tel:+22901610505090" className="contact-card">
                <Phone className="contact-icon" />
                <span>+229 01 61 05 05 90</span>
              </a>
              <div className="contact-card">
                <MapPin className="contact-icon" />
                <span>Agla Pylône, Abomey-Calavi, Bénin</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/leandre99" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/l%C3%A9andre-elisha-386790262/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Conçu & développé avec passion par Léandre ELISHA</p>
        <p className="footer-year">© 2026 - Tous droits réservés</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #00f5ff;
          --secondary: #7b2ff7;
          --accent: #ff006e;
          --bg-dark: #0a0e27;
          --bg-card: #141b3d;
          --text-primary: #e8f1f5;
          --text-secondary: #a0b3c8;
          --gradient-1: linear-gradient(135deg, #00f5ff 0%, #7b2ff7 100%);
          --gradient-2: linear-gradient(135deg, #ff006e 0%, #ff5e78 100%);
          --gradient-3: linear-gradient(135deg, #00f5ff 0%, #00b8d4 100%);
        }

        body {
          font-family: 'Space Grotesk', 'Segoe UI', system-ui, sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .portfolio {
          position: relative;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 245, 255, 0.1);
          z-index: 1000;
          padding: 1rem 0;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .logo-text {
          color: var(--text-primary);
        }

        .logo-accent {
          color: var(--primary);
          margin-left: 0.25rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-1);
          transition: width 0.3s;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem 4rem;
          overflow: hidden;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: var(--primary);
          margin-bottom: 1rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .wave {
          display: inline-block;
          animation: wave 2.5s infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40%, 60% { transform: rotate(0deg); }
        }

        .hero-name {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
          animation: fadeInUp 0.6s 0.2s ease-out both;
        }

        .name-first {
          display: block;
          color: var(--text-primary);
        }

        .name-last {
          display: block;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-titles {
          margin-bottom: 2rem;
          animation: fadeInUp 0.6s 0.4s ease-out both;
        }

        .title-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .chevron {
          color: var(--primary);
          flex-shrink: 0;
        }

        .gradient-text {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2.5rem;
          max-width: 600px;
          animation: fadeInUp 0.6s 0.6s ease-out both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 0.6s 0.8s ease-out both;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          font-size: 1rem;
        }

        .btn-primary {
          background: var(--gradient-1);
          color: var(--bg-dark);
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 40px rgba(0, 245, 255, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
          background: rgba(0, 245, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Hero Image */
        .hero-image {
          position: relative;
          animation: fadeIn 0.8s 1s ease-out both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .image-wrapper {
          position: relative;
          width: 400px;
          height: 500px;
          margin: 0 auto;
        }

        .image-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-1);
          border-radius: 20px;
          animation: pulse 3s ease-in-out infinite;
          opacity: 0.2;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .profile-placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--bg-card);
          border-radius: 20px;
          border: 2px solid rgba(0, 245, 255, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          z-index: 2;
        }

        .placeholder-icon {
          font-size: 4rem;
        }

        .placeholder-text {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          border: 2px solid rgba(0, 245, 255, 0.2);
          z-index: 2;
        }

        .floating-card {
          position: absolute;
          background: var(--bg-card);
          border: 1px solid rgba(0, 245, 255, 0.2);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          animation: float 3s ease-in-out infinite;
        }

        .tech-card {
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }

        .ai-card {
          bottom: 15%;
          left: -10%;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .card-icon {
          color: var(--primary);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          animation: fadeIn 1s 1.5s ease-out both;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--primary);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .wheel {
          width: 3px;
          height: 8px;
          background: var(--primary);
          border-radius: 2px;
          animation: scroll 1.5s ease-in-out infinite;
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Section Title */
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .title-number {
          color: var(--primary);
          font-size: 2rem;
        }

        /* About Section */
        .about {
          padding: 6rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .about.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-text {
          max-width: 900px;
        }

        .lead {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .highlight {
          color: var(--primary);
          font-weight: 600;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .highlight-item {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 245, 255, 0.1);
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: all 0.3s;
        }

        .highlight-item:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .highlight-item .icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .highlight-item strong {
          display: block;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .highlight-item span {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Skills Section */
        .skills {
          padding: 6rem 0;
          background: var(--bg-card);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .skills.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-dark);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(0, 245, 255, 0.1);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(0, 245, 255, 0.1);
        }

        .category-icon {
          color: var(--primary);
        }

        .category-header h3 {
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-item {
          opacity: 0;
          animation: slideInLeft 0.5s ease-out forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .skill-icon {
          font-size: 1.2rem;
        }

        .skill-name {
          flex: 1;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percent {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .skill-bar {
          height: 8px;
          background: rgba(0, 245, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--gradient-1);
          border-radius: 4px;
          transition: width 1s ease-out;
        }

        /* Experience Section */
        .experience {
          padding: 6rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .experience.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gradient-1);
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .timeline-dot {
          position: absolute;
          left: 12px;
          top: 8px;
          width: 18px;
          height: 18px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
        }

        .timeline-content {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 245, 255, 0.1);
          transition: all 0.3s;
        }

        .timeline-content:hover {
          border-color: var(--primary);
          transform: translateX(10px);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .timeline-header h3 {
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .timeline-period {
          color: var(--primary);
          font-weight: 600;
          white-space: nowrap;
          font-size: 0.9rem;
        }

        .timeline-company,
        .timeline-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .timeline-description {
          margin: 1rem 0;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .timeline-achievements {
          list-style: none;
          margin-top: 1rem;
        }

        .timeline-achievements li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .timeline-achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        /* Projects Section */
        .projects {
          padding: 6rem 0;
          background: var(--bg-card);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .projects.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-dark);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(0, 245, 255, 0.1);
          transition: all 0.3s;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: var(--primary);
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0, 245, 255, 0.2);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          color: var(--primary);
        }

        .project-link-icon {
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .project-link-icon:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .project-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          flex: 1;
        }

        .project-highlights {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .project-highlights li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .project-highlights li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.4rem 0.8rem;
          background: rgba(0, 245, 255, 0.1);
          color: var(--primary);
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Certifications Section */
        .certifications {
          padding: 6rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .certifications.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .cert-card {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 245, 255, 0.1);
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .cert-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .cert-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .cert-content h4 {
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .cert-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .cert-ongoing {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid var(--primary);
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .ongoing-badge {
          display: inline-block;
          background: var(--gradient-1);
          color: var(--bg-dark);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .cert-ongoing strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .cert-ongoing span {
          color: var(--text-secondary);
        }

        /* Contact Section */
        .contact {
          padding: 6rem 0;
          background: var(--bg-card);
        }

        .contact-intro {
          font-size: 1.2rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .contact-card {
          background: var(--bg-dark);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 245, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s;
          text-decoration: none;
          color: var(--text-primary);
        }

        .contact-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: var(--bg-dark);
          border: 1px solid rgba(0, 245, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s;
          text-decoration: none;
        }

        .social-link:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-5px);
        }

        /* Footer */
        .footer {
          background: var(--bg-dark);
          padding: 2rem;
          text-align: center;
          color: var(--text-secondary);
          border-top: 1px solid rgba(0, 245, 255, 0.1);
        }

        .footer p {
          margin-bottom: 0.5rem;
        }

        .footer-year {
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-name {
            font-size: 3.5rem;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta {
            justify-content: center;
          }

          .image-wrapper {
            width: 300px;
            height: 400px;
          }

          .floating-card {
            display: none;
          }

          .nav-links {
            display: none;
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline::before {
            left: 10px;
          }

          .timeline-item {
            padding-left: 40px;
          }

          .timeline-dot {
            left: 3px;
          }
        }

        @media (max-width: 640px) {
          .hero-name {
            font-size: 2.5rem;
          }

          .title-line {
            font-size: 1.2rem;
          }

          .btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
