import { useMemo, useState, useCallback } from 'react';
import { Button, Layout, Menu, MenuItemProps, Statistic } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const Error404 = () => {
  return (
    <Layout className="App">
      <Content>Hello from Error404</Content>
    </Layout>
  );
};
export default Error404;
