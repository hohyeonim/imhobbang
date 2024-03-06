import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
//import AccountModal from "../components/ConnectWallet/AcoountModal";


const HeaderEl = styled.div`
  display: flex;
  color: #ffffff;
  width: 100%;
  min-width: 1080px;
  height: 70px;
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 0;
  background-color: rgba(24, 28, 57, 0.4);
  z-index: 0;

  svg {
  font-size: 2rem;
  cursor: pointer;
  }
`
const HeaderDescEl = styled.div`
  display: flex;
  color: #ffffff;
  width: 100%;
  min-width: 1080px;
  height: 120px;
  background-color: rgba(24, 28, 57, 0.4);
  z-index: 0;

  svg {
  font-size: 2rem;
  cursor: pointer;
  }
`

const Center = styled.div`
  justify-content: center;
  width: 1320px;
  margin: auto;
`

const Logo = styled.a`
  font-family: 'notokr-medium';
  float: left;
  cursor: url(/images/cursor_pointer.png) 4 12, pointer;
`

const GuideBtn = styled.a`
  font-family: 'notokr-bold';
  font-style: normal;
  font-size: 16px;
  color: #ffffff;
  cursor: url(/images/cursor_pointer.png) 4 12, pointer;
  float: right;
  margin-right: 50px;
  letter-spacing: -0.5px;

  &:active {
    opacity: 0.3;
  }
`

const ConnetBtn = styled.button`
  font-family: 'notokr-bold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  float: right;
  background: none;
  border:none;
  cursor: url(/images/cursor_pointer.png) 4 12, pointer;
  letter-spacing: -0.5px;

  &:active {
    opacity: 0.3;
  }
`
const AccountBtn = styled.button`
  font-family: 'notokr-bold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  width: 160px;
  height: 26px;
  background: #464961;
  border-radius: 20px;
  float: right;
  border: none;
  cursor: url(/images/cursor_pointer.png) 4 12, pointer;

  &:active {
    opacity: 0.3;
  }
`

const AccountText = styled.a`
`

const SubTitle = styled.div`
  align-items: center;
  white-space:nowrap;
  height: 120px;
  display: flex;
  justify-content: space-between;
`

const TitleText = styled.h3`
  font-family: 'notokr-bold'; 
  width: 820px;
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #ffffff;
`

const SubTitleText = styled.a`
  font-family: 'notokr-bold'; 
  font-size: 15px;
  line-height: 29px;
  color: #ffffff;
`

const SubTitleImage = styled.img`
  width: 29px;
  height: 28px;
  margin-bottom: 15px;
  margin-right: 5px;
  margint-top: 5px;
`

const LogoImage = styled.img`
`

const LandViewBtnEl = styled.button`
  font-family: 'notokr-bold';
  font-size: 19px;
  font-weight: 700;
  color: #FFFFFF;
  width:404px;
  height:52px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(10px);
  cursor: url(/images/cursor_pointer.png) 4 12, pointer;
  float: right;

  &:active {
    opacity: 1;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(10px);
    color: #000000;
  }

  &:hover {
    opacity: 1;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(10px);
    color: #000000;
  }
`

const LeftContainer = styled.div`
  height: 120px;
  width:50%;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  height: 120px;
  width:50%;
`

const ConncetImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  margin-bottom: 2px;
`

const LoggingText = styled.abbr`
  font-family: 'notokr-bold';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #13EBD1;
  float: right;
`

/* header 컴포넌트 */
function Header(){
  // const [showConnectModal, setShowConnectModal] = useState(false);  // WalletModal state

  // // click event - connect 모달창
  // const connetClickHandler = () => {
  //   setShowConnectModal(!showConnectModal);
  // };

//   useEffect(() => {
//     // account 상태 확인 및 state 저장
//     const isConnected = (mainContext.data.account != undefined && mainContext.data.account != "");
//     setConnect( isConnected );
//   }, [mainContext.data.account, logging])

  return(
    <HeaderEl>
    </HeaderEl>
  );
}

export default Header;