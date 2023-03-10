import "../Estilos/cardStyle.css";

export default function Card(props) { 
    return (
        <div className="card">
         <div className="content">
           <div className="img">
             <img src={props.img} alt="" />
           </div>
           <div className="details">
             <div className="name">{props.title} </div>
           </div>
         </div>
        </div>
    );
}
