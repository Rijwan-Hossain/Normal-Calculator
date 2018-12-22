import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Calculator extends Component {

    render() {
        return (
            <View style={styles.container}> 
                <Text>Hello</Text>
                <View style={styles.result}>
                </View> 
                <View style={styles.calculation}>
                </View> 
                <View style={styles.buttons}>
                    <View style={styles.number}> 
                    </View> 
                    <View style={styles.operation}>
                    </View> 
                </View> 
            </View> 
        );
    } 
} 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'red'
    }, 
    result: {
        flex: 2, 
        backgroundColor: 'red'
    },
    calculation: { 
        flex: 1, 
        backgroundColor: 'green'
    },
    button: { 
        flexGrow: 1, 
        flexDirection: 'row',
    }, 
    numbers: { 
        flex: 3, 
        backgroundColor: 'grey', 
    }, 
    operation: { 
        flex: 1, 
        backgroundColor: 'black', 
    }, 
    t: {
        color: 'red'
    }
})


export default Calculator;
