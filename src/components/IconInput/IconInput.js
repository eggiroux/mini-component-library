import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: `${14 / 16}rem`,
    borderWidth: '1px',
    height: 24,
    iconSize: 16,
    iconStroke: 1,
  },
  large: {
    fontSize: `${18 / 16}rem`,
    borderWidth: '2px',
    height: 36,
    iconSize: 24,
    iconStroke: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper width={width} style={{}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': ` ${styles.iconSize}px` }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconStroke} />
      </IconWrapper>
      <Input
        style={{
          '--height': `${styles.height}px`,
          '--width': `${width}px`,
          '--borderWidth': styles.borderWidth,
          '--font-size': styles.fontSize,
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  height: var(--size);
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  height: var(--size);
  width: var(--width);
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  padding-left: var(--height);

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
