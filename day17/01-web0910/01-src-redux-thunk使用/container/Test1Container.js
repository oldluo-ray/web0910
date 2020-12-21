// 写react-redux代码
// 在react中哪个组件想还要使用redux中的数据,就在这个组件中引入connect函数
import { connect } from 'react-redux'

// 导入actionCreator
import { incre, asyncincre } from '../redux/actions'

import Test1 from '../components/Test1'

export default connect(
  state => ({ num: state.count }),
  { incre, asyncincre }
)(Test1)
