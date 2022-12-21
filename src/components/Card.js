const Card = (props) => {
    return (
        <div  >
            <img src={props.src} />
            <div >
                <h2 > {props.title}</h2>
                <button >Buy Now</button>
            </div>
        </div>


    )
}

export default Card
