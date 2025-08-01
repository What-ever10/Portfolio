import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const projects=[
    {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.',
    tags: ['React', 'Firebase', 'Material UI'],
    github: '#',
    live: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast using a weather API.',
    tags: ['JavaScript', 'API', 'CSS'],
    github: '#',
    live: '#'
  }
]
const Projects = () => {
    return(
        <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of my recent works</p>
        {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}//this commenting works just because it is inside the {}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}//load the animation only once
                whileHover={{ y: -10 }}//move the card up on hover
                >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub/>Github Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                </motion.div>
        ))}
        </section>
    );
};
export default Projects;