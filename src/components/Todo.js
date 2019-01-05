import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'Valor Padrão',
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({});

export default Todo;
