
import React, { Component } from 'react';
import { renderRoutes as renderSubRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

class LayoutContainer extends Component {

  render() {
    return (
      <div>
        <div>{'[LAYOUT] This part doesn\'t change between routes'}</div>
        <div>{renderSubRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}


LayoutContainer.propTypes = {
  route: PropTypes.object
};

export default LayoutContainer;