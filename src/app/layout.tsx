"use client"

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from './_component/Sidebar';

const PageHtml = styled.html`
  
`

const Pageody = styled.body`
  margin: 0px;
`

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
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
    <PageHtml>
      <Pageody>
        <PageWrapper>
          <Sidebar />
          <ContentWrapper>
            {/* 여기에 페이지 내용을 추가하세요 */}
            {children}
          </ContentWrapper>
        </PageWrapper>
      </Pageody>
    </PageHtml>
  );
};

export default Layout;