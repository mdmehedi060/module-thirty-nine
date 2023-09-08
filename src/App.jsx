import './App.css'
import Counter from './Counter';
import Friends from './Bondho';
import Team from './Team';
import Users from './Users';
import Bondho from './Bondho';

function App() {

  function handleClick() {
  alert('button clicked');
}
  const handleClick2 = () => {
    alert('button 2 clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
     
      <h3>React core concepts 2</h3>
     <Bondho></Bondho>
      <Users></Users>
      <Team></Team>
<Counter></Counter>

    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Click me 2</button>
    <button onClick={()=> alert('thired clicked')}>Click 3</button>
      <button onClick={() => addToFive(3)}>Fourth</button>
    </>
  )
}

export default App
