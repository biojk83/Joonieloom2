import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const QuarterzipsweatshirtPage = (props) => {
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
          title={`1/4 zip Sweatshirt \n Embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Platinum Pullover'} src={'/Quarterzipsweatshirt1.png'}></img>
         
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              The 1/4 pullover zip sweatshirt comes in a variety of colors
              </p>
              <ol>
                <li>Platinum 1/4 Zip Pullover - 55% Cotton / 45% Polyester</li>
              
              </ol>
              <img alt={'founder'} src={'/quarterzipModel.jpg'}></img>
            </div>
            <h3>Custom ¼ Zip Sweatshirt Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              The ¼ zip sweatshirt is a little more formal feeling than the pure pullover option, but still comes in a variety of colors to make sure your team is representing your brand. 
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

export default QuarterzipsweatshirtPage;
