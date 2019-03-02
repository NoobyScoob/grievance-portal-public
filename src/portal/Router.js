import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GrievanceFormContainer from './containers/GrievanceForm';
import UserHomeContainer from './containers/UserHome';
import SignupFormContainer from './containers/SignupForm';
import FullGrievance from './components/FullGrievance';
import ViewStatusFormContainer from './containers/ViewStatusForm';

const Router = () => {
    return(
        <BrowserRouter>
            <div style={{background: "#eaeaea"}}>
                <Header />
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/signup" exact component={ SignupFormContainer } />
                    <Route path="/user" exact component={ UserHomeContainer } />
                    <Route path="/user/lodgeNewGrievance" exact component={ GrievanceFormContainer } />
                    <Route path="/viewStatus" exact component={ ViewStatusFormContainer } />
                    <Route path="/user/grievances/:id" exact component={ FullGrievance } />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Router;