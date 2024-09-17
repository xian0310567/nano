import { Modal, Form, InputNumber } from "antd";

import { ProductUploadModalProps } from "./ProductUploadModal.type";

const ProductUploadModal = (props: ProductUploadModalProps) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    const valid = await form.validateFields();

    if (valid) console.log(valid);
  };

  return (
    <Modal
      closeIcon
      open={props.open}
      onOk={handleOk}
      onCancel={() => props.setOpen(false)}
    >
      <Form form={form} name="상품업로드" layout="horizontal">
        <Form.Item name="name" label="상품 가격">
          <InputNumber
            type="number"
            style={{ width: "100%" }}
            placeholder={props.record.recommend_price}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductUploadModal;
