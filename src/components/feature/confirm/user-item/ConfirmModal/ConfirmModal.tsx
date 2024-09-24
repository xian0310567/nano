import React from "react";

import { Modal, Form, Input, InputNumber, Radio } from "antd";

import { ConfirmModalProps } from "./ConfirmModal.type";
import { ConfirmItem } from "@/hooks/feature/confirm/user-item/usePatchConfirmItem";

type ValidConfirmItem = Omit<ConfirmItem, "id">;

const ConfirmModal = (props: ConfirmModalProps) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    const valid: ValidConfirmItem = await form.validateFields();

    if (valid) {
      handleCancel();
      props.patchConfirmItem({ ...valid, id: props.record.id });
    }
  };

  const handleCancel = () => {
    form.resetFields();
    props.setOpen(false);
  };

  return (
    <Modal closeIcon open={props.open} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form} name="소싱검수" layout="horizontal">
        <Form.Item
          name="state"
          rules={[{ required: true, message: "업로드 타입을 선택해주세요." }]}
        >
          <Radio.Group>
            <Radio value="complete">검수 완료</Radio>
            <Radio value="reject">업로드 취소</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="uploadPrice" label="추천 상품 가격">
          <InputNumber value={0} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea
            placeholder="비고"
            autoSize={{ minRows: 6 }}
            style={{ resize: "none" }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ConfirmModal;
