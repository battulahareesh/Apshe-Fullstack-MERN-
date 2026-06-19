
import './App.css'
import Menu from './Menu'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
function App() {
 
return (
  <BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/cart">Cart</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route> 
    <Route path='/cart' element={<Cart/>}></Route> 
  </Routes>
  </BrowserRouter>
)

}

export default App
