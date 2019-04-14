import React from 'react';
import { View, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';

const PAGE = Dimensions.get('window');

const Card = (props) => {
  const { data } = props;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{ backgroundColor: 'white', marginBottom: 10, width: PAGE.width - 35, padding: 15 }}>
              <TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{width: 60, height: 60 }}
                    source={{uri: item.imageUrl }}
                  />
                  <View style={{ flex: 1, marginLeft: 20 }}>
                    <Text style={{ marginBottom: 5 }}>{item.name}</Text>
                    <Text numberOfLines={3}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Card;