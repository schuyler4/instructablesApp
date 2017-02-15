//imports from the librarys
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
// imports from other files
import List from './List'
import Header from './Header'
import Detail from './Detail'
import data from './data'

/*
THIS IS NOT CALLED A PROGRAMER NOT, THIS IS CALLED A COMMENT
*/

class App extends Component {

  constructor() {
    super()
    //set the initial state
    this.state = { data: [],
      dataFetched: false,
      onDetail: false }
  }

  componentWillMount() {
    //secret would not be hard coded in production
    const config = {
      headers: {
        'X-Mashape-Key':'uvXmpDtTM0mshSQlxPNYLEvtCB8Tp1UYpk7jsnz5cQYui26WUW'
      }
    }

    //fetch the data from the api
    axios.get('https://devru-instructables.p.mashape.com/list?limit=20&offset=0&sort=recent&type=id', config)
    .then(function(response) {
      //set the data state data to the data
      this.setState({ data: response.data.items, dataFetched: true })
    }.bind(this))
    .catch(function(error) {
      //if there is an error loading data fetch a bunch of dummy data
      //and set it as data state
      this.setState({ data: data.items, dataFetched: true })
    })
  }

  //get all the titles from the data to display it in the table view
  getTitles() {
    let titles = []
    this.state.data.forEach(function(object) {
      titles.push(object.title)
    })
    return titles
  }

  renderList() {
    //get the titles from the function above
    const titles = this.getTitles()

    //if the data is fetched render the list view with the data
    if(this.state.dataFetched) {
      return <List listData={ titles } detailData = {this.state.data} />
    }
  }

  render() {
    //the render function that renders everything else
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
