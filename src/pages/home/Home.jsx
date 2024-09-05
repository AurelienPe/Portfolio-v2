import html_logo from '../../images/html5_logo.webp';
import css_logo from '../../images/css3_logo.webp';
import javascript_logo from '../../images/javascript_logo.webp';
import sass_logo from '../../images/sass_logo.webp';
import react_logo from '../../images/react_logo.webp';
import './home.css';
import data from '../../assets/project.json';

const Home = () => {
  function displayProjects() {

    const projectCards = data.map(item => (
      <li key={item.id} className="project-card">
        <a href={item.url} target="_blank" rel="noreferrer" >
          <figure>
            <img src={item.cover} alt={item.alt} className="project-image" />
            <figcaption>
            {item.subtitle}
              {item.languages && (
                <ul className="languages-list">
                  {item.languages.map(language => (
                    <li key={language}>
                      <i className={`fab fa-${language}`} />
                    </li>
                  ))}
                </ul>
              )}

            </figcaption>
          </figure>
        </a>
      </li>
    ));

    return projectCards;
  }
    

  return (
    <body>

      <header>
        <div></div>
        <h1>PEYRAT Aurélien</h1>
        <p>Développeur web</p>
        <div></div>
      </header>

      <main>

        <section id="about">
          <h2>À propos de moi</h2>
          <p>Passionné par le développement web, je m'efforce de créer des solutions innovantes et performantes qui répondent aux besoins de chaque client. Avec une attention particulière aux détails et une curiosité constante pour les nouvelles technologies, je m'engage à transformer des idées innovantes en expériences utilisateur intuitives et fonctionnelles.</p>
        </section>

        <section id="projects">
          <h2>Mes projets</h2>
          <ul id="gallery">
            {displayProjects()}
          </ul>
        </section>

        <section id="skills">
          <h2>Mes compétences</h2>
          <ul>

            <li>
              <figure>
                <img src={html_logo} alt="logo html"></img>
                  <figcaption>HTML5</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={css_logo} alt="logo css"></img>
                  <figcaption>CSS3</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={javascript_logo} alt="logo javascript"></img>
                  <figcaption>Javascript</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={sass_logo} alt="logo sass"></img>
                  <figcaption>Sass</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={react_logo} alt="logo react"></img>
                  <figcaption>React</figcaption>
              </figure>
            </li>

          </ul>
        </section>

      </main>
      <script src="./script.js"></script>
    </body>
  )
}

export default Home
