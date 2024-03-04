import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FruitsData from './component/FruitItems';
import Errormsg from './component/Errormsg';

function App() {

  let fruitData = ['apple','mango','papaya','banana','orange','graps']
  // let fruitData = []

  // let emptyMsg = fruitData.length === 0 ? 'Please Add Some fruits' : null;

  return (
    <>
    {/* <h3>exampe of : using map method</h3> */}
    {/* Conditional operator */}


    <h3>Fruits Juice</h3>

    {/* Conditional operator */}
    {/* {fruitData.length === 0 ? 'Please Add Some fruits' : null} */}
        {/* {emptyMsg} */}
    {/* {fruitData.length === 0 && <h2>Please enter some fruits</h2> } */}

      <FruitsData items = { fruitData}/>
      <Errormsg items ={fruitData}/>
    </>
  )
}

export default App
