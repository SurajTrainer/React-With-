
const FoodInput = () => {
    let handleOnChange = (e)=> {
        console.log(e.target.value)
    }
    return (
        <input style={{width :"90%",padding:"10px",margin:"10px"}} type="text" 
        onChange={handleOnChange}/>
    )
}
export default FoodInput;