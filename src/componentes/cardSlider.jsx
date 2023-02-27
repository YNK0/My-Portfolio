import Card from "./card";
import "../Estilos/cardStyle.css";

export default function CardSlider(props) {
    return (
        <div className="mainSlider">
            <div className="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <div className="main-card">
                <div className="cards">
                    <Card title="HTML y CSS"/>
                    <Card title="JS"/>
                    <Card title="React"/>
                    <Card title="GIT"/>
                </div>
                <div className="cards">
                    <Card title="GIT"/>
                    <Card title="Responsive Design"/>
                    <Card title="UX/UI"/>
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