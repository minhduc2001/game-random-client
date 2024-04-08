import { Button, Col, Divider, Row } from 'antd';
import Helmet from '../../components/Helmet';
import AsyncWrapper from '../../layouts/AsyncWrapper';
import './index.scss';
import { MdLogin } from 'react-icons/md';

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
          <Row gutter={22} className='row-data' wrap>
            <Col span={12}>
              <div className='row-data-game'>
                <span className='row-header'>
                  <>Game (Thường)</>
                </span>
                <Divider></Divider>
              </div>
            </Col>
            <Col span={12}>
              <div className='row-data-game'>
                <span className='row-header'>
                  <p>Game</p>
                  <p>Số dư: 0 xèng</p>
                </span>

                <div className='panel-body'>
                  <div className='alert-danger'>
                    <p>Hãy đăng nhập để có thể đặt cược nhé</p>
                    <p className='btn-login'>
                      <a
                        href='https://nsocltx.com/dang-nhap'
                        className='btn btn-xs btn-danger'
                      >
                        <MdLogin />
                        &nbsp;&nbsp;Đăng nhập
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Homepage;
