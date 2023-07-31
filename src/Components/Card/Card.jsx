import "./Card.css";
function Card ({image, title, category, price, id}){

    return(
        <div className="card">
            <div className="top-card">
            <img src={image} className="card-img-top" alt=""/>
            </div>
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="card-text">{category}</p>
                <p className="card-price">{price}</p>
            </div>
            </div>
    )

}

export default Card;