import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Mission extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{width:'100%', height:'120%'}}>
                    <View style={styles.header}>
                        <Text style={styles.inline}>My Mission</Text>
                    </View>
                    <View style={styles.memo}>
                        <ScrollView horizontal={true} contentContainerStyle={{width:'200%'}} showsHorizontalScrollIndicator={false}>

                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff'
    },
    header : {
        flex: 1,
        top: 130,
        left: 40

    },
    inline : {
        fontSize: 38,
        letterSpacing: -0.5,
        fontWeight: 'bold',
        color: '#2E2E2E'
    },
    memo : {
        height: 250,
        position: 'absolute',
        top: 160,
        width: '100%',
        
    }
})