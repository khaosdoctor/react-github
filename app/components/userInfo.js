import React from 'react';
import UserRepos from './userRepos.js';

const userInfo = ({ user, repos }) => {
   var userInfo = (user) ? (
      <div className="row">
        <div className="col-lg-4">
          <img src={user.data.avatar_url} alt="avatar" className="img-circle" width="140" height="140" />
          <h2>{user.data.login}</h2>
          <p>{user.data.name}</p>
          <p>Followers: {user.data.followers} / Following: {user.data.following}</p>
          <p>
            <a href={user.data.html_url} className="btn btn-default" role="button">View Details</a>
          </p>
        </div>
        <div className="col-lg-8">
         <UserRepos repos={repos} />
       </div>
      </div>
    ) : null;
    return userInfo;
}

userInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array
}

export default userInfo;
