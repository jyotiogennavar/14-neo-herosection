import React from "react";
import styled from "styled-components";

import HeroImg from "./hero-image.png";

const StarSvg = () => {
  return (
    <StarSVG
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 200 200"
      version="1.1"
      stroke="black"
      strokeWidth="8"
    >
      <path
        fill="rgba(247, 241, 158, 1)"
        d="M100 0c3.395 53.76 46.24 96.605 100 100-53.76 3.395-96.605 46.24-100 100-3.395-53.76-46.24-96.605-100-100C53.76 96.605 96.605 53.76 100 0Z"
      ></path>
    </StarSVG>
  );
};

const FlowerSvg = () => {
  return (
    <FlowerSVG
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 200 200"
      version="1.1"
      stroke="black"
      strokeWidth="8"
    >
      <path
        fill="rgba(177, 223, 186, 1)"
        d="M100.254 200c-3.154 0-5.82-2.284-6.584-5.344-2.435-9.753-7.096-20.125-13.983-31.114-8.16-13.195-19.791-25.434-34.895-36.719-13.137-9.929-26.274-16.7-39.41-20.312C2.27 105.656 0 102.897 0 99.671c0-3.164 2.183-5.892 5.225-6.76C18.105 89.234 30.512 83.263 42.448 75c13.715-9.549 25.173-21.007 34.375-34.375 8.14-11.909 13.728-23.686 16.763-35.333C94.382 2.241 97.068 0 100.221 0c3.188 0 5.893 2.29 6.669 5.383 1.752 6.982 4.49 14.129 8.214 21.44 4.688 9.028 10.677 17.708 17.969 26.042 7.465 8.16 15.799 15.538 25 22.135 12.024 8.523 24.247 14.511 36.671 17.964 3.048.847 5.256 3.56 5.256 6.723 0 3.211-2.275 5.947-5.371 6.796-7.875 2.159-15.981 5.641-24.316 10.444-10.07 5.903-19.445 12.934-28.126 21.094-8.68 7.986-15.798 16.406-21.354 25.26-6.9 11.012-11.566 21.464-13.996 31.358-.754 3.069-3.424 5.361-6.583 5.361Z"
      ></path>
    </FlowerSVG>
  );
};

const Index = () => {
  return (
    <Wrapper>
      <Navbar>
        <Logo>
          <span>Design.io</span>
        </Logo>

        <NavMenu>
          <NavItem>
            <span>Home</span>
          </NavItem>

          <NavItem>
            <span>About</span>
          </NavItem>

          <NavItem>
            <span>Services</span>
          </NavItem>

          <NavItem>
            <span>Contact</span>
          </NavItem>
        </NavMenu>
      </Navbar>

      <HeroWrapper>
        <HeroContent>
          <StarSvg />
          <FlowerSvg />
          <Subtext>500+ Designers have joined us </Subtext>
          <HeroTitle>Welcome to our community</HeroTitle>

          <HeroDesc>
            <span>
              Welcome to Design.io , we are building a new community for the
              designers, our main goal is to unify and diversify the community,
              we believe that everyone can learn from each other
            </span>
          </HeroDesc>

          <HeroBtns>
            <PrimaryBtn>Shop Now</PrimaryBtn>
            <SecondaryBtn>Learn More</SecondaryBtn>
          </HeroBtns>
        </HeroContent>

        <HeroImage>
          <img src={HeroImg} alt="Hero-section" />
        </HeroImage>
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Ubuntu", sans-serif;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  border-bottom: 2px solid black;

  @media (max-width: 786px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  margin-left: 2rem;
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (max-width: 786px) {
    margin-left: 0;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 40%;

  font-size: 1rem;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #a66eff;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  font-family: "Ubuntu", sans-serif;
  background: linear-gradient(220.55deg, #ffed46 0%, #ff7ec7 100%);

  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 42%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const Subtext = styled.span`
  background-color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: 500;

  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.7rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.6rem 3rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px black;

  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
   
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 0;
  }
`;

const PrimaryBtn = styled(Button)`
  background-color: #a66eff;
`;

const SecondaryBtn = styled(Button)`
  background-color: transparent;
`;

const HeroImage = styled.div`
  width: 30rem;

  @media (max-width: 768px) {
    width: 18rem;
  }
`;

const StarSVG = styled.svg`
  position: absolute;
  top: 4rem;
  right: 4rem;

  @media (max-width: 768px) {
    right: -1rem;
    top: 6rem;
}
  


`;

const FlowerSVG = styled.svg`
  position: absolute;
  left: -4rem;

  @media (max-width: 768px) {
    left: -2rem;
    top: 15rem;
  
  }
`;

export default Index;
// style={{position:'absolute',top:'4rem',right:'4rem'}}
