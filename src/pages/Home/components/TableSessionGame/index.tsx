import React, { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import "./index.scss";
import ResultTag from "../ResultTag";
import IconResult from "../IconResult";
import useWebSocketStore from "@/store/socket";
import { convertSecondsToTime, sumDigits } from "@/utils/function";

function TableSessionGame() {
  const dataSocket = useWebSocketStore((state) => state);

  // useEffect(() => {
  //   dataSocket.socket.on("countdown", (data) => {
  //     dataSocket.setTime(data.time);
  //   });
  // }, []);

  return (
    <div className="table-session-game">
      <table>
        <tbody>
          <tr>
            <td>Mã phiên:</td>
            <td>#{dataSocket.sessionResult?.data?.id}</td>
          </tr>
          <tr>
            <td>Thời gian:</td>
            <td>{convertSecondsToTime(dataSocket?.sessionResult?.time)}</td>
          </tr>
          <tr>
            <td>Xu đặt ván này:</td>
            <td className="text-danger">
              <b>{dataSocket.sessionResult?.data?.coin}</b>
            </td>
          </tr>
          <tr>
            <td>Xu đặt ván trước:</td>
            <td>{dataSocket.sessionResult?.data?.coin_prev}</td>
          </tr>
          <tr>
            <td>Số tỉ lệ thắng:</td>
            <td>{dataSocket.sessionResult?.data?.res_percent}</td>
          </tr>
          <tr>
            <td>Số ngẫu nhiên:</td>
            <td>
              {dataSocket.sessionResult?.data?.coin_random ? (
                `${dataSocket.sessionResult.data?.coin_random}`
              ) : (
                <span className="turn-num-random">
                  <ImSpinner />
                  (hiển thị ở giây 13)
                </span>
              )}
            </td>
          </tr>
          <tr>
            <td>Tổng:</td>
            <td>{dataSocket.sessionResult?.data?.coin_prev_total ?? 0}</td>
          </tr>
          <tr>
            <td>Kết quả cộng:</td>
            <td>
              {sumDigits(dataSocket.sessionResult?.data?.coin_prev_total)}
            </td>
          </tr>
          <tr>
            <td>Kết quả:</td>
            <td>
              <ResultTag
                type={dataSocket.sessionResult?.data?.res_cl ? "c" : "d"}
              />
              &nbsp;&nbsp;
              <ResultTag
                type={dataSocket.sessionResult?.data?.res_tx ? "t" : "k"}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>CD:</td>
            <td>
              {dataSocket.sessionResult.res_cl?.map((v, index) => {
                return <IconResult type={v} key={index} />;
              })}
            </td>
          </tr>
          <tr>
            <td>TK:</td>
            <td>
              {dataSocket.sessionResult.res_tx?.map((v, index) => {
                return <IconResult type={v} key={index} />;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableSessionGame;
