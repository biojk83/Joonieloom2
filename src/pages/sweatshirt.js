import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const SweatshirtPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.jpg'}
          title={`Sweatshirt \n Embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Gildan Sweatshirt'} src={'/Sweatshirt1.png'}></img>
          <img alt={'Original Favorite Sweatshirt'} src={'/Sweatshirt2.png'}></img>
      
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              We offer two types of pullover sweatshirts:
              </p>
              <ol>
                <li>Gildan Sweatshirt 50% Cotton / 50% Polyester</li>
                <li>Original Favorite Sweatshirt 100% Cotton</li>
                
              </ol>
              <img alt={'founder'} src={'/sweatshirtModel.jpg'}></img>
            </div>
            <h3>Custom Sweatshirt Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Both sweatshirt options are fleece lined and perfect for fall and winter. We offer a 50/50 blend cotton/polyester blend option as well as a more luxurious 100% supima cotton. 
Both options are easy to layer and mix and match with other apparel options! Both styles come in a variety of colors so your team can have their perfect match. 
Please reach out to our team today to discuss pricing and personalization options.
              </p>
             
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.jpg'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default SweatshirtPage;
