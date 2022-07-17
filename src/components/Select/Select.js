import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
      <VisibleSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down' size={24} strokeWidth={1} />
        </IconWrapper>
      </VisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

const IconWrapper = styled.div`
  margin-left: 6px;
  margin-right: -6px;
  color: inherit;
`;

const VisibleSelect = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  font-size: ${16 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${InvisibleSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${InvisibleSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
