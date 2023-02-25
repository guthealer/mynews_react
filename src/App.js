import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

import Navbar from './components/AppBar';
import { Route, Routes } from 'react-router';


import Home from './pages/Home';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Sport from './pages/Sport';
import Technology from './pages/Technology';
import Science from './pages/Science';
import General from './pages/General';
import { ThemeProvider ,createTheme,Switch} from '@mui/material';




function App() {

  const [name, setName] = useState("phone");


  
  
  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
      palette: {
          mode: theme ? 'dark' : 'light',
      },
  });
  const handleChange = (event) => {
      settheme(event.target.checked);
  }

  // fetch('https://dummyjson.com/products/search?q=phone')
  // .then(res => res.json())
  // .then(console.log);

  // const q = 'phone'
  //   async function fetchdata(q){
  //     const x = name;
  //     console.log(x)
  //     try{
       
  //       fetch("https://dummyjson.com/products/search?q="+ x)
  //       .then(res => res.json())
  //  .then(console.log);
  //  console.log(name)
  //     }

  //     catch(error){
  //       console.log(error)
  //     }
  //   }


  return (

    <ThemeProvider theme={darkTheme}>
    <div className="App">

      <Navbar  theme={theme} handleChange={handleChange}/>
      <br/>

      {/* <Switch
                    checked={theme}
                    color='success'
                    onChange={handleChange} /> */}

      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='Entertainment' element={<Entertainment/>}/>
         <Route path='Health' element={<Health/>}/>
         <Route path='sport' element={<Sport/>}/>
         <Route path='Technology' element={<Technology/>}/>
         <Route path='Science' element={<Science/>}/>
         <Route path='General' element={<General/>}/>
      </Routes>
  
   
    </div>
    </ThemeProvider>
  );
}

export default App;
