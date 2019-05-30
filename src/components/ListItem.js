import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';


 class ListItem extends Component {

        onRowPress() {
            Actions.employeeEdit({employee: this.props.employee});
        }

    render() {
        const {name} = this.props.employee
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>
            <CardSection style={{backgroundColor: '#4A148C', opacity: 0.55}}>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
            </View>
            </TouchableWithoutFeedback>
            
        )
        
    }
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: "900"
    }
}

export default ListItem;