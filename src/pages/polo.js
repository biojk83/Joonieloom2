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
          title={`Polo \n Custom Embroidery for your logo`}
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
              <img alt={'founder'} src={'/hatModel.jpg'}></img>
            </div>
            <h3>Detail about ...</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our founder, Thomas Hill, had both an eye for quality and a
                desire to innovate. As well as using the finest fibres such as
                Sea Island cotton, cashmere and silk, he invented his own
                fabrics. Sunspel continues this commitment to innovation today
                and our unique fabrics include: Q100 Sea Island cotton, Q82
                Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit
                cellular cotton. The technology behind these fabrics remains
                unchanged today and all Sunspel products use the finest cottons,
                wools and fibres.
              </p>
              <p>
                Made in Long Eaton, England and crafted from our luxurious long
                staple Supima cotton for unparalleled softness, comfort and
                durability, the Sunspel T-shirt has a classic fit and only the
                most essential details.{' '}
              </p>
              <p>
                With over 100 years spent perfecting fabric, fit and style, the
                Sunspel Classic T-shirt is recognised as the finest in the
                world.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default PoloPage;