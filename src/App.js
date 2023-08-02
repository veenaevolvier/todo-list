// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Page2 from './components/page2';
import {Login} from "./components/Login";
import Page1 from './components/Page1';
// import Header from "./components/Header";
  //  import page2  from './components/page2';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      const handleLogin = () => {
        setIsLoggedIn(true);
      };
      return (
        <div className="App">
          {isLoggedIn ? (
            <Page1 />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
      );
          };
   

export default App;
