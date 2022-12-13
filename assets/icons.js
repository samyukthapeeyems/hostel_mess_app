import Svg, { Rect, Path, G, Defs, ClipPath, Circle } from 'react-native-svg';
import * as React from 'react';

const MenuIcon = () => (
  <Svg width={27} height={35} viewBox="0 0 27 35">
    <Path
      d="M23.16 10.44L22.18 14.62C21.34 18.23 19.68 19.69 16.56 19.39C16.06 19.35 15.52 19.26 14.94 19.12L13.26 18.72C9.09 17.73 7.8 15.67 8.78 11.49L9.76 7.30001C9.96 6.45001 10.2 5.71001 10.5 5.10001C11.67 2.68001 13.66 2.03001 17 2.82001L18.67 3.21001C22.86 4.19001 24.14 6.26001 23.16 10.44Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16.56 19.39C15.94 19.81 15.16 20.16 14.21 20.47L12.63 20.99C8.66001 22.27 6.57001 21.2 5.28001 17.23L4.00001 13.28C2.72001 9.31001 3.78001 7.21001 7.75001 5.93001L9.33001 5.41001C9.74001 5.28001 10.13 5.17001 10.5 5.10001C10.2 5.71001 9.96001 6.45001 9.76001 7.30001L8.78001 11.49C7.80001 15.67 9.09001 17.73 13.26 18.72L14.94 19.12C15.52 19.26 16.06 19.35 16.56 19.39Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M14.14 8.53L18.99 9.76"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.16 12.4L16.06 13.14"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M0.72 34V26.55H2.02L4.81 30.34H4.19L6.92 26.55H8.22V34H6.85V28.1L7.38 28.23L4.55 32H4.39L1.63 28.23L2.08 28.1V34H0.72ZM12.1158 34.12C11.5558 34.12 11.0658 33.9933 10.6458 33.74C10.2258 33.4867 9.89911 33.1433 9.66578 32.71C9.43245 32.2767 9.31578 31.7967 9.31578 31.27C9.31578 30.7233 9.43245 30.24 9.66578 29.82C9.90578 29.3933 10.2291 29.0567 10.6358 28.81C11.0491 28.5633 11.5091 28.44 12.0158 28.44C12.4424 28.44 12.8158 28.51 13.1358 28.65C13.4624 28.79 13.7391 28.9833 13.9658 29.23C14.1924 29.4767 14.3658 29.76 14.4858 30.08C14.6058 30.3933 14.6658 30.7333 14.6658 31.1C14.6658 31.1933 14.6591 31.29 14.6458 31.39C14.6391 31.49 14.6224 31.5767 14.5958 31.65H10.3958V30.65H13.8558L13.2358 31.12C13.2958 30.8133 13.2791 30.54 13.1858 30.3C13.0991 30.06 12.9524 29.87 12.7458 29.73C12.5458 29.59 12.3024 29.52 12.0158 29.52C11.7424 29.52 11.4991 29.59 11.2858 29.73C11.0724 29.8633 10.9091 30.0633 10.7958 30.33C10.6891 30.59 10.6491 30.9067 10.6758 31.28C10.6491 31.6133 10.6924 31.91 10.8058 32.17C10.9258 32.4233 11.0991 32.62 11.3258 32.76C11.5591 32.9 11.8258 32.97 12.1258 32.97C12.4258 32.97 12.6791 32.9067 12.8858 32.78C13.0991 32.6533 13.2658 32.4833 13.3858 32.27L14.4458 32.79C14.3391 33.05 14.1724 33.28 13.9458 33.48C13.7191 33.68 13.4491 33.8367 13.1358 33.95C12.8291 34.0633 12.4891 34.12 12.1158 34.12ZM15.6588 34V28.56H16.8888V29.63L16.7888 29.44C16.9155 29.1133 17.1222 28.8667 17.4088 28.7C17.7022 28.5267 18.0422 28.44 18.4288 28.44C18.8288 28.44 19.1822 28.5267 19.4888 28.7C19.8022 28.8733 20.0455 29.1167 20.2188 29.43C20.3922 29.7367 20.4788 30.0933 20.4788 30.5V34H19.1688V30.81C19.1688 30.57 19.1222 30.3633 19.0288 30.19C18.9355 30.0167 18.8055 29.8833 18.6388 29.79C18.4788 29.69 18.2888 29.64 18.0688 29.64C17.8555 29.64 17.6655 29.69 17.4988 29.79C17.3322 29.8833 17.2022 30.0167 17.1088 30.19C17.0155 30.3633 16.9688 30.57 16.9688 30.81V34H15.6588ZM23.5266 34.12C23.1066 34.12 22.7399 34.0267 22.4266 33.84C22.1199 33.6533 21.8832 33.3933 21.7166 33.06C21.5566 32.7267 21.4766 32.3367 21.4766 31.89V28.56H22.7866V31.78C22.7866 32.0067 22.8299 32.2067 22.9166 32.38C23.0099 32.5467 23.1399 32.68 23.3066 32.78C23.4799 32.8733 23.6732 32.92 23.8866 32.92C24.0999 32.92 24.2899 32.8733 24.4566 32.78C24.6232 32.68 24.7532 32.5433 24.8466 32.37C24.9399 32.1967 24.9866 31.99 24.9866 31.75V28.56H26.2966V34H25.0566V32.93L25.1666 33.12C25.0399 33.4533 24.8299 33.7033 24.5366 33.87C24.2499 34.0367 23.9132 34.12 23.5266 34.12Z"
      fill="#0C0F17"
    />
  </Svg>
);
const OrdersIcon = () => (
  <Svg width={35} height={35} viewBox="0 0 35 35">
    <Path
      d="M24.47 22H10.47C7.47 22 7.47 20.65 7.47 19V18C7.47 17.45 7.92 17 8.47 17H26.47C27.02 17 27.47 17.45 27.47 18V19C27.47 20.65 27.47 22 24.47 22Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M26.22 13V17H8.77V13C8.77 9.16 11.48 5.95 15.09 5.18C15.63 5.06 16.19 5 16.77 5H18.22C18.8 5 19.37 5.06 19.91 5.18C23.52 5.96 26.22 9.16 26.22 13Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20 4.5C20 4.74 19.97 4.96 19.91 5.18C19.37 5.06 18.8 5 18.22 5H16.77C16.19 5 15.63 5.06 15.09 5.18C15.03 4.96 15 4.74 15 4.5C15 3.12 16.12 2 17.5 2C18.88 2 20 3.12 20 4.5Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20.5 11H14.5"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.39 34.12C3.84333 34.12 3.33333 34.0233 2.86 33.83C2.38667 33.6367 1.97333 33.3667 1.62 33.02C1.26667 32.6733 0.99 32.2667 0.79 31.8C0.596667 31.3267 0.5 30.8167 0.5 30.27C0.5 29.7167 0.596667 29.2067 0.79 28.74C0.983333 28.2733 1.25667 27.8667 1.61 27.52C1.96333 27.1733 2.37667 26.9067 2.85 26.72C3.32333 26.5267 3.83667 26.43 4.39 26.43C4.94333 26.43 5.45667 26.5267 5.93 26.72C6.40333 26.9133 6.81667 27.1833 7.17 27.53C7.52333 27.87 7.79667 28.2733 7.99 28.74C8.19 29.2067 8.29 29.7167 8.29 30.27C8.29 30.8167 8.19 31.3267 7.99 31.8C7.79 32.2667 7.51333 32.6733 7.16 33.02C6.80667 33.3667 6.39333 33.6367 5.92 33.83C5.45333 34.0233 4.94333 34.12 4.39 34.12ZM4.39 32.88C4.75667 32.88 5.09333 32.8167 5.4 32.69C5.70667 32.5567 5.97333 32.3733 6.2 32.14C6.43333 31.9067 6.61 31.63 6.73 31.31C6.85667 30.99 6.92 30.6433 6.92 30.27C6.92 29.8967 6.85667 29.5533 6.73 29.24C6.61 28.92 6.43333 28.6433 6.2 28.41C5.97333 28.17 5.70667 27.9867 5.4 27.86C5.09333 27.7333 4.75667 27.67 4.39 27.67C4.03 27.67 3.69667 27.7333 3.39 27.86C3.08333 27.9867 2.81333 28.17 2.58 28.41C2.35333 28.6433 2.17667 28.92 2.05 29.24C1.92333 29.5533 1.86 29.8967 1.86 30.27C1.86 30.6433 1.92333 30.99 2.05 31.31C2.17667 31.63 2.35333 31.9067 2.58 32.14C2.81333 32.3733 3.08333 32.5567 3.39 32.69C3.69667 32.8167 4.03 32.88 4.39 32.88ZM9.3893 34V28.56H10.6193V29.77L10.5193 29.59C10.646 29.1833 10.8426 28.9 11.1093 28.74C11.3826 28.58 11.7093 28.5 12.0893 28.5H12.4093V29.66H11.9393C11.566 29.66 11.266 29.7767 11.0393 30.01C10.8126 30.2367 10.6993 30.5567 10.6993 30.97V34H9.3893ZM15.6595 34.12C15.1329 34.12 14.6629 33.9967 14.2495 33.75C13.8362 33.4967 13.5095 33.1533 13.2695 32.72C13.0295 32.2867 12.9095 31.8067 12.9095 31.28C12.9095 30.7467 13.0295 30.2667 13.2695 29.84C13.5095 29.4133 13.8362 29.0733 14.2495 28.82C14.6695 28.5667 15.1362 28.44 15.6495 28.44C16.0629 28.44 16.4295 28.5233 16.7495 28.69C17.0762 28.85 17.3329 29.0767 17.5195 29.37L17.3195 29.64V26.43H18.6295V34H17.3895V32.95L17.5295 33.21C17.3429 33.5033 17.0829 33.73 16.7495 33.89C16.4162 34.0433 16.0529 34.12 15.6595 34.12ZM15.7995 32.92C16.0995 32.92 16.3629 32.85 16.5895 32.71C16.8162 32.57 16.9929 32.3767 17.1195 32.13C17.2529 31.8833 17.3195 31.6 17.3195 31.28C17.3195 30.9667 17.2529 30.6867 17.1195 30.44C16.9929 30.1867 16.8162 29.99 16.5895 29.85C16.3629 29.71 16.0995 29.64 15.7995 29.64C15.5062 29.64 15.2429 29.7133 15.0095 29.86C14.7762 30 14.5929 30.1933 14.4595 30.44C14.3329 30.68 14.2695 30.96 14.2695 31.28C14.2695 31.6 14.3329 31.8833 14.4595 32.13C14.5929 32.3767 14.7762 32.57 15.0095 32.71C15.2429 32.85 15.5062 32.92 15.7995 32.92ZM22.4283 34.12C21.8683 34.12 21.3783 33.9933 20.9583 33.74C20.5383 33.4867 20.2116 33.1433 19.9783 32.71C19.7449 32.2767 19.6283 31.7967 19.6283 31.27C19.6283 30.7233 19.7449 30.24 19.9783 29.82C20.2183 29.3933 20.5416 29.0567 20.9483 28.81C21.3616 28.5633 21.8216 28.44 22.3283 28.44C22.7549 28.44 23.1283 28.51 23.4483 28.65C23.7749 28.79 24.0516 28.9833 24.2783 29.23C24.5049 29.4767 24.6783 29.76 24.7983 30.08C24.9183 30.3933 24.9783 30.7333 24.9783 31.1C24.9783 31.1933 24.9716 31.29 24.9583 31.39C24.9516 31.49 24.9349 31.5767 24.9083 31.65H20.7083V30.65H24.1683L23.5483 31.12C23.6083 30.8133 23.5916 30.54 23.4983 30.3C23.4116 30.06 23.2649 29.87 23.0583 29.73C22.8583 29.59 22.6149 29.52 22.3283 29.52C22.0549 29.52 21.8116 29.59 21.5983 29.73C21.3849 29.8633 21.2216 30.0633 21.1083 30.33C21.0016 30.59 20.9616 30.9067 20.9883 31.28C20.9616 31.6133 21.0049 31.91 21.1183 32.17C21.2383 32.4233 21.4116 32.62 21.6383 32.76C21.8716 32.9 22.1383 32.97 22.4383 32.97C22.7383 32.97 22.9916 32.9067 23.1983 32.78C23.4116 32.6533 23.5783 32.4833 23.6983 32.27L24.7583 32.79C24.6516 33.05 24.4849 33.28 24.2583 33.48C24.0316 33.68 23.7616 33.8367 23.4483 33.95C23.1416 34.0633 22.8016 34.12 22.4283 34.12ZM25.9713 34V28.56H27.2013V29.77L27.1013 29.59C27.228 29.1833 27.4247 28.9 27.6913 28.74C27.9647 28.58 28.2913 28.5 28.6713 28.5H28.9913V29.66H28.5213C28.148 29.66 27.848 29.7767 27.6213 30.01C27.3947 30.2367 27.2813 30.5567 27.2813 30.97V34H25.9713ZM31.7816 34.12C31.2016 34.12 30.6949 33.9833 30.2616 33.71C29.8349 33.43 29.5416 33.0533 29.3816 32.58L30.3616 32.11C30.5016 32.4167 30.6949 32.6567 30.9416 32.83C31.1949 33.0033 31.4749 33.09 31.7816 33.09C32.0216 33.09 32.2116 33.0367 32.3516 32.93C32.4916 32.8233 32.5616 32.6833 32.5616 32.51C32.5616 32.4033 32.5316 32.3167 32.4716 32.25C32.4182 32.1767 32.3416 32.1167 32.2416 32.07C32.1482 32.0167 32.0449 31.9733 31.9316 31.94L31.0416 31.69C30.5816 31.5567 30.2316 31.3533 29.9916 31.08C29.7582 30.8067 29.6416 30.4833 29.6416 30.11C29.6416 29.7767 29.7249 29.4867 29.8916 29.24C30.0649 28.9867 30.3016 28.79 30.6016 28.65C30.9082 28.51 31.2582 28.44 31.6516 28.44C32.1649 28.44 32.6182 28.5633 33.0116 28.81C33.4049 29.0567 33.6849 29.4033 33.8516 29.85L32.8516 30.32C32.7582 30.0733 32.6016 29.8767 32.3816 29.73C32.1616 29.5833 31.9149 29.51 31.6416 29.51C31.4216 29.51 31.2482 29.56 31.1216 29.66C30.9949 29.76 30.9316 29.89 30.9316 30.05C30.9316 30.15 30.9582 30.2367 31.0116 30.31C31.0649 30.3833 31.1382 30.4433 31.2316 30.49C31.3316 30.5367 31.4449 30.58 31.5716 30.62L32.4416 30.88C32.8882 31.0133 33.2316 31.2133 33.4716 31.48C33.7182 31.7467 33.8416 32.0733 33.8416 32.46C33.8416 32.7867 33.7549 33.0767 33.5816 33.33C33.4082 33.5767 33.1682 33.77 32.8616 33.91C32.5549 34.05 32.1949 34.12 31.7816 34.12Z"
      fill="#0C0F17"
    />
  </Svg>
);
const ProfileIcon = () => (
  <Svg width={32} height={35} viewBox="0 0 32 35">
    <Path
      d="M16.16 10.87C16.06 10.86 15.94 10.86 15.83 10.87C13.45 10.79 11.56 8.84 11.56 6.44C11.56 3.99 13.54 2 16 2C18.45 2 20.44 3.99 20.44 6.44C20.43 8.84 18.54 10.79 16.16 10.87Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11.16 14.56C8.74 16.18 8.74 18.82 11.16 20.43C13.91 22.27 18.42 22.27 21.17 20.43C23.59 18.81 23.59 16.17 21.17 14.56C18.43 12.73 13.92 12.73 11.16 14.56Z"
      stroke="#0C0F17"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M0.72 34V26.55H3.5C4.00667 26.55 4.45333 26.6433 4.84 26.83C5.23333 27.01 5.54 27.2767 5.76 27.63C5.98 27.9767 6.09 28.4 6.09 28.9C6.09 29.3933 5.97667 29.8167 5.75 30.17C5.53 30.5167 5.22667 30.7833 4.84 30.97C4.45333 31.1567 4.00667 31.25 3.5 31.25H2.08V34H0.72ZM2.08 30.05H3.52C3.76667 30.05 3.98 30.0033 4.16 29.91C4.34 29.81 4.48 29.6733 4.58 29.5C4.68 29.3267 4.73 29.1267 4.73 28.9C4.73 28.6667 4.68 28.4667 4.58 28.3C4.48 28.1267 4.34 27.9933 4.16 27.9C3.98 27.8 3.76667 27.75 3.52 27.75H2.08V30.05ZM7.09438 34V28.56H8.32438V29.77L8.22438 29.59C8.35104 29.1833 8.54771 28.9 8.81438 28.74C9.08771 28.58 9.41438 28.5 9.79438 28.5H10.1144V29.66H9.64438C9.27104 29.66 8.97104 29.7767 8.74438 30.01C8.51771 30.2367 8.40438 30.5567 8.40438 30.97V34H7.09438ZM13.4946 34.12C12.9613 34.12 12.4746 33.9967 12.0346 33.75C11.6013 33.5033 11.2546 33.1667 10.9946 32.74C10.7413 32.3133 10.6146 31.8267 10.6146 31.28C10.6146 30.7333 10.7413 30.2467 10.9946 29.82C11.2546 29.3933 11.6013 29.0567 12.0346 28.81C12.4679 28.5633 12.9546 28.44 13.4946 28.44C14.0279 28.44 14.5113 28.5633 14.9446 28.81C15.3779 29.0567 15.7213 29.3933 15.9746 29.82C16.2346 30.24 16.3646 30.7267 16.3646 31.28C16.3646 31.8267 16.2346 32.3133 15.9746 32.74C15.7146 33.1667 15.3679 33.5033 14.9346 33.75C14.5013 33.9967 14.0213 34.12 13.4946 34.12ZM13.4946 32.92C13.7879 32.92 14.0446 32.85 14.2646 32.71C14.4913 32.57 14.6679 32.3767 14.7946 32.13C14.9279 31.8767 14.9946 31.5933 14.9946 31.28C14.9946 30.96 14.9279 30.68 14.7946 30.44C14.6679 30.1933 14.4913 30 14.2646 29.86C14.0446 29.7133 13.7879 29.64 13.4946 29.64C13.1946 29.64 12.9313 29.7133 12.7046 29.86C12.4779 30 12.2979 30.1933 12.1646 30.44C12.0379 30.68 11.9746 30.96 11.9746 31.28C11.9746 31.5933 12.0379 31.8767 12.1646 32.13C12.2979 32.3767 12.4779 32.57 12.7046 32.71C12.9313 32.85 13.1946 32.92 13.4946 32.92ZM17.8709 34V29.73H16.9109V28.56H17.8709V28.38C17.8709 27.9667 17.9542 27.6167 18.1209 27.33C18.2942 27.0367 18.5342 26.8133 18.8409 26.66C19.1475 26.5067 19.5109 26.43 19.9309 26.43C20.0109 26.43 20.0975 26.4367 20.1909 26.45C20.2909 26.4567 20.3742 26.4667 20.4409 26.48V27.61C20.3742 27.5967 20.3109 27.59 20.2509 27.59C20.1975 27.5833 20.1475 27.58 20.1009 27.58C19.8075 27.58 19.5809 27.6467 19.4209 27.78C19.2609 27.9067 19.1809 28.1067 19.1809 28.38V28.56H21.5609V29.73H19.1809V34H17.8709ZM21.0709 34V28.56H22.3909V34H21.0709ZM23.4811 34V26.43H24.7911V34H23.4811ZM28.5806 34.12C28.0206 34.12 27.5306 33.9933 27.1106 33.74C26.6906 33.4867 26.364 33.1433 26.1306 32.71C25.8973 32.2767 25.7806 31.7967 25.7806 31.27C25.7806 30.7233 25.8973 30.24 26.1306 29.82C26.3706 29.3933 26.694 29.0567 27.1006 28.81C27.514 28.5633 27.974 28.44 28.4806 28.44C28.9073 28.44 29.2806 28.51 29.6006 28.65C29.9273 28.79 30.204 28.9833 30.4306 29.23C30.6573 29.4767 30.8306 29.76 30.9506 30.08C31.0706 30.3933 31.1306 30.7333 31.1306 31.1C31.1306 31.1933 31.124 31.29 31.1106 31.39C31.104 31.49 31.0873 31.5767 31.0606 31.65H26.8606V30.65H30.3206L29.7006 31.12C29.7606 30.8133 29.744 30.54 29.6506 30.3C29.564 30.06 29.4173 29.87 29.2106 29.73C29.0106 29.59 28.7673 29.52 28.4806 29.52C28.2073 29.52 27.964 29.59 27.7506 29.73C27.5373 29.8633 27.374 30.0633 27.2606 30.33C27.154 30.59 27.114 30.9067 27.1406 31.28C27.114 31.6133 27.1573 31.91 27.2706 32.17C27.3906 32.4233 27.564 32.62 27.7906 32.76C28.024 32.9 28.2906 32.97 28.5906 32.97C28.8906 32.97 29.144 32.9067 29.3506 32.78C29.564 32.6533 29.7306 32.4833 29.8506 32.27L30.9106 32.79C30.804 33.05 30.6373 33.28 30.4106 33.48C30.184 33.68 29.914 33.8367 29.6006 33.95C29.294 34.0633 28.954 34.12 28.5806 34.12Z"
      fill="#0C0F17"
    />
  </Svg>
);

const GreenButton = () => (
  <Svg width={38} height={39} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect
      y={0.5}
      width={38}
      height={38}
      rx={10}
      fill="#32BA7C"
      fillOpacity={0.15}
    />
    <Path
      d="M14.5 19.5h9M19 24v-9"
      stroke="#32BA7C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const GreenAddIcon = () => (
  <Svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M3.5 7h7M7 10.5v-7"
      stroke="#32BA7C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const GrayMinusIcon = () => (
  <Svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M3.5 7h7"
      stroke="#0C0F17"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LeftArrow = () => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const GoogleLogo = () => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#a)" fill="#fff">
      <Path d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z" />
      <Path d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z" />
      <Path d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z" />
      <Path d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const SearchIcon = () => (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.383 12.877a6.363 6.363 0 0 0 3.71-1.196l3.935 3.935a.947.947 0 0 0 .681.274c.54 0 .921-.415.921-.946a.901.901 0 0 0-.265-.665l-3.91-3.917a6.358 6.358 0 0 0 1.312-3.869c0-3.51-2.872-6.383-6.384-6.383C2.88.11 0 2.974 0 6.493c0 3.512 2.872 6.384 6.383 6.384Zm0-1.378c-2.739 0-5.005-2.266-5.005-5.006 0-2.739 2.266-5.005 5.005-5.005 2.74 0 5.006 2.266 5.006 5.005 0 2.74-2.266 5.006-5.006 5.006Z"
      fill="#3C3C43"
      fillOpacity={0.6}
    />
  </Svg>
);
const VegIcon = () => (
  <Svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={6} cy={6} r={2.88} fill="#09B859" />
    <Path stroke="#09B859" d="M.5.5h11v11H.5z" />
  </Svg>
);
const NonvegIcon = () => (
  <Svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={6} cy={6} r={2.88} fill="#F41611" />
    <Path stroke="#F41611" d="M.5.5h11v11H.5z" />
  </Svg>
);
const Transactiongreen = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20.5 22h-17M19 3.5l-14 14M19 13.77V3.5H8.73"
      stroke="#32BA7C"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export {
  MenuIcon,
  OrdersIcon,
  ProfileIcon,
  GreenButton,
  GreenAddIcon,
  GrayMinusIcon,
  LeftArrow,
  GoogleLogo,
  SearchIcon,
  VegIcon,
  NonvegIcon,
  Transactiongreen
};
