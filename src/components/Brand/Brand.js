import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
      <svg xmlns="http://www.w3.org/2000/svg"
     width="2.31111in" height="0.833333in"
     viewBox="0 0 208 75">
  <path id="Imported Path"
        fill="black" stroke="black" stroke-width="1"
        d="M 36.45,73.80
           C 36.45,73.80 25.74,73.80 25.74,73.80
             25.74,73.80 0.00,6.48 0.00,6.48
             0.00,6.48 9.31,2.89 9.31,2.89
             9.31,2.89 31.35,63.43 31.35,63.43
             31.35,63.43 53.48,3.19 53.48,3.19
             53.48,3.19 62.09,6.48 62.09,6.48
             62.09,6.48 36.45,73.80 36.45,73.80 Z
           M 169.44,69.51
           C 169.44,69.51 169.44,73.80 169.44,73.80
             169.44,73.80 161.03,73.80 161.03,73.80
             161.03,73.80 161.03,0.00 161.03,0.00
             161.03,0.00 170.05,0.00 170.05,0.00
             170.05,0.00 170.05,27.33 170.05,27.33
             171.38,25.80 173.33,24.32 175.90,22.89
             177.50,22.01 179.26,21.39 181.13,21.07
             182.36,20.86 183.64,20.74 184.95,20.74
             184.99,20.74 185.03,20.74 185.07,20.74
             189.07,20.74 192.83,21.79 196.33,23.89
             199.22,25.63 201.68,28.01 203.52,30.83
             203.98,31.51 204.40,32.22 204.80,32.95
             206.93,36.91 208.00,41.72 208.00,47.37
             208.00,47.42 208.00,47.48 208.00,47.53
             208.00,49.83 207.77,52.07 207.32,54.24
             207.01,55.76 206.56,57.23 206.00,58.64
             205.18,60.77 204.11,62.78 202.84,64.63
             202.17,65.59 201.43,66.51 200.64,67.37
             198.87,69.31 196.81,70.97 194.51,72.27
             194.05,72.53 193.58,72.78 193.09,73.00
             190.84,74.10 188.35,74.78 185.71,74.96
             185.31,74.99 184.89,75.00 184.47,75.00
             184.47,75.00 184.47,75.00 184.47,75.00
             181.46,75.00 178.64,74.45 176.00,73.35
             174.86,72.89 173.76,72.35 172.70,71.76
             171.48,71.06 170.39,70.31 169.44,69.51 Z
           M 108.76,51.56
           C 108.76,51.56 72.30,51.56 72.30,51.56
             72.50,53.30 72.89,54.97 73.44,56.57
             74.33,59.11 75.66,61.23 77.41,62.93
             80.22,65.66 83.92,67.02 88.53,67.02
             91.53,67.02 94.24,66.70 96.64,66.07
             99.04,65.44 101.35,64.63 103.55,63.63
             103.55,63.63 105.65,71.31 105.65,71.31
             104.27,71.93 102.83,72.47 101.35,72.93
             100.15,73.32 98.88,73.66 97.59,73.95
             95.95,74.34 94.23,74.61 92.47,74.77
             90.88,74.92 89.23,75.00 87.56,75.00
             87.52,75.00 87.47,75.00 87.43,75.00
             87.34,75.00 87.25,75.00 87.16,75.00
             84.57,75.00 82.06,74.65 79.67,74.00
             75.76,72.94 72.30,70.77 69.65,67.87
             67.23,65.19 65.42,61.95 64.44,58.38
             63.54,55.26 63.09,51.76 63.09,47.87
             63.09,47.81 63.09,47.75 63.09,47.68
             63.09,45.07 63.38,42.52 63.92,40.07
             64.39,37.93 65.11,35.89 66.04,33.96
             67.28,31.31 69.00,28.92 71.07,26.90
             72.06,25.93 73.15,25.06 74.30,24.28
             77.28,22.31 80.79,21.07 84.57,20.82
             85.23,20.77 85.91,20.74 86.59,20.74
             86.60,20.74 86.61,20.74 86.63,20.74
             91.63,20.74 95.79,21.82 99.09,23.99
             102.40,26.15 104.88,29.06 106.55,32.71
             107.93,35.73 108.77,39.05 108.98,42.54
             109.03,43.26 109.06,44.00 109.06,44.75
             109.06,44.76 109.06,44.77 109.06,44.78
             109.06,44.81 109.06,44.84 109.06,44.87
             109.06,47.09 108.96,49.29 108.77,51.46
             108.77,51.46 108.76,51.56 108.76,51.56 Z
           M 130.09,73.80
           C 130.09,73.80 121.07,73.80 121.07,73.80
             121.07,73.80 121.07,21.94 121.07,21.94
             121.07,21.94 129.79,21.94 129.79,21.94
             129.79,21.94 129.79,33.21 129.79,33.21
             130.66,31.02 131.82,28.97 133.29,27.08
             134.76,25.18 136.60,23.65 138.80,22.49
             140.23,21.74 141.81,21.22 143.47,20.97
             144.43,20.82 145.42,20.74 146.44,20.74
             146.46,20.74 146.49,20.74 146.51,20.74
             147.51,20.74 148.51,20.79 149.52,20.89
             149.87,20.93 150.22,20.97 150.57,21.02
             150.91,21.08 151.22,21.14 151.50,21.21
             151.68,21.24 151.85,21.29 152.02,21.34
             152.02,21.34 149.32,30.62 149.32,30.62
             148.64,30.34 147.92,30.13 147.18,30.01
             146.44,29.88 145.65,29.82 144.81,29.82
             142.38,29.83 140.11,30.50 138.17,31.66
             138.03,31.74 137.89,31.82 137.75,31.91
             135.53,33.30 133.70,35.44 132.27,38.34
             131.07,40.78 130.37,43.73 130.16,47.20
             130.11,47.96 130.09,48.74 130.09,49.53
             130.09,49.54 130.09,49.56 130.09,49.57
             130.09,49.57 130.09,73.80 130.09,73.80 Z
           M 170.05,35.31
           C 170.05,35.31 170.05,63.03 170.05,63.03
             171.16,63.89 172.37,64.63 173.67,65.21
             174.24,65.47 174.83,65.71 175.44,65.92
             177.36,66.60 179.45,66.99 181.62,67.02
             181.76,67.02 181.90,67.02 182.04,67.02
             182.05,67.02 182.06,67.02 182.06,67.02
             185.33,67.02 188.22,66.22 190.73,64.63
             193.23,63.03 195.20,60.77 196.63,57.84
             198.07,54.92 198.79,51.53 198.79,47.67
             198.79,43.68 198.07,40.26 196.63,37.40
             195.20,34.54 193.30,32.35 190.93,30.82
             188.56,29.29 185.93,28.52 183.06,28.52
             183.02,28.52 182.98,28.52 182.93,28.52
             180.99,28.52 179.13,28.90 177.43,29.58
             176.69,29.88 175.98,30.25 175.30,30.67
             173.00,32.10 171.25,33.64 170.05,35.31 Z
           M 72.20,44.28
           C 72.20,44.28 100.75,44.28 100.75,44.28
             100.75,44.23 100.75,44.17 100.75,44.12
             100.75,42.61 100.61,41.14 100.35,39.71
             100.01,37.99 99.48,36.46 98.74,35.11
             98.25,34.20 97.64,33.37 96.94,32.61
             95.13,30.68 92.71,29.32 89.98,28.85
             88.88,28.63 87.72,28.52 86.54,28.52
             86.50,28.52 86.46,28.52 86.42,28.52
             86.37,28.52 86.32,28.52 86.27,28.52
             84.52,28.52 82.84,28.85 81.30,29.45
             79.58,30.15 78.05,31.22 76.81,32.56
             74.27,35.26 72.74,39.16 72.20,44.28 Z" />
</svg>
    </div>
  );
};

export default Brand;
