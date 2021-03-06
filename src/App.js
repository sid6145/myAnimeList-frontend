import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer';
import Discover from './components/Discover';
import Mylist from './components/Mylist';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route  path="/discover" component={Discover} />
        <Route  path="/list" component={Mylist} />
        <Route path="/login" component={Login} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
