var React = require('react');

var UserRepos = React.createClass({
  getInitialState: function() {
    return {
      reposCount: 0
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState({reposCount: props.repos.length});
  },
  render: function () {
    var repos = this.props.repos.map(function(repo, key) {
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>{repo.name}
              <span className="badge">{repo.stargazers_count} Stars</span>
            </h3>
            <p>{repo.description}</p>
            <p>
              <span>
                <a target="_blank" href={repo.html_url} role="button" className="btn btn-primary">Repository</a>
              </span>
              <span>
                <a target="_blank" href={repo.html_url+'/issues'} role="button" className="btn btn-default">Issues ({repo.open_issues})</a>
             </span>
            </p>
          </div>
       </div>
      );
    }); 

    return (
      <div>
        <h1>{this.state.reposCount} repositories</h1>
        {repos}
      </div>
    );

  }
});

module.exports = UserRepos;
