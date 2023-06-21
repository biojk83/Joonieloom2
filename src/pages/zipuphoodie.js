import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const ZipuphoodiePage = (props) => {
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
          title={`Zip-Up Hoodie \n Custom embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Delta Zip-up Hoodie'} src={'/zipup1.png'}></img>
          <img alt={'Original Favorite Zip-up Hoodie'} src={'/zipup2.png'}></img>
      
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              Joonie Loom offers several zip-up Hoodie styles:
              </p>
              <ol>
                <li>Zip-up Hoodie 80% Cotton / 20% Polyester</li>
                <li>Zip-up Hoodie 100% Cotton</li>
              
              </ol>
              <img alt={'founder'} src={'/zipupModel.jpg'}></img>
            </div>
            <h3>Custom Zip-Up Hoodie Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Zip-up hoodies are yet another great outerwear option for your team. They are a little more versatile than standard pull-over options, but still a great way to represent your brand and bring your team together. 
              </p>
              <p>
              All of the zip-up options are fleece lined, but are more lightweight than the standard pull-over options. Each style comes in a variety of colors and materials. We even offer a luxurious 100% organic cotton and dye-fee option for teams that want a more elevated option.{' '}
              </p>
              <p>
              Customized zip-up hoodies are a great addition to your corporate apparel and can be personalized with design placement and styles. Please reach out to our team today to discuss pricing and personalization options.
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

export default ZipuphoodiePage;
