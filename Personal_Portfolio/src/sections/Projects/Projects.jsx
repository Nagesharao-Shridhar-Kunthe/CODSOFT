import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Book.jpg';
import freshBurger from '../../assets/grade.jpg';
import hipsster from '../../assets/placement.jpg';
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Nagesharao-Shridhar-Kunthe/Online_book_store"
          h3="Online book store"
         
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Nagesharao-Shridhar-Kunthe/Student_Grade_Mangement_System"
          h3="Student Grade Management System"
         
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Nagesharao-Shridhar-Kunthe/Placement_Prediction"
          h3="Placement Prediction"
         
        />
      </div>
    </section>
  );
}

export default Projects;
