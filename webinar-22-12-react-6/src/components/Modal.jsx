import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(31, 31, 31, 0.3);
`;

const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: 300px;
  min-height: 300px;
`;

const Modal = ({ onClose, children }) => (
  <Backdrop>
    <Window>
      {children}
      <button onClick={onClose}>close</button>
    </Window>
  </Backdrop>
);

export default Modal;
