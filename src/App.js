import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import MessageBanner from "./components/MessageBanner"
import Nav from "./components/Nav"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <MessageBanner/>
      <Header/>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
