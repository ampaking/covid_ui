import { Menu as BaseMenu } from 'antd';
import { Link } from 'react-router-dom';
import Home from '../../Home';
import Statistics from '../../Statistics';
import Contact from '../../Contact';
import Error404 from '../../Error404';

// all routes as a list
export const ROUTES = [
  {
    key: 'home',
    path: '/home',
    component: <Home />,
  },
  {
    key: 'statistics',
    path: '/statistics',
    component: <Statistics />,
  },
  {
    key: 'contact',
    path: '/contact',
    component: <Contact />,
  },
  {
    key: 'error',
    path: '*',
    component: <Error404 />,
  },
];

export const Menu = () => {
  return (
    <BaseMenu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <BaseMenu.Item key="1">
        <Link to="/home">Home</Link>
      </BaseMenu.Item>
      <BaseMenu.Item key="2">
        <Link to="/statistics">Statistics</Link>
      </BaseMenu.Item>
      <BaseMenu.Item key="3">
        <Link to="/contact">Contact</Link>
      </BaseMenu.Item>
    </BaseMenu>
  );
};
