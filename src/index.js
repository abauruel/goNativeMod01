import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    usuario: "Alex",
    todos: [
      { id: 0, text: "Fazer Ccafé fresco" },
      { id: 1, text: "Tostar pão" }
    ]
  };
  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: "Novo texto added" }
      ]
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.usuario}!</Text>
        <Button title="+" onPress={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
