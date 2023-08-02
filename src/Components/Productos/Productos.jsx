import React, {useState, useEffect} from "react";
import "./Productos.css";
import Card from "../Card/Card";
import Paginacion from "../Paginacion/Paginacion";

function Productos () {


    const getProductos = async () =>{
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json();
        SetProductos(data);
    }

    useEffect(()=>{
        getProductos()
        CalcularDispositivo();
        window.addEventListener("resize", CalcularDispositivo);

        return () => {
        window.removeEventListener("resize", CalcularDispositivo); 
    };
    }
    ,[])

    
    const [Productos, SetProductos] = useState([])
    const [PaginaActual, SetPaginaActual] =useState(1);
    const [ProductosPorPagina, SetProductosPorPagina]=useState();

    const CalcularDispositivo = ()=>{
       let dispositivo= window.innerWidth;

       if(dispositivo <= 425){
        SetProductosPorPagina(10);
        }
        else if(dispositivo > 425 && dispositivo <= 768){
        SetProductosPorPagina(12);  
        }
        else if(dispositivo > 768){
        SetProductosPorPagina(15);  
        }

    } 

    let paginas = Math.ceil(Productos.length/ProductosPorPagina);
    
    const ultimoIndex = PaginaActual * ProductosPorPagina;
    const PrimerIndex = ultimoIndex - ProductosPorPagina;
    const ShowProductos = Productos.slice(PrimerIndex, ultimoIndex); 

    const cambiarPagina = (pagina) => {
        SetPaginaActual(pagina);
      };
    
      return (
        <div>
          <div className="container-md grilla">
            {ShowProductos.map(({ image, title, price, category, id }) => (
              <Card image={image} title={title} price={price} category={category} id={id} key={id} />
            ))}
          </div>
          <Paginacion paginas={paginas} paginaActual={PaginaActual} cambiarPagina={cambiarPagina} />
        </div>
      );
    };
    
    export default Productos;