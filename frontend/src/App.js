
import LoginSignUp from './pages/LoginSignUp'
import ForgetPassword from './pages/forgetPassword'
import Home from './pages/Home'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/user/:id' element={<User/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/loginSignUp' element={<LoginSignUp/>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
