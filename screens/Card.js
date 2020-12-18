import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Card extends React.Component {
    render() {
        return (
            <Animatable.View animation={this.props.move} duration={1500} style={styles.card}>
                <TouchableOpacity style={styles.box1} onPress={this.props.screenChange} hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}>
                    <View style={{borderRadius:21,backgroundColor:'rgba(255,199,134,0.2)',height:80,width:80,alignItems:'center',justifyContent:'center',paddingVertical:30,marginHorizontal:30}}>
                        <Image source={this.props.image}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={{fontSize:20,color:'#2D2D2D',letterSpacing:-0.5}}>{this.props.title}</Text>
                    <Text style={{fontSize:15,color:'#BEC4C9',letterSpacing:-0.5,paddingVertical:5}}>{this.props.subtitle}</Text>
                </View>
                <View style={styles.box3}>
                    <View style={{height:90,width:90,borderWidth:1,borderColor:'#136DF3',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#136DF3', padding:20}}>{this.props.completed}</Text>
                    </View>
                </View>
            </Animatable.View>
        )
    }
}

const styles = StyleSheet.create({
    card : {
        flex:1,
        marginBottom:90,
        flexDirection:'row',
        paddingVertical:20
    },
    box1: {
        flex: 1,
        paddingHorizontal : 10,
        height: 100,
        width:100
    },
    box2: {
        flex: 1,
        margin: 4,
    },
    box3: {
        flex: 1,
        marginTop: -10
    }
})