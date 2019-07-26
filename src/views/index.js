import React from 'react';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../utilities/routes';

/*
DataLoader: https://www.npmjs.com/package/react-router-config
*/
class DataLoader extends React.Component {
  static displayName = 'DataLoader';

  render() {
    return renderRoutes(routes);
  }
}

export default withRouter(DataLoader);