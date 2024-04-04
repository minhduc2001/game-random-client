import { Outlet } from 'react-router-dom';
import { FloatButton, Layout } from 'antd';

import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';
import Header from './Header/Header';
import Content from './Content';

function LayoutWrapper() {
  return (
    <Layout className='min-h-screen'>
      <Header />
      <Navbar></Navbar>
      <Content>
        <Outlet></Outlet>
      </Content>

      <Footer />
    </Layout>
  );
}

export default LayoutWrapper;
