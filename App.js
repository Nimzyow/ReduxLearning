import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Store, createStore } from "redux";
import { Provider } from "react-redux"
import MyApp from "./src/MyApp";
//we dont create the state within the constructer when we want to utlise redux. 


const initState = {
  myCounter: 0
}

//create the reducer to access the store
const reducer = (state = initState, action) => {

  switch (action.type){
    case 'INC_COUNTER':
      return { myCounter: state.myCounter + 1 }
      case 'DEC_COUNTER':
          if (state.myCounter >= 1){
            return {myCounter: state.myCounter - 1}
          } else {
           return state; } 
  }
return state;
};

//this is the store.
const store = createStore(reducer);

export default class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
