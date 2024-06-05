import { LegacyButtonType } from "antd/es/button/button";
import styles from "./index.module.scss";
import { Button, Modal } from "antd";
import { TextProps } from "antd/es/typography/Text";
import classNames from "classnames";

interface IModalGlobalProps {
  open?: boolean;
  children?: React.ReactNode;
  title?: string | React.ReactNode | undefined;
  footer?: string | React.ReactNode | undefined;
  content?: string | React.ReactNode | undefined;
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  closeIcon?: React.ReactNode;
  centered?: boolean;
  titleProps?: TextProps;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  width?: number | string;
  closable?: boolean;
  maskClosable?: boolean;
  animation?: string;
  maskAnimation?: string;
  okText?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  okType?: LegacyButtonType;
  getContainer?: any;
  rootClassName?: string;
  isLoadingOK?: boolean;
}

function ModalGlobal(props: IModalGlobalProps): JSX.Element {
  const {
    className,
    open,
    onOk,
    onCancel,
    title,
    children,
    okText = "Xác nhận",
    cancelText = "Hủy",
    isLoadingOK = false,
    footer,
    width = "90vw",
    rootClassName,
    maskClosable,
  } = props;
  return (
    <Modal
      destroyOnClose
      className={classNames(styles.modalGlobal, className)}
      centered
      title={title}
      width={width}
      open={open}
      onOk={onOk}
      rootClassName={rootClassName}
      maskClosable={maskClosable}
      footer={
        footer === null
          ? false
          : footer || [
              <Button
                className={styles.buttonCancel}
                key="back"
                onClick={onCancel}
              >
                {cancelText}
              </Button>,
              <Button
                className={styles.buttonOk}
                key="submit"
                type="primary"
                htmlType="submit"
                loading={isLoadingOK}
                onClick={onOk}
              >
                {okText}
              </Button>,
            ]
      }
    >
      <div
        className={classNames(
          styles.modalGlobalContent,
          styles.customScrollbar
        )}
      >
        {children}
      </div>
    </Modal>
  );
}

export default ModalGlobal;
