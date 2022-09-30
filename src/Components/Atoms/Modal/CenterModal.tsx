import React from "react";
import { Flex } from "styles/layouts/Flex";
import { CenterModalStyle } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  title?: string;
  children?: JSX.Element;
  closeModal: (val: boolean) => void;
  navigateBack?: boolean;
  size?: string;
}
const CenterModal: React.FC<ModalProps> = ({
  children,
  title,
  closeModal,
  navigateBack,
  size,
}) => {
  const navigate = useNavigate();
  return (
    <CenterModalStyle size={size}>
      <Flex gap="1rem" className="top" flexRowJcBetweenAiCenter>
        <Typography as="h3" className="heading-13" text={title} />

        <Button
          onClick={() => {
            if (navigateBack) {
              navigate(-1);
            } else {
              closeModal(false);
            }
          }}
          className="btn-icon"
          label={<img src="/assets/images/times.svg" alt="" />}
        />
      </Flex>
      <div className="content">{children}</div>
    </CenterModalStyle>
  );
};

export default CenterModal;
