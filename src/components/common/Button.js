import React from 'react';
import { Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress = {onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};


const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007',
        margin:10,
        elevation: 2,
        flex:1,
        position: 'relative'
       
    },
    textStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#007',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};


export {Button} ;