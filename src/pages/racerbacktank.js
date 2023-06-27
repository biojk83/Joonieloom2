import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const RacerbacktankPage = (props) => {
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
          title={`Racerback Tank \n Custom Embroidery for your logo`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Sport-Tek Racerback Tank'} src={'/Racerbacktank1.png'}></img>
         
 
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              The racerback tank is a performance fabric perfect for athletic wear:
              </p>
              <ol>
                <li>Sport-Tek Racerback Tank - 100% Polyester</li>
    
              </ol>
              <img alt={'founder'} src={'/racerbackModel.jpg'}></img>
            </div>
            <h3>Custom Racerback Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              The racerback option is a perfect fit for athletic teams or outdoor activities where a cohesive look would create a stronger team bond. The racerback is a performance fabric and great for high energy activities!
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

export default RacerbacktankPage;
