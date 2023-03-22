import Cardlist from "./components/Cardlist";
import SearchInput from "./components/SearchInput";
import { RobotProvider } from "./context/RobotContext";
import {FaHeart} from 'react-icons/fa'

function App() {
  const cYear = new Date().getFullYear();
  return (
    <>
      <RobotProvider>
        <div className="tc">
          <h1 className="f1 white pTitle">Random Robot App</h1>
          <SearchInput />
        </div>
        <div className="push">
          <Cardlist />
        </div>
      </RobotProvider>

      <footer className="app-footer">
        Random Robots &copy; {cYear} | Made with <FaHeart style={{color: 'red'}} /> by WTF 2022/2023
      </footer>
    </>
  );
}

export default App;
