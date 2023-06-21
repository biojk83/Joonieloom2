import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './hat.module.css';
const HatPage = (props) => {
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
          title={`Custom \n Hat Embroidery with your Logo or Design`}
        />

     

        <div className={styles.imageContainer}>
          <img alt={'Baseball Cap'} src={'/hat1.png'}></img>
          <img alt={'Baseball Cap_2'} src={'/hat2.png'}></img>
          <img alt={'Baseball Cap 5 panel'} src={'/hat3.png'}></img>
          <img alt={'Baseball Cap Flat hip hop'} src={'/hat4.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Custom Detail</h3>
            <div ref={valuesRef}>
              <p>
              We offer three hat styles in a variety of colors to meet your needs:
              </p>
              <ol>
                <li>Baseball 6 lines structured</li>
                <li>Baseball 5 lines structured</li>
                <li>No lines unstructured</li>
              </ol>
              <img alt={'founder'} src={'/hatModel.jpg'}></img>
            </div>
            <h3>Custom Hat Details</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              Your brand identity is important, and replicating that on apparel is a great way to connect your team. Joonie Loom is passionate about ensuring highest quality items that represent your brand. 
Our baseball caps are a great addition to your corporate apparel for all types of occasions. We offer several styles and colors in order to best meet your needs and create a piece of apparel your teams can wear proudly. 

              </p>
              <p>
                
Each style option is 100% cotton twill which is a comfortable fabric choice. We offer structured and unstructured hats, as well as 5- and 6-panel styles.
Please reach out to our team today to discuss pricing and personalization options.{' '}
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

export default HatPage;
