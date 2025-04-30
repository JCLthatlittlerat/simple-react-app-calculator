import React from 'react'

function MapFunctionDemo() {
    const data = [
        {
            id:"1",
            title: "Tiramisu",
            description: "The best tiramisu in town",
            image: "https://picsum.photos/200/300/random",
            price: "$5.00",
    
        },
        {
            id:"2",
            title: "Lemon Ice Cream",
            description: "Mind blowing taste",
            image: "https://picsum.photos/200/300/random",
            price: "$4.50",
    
        },
        {
            id:"3",
            title: "Chocolate mousse",
            description: "Unexplored flavour",
            image: "https://picsum.photos/200/300/random",
            price: "$6.00",
    
        }
    ]


    
const topDeserts = data.map(olyad => {
    return{
        content: `${olyad.title} - ${olyad.description}`,
        price: `${olyad.price}`

    }

})
  return (
    <div>
        <h3>Map Function Demo</h3>
        <p>The following data demostrate the mapping of two differently indexed data that is the "tittle, 'Tiramisu' for example" and the "desctription, 'The best tiramisu in the town' for example" that later on mapped together as required with the help of 'map()' function </p>
        <h5>Options</h5>
        <ol>
            <li>{topDeserts[0].content} = {topDeserts[0].price} </li>
            <li>{topDeserts[1].content} = {topDeserts[1].price} </li>
            <li>{topDeserts[2].content} = {topDeserts[2].price} </li>
        </ol>
    </div>
  )
}

export default MapFunctionDemo