import { useState } from 'react'
import Card  from './Card'
import Data from './Data'
import Home from './Home'
const Resturant = () => {
    const [setter,setSetter]=useState(Data)
    return (
        <>
        <Home/>
            <Card setter={setter}  />

        </>
    )
}

export default Resturant
