import Taro, { Component } from '@tarojs/taro'
import { View,} from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './apply.scss'

@connect(() => ({

}),(dispatch) => ({

}))
class Apply extends Component{
  render () {
    return (
      <View className='apply'>
        <View className='top'></View>
      </View>
    )
  }
}
export default Apply
