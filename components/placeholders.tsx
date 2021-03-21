import styled from '@emotion/styled';

import { ALLOW_ANY } from 'types';

const PlaceholderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #e5e5e5;
  padding: 0 16px;
`;

const PlaceholderLink = styled.a`
  color: #101010;
  padding: 8px;
`;
const PlaceholderH3 = styled.h3`
  color: #101010;
  margin: 0;
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props: ALLOW_ANY) => props.direction || 'column'};
  padding: 64px 128px;
`;

const PlaceholderBox = styled.div`
  display: flex;
`;

const PlaceholderSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 256px;
  padding: 54px 16px;
`;

export {
  PlaceholderNav,
  PlaceholderLink,
  PlaceholderH3,
  PlaceholderContainer,
  PlaceholderBox,
  PlaceholderSidebar,
};
