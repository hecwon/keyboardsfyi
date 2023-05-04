'use client'

import styled from "styled-components";
import React, {useRef} from "react";
import Layout from '../../../components/global/layout.jsx';
import MainPageCard from "../../../components/mainPageCard.jsx";

const Main = () => {
  const Case = useRef<HTMLInputElement | null>(null);
  const Switch = useRef<HTMLInputElement | null>(null);
  const Stab = useRef<HTMLInputElement | null>(null);
  const Keycap = useRef<HTMLInputElement | null>(null);

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
      <MainPageCard part="case" inputRef={Case}/>
      <MainPageCard part="switch" inputRef={Switch}/>
      <MainPageCard part="stab" inputRef={Stab}/>
      <MainPageCard part="keycap" inputRef={Keycap}/>
      <button onClick={() => {handleSearch()}}>SEARCH</button>
    </Layout>
  )
}

const Header = styled.div`
  text-align: center;
  font-size: 4em;
  padding-top: 7vh;
  `

const Background = styled.div`
  height: 100vh;
  `

const Form = styled.form`
  background: white;
  position: absolute;
  top: 50%;
  left: 25%;
  `
export default Main;

