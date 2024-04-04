import { Button, Col, Divider, Row } from 'antd';
import Helmet from '../../components/Helmet';
import AsyncWrapper from '../../layouts/AsyncWrapper';
import './index.scss';

function Homepage() {
  const isFetching = false;
  const data: any = { a: 1 };
  const error = null;

  return (
    <>
      <Helmet title='Trang chủ' description='Hệ thống chơi game' />
      <div className='home'>
        <div className='content'>
          <div></div>
          <div className='group-btn'>
            <Button>Xem hướng dẫn</Button>
            <Button>Nhóm Zalo</Button>
          </div>

          <div className=''>aaaa</div>

          <Row gutter={22} className='row-data' wrap>
            <Col span={12}>
              <div className='row-data-game'>
                <span className='row-header'>Game</span>
                <Divider></Divider>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Homepage;
