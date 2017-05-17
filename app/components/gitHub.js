import React from 'react'
import SearchUser from './searchUser'
import UserInfo from './userInfo'

class GitHub extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      repos: []
    }

    this.updateUser = this.updateUser.bind(this)
    this.updateRepo = this.updateRepo.bind(this)
  }

  updateUser (user) {
    this.setState({user: user})
  }

  updateRepo (repos) {
    this.setState({ repos: repos })
  }

  render () {
    return (
      <div className='container'>
        <SearchUser
          updateUser={this.updateUser}
          updateRepo={this.updateRepo}
        />
        <UserInfo
          user={this.state.user}
          repos={this.state.repos}
        />
      </div>
    )
  }

}

export default GitHub
