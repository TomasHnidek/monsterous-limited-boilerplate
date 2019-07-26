import React, { Component } from 'react';
import { usersOperations } from '../../../state/slices/users'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class UserContainer extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getUser(params.id);
  };

  render() {
    const user = this.props.user;
    return (
      <div>
        <p>
          {user.name}<br />
          {user.email}<br />
          <Link to={`/user/${user.id}/todos`}>todos</Link><br />
        </p>
      </div>
    )
  };
}

UserContainer.propTypes = {
  match: PropTypes.object,
  getUser: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = ({
  user,
}) => ({
  user: user,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getUser: usersOperations.getUser,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(UserContainer);