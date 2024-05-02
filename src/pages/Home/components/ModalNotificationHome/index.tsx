import ModalGlobal from "@/components/ModalGlobal";
import { Form } from "antd";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import styles from "./index.module.scss";

const ModalNotificationHome = (_: any, ref: any) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onCancel = useCallback(() => {
    form.resetFields();
    setVisible(false);
  }, [setVisible, form]);

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        setVisible(true);
      },

      onClose: () => setVisible(false),
    };
  });

  return (
    <>
      <ModalGlobal
        onCancel={onCancel}
        open={visible}
        title={"Thông báo"}
        width={500}
        className={styles.modalNotificationHome}
      >
        <div></div>
      </ModalGlobal>
    </>
  );
};

export default forwardRef(ModalNotificationHome);
