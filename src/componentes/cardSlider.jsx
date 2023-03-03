import Card from "./card";
import "../Estilos/cardStyle.css";
import images from "./images";


export default function CardSlider(props) {
    return (
        <div className="mainSlider" id="skills">
            <div className="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <div className="main-card">
                <div className="cards">
                    <Card title="HTML y CSS" img={images[0]}/>
                    <Card title="JS" img={images[1]}/>
                    <Card title="React" img={images[2]}/>
                    <Card title="NodeJs" img={images[4]}/>
                </div>
                <div className="cards">
                    <Card title="GIT" img={images[3]}/>
                    <Card title="Responsive Design" img={images[5]} />
                    <Card title="Object Oriented programming" img={images[6]}/>
                </div>
            </div>
            <div className="button">
                <label htmlFor="one" className=" active one"></label>
                <label htmlFor="two" className="two"></label>
            </div>
        </div>
        </div>
        
 );
}