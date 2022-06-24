import './App.css'
import MainDash from './components/MainDash/MainDash';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
        <SideBar/>
        <MainDash/>

        </div>
    </div>
  );
}

export default App;