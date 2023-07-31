import React, {useState, useEffect} from "react";
import "./Productos.css";
import Card from "../Card/Card";
function Productos () {


    const [Productos, SetProductos] = useState([])

    const getProductos = async () =>{
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json();
        SetProductos(data);
    }

    useEffect(()=>{
        getProductos()
    }
    ,[])



    return(
        <div className="container-md grilla">
            {Productos.map(({image, title, price, category, id})=>(
                <Card image={image} title={title} price={price} category={category} key={id}/>
            )
            )}
        </div>
    )
}

export default Productos;