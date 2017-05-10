var React = require('react');
var UserRepos = require('./userRepos.js');

function userInfo(props) {
   var userInfo = (props.user) ? (
      <div className="row">
        <div className="col-lg-4">
          <img src={props.user.data.avatar_url} alt="avatar" className="img-circle" width="140" height="140" />
          <h2>{props.user.data.login}</h2>
          <p>{props.user.data.name}</p>
          <p>Followers: {props.user.data.followers} / Following: {props.user.data.following}</p>
          <p>
            <a href={props.user.data.html_url} className="btn btn-default" role="button">View Details</a>
          </p>
        </div>
        <div className="col-lg-8">
         <UserRepos repos={props.repos} />
       </div>
      </div>
    ) : null;
    return userInfo;
}

userInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array
}

module.exports = userInfo;
