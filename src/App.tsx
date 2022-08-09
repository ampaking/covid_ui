import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, ROUTES } from './components';
import './App.css';

const { Header } = Layout;

const App = () => {
  return (
    // Routing all menu & route
    <Router>
      <Header>
        <Menu />
      </Header>
      <Routes>
        {/* Map throw all routes */}
        {ROUTES.map((route, i) => (
          <Route
            key={`${i}${route.key}`}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </Router>
  );
};
export default App;
