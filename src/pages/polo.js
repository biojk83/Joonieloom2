import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const PoloPage = (props) => {
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
          title={`Polo \n Embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'JerZees Polo'} src={'/Polo1.png'}></img>
          <img alt={'Sport-Tek Polo'} src={'/Polo2.png'}></img>
          <img alt={'Long Sleeve Polo'} src={'/Polo3.png'}></img>
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
                T-Shirt size has 3 different shapes and blah blah
              </p>
              <ol>
                <li>Polo 100% Cotton</li>
                <li>Polo 100% Polyester</li>
                <li>Polo Long Sleeve 60% Cotton / 40% Polyester</li>
              </ol>
              <img alt={'founder'} src={'/poloModel.jpg'}></img>
            </div>
            <h3>Custom Polo Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Polos are a great option for in-office wear for your team. Joonie Loom offers several styles and materials including short- and long-sleeve. All polo styles come in a variety of colors to best represent your brand. 

Matching shirts with your logo or custom design are a great way to build your corporate identity and create a community feel in any setting. 

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

export default PoloPage;
