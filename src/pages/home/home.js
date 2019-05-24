import Taro, { Component } from '@tarojs/taro'
import { View, Map } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './home.scss'



@connect(() => ({

}), (dispatch) => ({

}))
class Home extends Component {

    config = {
    navigationBarTitleText: '我的'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View className='home_top'>
          <View className='home_round'>陈</View>
          <View>
            <View className='home_text'>陈锡鹏</View>
            <View className='home_text'>深圳HTML5就业班1814期</View>
          </View>
        </View>
        <View className='home_list'>所在校区: 深圳</View>
        <View className='home_list'>上课时间: 09:00</View>
        <View className='home_list'>放学时间: 21:00</View>
      </View>
    )
  }
}

export default Home
