import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const TshirtPage = (props) => {
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
          title={`T-Shirt \n Custom T-Shirt Embroidery with your Logo or Design`} 
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Hanes'} src={'/tshirt1.png'}></img>
          <img alt={'Original Favorite'} src={'/tshirt2.png'}></img>
          <img alt={'Sport-Tek'} src={'/tshirt3.png'}></img>
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              We offer a variety of styles and materials for our t-shirt options:
              </p>
              <ol>
                <li>T-Shirt 100% Cotton</li>
                <li>T-Shirt 100% Cotton</li>
                <li>T-Shirt 100% Polyester</li>
              </ol>
              <img alt={'founder'} src={'/tshirtModel.jpg'}></img>
            </div>
            <h3>Custom T-Shirt Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              When looking for custom t-shirts for your team, it’s important to determine the style and material. In order to meet your specific needs, Joonie Loom offers several styles and materials for t-shirts, including premium, luxury cotton and athletic, activewear. 
Each style comes in a variety of colors so your team can express their individual identities or rep your brand-specific colors. We can customize orders to work with a several colors as well as help personalize your design color to really pop when stitched on the apparel. 
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

export default TshirtPage;
