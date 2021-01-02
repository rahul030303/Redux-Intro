import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import increment from './actions/increment';
import decrement from './actions/decrement';

function App() {

  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> counter value is {counter}</h1>
      <button onClick={()=>dispatch(increment(10))}>+</button>
      <button onClick={()=>dispatch(decrement(4))}>-</button>
    </div>
  );
}

export default App;


