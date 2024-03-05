
const Errormsg = ({items})=> {

    // let fruitData = ['apple','mango','papaya','banana','orange','graps']

    return (
        <>
        {items.length === 0 && <h2>Please enter some fruits</h2> } 
        </>
    )
}

export default Errormsg