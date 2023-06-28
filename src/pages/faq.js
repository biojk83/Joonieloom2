import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>FAQ</span>
            <div className={styles.subSection}>
              <h3>I want my logo or custom design on apparel, but where do I start?</h3>
              <p>
              That's great you're taking the first step to creating custom apparel for you and your team! Joonie Loom is here to help. First, let's start by chatting. Connect with us at info.joonieloom@gmail.com and we will discuss your specific needs and tailor a project plan just for you!
              </p>
              <p>
              You don't need to have all your specific needs right away - we can discuss together and come up with the best solution for you, but if you are able to come to the conversation with some basic needs (logo or design, sizing guidelines, apparel choice), that will jumpstart our way to a great collaboration! 
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Do I need to have my logo or design already in an embroidery format?</h3>
              <p>
              Nope! If you don't have your design already digitized for embroidery purposes, Joonie Loom can create it for you. 
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>I want team shirts or other apparel options but I have my own items. Can you work with apparel I provide? </h3>
              <p>
              Yes! If you do not need or want us to source the apparel inventory, we can work with items you provide. We only ask you are able to provide a few extra in case of any mishaps during the production phase. If everything goes smoothly (which we work hard to ensure it does!), we will return the extra sets to you. 
              </p>
              <p>
              For projects like this, our pricing is on a project-by-project basis depending on your specific needs. We can discuss this via email (info.joonieloom@gmail.com), or by scheduling a phone call or in-person meeting. 
              </p>
         
            </div>
            <div className={styles.subSection}>
              <h3>What if I have an idea but I don't see something similar on your website? </h3>
              <p>
              Great question. We can customize and personalize our offerings so if you have an idea for a garment or product type you don't see listed, we would be happy to discuss it with you. 
              </p>
        
            </div>
            <div className={styles.subSection}>
              <h3>Do you embroider designs of popular characters? </h3>
              <p>
              Unfortunately we are unable to embroider designs that are not the intellectual property of the person requesting the work. 
              </p>
            </div>

            <div className={styles.subSection}>
              <h3>How will I receive my items when they are done?  </h3>
              <p>
              Joonie Loom is located in Horsham, PA and will gladly deliver our products directly to you if you are located in the Bucks, Montgomery, Philadelphia, or surrounding counties. If you are outside our delivery zone, we can ship you the products securely, but the cost will be reflected in the final statement of work. 
              </p>
            </div>

            <div className={styles.subSection}>
              <h3>How small or big of orders can you take on?  </h3>
              <p>
              To an extent, we can work with as big or as little of an order as you need. We are a small team, and larger orders will have increased timelines due to bandwidth. 

              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
