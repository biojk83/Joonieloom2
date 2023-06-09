import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';
import {ProductBrowser} from '@ecwid/gatsby-plugin-ecwid';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const data = generateMockProductData(6, 'woman');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
      
        <Banner
          maxWidth={'650px'}
          name={`Embroidered Clothings`}
          subtitle={
            'Look to our embroidered clothings More designs to come every week.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          {/* ecwid */}
          <div className={styles.messageContainer}>
            <ProductBrowser
              storeId="86415007"
            />
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
