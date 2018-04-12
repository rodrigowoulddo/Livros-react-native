import React from "react";
import {AsyncStorage, StyleSheet, View} from "react-native";
import {livros} from "../modelo/livros"
import LivroLista from "../components/livroLista"

export default class LivroListaScreen extends React.Component {
    static navigationOptions = {
        title: 'Livros',
        headerStyle: {
            backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            livros: livros,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LivroLista livros={this.state.livros}/>
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        padding: 10,
        flex: 1,
    },
});