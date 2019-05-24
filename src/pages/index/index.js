import Taro, { Component } from '@tarojs/taro'
import { View, Map, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { setdate } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter,
  new: ''
}), (dispatch) => ({
  settime() {
    dispatch(setdate())
  },
  // 怎么修改自己定义不在仓库中的数据 ？？？
  setnew() {
    setState({
      new: new Date().toLocaleTimeString()
    })
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '千锋学员'
  }

  componentDidMount () {
    this.timer = setInterval( ()=> this.props.settime(),1000 )
    // this.timer = setInterval( () => this.props.setnew(),1000 )
  }
  componentWillUnmount () {
    clearInterval(timer)
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { counter } = this.props
    return (
      <View >
        <Map
        className='map'
        show-compass='true'
        />
       <View className='user'>
          <View className='left'>
            <View className='span'>陈</View>
          </View>
          <View className='content'>
            <View >陈锡鹏</View>
            <View >深圳HTML5就业班1814期</View>
          </View>
          <View className='right'>统计</View>
       </View>
       <View className='main'>
         <Text className='main_text'>今日打卡</Text>
         <View className='main_span'>
           <View className='main_boot' > </View>
           <View>08:32:31</View>
           <View>签到</View>
         </View>
         <View className='main_btn' >
           <View className='main_daka'>打卡</View>
           <View>{ counter.date }</View>
         </View>
       </View>
      </View>
    )
  }
}

export default Index
