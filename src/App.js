import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Beranda from "./pages/Beranda";
import Helps from "./pages/Helps";
import Dashboard from "./pages/Dashboard";
import Kontak from "./pages/Kontak";
import About from "./pages/About";
import Forum from "./pages/Forum";
import Pembelajaran from "./pages/Pembelajaran";
import Study from "./pages/Study";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/> <Route/>
    <Route exact path='/help' element={<Helps/>}/> <Route/>
    <Route exact path='/login' element={<Login/>}/> <Route/>
    <Route exact path='/register' element={<Register/>}/> <Route/>
    <Route exact path='/about' element={<About/>}/> <Route/>
    <Route exact path='/contact' element={<Kontak/>}/> <Route/>
    <Route exact path='/login/beranda' element={<Beranda/>}/> <Route/>
    <Route exact path='/login/dashboard' element={<Dashboard/>}/> <Route/>
    <Route exact path='/login/forum' element={<Forum/>}/> <Route/>
    <Route exact path='/login/pembelajaran' element={<Pembelajaran/>}/> <Route/>
    <Route exact path='/login/pembelajaran/belajar' element={<Study/>}/> <Route/>
  </Routes>
</Router>
)
}

export default App;
