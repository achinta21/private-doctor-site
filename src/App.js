import './App.css';
import { BrowserRouter as Router,Switch,Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Servies from './components/Servies/Servies';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Appointment from './components/Appointment/Appointment';
import Booking from './components/Booking/Booking';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/PrivatetRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
       <Header></Header>
       <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/servies">
            <Servies></Servies>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/booking/:servieId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
