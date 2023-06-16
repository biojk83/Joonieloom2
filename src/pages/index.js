import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';
import {ProductBrowser} from '@ecwid/gatsby-plugin-ecwid';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/hoodie');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.jpg'}
        title={'Custom Embroidered Clothing'}
        subtitle={'Quality Apparel from Joonie Loom'}
        ctaText={'Hoodie'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
        Embroidery is the craft of decorating fabric or other materials using a needle to{' '}
          <span className={styles.gold}>apply thread.</span>
        </p>
        <p>
          Joonie Loom <span className={styles.gold}>offers contemporary, modern embroidery patterns </span> and{' '}
          <span className={styles.gold}>personalized, custom designs for you and your brand  </span>
        </p>
      </div>

      {/* ecwid */}
      <div className={styles.messageContainer}>
        <ProductBrowser
          storeId="86415007"
        />
      </div>

      

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Hooded Sweatshirt'}
            description={`The finest luxury hoodie. certified organic, ultra-soft cotton fleece has a cozy brushed interior and is a standard unisex fit. `}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

 

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about US'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Customer'} subtitle={'Our Customers with their logo'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

     

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @joonieloom to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};


export default IndexPage;

