import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import List from './List'
import Header from './Header'
import Detail from './Detail'
import data from './data'

class App extends Component {

  constructor() {
    super()
    this.state = { data: [],
      dataFetched: false,
      onDetail: false }
  }

  componentWillMount() {
    console.log(data)
    const config = {
      headers: {
        'X-Mashape-Key':'uvXmpDtTM0mshSQlxPNYLEvtCB8Tp1UYpk7jsnz5cQYui26WUW'
      }
    }

    axios.get('https://devru-instructables.p.mashape.com/list?limit=20&offset=0&sort=recent&type=id', config)
    .then(function(response) {
      this.setState({ data: response.data.items, dataFetched: true })
    }.bind(this))
    .catch(function(error) {
      this.setState({ data: data.items, dataFetched: true })
    })
  }

  getTitles() {
    let titles = []
    this.state.data.forEach(function(object) {
      titles.push(object.title)
    })
    return titles
  }

  renderList() {
    const titles = this.getTitles()

    if(this.state.dataFetched) {
      return <List listData={ titles } detailData = {this.state.data} />
    }
  }

  render() {
    const hello = <Text>hello</Text>
    return (
        <View>
          <Header headerText="Recent Instructables" />
          {this.renderList()}
        </View>
    )
  }
}

export default App
