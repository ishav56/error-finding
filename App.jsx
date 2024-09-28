
import './App.css'
// default  import 
import {HeaderComponents} from './navbar'
// named import 
import {Restraurantcard} from './restrauntcred'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Abouts from './About.jsx'
import Errorshow from './errorshow.jsx'



const App = () => {

  return (
    <>
     <div>
  <BrowserRouter>
  
   <HeaderComponents/>
     <Routes>
<Route  path='/about' element={<Abouts name="ishav"/>}></Route>
<Route path='/error' element={<Errorshow/>} ></Route>
</Routes>
</BrowserRouter>
</div>

<div className='cards-item'>
  <Restraurantcard/>
       </div>
     

    </>
  )
}



export default App
