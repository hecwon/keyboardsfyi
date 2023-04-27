'use client'

import styled from "styled-components";
import React, {useRef} from "react";
import Layout from '../../../components/layout.jsx';
import MainPageCard from "../../../components/mainPageCard.jsx";

const Main = () => {
  const Case = useRef(null);
  const Switch = useRef(null);
  const Stab = useRef(null);
  const Keycap = useRef(null);

  const handleChange = (value: string, input: string) => {

  }

  const handleSearch = (): void => {
    // e.preventDefault();
    let payload : {} = {
      "case": Case.current,
      "switch": Switch.current,
      "stab": Stab.current,
      "keycap": Keycap.current,
    }
    console.log(payload);
    // axios.get(payload)
  }

  return (
    <Layout>
      <Background>
        <MainPageCard part="CASE"/>
        <MainPageCard part="SWITCH"/>
        <MainPageCard part="STAB"/>
        <MainPageCard part="KEYCAP"/>
        <button onClick={() => {handleSearch()}}>SEARCH</button>
      </Background>
    </Layout>
  )
}

const Header = styled.div`
  text-align: center;
  color: palevioletred;
  font-size: 4em;
  padding-top: 7vh;
  `

const Background = styled.div`
  background: papayawhip;
  height: 100vh;
  `

const Form = styled.form`
  background: white;
  position: absolute;
  top: 50%;
  left: 25%;
  `
export default Main;

