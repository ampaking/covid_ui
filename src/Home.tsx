import { useState } from 'react';
import { Card, Layout } from 'antd';
import { Overview, Prevention, Symptoms } from './components';
import banner from './files/banner.png';
import './App.css';

const { Content, Footer } = Layout;

// Tab list
const tabList = [
  {
    key: 'overview',
    tab: 'Overview',
  },
  {
    key: 'prevention',
    tab: 'Prevention',
  },
  {
    key: 'symptoms',
    tab: 'Symptoms',
  },
];

const Home = () => {
  // use useState for set tab active key
  const [activeTabKey, setActiveTabKey] = useState<string>('overview');

  // Tab Content list
  const contentList: Record<string, React.ReactNode> = {
    overview: <Overview />,
    prevention: <Prevention />,
    symptoms: <Symptoms />,
  };
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  return (
    <>
      <div>
        {/* Banner image */}
        <img
          style={{ width: '100%', height: '300px' }}
          src={banner}
          alt="Banner"
        />
      </div>
      <Layout className="App">
        <Content>
          {/* Card to show Covid information */}
          <Card
            title={'Coronavirus disease (COVID-19)'}
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={(key) => {
              onTabChange(key);
            }}
          >
            {contentList[activeTabKey]}
          </Card>
        </Content>
        {/* Footer start */}
        <Footer style={{ textAlign: 'center' }}>
          {`© Corpy&Co., Inc. 2017.`}
        </Footer>
        {/* Footer End */}
      </Layout>
    </>
  );
};
export default Home;
