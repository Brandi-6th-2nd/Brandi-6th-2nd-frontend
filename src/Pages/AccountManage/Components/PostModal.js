import React from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

function PostModal({ openModal, handleCloseModal, handleComplete }) {
  return (
    <Fragment>
      <BackgroundModal openModal={openModal} onClick={handleCloseModal} />
      <Modal openModal={openModal}>
        <DaumPostcode onComplete={handleComplete} />
      </Modal>
    </Fragment>
  );
}

export default PostModal;

const Fragment = styled.div``;

const BackgroundModal = styled.div`
  display: ${({ openModal }) => (openModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

const Modal = styled.div`
  display: ${({ openModal }) => (openModal ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  background-color: white;
  opacity: 1;
  border-radius: 5px;
  z-index: 5;
`;
