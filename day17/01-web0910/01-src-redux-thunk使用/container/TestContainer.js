import { connect } from 'react-redux'
import Test from '../components/Test'
function fn(state) {
    return {
      msg: state.msg
    }
}

export default connect(fn)(Test)