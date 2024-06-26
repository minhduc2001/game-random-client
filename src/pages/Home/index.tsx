import { Button, Col, Row, TableColumnsType } from "antd";
import Helmet from "../../components/Helmet";

import { MdLogin } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useEffect, useRef, useState } from "react";
import TableGlobal, {
  IChangeTable,
} from "../../components/TableGlobal/TableGlobal";
import ModalNotificationHome from "./components/ModalNotificationHome";
import "./index.scss";
import { Link } from "react-router-dom";
import useSystemStore from "@/store/system";
import TableSessionGame from "./components/TableSessionGame";
import useWebSocketStore from "@/store/socket";
import { useQuery } from "@tanstack/react-query";
import { GET } from "@/api/api";
import useUserStore, { UserState } from "@/store/user";
import useLogin from "@/hooks/useLogin";

interface DataType {
  user_id: number | null;
  server: number;
  game: number;
  name: string;
  selection: number;
  status: number;
  xu: number;
  xu_win: number;
  server_name: string;
  selection_str: string;
  time: string;
}
const dataTable: DataType[] = [
  {
    user_id: 22914,
    server: 1,
    game: 0,
    name: "B\u1ed1 m\u00e0y \u0103n",
    selection: 21,
    status: 0,
    xu: 1000000,
    xu_win: 0,
    server_name: "Bokken",
    selection_str:
      '<span class="label label-warning text-uppercase">hiro</span>',
    time: "13:51:23",
  },
  {
    user_id: 25432,
    server: 4,
    game: 0,
    name: "dathusos",
    selection: 1,
    status: 0,
    xu: 5000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-info text-uppercase">\u0111ao</span>',
    time: "13:50:36",
  },
  {
    user_id: 25435,
    server: 4,
    game: 0,
    name: "Hasanii",
    selection: 2,
    status: 0,
    xu: 6000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:50:27",
  },
  {
    user_id: 17556,
    server: 4,
    game: 0,
    name: "H\u1ea3i Nguy\u1ec5n",
    selection: 2,
    status: 0,
    xu: 15000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:50:23",
  },
  {
    user_id: 17556,
    server: 4,
    game: 0,
    name: "H\u1ea3i Nguy\u1ec5n",
    selection: 4,
    status: 0,
    xu: 15000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:50:04",
  },
  {
    user_id: 25609,
    server: 4,
    game: 0,
    name: "dbdtop139",
    selection: 4,
    status: 0,
    xu: 20000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:49:50",
  },
  {
    user_id: 25447,
    server: 4,
    game: 0,
    name: "Tr\u1ea7n V\u0103n Qu\u00e2n",
    selection: 3,
    status: 0,
    xu: 30000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:49:48",
  },
  {
    user_id: 25613,
    server: 4,
    game: 0,
    name: "dunglive",
    selection: 2,
    status: 0,
    xu: 20000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:49:47",
  },
  {
    user_id: 25457,
    server: 4,
    game: 0,
    name: "vxvaccenss",
    selection: 4,
    status: 0,
    xu: 18369000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:49:37",
  },
  {
    user_id: 25419,
    server: 4,
    game: 0,
    name: "20 Cua",
    selection: 3,
    status: 0,
    xu: 500000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:49:33",
  },
  {
    user_id: 25453,
    server: 4,
    game: 0,
    name: "c4vxbada0",
    selection: 3,
    status: 0,
    xu: 43310000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:49:29",
  },
  {
    user_id: 25612,
    server: 4,
    game: 0,
    name: "Em Phai Tin Anh",
    selection: 4,
    status: 0,
    xu: 1000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:49:28",
  },
  {
    user_id: null,
    server: 4,
    game: 0,
    name: "boybracks",
    selection: 2,
    status: 0,
    xu: 419000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:49:25",
  },
  {
    user_id: 20388,
    server: 4,
    game: 0,
    name: "vien",
    selection: 2,
    status: 0,
    xu: 3156000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:49:12",
  },
  {
    user_id: 25436,
    server: 4,
    game: 0,
    name: "Theanh28",
    selection: 2,
    status: 0,
    xu: 22904000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:49:09",
  },
  {
    user_id: 25442,
    server: 4,
    game: 0,
    name: "Danhbetdi",
    selection: 3,
    status: 0,
    xu: 2375000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:48:38",
  },
  {
    user_id: 25658,
    server: 4,
    game: 0,
    name: "H\u00eahhehehehe",
    selection: 4,
    status: 0,
    xu: 1100000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:48:36",
  },
  {
    user_id: 25448,
    server: 4,
    game: 0,
    name: "dungbjpta0",
    selection: 1,
    status: 0,
    xu: 10000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-info text-uppercase">\u0111ao</span>',
    time: "13:48:27",
  },
  {
    user_id: 25435,
    server: 4,
    game: 0,
    name: "Hasanii",
    selection: 4,
    status: 3,
    xu: 6000000,
    xu_win: 11760000,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:47:46",
  },
  {
    user_id: 20388,
    server: 4,
    game: 0,
    name: "vien",
    selection: 3,
    status: 2,
    xu: 700000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:47:42",
  },
  {
    user_id: 25613,
    server: 4,
    game: 0,
    name: "dunglive",
    selection: 4,
    status: 3,
    xu: 20000000,
    xu_win: 39200000,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:47:41",
  },
  {
    user_id: 25612,
    server: 4,
    game: 0,
    name: "Em Phai Tin Anh",
    selection: 4,
    status: 3,
    xu: 1000000,
    xu_win: 1960000,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:47:36",
  },
  {
    user_id: null,
    server: 4,
    game: 0,
    name: "bolathua",
    selection: 3,
    status: 2,
    xu: 11011111,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:47:36",
  },
  {
    user_id: 25432,
    server: 4,
    game: 0,
    name: "dathusos",
    selection: 2,
    status: 2,
    xu: 5000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-warning text-uppercase">cung</span>',
    time: "13:47:35",
  },
  {
    user_id: 25453,
    server: 4,
    game: 0,
    name: "c4vxbada0",
    selection: 1,
    status: 3,
    xu: 20350000,
    xu_win: 39886000,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-info text-uppercase">\u0111ao</span>',
    time: "13:47:23",
  },
  {
    user_id: 25457,
    server: 4,
    game: 0,
    name: "vxvaccenss",
    selection: 3,
    status: 2,
    xu: 8673000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:47:18",
  },
  {
    user_id: 20388,
    server: 4,
    game: 0,
    name: "vien",
    selection: 105,
    status: 2,
    xu: 300000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str: '<span class="label label-danger">5</span>',
    time: "13:47:15",
  },
  {
    user_id: null,
    server: 4,
    game: 0,
    name: "boybracks",
    selection: 3,
    status: 2,
    xu: 200000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">ti\u00eau</span>',
    time: "13:47:08",
  },
  {
    user_id: 20388,
    server: 4,
    game: 0,
    name: "vien",
    selection: 13,
    status: 2,
    xu: 1000000,
    xu_win: 0,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-success text-uppercase">\u0111ao-ti\u00eau</span>',
    time: "13:47:00",
  },
  {
    user_id: 25419,
    server: 4,
    game: 0,
    name: "20 Cua",
    selection: 4,
    status: 3,
    xu: 500000,
    xu_win: 980000,
    server_name: "Kunai",
    selection_str:
      '<span class="label label-danger text-uppercase">ki\u1ebfm</span>',
    time: "13:46:55",
  },
];

const Homepage = () => {
  const [tableParams, setTableParams] = useState<IChangeTable>({
    page: 1,
    pageSize: 10,
  });

  const refModalNotificationHome: any = useRef();

  const { isRenderNotificationHome, setRenderNotificationHome } =
    useSystemStore((state) => state);
  const { createUser } = useUserStore((state) => state);
  const isLogin = useLogin();

  const { data, refetch } = useQuery({
    queryKey: ["get_me"],
    queryFn: () => {
      return GET<ResponseForm<UserState>>("user/get-me");
    },
    enabled: false,
  });

  useEffect(() => {
    if (isLogin)
      refetch().then(() => {
        if (data?.data) createUser(data.data);
      });
  }, []);

  useEffect(() => {
    if (isRenderNotificationHome) {
      refModalNotificationHome.current.onOpen();
      setRenderNotificationHome();
    }

    if (tableParams) {
    }
  }, []);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Máy chủ",
      dataIndex: "server",
      render: (value) => value,
      align: "center",
      width: 80,
    },
    {
      title: "Nhân vật",
      dataIndex: "name",
      align: "center",
      width: 250,
    },
    {
      title: "Xu đặt",
      dataIndex: "xu",
      render: (value: number) => value.toLocaleString() + " xu",
      align: "center",
      width: 200,
    },
    {
      title: "Đặt",
      dataIndex: "selection",
      align: "center",
      width: 80,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
    },
    {
      title: "Xu ăn",
      dataIndex: "xu_win",
      render: (value: number) => value.toLocaleString() + " xu",
      align: "center",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      align: "center",
    },
  ];

  const handleChangeTable = (value: IChangeTable) => {
    setTableParams({
      page: value.page,
      pageSize: value.pageSize,
    });
  };

  return (
    <div className="home-container">
      <Helmet title="Trang chủ" description="Hệ thống chơi game" />
      <div className="home">
        <div className="content">
          <div className="py-5"></div>
          <div className="group-btn mb-5">
            <Button>Xem hướng dẫn</Button>
            <Button>Nhóm Zalo</Button>
          </div>
          <Row gutter={[12, 55]} className="row-data" wrap>
            <Col xs={24} sm={12}>
              <div className="row-data-game">
                <span className="row-header">
                  <>Game (Thường)</>
                </span>

                <TableSessionGame />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className="row-data-game">
                <span className="row-header">
                  <p>Game</p>
                  <p>Số dư: 0 xèng</p>
                </span>

                <div className="panel-body">
                  {isLogin ? (
                    <div className="alert-info">
                      <p>Nhập số tiền hoặc số xu muốn đặt</p>
                    </div>
                  ) : (
                    <div className="alert-danger">
                      <p>Hãy đăng nhập để có thể đặt cược nhé</p>
                      <p className="btn-login">
                        <Link to="/dang-nhap" className="btn btn-xs btn-danger">
                          <MdLogin />
                          &nbsp;&nbsp;Đăng nhập
                        </Link>
                      </p>
                    </div>
                  )}

                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="number"
                        name="money"
                        className="form-control"
                        placeholder="Số xu"
                        aria-describedby="basic-addon2"
                        disabled={!isLogin}
                      />
                      <span className="input-group-addon" id="basic-addon2">
                        xu
                      </span>
                    </div>
                  </div>

                  <div className="game-type-panel"></div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="table-response">
            <h1 className="">LỊCH SỬ ĐẶT CƯỢC</h1>
            <Marquee play direction="left" className="marquee">
              <p className="text-[#E60000]">
                <strong>
                  Lưu ý: Web chỉ sử dụng cho mục đích giải trí và phục vụ nhu
                  cầu tìm hiểu học hỏi về website socket, ...
                </strong>
              </p>

              <p className="text-[#0066cc]">
                <strong>Tỉ lệ : x1.96 ( Max : 500m xu )</strong>
              </p>

              <p className="text-[#008a00]">
                <strong>Nạp xu Lên web để chơi cho an toàn và ổn định.</strong>
              </p>
            </Marquee>

            <div className="table-data">
              <TableGlobal
                className="table__disable__paginate"
                total={dataTable.length}
                columns={columns}
                dataSource={dataTable}
                onChangeTable={handleChangeTable}
                localeString="bản ghi"
                customFooter={true}
              />
            </div>
          </div>
        </div>
      </div>

      <ModalNotificationHome
        ref={refModalNotificationHome}
      ></ModalNotificationHome>
    </div>
  );
};

export default Homepage;
