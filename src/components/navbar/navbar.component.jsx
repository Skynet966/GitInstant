import CameraLogo from "../../assets/image/camera.png";
import YashiHeart from '../../assets/image/heart.png'
import { NavbarContainer, NavText, Image } from "./navbar.styled";

const Navbar = () => (
  <NavbarContainer>
    <Image src={CameraLogo} />
    <NavText>{"GIT Instant"}</NavText>
    <Image src={YashiHeart} height='50' width='50' style={{ transform:'rotate(89deg)'}}/>
  </NavbarContainer>
);

export default Navbar;