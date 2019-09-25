import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react'
export default class DetailComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Detail',
        headereStyle={backgroundColor:MyColors.greenColor1},
        headerTintColor='blue',
        headerBackTitle='Back',
        headerBackTitleStyle={color:'green',margin:100}
        return { headerTitle ,headereStyle,headerTintColor,headerBackTitle,headerBackTitleStyle}
    }
    render() {
        const paramsRecievedFromMain = this.props.navigation.state.params
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.greenColor1
            }} >
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>its Detail Component name:-{paramsRecievedFromMain.name}</Text>

                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>its Detail Component releasedYear:-{paramsRecievedFromMain.releasedYear}</Text>
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>its Detail Component</Text>
                <TouchableOpacity style={{
                    width: Width * .6, height: Width * .1,
                    justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
                    borderRadius: Width * .01, backgroundColor: 'darkviolet'
                }}
                    onPress={() => {
                        navigate('ThirdScreen')
                    }}
                >
                    <Text style={{
                        fontWeight: 'bold', fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>navigate to ThirdScreen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
