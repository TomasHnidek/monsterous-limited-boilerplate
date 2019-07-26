import React, { Component } from 'react';
import { todosOperations } from '../../../state/slices/todos'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './todos.module.scss';

class TodosContainer extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getTodos(params.id);
  };

  render() {
    const todos = this.props.todos || [];
    console.log(styles);
    return (
      <div>
        <ul>
          {todos.map((a) => (
            <li key={a.id} className={a.completed ? styles.striked : ''}>{a.title}</li>
          ))}
        </ul>
      </div>
    )
  };
}

TodosContainer.propTypes = {
  match: PropTypes.object,
  getTodos: PropTypes.func,
  todos: PropTypes.array,
};

const mapStateToProps = ({
  todos,
}) => ({
  todos: todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getTodos: todosOperations.getTodos,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(TodosContainer);