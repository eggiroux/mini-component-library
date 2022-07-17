/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--border-radius': '4px',
    '--padding': 0,
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
    '--padding': 0,
  },
  large: {
    '--height': '16px',
    '--border-radius': '8px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={SIZES[size]}>
      <BarWrapper>
        <Bar width={Math.min(value, 100)} />
      </BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: ${props => props.width}%;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
