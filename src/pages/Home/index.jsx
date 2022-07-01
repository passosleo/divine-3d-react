import React from 'react'
import {Divider, Image, Email,InputEmail} from './styles.js'
import banner from '../../assets/images/banner/banner.png'
import { FaEnvelope } from "react-icons/fa";
import {FooterComponent} from '../../components/Footer/'

const Home = () => {
  return (
    <div>
      {/* <Image src={banner} alt="" /> */}
      <Divider><div>Destaque</div></Divider>
      <Divider><div>Lançamentos</div></Divider>
      <Email>
        <FaEnvelope  color="#F5F5F5" size="5em"/>
        <p>Receba nossas ofertas e lançamentos</p>
        <InputEmail placeholder="e-mail"/>
      </Email>
      <Divider><div>Categorias</div></Divider>
      <FooterComponent></FooterComponent>
    </div>
   
  );
};

export default Home;