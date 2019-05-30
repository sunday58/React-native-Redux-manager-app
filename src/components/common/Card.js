import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#add',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5

    }
};


export {Card};