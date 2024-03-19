import Link from "next/link";
import styled from "styled-components";


const SidebarWrapper = styled.div`
  width: 500px;
  height: 100%;
  background-color: #008000;
  color: #ffffff;
  padding: 0px;
`;

const Button = styled.button`
  width: 200px;
  height: 52px;
  margin-top: 10px;
  margin-left: 8px;
  border-radius: 4px;
  border: 0px;
  text-align: center;
  background-color: #ffffff;

  &:active {
    opacity: 0.3;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h2>임호현</h2>
      <ul>
        <Link href={'/'}> 
          <Button>
            Home
          </Button>
        </Link>
        <Link href={'/About'}> 
          <Button>
            About
          </Button>
        </Link>
        <Link href={'/Career'}> 
          <Button>
            Career
          </Button>  
        </Link>
        <Link href={'/Education'}> 
          <Button>
            Educations
          </Button>
        </Link> 
        <Link href={'/Experience'}> 
          <Button>
            Experience
          </Button>
        </Link>
        <Link href={'/Project'}> 
          <Button>
          Project
          </Button>
        </Link>
        <Link href={'/Skill'}> 
          <Button>
            Skill
          </Button>
        </Link>
        <Link href={'/Blog'}>
          <Button>
            Blog
          </Button>
        </Link>
        <Link href={'/Contact'}>
          <Button>
           Contact
          </Button>
        </Link>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;