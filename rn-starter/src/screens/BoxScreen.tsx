import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style = {styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    viewOneStyle:{
        borderWidth: 3,
        backgroundColor: 'red',
        height: 50,
        width: 50,
    },
    viewTwoStyle:{
        borderWidth: 3,
        backgroundColor: 'green',
        height: 50,
        width: 50,
        top:50
    },
    viewThreeStyle:{
        borderWidth: 3,
        backgroundColor: 'purple',
        height: 50,
        width: 50,
    },
});


export default BoxScreen