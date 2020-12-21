import { connect } from 'react-redux'
import List from '../pages/List'
import { getUsersAsync } from '../redux/actions'

export default connect(
  state => ({ users: state.users }),
  { getUsersAsync }
)(List)
