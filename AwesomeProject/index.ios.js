/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class AwesomeProject extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>
                <Blink text="Hello :)" />
                <Text style={styles.welcome}>
                    <Greeting name="React Native!"/>
                </Text>
                <Text style={styles.welcome}>
                    <Greeting name="Tomasz"/>
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <Image source={pic} style={{width: 193, height: 110}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
