import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Shipping Policy</h3>
        <p>
        Thank you for visiting and shopping at My Website (change this). Following are the terms and
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
        Shipping rates & delivery estimates
Shipping charges for your order will be calculated and displayed at checkout.
Shipment method Estimated delivery time Shipment cost
FedEx Standard 3-5 business days Free
FedEx Two Days 2 business days $12.95
FedEx Overnight * 1-2 business days $19.95
* Overnight delivery is only available for orders with delivery addresses within the continental United
States.
Delivery delays can occasionally occur.
Update this section based on carriers you support.
Shipment to P.O. boxes or APO/FPO addresses
JoonieLoom ships to addresses within the U.S., U.S. Territories, and APO/FPO/DPO
addresses.
Update this section if you do not ship to P.O. boxes or APO/FPO addresses.
Shipment confirmation & Order tracking
You will receive a Shipment Confirmation email once your order has shipped containing your
tracking number. The tracking number will be active within 24 hours.
Customs, Duties and Taxes
JoonieLoom is not responsible for any customs and taxes applied to your order. All
fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
Damages
JoonieLoom is not liable for any products damaged or lost during shipping. If you
received your order damaged, please contact the shipment carrier to file a claim.
Please save all packaging materials and damaged goods before filing a claim.
International Shipping Policy
We currently do not ship outside the U.S.
Update this section if ship to countries outside your home country.

        </p>
      </div>

      <div className={styles.section}>
        <h3>2. Lorem Ipsum</h3>
        <p>
          Our Services, including but not limited to the registration of an
          account with us or placing of an order, is not intended to be used by
          children under the age of 13. When a visitor indicates an age under
          13, the registration process for The Upside website cannot be
          completed, and no personally identifying information is collected in
          conjunction with that attempted submission except that we retain
          e-mail addresses of such persons (and record of access attempts) for
          purposes of denying registration. Otherwise, we do not knowingly
          collect personally identifiable information from visitors under the
          age of 13.
        </p>
        <p>
          If you are under 18, any use of our Services must be with the
          involvement of a parent or guardian. By accessing or using our
          Website, you warrant and represent to us that you are over the age of
          18 years and you have the right, authority and legal capacity to enter
          into a legally binding agreement and to abide by this Privacy Policy.{' '}
        </p>
        <p>
          The Upside collects, uses and discloses information regarding users
          aged 13-18 in the same manner as it does for adults.{' '}
        </p>
      </div>

      <div className={styles.section}>
        <h3>3. Lorem Ipsum</h3>
        <p>
          You must only use our Services in accordance with this Privacy Policy
          and any applicable law or regulations. You agree to refrain from
          undertaking any prohibited acts as set out in this Clause 3. You must
          not (or attempt to):{' '}
        </p>
        <p>
          (a) interfere with or disrupt the use of Services or the website, in
          any manner including but not limited to the servicers or networks that
          host the website;{' '}
        </p>
        <p>(b) stalk, harass, threaten, intimidate or harm another; </p>
        <p>
          (c) pretend to be anyone, or any entity, you are not, you will not
          impersonate or misrepresent yourself as another person (including
          celebrities), entity, a The Upside employee, or a civic or government
          leader, or otherwise misrepresent your affiliation with a person or
          entity. The Upside reserves the right to reject or block any user
          which could be deemed to be an impersonation or misrepresentation of
          your identity, or a misappropriation of another person's name or
          identity;{' '}
        </p>
        <p>
          (d) engage in any copyright infringement or other intellectual
          property infringement, or disclose any trade secret or confidential
          information in violation of a confidentiality, employment, or
          non-disclosure agreement or otherwise;{' '}
        </p>
        <p>
          (e) use, distribute, reproduce or commercialize any content from the
          Website or The Upside service except as permitted by this Policy, by
          law, and with prior written agreement from The Upside;{' '}
        </p>
        <p>
          (f) transmit any unsolicited advertising, promotional material or
          other forms of solicitation in connection with your use of the Service
          without the prior written agreement of The Upside;{' '}
        </p>
        <p>
          (g) forge any TCP-IP packet header or any part of the header
          information or otherwise putting Information in a header designed to
          mislead recipients as to the origin of any content transmitted through
          the Website ("spoofing";);
        </p>
      </div>
    </div>
  );
};

export default Policy;
