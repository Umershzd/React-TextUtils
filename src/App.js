
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About.js';
import Nav from './Components/Nav';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React,{useState} from 'react'
function App() {
  const [mode , setMode]=useState('light') ;
  const [alert , setAlert]=useState(null) ;

  const showAlert=(message,type)=>
{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);

}
  
  const toggleMode=()=>
  {
    if (mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been Enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Lite Mode has been Enabled","success");
      document.title="TextUtils-Lite Mode";
    }
  }
  return (

<>
    {/* <Router>
      

    <Nav title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} Heading="Enter Your Text Here" mode={mode} />}>

            </Route>

            <Route exact path="/title" element={<TextForm showAlert={showAlert} Heading="Enter Your Text Here" mode={mode} />}>

</Route>
          </Routes>


      </div>


      </Router> */}




<Nav title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert} />

<div className='container'>
<TextForm showAlert={showAlert} Heading="Enter Your Text Here" mode={mode} />
{/* <About/> */}

</div>

</>

  );
}

export default App;
