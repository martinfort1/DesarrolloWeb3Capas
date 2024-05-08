import React, { Component } from "react";
import { Link } from "react-router-dom"; // Importa Link
import "../Style.css";

class CardDinero extends Component {
    render() {
        const { imagen, titulo, horario, etiquetas, descripcion } = this.props;

        return (
            <>
                <div className="CardAsistencia">
                    <div className="ImagenContainer">
                        <img src={imagen} alt="" id="ImagenCategoriaCard" />
                    </div>

                    <div className="textoAsistenciaContainer">
                        <h3 id="TituloAsistencia">{titulo}</h3>
                        <p id="HorarioAsistencia">{horario}</p>
                        <div id="etiquetasContainer">
                            {/* Recorre el array de etiquetas y muestra cada una */}
                            {etiquetas.map((etiqueta, index) => (
                                <p key={index} id="EtiquetaCard">{etiqueta}</p>
                            ))}
                        </div>
                        <p id="DecripcionAsistencia">{descripcion}</p>
                        <div id="ContainerBotones">
                            <Link to={this.props.url}>
                                <button id="BotonLink">Ver perfil</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CardDinero;