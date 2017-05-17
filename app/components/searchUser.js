import React from 'react'
import GitHubUserService from '../services/gitHubUser.js'

class searchUser extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    const { updateUser, updateRepo } = this.props
    const { username } = this.refs

    GitHubUserService.getUserByName(username.value)
      .then((response) => {
        updateUser(response)
      })

    GitHubUserService.getReposByUser(username.value)
      .then((response) => {
        updateRepo(response.data)
      })
  }

  render () {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input name="username" type="text" placeholder="Ex: khaosdoctor" className="form-control" ref="username"/>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
    )
  }

}

searchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepo: React.PropTypes.func.isRequired
}

export default searchUser
