import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const TankPage = (props) => {
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
          title={`Tank \n Custom Embroidery for your logo`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Sport-Tek Tank'} src={'/Tank1.png'}></img>
    
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              The tank is in an athletic cut and material:
              </p>
              <ol>
                <li>Tank 100% Polyester</li>
                
              </ol>
              <img alt={'founder'} src={'/tankModel.jpg'}></img>
            </div>
            <h3>Custom Tank Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Joonie Loom’s tank option is another great option for teams who are looking or more athletic wear or sports team who want to add a cohesive apparel option to their roster. 
The tank is a performance material and great for high energy events and activities! 
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

export default TankPage;
