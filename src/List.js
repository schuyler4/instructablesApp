import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import Detail from './Detail'

class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.listData),
      allData: [],
      detailDataIndex: 0,
      onDetail: false
    }
  }

  rowOnPress(rowID, rowData) {
    this.setState({ detailDataIndex: rowID, onDetail: true })

  }

  back() {
    this.setState({ onDetail: false })
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity onPress={this.rowOnPress.bind(this, rowID, rowData)}>
        <Text style={styles.listItem}>{rowData}</Text>
      </TouchableOpacity>
    )
  }


  renderComponent() {
    if(!this.state.onDetail) {
      return (
        <ListView
          style= {styles.listContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
        />
      )
    } else {
      return (
        <View>
          <TouchableOpacity onPress={this.back.bind(this)}>
            <Text style={{ borderWidth: 2, borderColor: 'black' }}>Back</Text>
          </TouchableOpacity>
          <Detail data={this.props.detailData[this.state.detailDataIndex]} />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        {this.renderComponent()}
      </View>
    );
  }
}

const styles = {
   listContainer: {
      paddingTop: 22
   },
   listItem: {
      fontSize: 20,
      padding: 10,
      borderRadius: 0,
      borderWidth: 0.5,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderColor: 'black',
   }
}

export default List
