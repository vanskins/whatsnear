/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SearchBar from './src/components/searchbar';
import Card from './src/components/card';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'Jollibee',
          imageUrl: 'https://img.freepik.com/free-vector/exterior-view-restaurant-urban-city-background_1302-6875.jpg?size=338&ext=jpg',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Le Cafe',
          imageUrl: 'https://cdn.dribbble.com/users/97870/screenshots/1425320/store.gif',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'McDonalds',
          imageUrl: 'https://img.freepik.com/free-vector/exterior-view-restaurant-urban-city-background_1302-6875.jpg?size=338&ext=jpg',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Julies Bakeshop',
          imageUrl: 'https://cdn.dribbble.com/users/97870/screenshots/1425320/store.gif',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Julies Bakeshop',
          imageUrl: 'https://img.freepik.com/free-vector/exterior-view-restaurant-urban-city-background_1302-6875.jpg?size=338&ext=jpg',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Julies Bakeshop',
          imageUrl: 'http://clipart-library.com/image_gallery/n748466.png',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Julies Bakeshop',
          imageUrl: 'https://img.freepik.com/free-vector/exterior-view-restaurant-urban-city-background_1302-6875.jpg?size=338&ext=jpg',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Julies Bakeshop',
          imageUrl: 'http://clipart-library.com/image_gallery/n748466.png',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Card data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f1c40f',
  }
});
