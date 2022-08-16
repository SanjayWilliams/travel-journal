import React from "react"
import Header from "./Header"
import Card from "./Card"
import data from "./data"

// <Card />
function App() {
    
    const card = data.map(function(item){
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
        <div className="container">
            <Header />
            {card}
        </div>
    )
}

export default App
