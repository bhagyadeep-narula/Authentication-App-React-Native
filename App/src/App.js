import React, {Component} from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
   state = {
      loggedIn: null
   };

   componentWillMount() {
      firebase.initializeApp({
         apiKey: "AIzaSyBoGKhzU7JfKcSlDVfdImMvfu5bFpc_4X4",
         authDomain: "authentication-cdd12.firebaseapp.com",
         databaseURL: "https://authentication-cdd12.firebaseio.com",
         projectId: "authentication-cdd12",
         storageBucket: "authentication-cdd12.appspot.com",
         messagingSenderId: "843150180088"
      });

      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({loggedIn: true});
         } else {
            this.setState({loggedIn: false});
         }
      });
   }

   renderContent() {
      switch (this.state.loggedIn) {
         case true:
            return (
               <View style={ styles.buttonStyle }>
                  <Button onPress={() => firebase.auth().signOut()}>
                     Log Out
                  </Button>
               </View>
            );
         case false:
            return <LoginForm/>;
         default:
            return <Spinner size="large"/>
      }
   }

   render() {
      return (
      <View>
         <Header headerText="Authentication" />
         {this.renderContent()}
      </View>
      );
   }
}

const styles = {
   buttonStyle: {
      height: 50
   }
}

export default App;
