import {
    Route,
    HashRouter,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Pages/Signin/Index';
import Signup from './Pages/Signup/Index';
import Dashboard from './Pages/Dashboard/index';
import './Assets/css/main.css';


const Main = () => {
    return(
        <>
            <HashRouter>
                <Route exact path="/" component={Signin} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
            </HashRouter>
        </>
    )
}

export default Main