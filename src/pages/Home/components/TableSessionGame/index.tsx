import React from "react";
import { ImSpinner } from "react-icons/im";
import "./index.scss";
import ResultTag from "../ResultTag";
import IconResult from "../IconResult";

function TableSessionGame() {
  return (
    <div className="table-session-game">
      <table>
        <tbody>
          <tr>
            <td>Mã phiên:</td>
            <td>#12114556</td>
          </tr>
          <tr>
            <td>Thời gian:</td>
            <td>#12114556</td>
          </tr>
          <tr>
            <td>Xu đặt ván này:</td>
            <td className="text-danger">
              <b>47698</b>
            </td>
          </tr>
          <tr>
            <td>Xu đặt ván trước:</td>
            <td>81690</td>
          </tr>
          <tr>
            <td>Số tỉ lệ thắng:</td>
            <td>19.2155%</td>
          </tr>
          <tr>
            <td>Số ngẫu nhiên:</td>
            <td>
              <span className="turn-num-random">
                <ImSpinner />
                (hiển thị ở giây 13)
              </span>
              {/* <ImSpinner />
              (hiển thị ở giây 13) */}
            </td>
          </tr>
          <tr>
            <td>Tổng:</td>
            <td>744669884</td>
          </tr>
          <tr>
            <td>Kết quả cộng:</td>
            <td>7+4+4+6+6+9+8+8+4=56</td>
          </tr>
          <tr>
            <td>Kết quả:</td>
            <td>
              <ResultTag type="c" />
              &nbsp;&nbsp;
              <ResultTag type="k" />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>CD:</td>
            <td>
              <IconResult type="c" />
              <IconResult type="c" />
              <IconResult type="c" />
              <IconResult type="d" />
              <IconResult type="c" />
              <IconResult type="d" />
              <IconResult type="d" />
              <IconResult type="d" />
              <IconResult type="c" />
            </td>
          </tr>
          <tr>
            <td>TK:</td>
            <td>
              <IconResult type="t" />
              <IconResult type="t" />
              <IconResult type="k" />
              <IconResult type="k" />
              <IconResult type="t" />
              <IconResult type="k" />
              <IconResult type="k" />
              <IconResult type="k" />
              <IconResult type="t" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableSessionGame;
