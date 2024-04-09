import { Button, Col, Divider, Row } from 'antd';
import Helmet from '../../components/Helmet';
import AsyncWrapper from '../../layouts/AsyncWrapper';
import './index.scss';
import { MdLogin } from 'react-icons/md';
import Marquee from 'react-fast-marquee';

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
          <Row gutter={[12, 55]} className='row-data' wrap>
            <Col xs={24} sm={12}>
              <div className='row-data-game'>
                <span className='row-header'>
                  <>Game (Thường)</>
                </span>
                <Divider></Divider>
              </div>
            </Col>
            <Col xs={24} sm={12}>
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

          <div className='table-response'>
            <h1 className=''>LỊCH SỬ ĐẶT CƯỢC</h1>
            <Marquee play direction='left' className='marquee'>
              <p className='text-[#E60000]'>
                <strong>
                  Lưu ý: Web chỉ sử dụng cho mục đích giải trí và phục vụ nhu
                  cầu tìm hiểu học hỏi về website socket, ...{' '}
                </strong>
              </p>

              <p className='text-[#0066cc]'>
                <strong>Tỉ lệ : x1.96 ( Max : 500m xu )</strong>
              </p>

              <p className='text-[#008a00]'>
                <strong>Nạp xu Lên web để chơi cho an toàn và ổn định.</strong>
              </p>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
