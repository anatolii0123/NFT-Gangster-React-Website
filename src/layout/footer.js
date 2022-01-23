import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { FooterStyle } from './style';
import Banner2 from '../assets/images/banner2.png'
import LogoImage from '../assets/images/logo-white.png';

const Footer = () => {
  return (
    <FooterStyle>
      <footer style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 42, 42, 0.79), rgba(255, 42, 42, 0.79)), url(${Banner2})` }}> 
        <Container>
          <Row>
            <Col md={3} className="text-center">
              <img src={LogoImage} />
            </Col>
            <Col md={3} className="text-white">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a href="https://discord.com/invite/kryptogangsters" target="_blink">Discord</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kryptogangsters/" target="_blink">Instagram</a>
                </li>
                <li>
                  <a href="https://t.me/KryptoGangsters" target="_blink">telegram</a>
                </li>
                <li>
                  <a href="https://twitter.com/kryptogangsters" target="_blink">Twitter</a>
                </li>
                <li>
                  <a href="https://opensea.io/collection/krypto-gangsters" target="_blink">Opensea</a>
                </li>
                <li>
                  <a href="https://www.assuredefi.io/projects/kryptogangsters" target="_blink">AssureDefi</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="text-white">
              <h4>Jump to</h4>
              <ul>
                <li>
                  <a href="#nft">NFT</a>
                </li>
                <li>
                  <a href="#kilocoin">Kilo Coin</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="text-white">
              <h4>Kilo Coin</h4>
              <ul>
                <li>
                  <a href="https://discord.com/invite/kryptogangsters" target="_blink">Discord</a>
                </li>
                <li>
                  <a href="https://www.kryptogangsters.io" target="_blink">Website</a>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-center text-white">Copyright © 2021 Krypto Gangsters. All rights reserved.</p>
        </Container>
      </footer>
    </FooterStyle>
  );
}

export default Footer;