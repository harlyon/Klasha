import React from "react";
import { Flex } from "styles/layouts/Flex";
import { Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  title?: string;
  children?: JSX.Element;
  layer?: string;
  closeModal?: () => void;
}
const Modal: React.FC<ModalProps> = ({
  children,
  title,
  layer,
  closeModal,
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Flex gap="1rem" className="top" flexRowJcBetweenAiCenter>
        <Typography as="h3" className="heading-4" text={title} />

        <Button
          onClick={() => {
            if (!layer) {
              navigate(-1);
            } else {
              closeModal!();
            }
          }}
          className="btn-icon"
          label={<img src="/assets/images/times.svg" alt="" />}
        />
      </Flex>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default Modal;
