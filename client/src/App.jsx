import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import SingUp from './pages/SingUp';
import Profile from './pages/Profile';
import About from './pages/about';
import Home from './pages/Home';

export default function App() {
  return (
  <BrowserRoute >
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/Sign-up' element={<SingUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRoute>
  )
}

