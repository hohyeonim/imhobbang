import styled from "styled-components";


const SidebarWrapper = styled.div`
  width: 500px;
  height: 100%;
  background-color: #008000;
  color: #ffffff;
  padding: 0px;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
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