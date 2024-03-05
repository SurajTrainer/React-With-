import Items from "./Items"


let FruitsData = ({items})=>{
    // let fruitData = []
   
    return (
        
      <ul className="list-group">
      {items.map((item) => (
       <Items fruitName = {item}/> 

      ))}
      
    </ul>
 
    )
}

export default FruitsData