import ModalGlobal from "@/components/ModalGlobal";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import "./index.scss";

const ModalNotificationHome = (_: any, ref: any) => {
  const [visible, setVisible] = useState<boolean>(false);

  const onCancel = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        setVisible(true);
      },

      onClose: () => setVisible(false),
    };
  });

  const contentHtml = `<div class="ql-editor" data-gramm="false"><p class="ql-align-center"><strong style="color: rgb(230, 0, 0);">Lưu Ý : Web Sử Dụng Cho Mục Đích Giải Trí Và Chỉ Cho Phép Chơi Và Rút Về Xu Trong Game Ninja School Online </strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><strong style="color: rgb(0, 102, 204);">HỆ THỐNG LẤY KẾT QUẢ TỪ VXMM THƯỜNG TRONG GAME NINJA SCHOOL</strong></p><p class="ql-align-center"><strong style="color: rgb(230, 0, 0);">﻿</strong></p><p class="ql-align-center"><strong>Không Nên Để Tên </strong><strong style="color: rgb(153, 51, 255);"><u>Tài Khoản</u></strong><strong> Và </strong><strong style="color: rgb(153, 51, 255);"><u>Tên Hiển Thị</u></strong><strong> Giống Nhau , Tránh Kẻ Gian Check Pass Mất Xu Đáng Tiếc.</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><strong style="background-color: rgb(255, 255, 204); color: rgb(0, 138, 0);">Nạp Xu Lên Web Để Chơi Cho Ổn Định, Tránh Bot Fake Hoặc Bị Phá Bot Khi Chơi. Các Bot Đều Trong Gia Tộc : </strong><strong style="background-color: rgb(255, 255, 204); color: rgb(230, 0, 0);">Trungductv</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><strong style="color: rgb(230, 0, 0);">Báo Lỗi Qua Facebook : </strong><a href="https://www.facebook.com/nsominigame/" target="_blank" style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);"><strong>TẠI ĐÂY</strong></a></p></div>`;

  return (
    <>
      <ModalGlobal
        onCancel={onCancel}
        open={visible}
        title={
          <div className="modal-notification-home-title text-danger">
            Thông báo
          </div>
        }
        width={500}
        className="modal-notification-home"
        footer={
          <div className="modal-notification-home-footer">
            <button className="btn btn-danger" onClick={onCancel}>
              Đóng
            </button>
          </div>
        }
      >
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>
      </ModalGlobal>
    </>
  );
};

export default forwardRef(ModalNotificationHome);
