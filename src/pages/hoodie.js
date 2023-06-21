import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const HoodiePage = (props) => {
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
          title={`Hoodie \n Custom embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Gildan Hoodie'} src={'/Hoodie1.png'}></img>
          <img alt={'Original Favorite Hoodie'} src={'/Hoodie2.png'}></img>
      
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              Joonie Loom offers two hoodie options:
              </p>
              <ol>
                <li>Gildan Hoodie 50% Cotton / 50% Polyester</li>
                <li>Original Favorite Hoodie 100% Cotton</li>
             
              </ol>
              <img alt={'founder'} src={'/hoodieModel.jpg'}></img>
            </div>
            <h3>Custom Hoodie Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Custom hoodies are a great outerwear option for team outings or casual office days. Joonie Loom offers two styles of hoodies, both of which are fleece-lined and great for fall and winter. 
              </p>
              <p>
              The 50/50 cotton/poly blend is a soft, every day option and comes in a variety of options. For a more luxurious feel, the Original Favorites hoodie is 100% supima cotton, one of the finest cotton options for apparel. {' '}
              </p>
              <p>
              Customized hoodies are a great addition to your corporate apparel and can be personalized with design placement and styles. Please reach out to our team today to discuss pricing and personalization options.
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

export default HoodiePage;
