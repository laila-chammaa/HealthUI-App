import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Day from './Day';
import Card from './Card'

export default class Home extends React.Component {
    state = {
        color: '#136DF3',
        activeState: 'rgba(255,255,255, 0.2918)'
    }
    change = () => {
        return(
            this.props.navigation.navigate("Mission")
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerOne}>
                    <View style={styles.boxOne}></View>
                    <View style={styles.boxTwo}>
                        <Text style={styles.name}>Hi, Joon</Text>
                        <Text style={styles.subtitle}>Here is your health</Text>
                    </View>
                    <View style={styles.boxThree}>
                        <ImageBackground source={require('../assets/graphone.png')} style={{width:400, height:240}}/>
                    </View>
                    <View style={styles.boxFour}>
                        <Day dayname="Sun" />
                        <Day dayname="Mon" />
                        <Day dayname="Tue" />
                        <Day dayname="Wed" />
                        <Day dayname="Thu" active={this.state.activeState}/>
                        <Day dayname="Fri" />
                        <Day dayname="Sat" />
                    </View>
                </View>
                <View style={styles.containerTwo}>
                    <View style={styles.line}></View>
                    <View style={styles.progress}>
                        <Text style={styles.textOne}>My Progress</Text>
                    </View>
                    <View style={styles.cards}>
                        <Card move='bounceInLeft' image={require('../assets/checkbox.png')} title="Mission" subtitle="85% Completed" completed='85%' screenChange={()=> this.props.navigation.navigate("Mission")} />
                        <Card move='bounceInLeft' image={require('../assets/checktodo.png')} title="Completed" subtitle="5 out of 10 tasks" completed='75%'/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#136Df3'
    },
    containerOne : {
        flex: 1,
    },
    containerTwo : {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
    },
    boxOne: {
        flex: 1
    },
    boxTwo: {
        flex: 1,
        marginHorizontal: 35, 
    },
    boxThree: {
        flex: 2,
        paddingBottom:40,
        justifyContent: 'center',
        alignItems:'center',
        margin:10
    },
    boxFour: {
        flex: 0.5,
        color: '#fff',
        flexDirection: 'row'
    },
    name : {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: -0.5,
        marginTop: 5
    },
    subtitle : {
        fontSize: 20,
        color: '#fff'
    },
    line : {
        width: 66,
        height: 4,
        backgroundColor: '#f4f0f0',
        borderRadius: 2,
        marginVertical: 25,
        left: 170
    },
    progress : {
        left: 50
    },
    textOne : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40
    },
    card : {
    }
})