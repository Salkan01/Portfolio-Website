import React from 'react';
import './App.css';

const movieImg = "https://via.placeholder.com/300x200.png?text=Movie+Ranking";
const birthdayImg = "https://via.placeholder.com/300x200.png?text=Birthday+Invite";

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">Salaheddin Kanaya</div>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to my portfolio</h1>
        <p className="tagline">I build modern web applications with TypeScript and React.</p>
        <a className="cta" href="#projects">View my work</a>
      </header>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src={movieImg} alt="Movie Ranking" />
            <h3>Movie Ranking</h3>
          </div>
          <div className="project-card">
            <img src={birthdayImg} alt="Birthday Invite" />
            <h3>Birthday Invite</h3>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Salah Eddin Kanaya — a passionate programmer studying
          <em>Innovative Programming</em> at Linköping University. I've built
          projects with technologies like Java, C#, C++, JavaScript, TypeScript
          and Python using frameworks such as React, Node.js and .NET. I enjoy
          solving problems with clean, scalable code and working with teams via
          GitLab and testing frameworks.
        </p>
        <p>Let me show you what I can do.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </section>

    </div>
  );
}

export default App;
