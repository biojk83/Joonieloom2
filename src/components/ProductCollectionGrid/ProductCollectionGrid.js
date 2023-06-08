import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.jpg'}
        title={'Hat'}
        text={'Check Items'}
        link={'/hat'}
      />
      <ProductCollection
        image={'/collections/collection2.jpg'}
        title={'T-Shirt'}
        text={'Check Items'}
        link={'/tshirt'}
      />
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={'Polo'}
        text={'Check Items'}
        link={'/polo'}
      />
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={'Hoodie'}
        text={'Check Items'}
        link={'/hoodie'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Zip-up Hoodie'}
        text={'Check Items'}
        link={'/zipuphoodie'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Hooded T-Shirt'}
        text={'Check Items'}
        link={'/hoodedtshirt'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Sweatshirt'}
        text={'Check Items'}
        link={'/sweatshirt'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'1/4 zip Sweatshirt'}
        text={'Check Items'}
        link={'/quarterzipsweatshirt'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Racerback Tank'}
        text={'Check Items'}
        link={'/racerbacktank'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Tank'}
        text={'Check Items'}
        link={'/tank'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
