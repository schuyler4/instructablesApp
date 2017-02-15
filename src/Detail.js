import React, { Component } from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'
import axios from 'axios'

function Detail(props) {

    let {imageUrl, author, category, favorites, publishDate} = props.data

    console.log(author)
    console.log(category)
    console.log(favorites)
    console.log(publishDate)

    return (
      <View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image style={{width: 300, height: 300}}
            source={{ uri: imageUrl }}/>
        </View>
        <View>
          <Text> author: { author } </Text>
          <Text> category: { category } </Text>
          <Text> favorites: { favorites } </Text>
          <Text> publishDate: { publishDate } </Text>
        </View>
      </View>
    )
}

export default Detail
