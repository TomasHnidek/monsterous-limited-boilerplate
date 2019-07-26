import loadable from 'react-loadable';

const loading = () => null;
const Users = loadable({ loader: () => import('../../views/containers/user/users.container'), loading });
const User = loadable({ loader: () => import('../../views/containers/user/user.container'), loading });
const Todos = loadable({ loader: () => import('../../views/containers/todo/todos.container'), loading });
const Layout = loadable({ loader: () => import('../../views/containers/helper/layout.container'), loading });
const NotFound = loadable({ loader: () => import('../../views/containers/helper/notfound.container'), loading });

// Server-Side Fetching will run synchronously each route nest level
// posts <---- prefetch A 
// -- postList <---- has prefetch A, prefetch B
// -- postDetails <---- has prefetch A, prefetch C
//
export default [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/user/:id/todos',
        component: Todos,
      },
      {
        path: '/user/:id',
        component: User,
      },
      {
        path: '/user',
        component: Users,
      },
      { component: NotFound },
    ],
  },
  { component: NotFound },
];