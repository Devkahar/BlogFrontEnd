import { useSelector } from 'react-redux';
import './App.css';
import Home from './containers/Home';

function App(){
  const login = useSelector(state => state.userLogin);
  console.log("User Data -> ", login);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
