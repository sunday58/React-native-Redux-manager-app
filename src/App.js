import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';
import ignoreWarnings from 'react-native-ignore-warnings';


class App extends Component {
    componentWillMount () {
        const config = {
            apiKey: 'AIzaSyDpTwn1dePRWFMMjTaudkHbWMkAAKLj7oU',
            authDomain: 'manager-b28d7.firebaseapp.com',
            databaseURL: 'https://manager-b28d7.firebaseio.com',
            projectId: 'manager-b28d7',
            storageBucket: 'manager-b28d7.appspot.com',
            messagingSenderId: '296951571290'
            
          };
          firebase.initializeApp(config);
    }
    render () {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}

ignoreWarnings('Setting a timer');

export default App;