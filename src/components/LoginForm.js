import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';


class LoginForm extends Component {
        onEmailChange (text) {
            this.props.emailChanged(text);
        }

        onPasswordChange (text) {
            this.props.passwordChanged(text);
        }

        onButtonPress() {
            const {email, password} = this.props;
            this.props.loginUser({email, password});
        }

        renderButton(){
            if(this.props.loading){
                return <Spinner size="large"/>
            }
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    LogIn
                </Button>
            );
            
        }

        renderError() {
            if(this.props.error){
                return(
                    <View
                        style={{backgroundColor: 'white'}}>
                       <Text style={Styles.errorTextStyle}>
                       {this.props.error}
                       </Text>
                    </View>
                );
            };
        };


    render () {
        return (
            
           <View>
           
               <Image source={require('./images/work.jpg')}style={{height: '50%', width:'100%'}} />
           
           
           
           <Card>
                

            <CardSection style={{borderRadius: 25}}>
                <Input 
                    label= "Email"
                    placeholder= "email@gmail.com"
                    onChangeText= {this.onEmailChange.bind(this)}
                    value= {this.props.email.value}
                     />
            </CardSection>
               
            <CardSection style={{borderRadius: 25}}>
            <Input 
                    secureTextEntry= {true}
                    label= "Password"
                    placeholder= "password"
                    onChangeText= {this.onPasswordChange.bind(this)}
                    value= {this.props.password.value}
                />
            </CardSection>
                {this.renderError()}
            <CardSection>
                {this.renderButton()}
            </CardSection>

            </Card>
            
            </View>
        );
    }
}

const Styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}


const mapStateToProps = ({Auth}) => {
    const {email, password, error, loading} = Auth;
    return {email, password, error, loading };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser
})
 (LoginForm);