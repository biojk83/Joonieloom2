import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
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
          title={`Create embroidered apparel for special events`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
         
       
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
            We are a small, local business but with a big passion for creating professional embroidered apparel for you and your teams. 
            </p>
            <br />
            <br />
            <p>
            Youngwok Kim and his wife, Lydia, launched Joonie Loom as an expression of their creativity. Joonie Loom, in part, was inspired by their son, Joon, and the pair work closely together to ensure the highest quality designs and outcomes. 
            </p>
            <br />
            <br />
            <p>
            Located in Horsham, PA, Joonie Loom focuses on partnering with local brands to help build their corporate identity through branded merchandise. They also create and launch their own unique designs to reach a broader audience in hopes they connect with the world around them. 
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.jpg'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
              Joonie Loom is passionate about partnering with you to ensure your brand identity is captured and replicated on top-quality apparel and merchandise. Our values are rooted in our work ethic and dream of building a business our family and friends can be proud of. 
              </p>
              <ol>
                <li>In-house, personal collaboration</li>
                <li>Timely and handmade </li>
                <li>Flexible agility to meet your needs</li>
              </ol>
              <img alt={'founder'} src={'/about2.jpg'}></img>
            </div>
           
            
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/pennsylvania.jpg'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
