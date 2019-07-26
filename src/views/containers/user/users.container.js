import React, { Component } from 'react';
import { usersOperations } from '../../../state/slices/users'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers();
  };

  render() {
    const users = this.props.users || [];
    return (
      <div>
        <ul>
          {users.map((a) => (
            <li key={a.id}><Link to={`/user/${a.id}`}>{a.name}</Link></li>
          ))}
        </ul>
      </div>
    )
  };
}

UsersContainer.propTypes = {
  match: PropTypes.object,
  users: PropTypes.array,
  getUsers: PropTypes.func,
};

const mapStateToProps = ({
  users,
}) => ({
  users: users,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getUsers: usersOperations.getUsers,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(UsersContainer);