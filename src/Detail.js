import React, { Component } from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'

function Detail(props) {
  console.log(props.data)
  let {imageUrl, author, category, favorites, publishDate} = props.data

  return (
    <View style={{ paddingLeft: 50, paddingTop: 20 }}>
      <Image style={{width: 300, height: 300}}
        source={{ uri: imageUrl }}/>
      <Text> author: { author } </Text>
      <Text> category: { category } </Text>
      <Text> favorites: { favorites } </Text>
      <Text> publishDate: { publishDate } </Text>
    </View>
  )
}

export default Detail
