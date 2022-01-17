import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter as Router ,Switch  ,Route} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
