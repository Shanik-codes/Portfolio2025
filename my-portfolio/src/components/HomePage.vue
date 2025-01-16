<template>
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <img src="path/to/profile-picture.jpg" alt="Profile Picture">
        <p>Hi, I'm [Your Name], a passionate software engineer.</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>A brief introduction about yourself.</p>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Featured Projects</h2>
        <div class="project">
          <h3>Project Title</h3>
          <p>Project description.</p>
          <img src="path/to/project-screenshot.jpg" alt="Project Screenshot">
        </div>
      </section>
      <section id="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"[Testimonial from a client or colleague]"</p>
          <footer>- [Client/Colleague Name]</footer>
        </blockquote>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me at <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <ul>
          <li><a href="https://linkedin.com/in/your-profile">LinkedIn</a></li>
          <li><a href="https://github.com/your-profile">GitHub</a></li>
          <li><a href="https://twitter.com/your-profile">Twitter</a></li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  html {
    scroll-behavior: smooth;
  }
  
  header nav ul {
    list-style: none;
    padding: 0;
  }
  
  header nav ul li {
    display: inline;
    margin: 0 1rem;
  }
  
  header nav ul li a {
    color: #333;
    text-decoration: none;
  }
  
  section {
    padding: 2rem;
    margin: 1rem 0;
  }
  
  .project {
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  blockquote {
    background-color: #f9f9f9;
    padding: 1rem;
    border-left: 5px solid #ccc;
    margin: 1rem 0;
  }
  </style>