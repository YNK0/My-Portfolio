import '@fortawesome/fontawesome-free/css/all.css';
import "../Estilos/media.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default (props) => {
    let media = {
        linkedin: "https://www.linkedin.com/in/franciscovmag/",
        twitter: "https://twitter.com/Frncscvm",
        github: "https://github.com/YNK0",
        instagram: "https://www.instagram.com/franciscovmag/",
        whatsapp: "https://api.whatsapp.com/send?phone=5219931475979&text=Hola%20Francisco%20V%C3%A1zquez%20Me%20gustar%C3%ADa%20trabajar%20contigo"
    };

    return (
      <div className={props.idx ? "projects" : "footer"}>
        <section className="buttons">
            <a href={media.linkedin} target="_blank"><i className="fa-brands fa-linkedin fa-2x"></i></a>
            <a href={media.twitter} target="_blank"><i className="fa-brands fa-twitter fa-2x"></i></a>
            <a href={media.github} target="_blank"><i className="fa-brands fa-github fa-2x"></i></a>
            <a href={media.instagram} target="_blank"><i className="fa-brands fa-instagram fa-2x"></i></a>
            <a href={media.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp fa-2x"></i></a> 
        </section>
      </div>
    );
}