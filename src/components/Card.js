import "./Cards.css"
const Card = (props) => {
    return (
        <div className="container" >
            <img className="image" src={props.src} />
            <div >
                <h2 > {props.title}</h2>
                <button >Buy Now</button>
            </div>
        </div>


    )
}

export default Card
