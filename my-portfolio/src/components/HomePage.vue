<template>
  <div>
    <header>
      <h1>Welcome to My Portfolio</h1>
      <img src="path/to/profile-picture.jpg" alt="Profile Picture">
      <p>Hi, I'm Shanik Hernandez, a passionate software engineer.</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section id="about">
      <h2>About Me</h2>
      <p> I'm currently a student at Seminole State College. Working on my Bachelor's Degree in
        Information System Technology with a specialization in programming. I have a Full-stack 
        development certificate from UCF. I enjoy making websites and getting through the problems 
        is very satisfactory.
      </p>
      <h3>Technical Skills</h3>
      <ul>
        <li>Java</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>JavaScript</li>
      </ul>
      <h3>Soft Skills</h3>
      <ul>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem-Solving</li>
        <li>Leadership</li>
        <li>Adaptability</li>
        <li>Time Management</li>
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
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me at <a href="mailto:shanikhernandez93@outlook.com">shanikhernandez93@outlook.com</a></p>
      <ul>
        <li><a href="https://www.linkedin.com/in/shanik-hernandez/">LinkedIn</a></li>
        <li><a href="https://github.com/Shanik-codes">GitHub</a></li>
        <li><a href="https://www.instagram.com/shanik.codes?igsh=MWU4ZWFvZWlpYnJleg==">Instagram</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style src="@/assets/style.css"></style>