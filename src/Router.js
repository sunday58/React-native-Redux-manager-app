import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop:65}}>
            
                <Scene key="auth">
                <Scene key="login" component={LoginForm} title="User Login" titleStyle={{fontWeight: "800"}} sceneStyle={{justifyContent: 'center'}} navigationBarStyle={{backgroundColor: '#4A148C', opacity: 0.55}}/>
                </Scene>

                <Scene key="main">
                <Scene
                rightTitle="Add"
                onRight={() => Actions.employeeCreate()}
                 key="employeeList"
                  component={EmployeeList}
                   title="Employees"
                    initial
                   />

                   <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate}/>
                   <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" renderBackButton={() => (null)}/>
                </Scene>
         

        </Router>

    );
};

export default RouterComponent;