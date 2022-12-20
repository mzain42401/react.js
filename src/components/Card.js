import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
        <>
        <div>
            <div>
                <img src={props.src}  />
            </div>
            <div>
                <p>{props.para}</p>
            </div>
        </div>
           
        </>
    )
}

export default Card
