import React, { Component } from "react";
import HomePage from "./pages/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopePage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect} from "react-redux";
import { setCurrentUser } from "./components/redux/user/user.action";

import './App.css';


class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth =  auth.onAuthStateChanged( async userAuth  => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopePage}/>
        <Route exact path="/signin" render ={()=> this.props.currentUser ?(<Redirect to="/"/> ): (<SignInAndSignUp/>)}/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
