import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './apply.scss'

@connect(() => ({

}),(dispatch) => ({

}))
class Apply extends Component{
  render () {
    return (
      <View className='apply'>
        <View className='top'>
          <View className='btn'>
            <View className='square'>请假</View>
            <View className='text'>请假</View>
          </View>
        </View>
        <View className='list'>请假记录</View>
      </View>
    )
  }
}
export default Apply
