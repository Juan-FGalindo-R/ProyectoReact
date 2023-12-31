import React from "react";
import '../Component/Estilos/estilos.css';
function Testimonio(props){
	return (
    <div className="contenedorTestimonio">
      <img className="imagenTestimonio" src= {require(`./Img/${props.imagen}.png`)}alt="Shawn" />
      <div className="contenedorTexto">
      <p className="testimonioNombre"><strong>{props.nombre}</strong> en {props.pais}</p>
      <p className="testimonioProfesion">{props.profesion} en <strong>{props.empresa}</strong></p>
      <p className="testimonio">"{props.testimonio}"</p>
      </div>
     
      
    </div>

  );


}
export default Testimonio