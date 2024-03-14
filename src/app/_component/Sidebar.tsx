import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      {/* 여기에 사이드바 내용을 추가하세요 */}
      <h2>임호현</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Career</li>
        <li>Educations</li>
        <li>Experience</li>
        <li>Project</li>
        <li>Skill</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;