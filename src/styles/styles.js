import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
export const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  algin-items: center;
  svg {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled(motion.div)`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #ffffff;
    width: 100%;
    text-algin: center;
    font-weight: 600;
    font-size: 1rem;
    height: 20%;
    display: flex;
    justify-content: center;
    algin-items: center;
  }
`;
export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 2rem;
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

export const CardCuisine = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  h4 {
    color: #fff;
    font-size: 1rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }
  &:hover,
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
    cursor: pointer;
  }
`;

export const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-hight: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;
export const Info = styled.div`
  margin-left: 10rem;
`;
export const ParagraphSummary = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #313131;
`;
