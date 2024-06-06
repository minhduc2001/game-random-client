import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Content from "./Content";

function LayoutWrapper() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Navbar></Navbar>
      <Content>
        <Outlet></Outlet>
      </Content>

      {/* <Footer /> */}
    </Layout>
  );
}

export default LayoutWrapper;
