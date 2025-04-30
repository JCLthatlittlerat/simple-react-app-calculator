import React from 'react'

function MapAndRender() {
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

const topDesserts = data.map(dessert => {
    const listItem = `${dessert.title} - ${dessert.price}`;
    
    return <li>{listItem}</li>
    //This could be an alternative btw =>  
    // return <li>{`${dessert.title} - ${dessert.price}`}</li>      
    // just not using the variable at all and putting all the expressions inside the Curley-braces.
})

  return (
    <div>
        <h3>Mapp Function and Rendering mapped data Demo</h3> 
        <p>The following data demostrate the mapping of two differently indexed data that is the "tittle, 'Tiramisu' for example" and the "price, '$4.50' for example" that later on mapped together as required with the help of 'map()' function and get rendered as list of items , i.e li inside unordered list, i.e ol</p>
        <ul>
        {topDesserts}
        </ul>
    </div>
  )
}

export default MapAndRender