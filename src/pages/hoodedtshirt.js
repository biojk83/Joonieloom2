import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const HoodedtshirtPage = (props) => {
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
          title={`Hooded T-Shirt \n Embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Sport-Tek Hooded T-Shirt Men'} src={'/hoodedtshirt1.png'}></img>
          <img alt={'Sport-Tek Hooded T-Shirt Women'} src={'/hoodedtshirt2.png'}></img>
          
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
                Joonie Loom offers two lightweight hooded, performance hoodies for both men and women:
              </p>
              <ol>
                <li>Sport-Tek Hooded T-Shirt Men - 100% Polyester</li>
                <li>Sport-Tek Hooded T-Shirt Women - 100% Polyester</li>
                
              </ol>
              <img alt={'founder'} src={'/hoodedtshirtModel.jpg'}></img>
            </div>
            <h3>Custom Hooded T-Shirt Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              The hooded t-shirt is a great option for a more athletic, lightweight option. Both styles come in a performance polyester material and in a variety of colors. 
If your team is interested in an outdoor activity or sporting event, this option would be the best for days you need a little extra weather protection! 
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

export default HoodedtshirtPage;
