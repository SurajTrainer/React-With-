import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FruitsData from './component/FruitItems';
import Errormsg from './component/Errormsg';
import Container from './component/Container';
import FoodInput from './component/FoodInput';


function App() {

  let fruitData = ['apple','mango','papaya','banana','orange','graps']

  return (
    <>


    <Container>

    <h3>Fruits Juice</h3>
    <FoodInput/>
      <FruitsData items = { fruitData}/>
      <Errormsg items ={fruitData}/>
      </Container>


    </>
  )
}

export default App
