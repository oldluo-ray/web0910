import { connect } from 'react-redux'
import List from '../pages/List'
import { getUsersAsync, setFilter } from '../redux/actions'

export default connect(
  state => ({ users: state.users.users, filter: state.filter.filter }),
  { getUsersAsync, setFilter }
)(List)
