import { useState } from "react";
import "./Destacados.css";
import destacado1 from "./destacado1.jpg";
import destacado2 from "./destacado2.jpg";
import destacado3 from "./destacado3.jpg";

function Destacados (){

    var destacados = [
       {
        imagen: destacado1,
        descripcion:"lorem ipsum"
       },
       {
        imagen: destacado2
       },
       {
        imagen: destacado3
       }

    ]

    const [currentIndex, SetCurrentIndex] = useState(0);

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? destacados.length - 1 : currentIndex - 1;
        SetCurrentIndex(newIndex);
    }

        const nextSlide = () => {
            const isLastSlide = currentIndex === destacados.length -1;
            const newIndex = isLastSlide ? destacados.length = 0 : currentIndex + 1;
            SetCurrentIndex(newIndex);
        }
    return(
    <div className="destacados">
        <div className="header-destacados">
            <h1>
                Productos destacados
            </h1>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={destacados[currentIndex].imagen} className="d-block w-100" alt="..."/>
                    <h2>{destacados[currentIndex].descripcion}</h2>
                    
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={previousSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
    )
}

export default Destacados;