"use client"

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from './_component/Sidebar';

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        {/* 여기에 페이지 내용을 추가하세요 */}
        {children}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Layout;