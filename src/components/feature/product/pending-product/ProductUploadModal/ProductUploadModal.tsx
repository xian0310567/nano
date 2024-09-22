import { useState } from "react";

import { InboxOutlined } from "@ant-design/icons";
import { Modal, Form, InputNumber, Upload, Typography } from "antd";

import useUploadProductDetailPageImage from "@/hooks/feature/pending-product/useUploadProductDetailPageImage";

import { UploadFile } from "antd/es/upload/interface";
import {
  ProductUploadModalProps,
  ProductForm,
} from "./ProductUploadModal.type";

const ProductUploadModal = (props: ProductUploadModalProps) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const { Text, Title } = Typography;
  const { uploadProductDetailPageImage } = useUploadProductDetailPageImage();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleOk = async () => {
    const valid: ProductForm = await form.validateFields();

    if (valid && valid.upload && valid.upload.length)
      uploadProductDetailPageImage(props.record, valid.upload[0]);
  };

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  return (
    <Modal
      closeIcon
      open={props.open}
      onOk={handleOk}
      onCancel={() => props.setOpen(false)}
    >
      <Form form={form} name="상품업로드" layout="horizontal">
        <Form.Item name="price" label="상품 가격" required>
          <InputNumber
            type="number"
            style={{ width: "100%" }}
            placeholder={props.record.recommend_price}
          />
        </Form.Item>
        <Form.Item name="upload" getValueFromEvent={(e) => e.fileList}>
          <Dragger
            fileList={fileList}
            maxCount={1}
            onChange={handleUploadChange}
            beforeUpload={() => false}
          >
            <InboxOutlined />
            <Title level={4}>상품 상세 페이지</Title>
            <Text type="secondary">
              제디터로 생성한 상품의 상세페이지를 업로드 해주세요.
            </Text>
          </Dragger>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductUploadModal;
