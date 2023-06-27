import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Shipping Policy</h3>
        <p>
        Thank you for visiting and shopping at Joonie Loom. Following are the terms and
conditions that constitute our Shipping Policy.
        </p>
        <p>
        Domestic Shipping Policy
Shipment processing time
All orders are processed within 2-3 business days. Orders are not shipped or delivered on
weekends or holidays.
If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please
allow additional days in transit for delivery. If there will be a significant delay in shipment of your
order, we will contact you via email or telephone.
Update this section if your processing time exceeds 2-3 business days
        </p>
        <p>
Delivery delays can occasionally occur.
         </p>
         <p>
International Shipping Policy
We currently do not ship outside the U.S.
Update this section if ship to countries outside your home country.
        </p>
      </div>

    </div>
  );
};

export default Policy;
