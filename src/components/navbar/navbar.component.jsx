import styled from "styled-components";
import CameraLogo from "../../assets/image/camera.png";
import YashiHeart from '../../assets/image/heart.png'

export const NavbarContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content:center;
    align-items:center;
    margin-bottom: 30px;
`;
export const NavText = styled.h1`
    font-weight: 500;
    color: #565fa1;
    text-shadow: 0 0 4px #565fa1;
`;
export const Image = styled.img`
    width: 80px;
`;

const Navbar = () => (
  <NavbarContainer>
    <Image src={CameraLogo} />
    <NavText>{"GIT Instant"}</NavText>
    <Image src={YashiHeart} height='50' width='50' style={{ transform:'rotate(89deg)'}}/>
  </NavbarContainer>
);

export default Navbar;