/* eslint-disable react/prop-types */
import React from 'react';

export default class IconStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { fill = 'none', width = 24, height = 24, viewBox = '0 0 24 24', color = '#555555', shape } = this.props;
    const d = (() => {
      if (shape === 'close') {
        return 'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z';
      }
      if (shape === 'search') {
        return 'M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z';
      }
      if (shape === 'check') {
        return 'M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z';
      }
      if (shape === 'refresh') {
        return 'M17.6449 6.35C16.1949 4.9 14.2049 4 11.9949 4C7.57488 4 4.00488 7.58 4.00488 12C4.00488 16.42 7.57488 20 11.9949 20C15.7249 20 18.8349 17.45 19.7249 14H17.6449C16.8249 16.33 14.6049 18 11.9949 18C8.68488 18 5.99488 15.31 5.99488 12C5.99488 8.69 8.68488 6 11.9949 6C13.6549 6 15.1349 6.69 16.2149 7.78L12.9949 11H19.9949V4L17.6449 6.35Z';
      }
      if (shape === 'plus') {
        return 'M20.9025 12.8965V10.9025H12.997V2.99702H11.003V10.9025H3.09753V12.8965H11.003V20.802H12.997V12.8965H20.9025Z';
      }
      if (shape === 'flag') {
        return 'M11.86 5.5L11.94 5.89L12.26 7.5H17.5V13.5H14.14L14.06 13.11L13.74 11.5H6.5V5.5H11.86ZM13.5 3.5H4.5V20.5H6.5V13.5H12.1L12.5 15.5H19.5V5.5H13.9L13.5 3.5Z';
      }
      if (shape === 'flag_fill') {
        return 'M13.9 5.5L13.5 3.5H4.5V20.5H6.5V13.5H12.1L12.5 15.5H19.5V5.5H13.9Z';
      }
      if (shape === 'global') {
        return 'M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM19.931 11H17.167C17.0436 8.81124 16.4313 6.67797 15.375 4.757C16.5992 5.32905 17.6589 6.2014 18.4554 7.29291C19.252 8.38442 19.7596 9.65965 19.931 11ZM12.53 4.027C13.565 5.391 14.957 7.807 15.157 11H9.03C9.169 8.404 10.024 5.972 11.481 4.026C11.653 4.016 11.825 4 12 4C12.179 4 12.354 4.016 12.53 4.027ZM8.688 4.727C7.704 6.618 7.136 8.762 7.03 11H4.069C4.24177 9.64784 4.75663 8.3621 5.56489 7.26442C6.37315 6.16673 7.44808 5.29339 8.688 4.727ZM4.069 13H7.043C7.179 15.379 7.708 17.478 8.599 19.23C7.38119 18.6559 6.32773 17.7842 5.53596 16.6953C4.74419 15.6064 4.23966 14.3355 4.069 13ZM11.45 19.973C10.049 18.275 9.222 15.896 9.041 13H15.154C14.946 15.773 14.037 18.196 12.551 19.972C12.369 19.984 12.187 20 12 20C11.814 20 11.633 19.984 11.45 19.973ZM15.461 19.201C16.416 17.407 16.999 15.3 17.152 13H19.93C19.7612 14.3243 19.264 15.5853 18.4834 16.6684C17.7029 17.7514 16.6639 18.622 15.461 19.201Z';
      }
      if (shape === 'notice') {
        return 'M11.5536 3H12.4464C16.0593 3 19 5.96296 19 9.60317V17H5V9.60317C5 5.96296 7.94073 3 11.5536 3V3Z';
      }
      if (shape === 'share') {
        return 'M20.9025 12.8965V10.9025H12.997V2.99702H11.003V10.9025H3.09753V12.8965H11.003V20.802H12.997V12.8965H20.9025Z';
      }
      if (shape === 'checkbox') {
        return 'M12.3999 3C7.4373 3 3.3999 7.0374 3.3999 12C3.3999 16.9626 7.4373 21 12.3999 21C17.3625 21 21.3999 16.9626 21.3999 12C21.3999 7.0374 17.3625 3 12.3999 3ZM10.6008 15.9717L7.2591 12.6372L8.5299 11.3628L10.599 13.4283L15.3636 8.6637L16.6362 9.9363L10.6008 15.9717Z';
      }
      if (shape === 'exclama_fill') {
        return 'M12.384 3C7.44477 3 3.42627 7.0374 3.42627 12C3.42627 16.9626 7.46367 21 12.4263 21C17.3889 21 21.4263 16.9626 21.4263 12C21.4263 7.0374 17.37 3 12.384 3ZM13.3263 16.5H11.5263V14.7H13.3263V16.5ZM13.3263 12.9H11.5263V7.5H13.3263V12.9Z';
      }
      if (shape === 'warning_fill') {
        return 'M5.07022 20.5038H20.1302C21.6702 20.5038 22.6302 18.8338 21.8602 17.5038L14.3302 4.49378C13.5602 3.16378 11.6402 3.16378 10.8702 4.49378L3.34022 17.5038C2.57022 18.8338 3.53022 20.5038 5.07022 20.5038ZM12.6002 13.5038C12.0502 13.5038 11.6002 13.0538 11.6002 12.5038V10.5038C11.6002 9.95378 12.0502 9.50378 12.6002 9.50378C13.1502 9.50378 13.6002 9.95378 13.6002 10.5038V12.5038C13.6002 13.0538 13.1502 13.5038 12.6002 13.5038ZM13.6002 17.5038H11.6002V15.5038H13.6002V17.5038Z';
      }
      if (shape === 'warning') {
        return 'M12.2003 5.49378L19.7303 18.5038H4.67032L12.2003 5.49378ZM2.94032 17.5038C2.17032 18.8338 3.13032 20.5038 4.67032 20.5038H19.7303C21.2703 20.5038 22.2303 18.8338 21.4603 17.5038L13.9303 4.49378C13.1603 3.16378 11.2403 3.16378 10.4703 4.49378L2.94032 17.5038ZM11.2003 10.5038V12.5038C11.2003 13.0538 11.6503 13.5038 12.2003 13.5038C12.7503 13.5038 13.2003 13.0538 13.2003 12.5038V10.5038C13.2003 9.95378 12.7503 9.50378 12.2003 9.50378C11.6503 9.50378 11.2003 9.95378 11.2003 10.5038ZM11.2003 15.5038H13.2003V17.5038H11.2003V15.5038Z';
      }
      if (shape === 'exclama20') {
        return 'M10.3984 2C6.26294 2 2.89844 5.3645 2.89844 9.5C2.89844 13.6355 6.26294 17 10.3984 17C14.5339 17 17.8984 13.6355 17.8984 9.5C17.8984 5.3645 14.5339 2 10.3984 2ZM11.1484 13.25H9.64844V8.75H11.1484V13.25ZM11.1484 7.25H9.64844V5.75H11.1484V7.25Z';
      }
      if (shape === 'exclama24') {
        return 'M9.78387 0C4.84467 0 0.826172 4.0374 0.826172 9C0.826172 13.9626 4.86357 18 9.82617 18C14.7888 18 18.8262 13.9626 18.8262 9C18.8262 4.0374 14.7699 0 9.78387 0ZM10.7262 13.5H8.92617V11.7H10.7262V13.5ZM10.7262 9.9H8.92617V4.5H10.7262V9.9Z';
      }
      if (shape === 'question') {
        return 'M10.1499 14H11.6499V12.5H10.1499V14ZM10.8999 2C6.7599 2 3.3999 5.36 3.3999 9.5C3.3999 13.64 6.7599 17 10.8999 17C15.0399 17 18.3999 13.64 18.3999 9.5C18.3999 5.36 15.0399 2 10.8999 2ZM10.8999 15.5C7.5924 15.5 4.8999 12.8075 4.8999 9.5C4.8999 6.1925 7.5924 3.5 10.8999 3.5C14.2074 3.5 16.8999 6.1925 16.8999 9.5C16.8999 12.8075 14.2074 15.5 10.8999 15.5ZM10.8999 5C9.2424 5 7.8999 6.3425 7.8999 8H9.3999C9.3999 7.175 10.0749 6.5 10.8999 6.5C11.7249 6.5 12.3999 7.175 12.3999 8C12.3999 9.5 10.1499 9.3125 10.1499 11.75H11.6499C11.6499 10.0625 13.8999 9.875 13.8999 8C13.8999 6.3425 12.5574 5 10.8999 5Z';
      }
      if (shape === 'delete') {
        return 'M12.7998 3C7.8372 3 3.7998 7.0374 3.7998 12C3.7998 16.9626 7.8372 21 12.7998 21C17.7624 21 21.7998 16.9626 21.7998 12C21.7998 7.0374 17.7624 3 12.7998 3ZM16.5861 14.5137L15.3135 15.7863L12.7998 13.2726L10.2861 15.7863L9.0135 14.5137L11.5272 12L9.0135 9.4863L10.2861 8.2137L12.7998 10.7274L15.3135 8.2137L16.5861 9.4863L14.0724 12L16.5861 14.5137Z';
      }
      if (shape === 'addcircle') {
        return 'M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z';
      }
      if (shape === 'search_small') {
        return 'M10.5594 16.1182C11.7929 16.118 12.9908 15.7051 13.9625 14.9453L17.0174 18L18 17.0174L14.9451 13.9627C15.7054 12.991 16.1185 11.7929 16.1188 10.5591C16.1188 7.49396 13.6247 5 10.5594 5C7.49409 5 5 7.49396 5 10.5591C5 13.6243 7.49409 16.1182 10.5594 16.1182ZM10.5594 6.38978C12.8589 6.38978 14.729 8.25973 14.729 10.5591C14.729 12.8585 12.8589 14.7285 10.5594 14.7285C8.2599 14.7285 6.38985 12.8585 6.38985 10.5591C6.38985 8.25973 8.2599 6.38978 10.5594 6.38978Z';
      }
      if (shape === 'acution') {
        return 'M12.2906 1H7.14531V2.7151H12.2906V1ZM8.86041 12.1482H10.5755V7.00286H8.86041V12.1482ZM15.7465 6.47118L16.9643 5.25345C16.5955 4.8161 16.1925 4.40448 15.7551 4.04431L14.5374 5.26203C13.2082 4.19867 11.536 3.56408 9.71796 3.56408C5.45593 3.56408 2 7.02001 2 11.282C2 15.5441 5.44736 19 9.71796 19C13.9886 19 17.4359 15.5441 17.4359 11.282C17.4359 9.47261 16.8013 7.80038 15.7465 6.47118ZM9.71796 17.2935C6.39924 17.2935 3.7151 14.6093 3.7151 11.2906C3.7151 7.97189 6.39924 5.28776 9.71796 5.28776C13.0367 5.28776 15.7208 7.97189 15.7208 11.2906C15.7208 14.6093 13.0367 17.2935 9.71796 17.2935Z';
      }
      if (shape === 'dashboard') {
        return 'M3.33333 10.8333H8.33333C8.55435 10.8333 8.76631 10.7455 8.92259 10.5893C9.07887 10.433 9.16667 10.221 9.16667 10V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V10C2.5 10.221 2.5878 10.433 2.74408 10.5893C2.90036 10.7455 3.11232 10.8333 3.33333 10.8333ZM2.5 16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V13.3333C9.16667 13.1123 9.07887 12.9004 8.92259 12.7441C8.76631 12.5878 8.55435 12.5 8.33333 12.5H3.33333C3.11232 12.5 2.90036 12.5878 2.74408 12.7441C2.5878 12.9004 2.5 13.1123 2.5 13.3333V16.6667ZM10.8333 16.6667C10.8333 16.8877 10.9211 17.0996 11.0774 17.2559C11.2337 17.4122 11.4457 17.5 11.6667 17.5H16.6667C16.8877 17.5 17.0996 17.4122 17.2559 17.2559C17.4122 17.0996 17.5 16.8877 17.5 16.6667V10.8333C17.5 10.6123 17.4122 10.4004 17.2559 10.2441C17.0996 10.0878 16.8877 10 16.6667 10H11.6667C11.4457 10 11.2337 10.0878 11.0774 10.2441C10.9211 10.4004 10.8333 10.6123 10.8333 10.8333V16.6667ZM11.6667 8.33333H16.6667C16.8877 8.33333 17.0996 8.24554 17.2559 8.08926C17.4122 7.93297 17.5 7.72101 17.5 7.5V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V7.5C10.8333 7.72101 10.9211 7.93297 11.0774 8.08926C11.2337 8.24554 11.4457 8.33333 11.6667 8.33333Z';
      }
      if (shape === 'heart') {
        return 'M9.99984 1.66669C5.40484 1.66669 1.6665 5.40502 1.6665 10C1.6665 14.595 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.595 18.3332 10C18.3332 5.40502 14.5948 1.66669 9.99984 1.66669ZM13.4882 10.6167L9.99984 14.105L6.5115 10.6167C6.29595 10.4039 6.12481 10.1504 6.008 9.87098C5.89118 9.59152 5.83103 9.29166 5.83103 8.98877C5.83103 8.68589 5.89118 8.38602 6.008 8.10656C6.12481 7.82711 6.29595 7.57364 6.5115 7.36085C6.72427 7.14543 6.97769 6.97439 7.25707 6.85765C7.53645 6.74092 7.83622 6.68081 8.139 6.68081C8.44179 6.68081 8.74156 6.74092 9.02094 6.85765C9.30031 6.97439 9.55373 7.14543 9.7665 7.36085L9.99984 7.59335L10.2323 7.36085C10.4451 7.14543 10.6985 6.97439 10.9779 6.85765C11.2573 6.74092 11.5571 6.68081 11.8598 6.68081C12.1626 6.68081 12.4624 6.74092 12.7418 6.85765C13.0211 6.97439 13.2746 7.14543 13.4873 7.36085C13.7029 7.57358 13.8742 7.82701 13.991 8.10644C14.1079 8.38586 14.1681 8.68571 14.1682 8.9886C14.1683 9.29148 14.1082 9.59136 13.9915 9.87085C13.8747 10.1503 13.7037 10.4038 13.4882 10.6167Z';
      }
      if (shape === 'hand') {
        return 'M17.0832 4.16669C16.7517 4.16669 16.4338 4.29838 16.1993 4.5328C15.9649 4.76722 15.8332 5.08517 15.8332 5.41669V9.16669H14.9999V3.75002C14.9999 3.4185 14.8682 3.10056 14.6338 2.86614C14.3994 2.63172 14.0814 2.50002 13.7499 2.50002C13.4184 2.50002 13.1004 2.63172 12.866 2.86614C12.6316 3.10056 12.4999 3.4185 12.4999 3.75002V9.16669H11.6666V2.91669C11.6666 2.58517 11.5349 2.26722 11.3004 2.0328C11.066 1.79838 10.7481 1.66669 10.4166 1.66669C10.085 1.66669 9.76709 1.79838 9.53267 2.0328C9.29825 2.26722 9.16656 2.58517 9.16656 2.91669V9.16669H8.33322V4.58335C8.33322 4.25183 8.20153 3.93389 7.96711 3.69947C7.73269 3.46505 7.41475 3.33335 7.08322 3.33335C6.7517 3.33335 6.43376 3.46505 6.19934 3.69947C5.96492 3.93389 5.83322 4.25183 5.83322 4.58335V13.5917L3.98322 10.5917C3.80862 10.3088 3.52879 10.1068 3.20529 10.0303C2.88179 9.95368 2.54112 10.0088 2.25822 10.1834C1.97533 10.358 1.77338 10.6378 1.6968 10.9613C1.62022 11.2848 1.67529 11.6255 1.84989 11.9084L4.60822 16.3584C4.98151 16.9619 5.50277 17.4601 6.12258 17.8058C6.7424 18.1514 7.44022 18.333 8.14989 18.3334H14.1666C15.2716 18.3334 16.3314 17.8944 17.1128 17.113C17.8942 16.3316 18.3332 15.2718 18.3332 14.1667V5.41669C18.3332 5.08517 18.2015 4.76722 17.9671 4.5328C17.7327 4.29838 17.4147 4.16669 17.0832 4.16669Z';
      }
      if (shape === 'panorama') {
        return 'M19.1668 16.6666V3.33331H0.833496V16.6666H19.1668ZM7.0835 10.4166L9.16683 12.925L12.0835 9.16665L15.8335 14.1666H4.16683L7.0835 10.4166Z';
      }
      if (shape === 'account') {
        return 'M9.99984 1.66669C5.39984 1.66669 1.6665 5.40002 1.6665 10C1.6665 14.6 5.39984 18.3334 9.99984 18.3334C14.5998 18.3334 18.3332 14.6 18.3332 10C18.3332 5.40002 14.5998 1.66669 9.99984 1.66669ZM9.99984 4.16669C11.3832 4.16669 12.4998 5.28335 12.4998 6.66669C12.4998 8.05002 11.3832 9.16669 9.99984 9.16669C8.6165 9.16669 7.49984 8.05002 7.49984 6.66669C7.49984 5.28335 8.6165 4.16669 9.99984 4.16669ZM9.99984 16C7.9165 16 6.07484 14.9334 4.99984 13.3167C5.02484 11.6584 8.33317 10.75 9.99984 10.75C11.6582 10.75 14.9748 11.6584 14.9998 13.3167C13.9248 14.9334 12.0832 16 9.99984 16Z';
      }
      return 'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z';
    })();
    return (
      <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
        <g>
        {(() => {
          if (shape === 'notice') {
            return (
              <>
              <path d="M11.5536 3H12.4464C16.0593 3 19 5.96296 19 9.60317V17H5V9.60317C5 5.96296 7.94073 3 11.5536 3V3Z" stroke="#555555" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
              <path d="M4 17H20.2004" stroke="#555555" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
              <path d="M14.8456 17C14.9515 17.3107 14.9985 17.6343 14.9985 17.9579C14.9985 19.6408 13.6574 21 11.9985 21C10.3397 21 8.99854 19.6408 8.99854 17.9579C8.99854 17.6214 9.04559 17.2977 9.15148 17" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </>
            );
          }
          if (shape === 'trash') {
            return (
              <>
              <path d="M15 10V18H13V10H15Z" fill={color} />
              <path d="M11 18V10H9V18H11Z" fill={color} />
              <path fillRule="evenodd" clipRule="evenodd" d="M17 2H7V6H3V8H5V22H19V8H21V6H17V2ZM15 6V4H9V6H15ZM7 8V20H17V8H7Z" fill={color} />
              </>
            );
          }
          if (shape === 'share') {
            return (
              <>
              <path d="M12 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H12" stroke="#555555" strokeWidth="2" />
              <path d="M7 12H20M20 12L15.5 7.5M20 12L15.5 16.5" stroke="#555555" strokeWidth="2" />
              </>
            );
          }
          if (shape === 'exclama') {
            return (
              <>
              <path d="M11.9577 3C7.0185 3 3 7.0374 3 12C3 16.9626 7.0374 21 12 21C16.9626 21 21 16.9626 21 12C21 7.0374 16.9437 3 11.9577 3ZM12 19.2C8.0301 19.2 4.8 15.9699 4.8 12C4.8 8.0301 8.0103 4.8 11.9577 4.8C15.9519 4.8 19.2 8.0301 19.2 12C19.2 15.9699 15.9699 19.2 12 19.2Z" fill={color} />
              <path d="M11.0996 7.5H12.8996V13.8H11.0996V7.5ZM11.0996 14.7H12.8996V16.5H11.0996V14.7Z" fill={color} />
              </>
            );
          }
          if (shape === 'checkbox_fill') {
            return (
              <>
              <path d="M12 3C7.0374 3 3 7.0374 3 12C3 16.9626 7.0374 21 12 21C16.9626 21 21 16.9626 21 12C21 7.0374 16.9626 3 12 3ZM12 19.2C8.0301 19.2 4.8 15.9699 4.8 12C4.8 8.0301 8.0301 4.8 12 4.8C15.9699 4.8 19.2 8.0301 19.2 12C19.2 15.9699 15.9699 19.2 12 19.2Z" fill="#15A46E" />
              <path d="M10.1993 13.4284L8.13017 11.3629L6.85938 12.6373L10.2011 15.9718L16.2365 9.93636L14.9639 8.66376L10.1993 13.4284Z" fill="#15A46E" />
              </>
            );
          }
          if (shape === 'alram') {
            return (
              <>
              <path d="M12 4C7.121 4 3 8.121 3 13C3 17.879 7.121 22 12 22C16.879 22 21 17.879 21 13C21 8.121 16.879 4 12 4ZM12 20C8.206 20 5 16.794 5 13C5 9.206 8.206 6 12 6C15.794 6 19 9.206 19 13C19 16.794 15.794 20 12 20Z" fill="#555555" />
              <path d="M13 12V7.99999H11V14H17V12H13ZM17.284 3.70699L18.696 2.29099L21.706 5.29099L20.293 6.70799L17.284 3.70699ZM6.69804 3.70699L3.70804 6.70599L2.29004 5.29399L5.28004 2.29399L6.69804 3.70699Z" fill="#555555" />
              </>
            );
          }
          if (shape === 'calendar') {
            return (
              <>
              <path d="M6 9.375H8.5V11.875H6V9.375Z" fill="#555555" />
              <path d="M8.5 14.125H6V16.625H8.5V14.125Z" fill="#555555" />
              <path d="M10.75 9.375H13.25V11.875H10.75V9.375Z" fill="#555555" />
              <path d="M13.25 14.125H10.75V16.625H13.25V14.125Z" fill="#555555" />
              <path d="M15.5 9.375H18V11.875H15.5V9.375Z" fill="#555555" />
              <path d="M18 14.125H15.5V16.625H18V14.125Z" fill="#555555" />
              <path fillRule="evenodd" clipRule="evenodd" d="M5 5H2V21H22V5H19V2H17V5H7V2H5V5ZM4 7V19H20V7H4Z" fill="#555555" />
              </>
            );
          }
          if (shape === 'close_small') {
            return (
              <>
              <path d="M17 8L8 17" stroke={color} strokeWidth="1.5" />
              <path d="M8 8L17 17" stroke={color} strokeWidth="1.5" />
              </>
            );
          }
          if (shape === 'expand') {
            return (
              <>
              <path d="M10 6H6V10" stroke="#555555" strokeWidth="1.5" />
              <path d="M14 18L18 18L18 14" stroke="#555555" strokeWidth="1.5" />
              <path d="M18 10L18 6L14 6" stroke="#555555" strokeWidth="1.5" />
              <path d="M6 14L6 18L10 18" stroke="#555555" strokeWidth="1.5" />
              </>
            );
          }
          if (shape === 'hambuger') {
            return (
              <>
              <path d="M18 7L6 7" stroke="#555555" strokeWidth="1.5" strokeLinecap="square" />
              <path d="M18 11.5H6" stroke="#555555" strokeWidth="1.5" strokeLinecap="square" />
              <path d="M18 16H6" stroke="#555555" strokeWidth="1.5" strokeLinecap="square" />
              </>
            );
          }
          if (shape === 'data') {
            return (
              <>
              <path d="M16.6668 5.00002C16.6668 3.19335 13.6143 1.66669 10.0002 1.66669C6.386 1.66669 3.3335 3.19335 3.3335 5.00002V6.66669C3.3335 8.47335 6.386 10 10.0002 10C13.6143 10 16.6668 8.47335 16.6668 6.66669V5.00002ZM10.0002 15.8334C6.386 15.8334 3.3335 14.3067 3.3335 12.5V15C3.3335 16.8067 6.386 18.3334 10.0002 18.3334C13.6143 18.3334 16.6668 16.8067 16.6668 15V12.5C16.6668 14.3067 13.6143 15.8334 10.0002 15.8334Z" fill="#BBBBBB" />
              <path d="M16.6668 8.33331C16.6668 10.14 13.6143 11.6666 10.0002 11.6666C6.386 11.6666 3.3335 10.14 3.3335 8.33331V10.8333C3.3335 12.64 6.386 14.1666 10.0002 14.1666C13.6143 14.1666 16.6668 12.64 16.6668 10.8333V8.33331Z" fill="#BBBBBB" />
              </>
            );
          }
          if (shape === 'data-small') {
            return (
              <>
              <path d="M15 4.5C15 2.874 12.2528 1.5 9 1.5C5.74725 1.5 3 2.874 3 4.5V6C3 7.626 5.74725 9 9 9C12.2528 9 15 7.626 15 6V4.5ZM9 14.25C5.74725 14.25 3 12.876 3 11.25V13.5C3 15.126 5.74725 16.5 9 16.5C12.2528 16.5 15 15.126 15 13.5V11.25C15 12.876 12.2528 14.25 9 14.25Z" fill="#BBBBBB" />
              <path d="M15 7.5C15 9.126 12.2528 10.5 9 10.5C5.74725 10.5 3 9.126 3 7.5V9.75C3 11.376 5.74725 12.75 9 12.75C12.2528 12.75 15 11.376 15 9.75V7.5Z" fill="#BBBBBB" />
              </>
            );
          }

          if (shape === 'data-small--gray') {
            return (
              <>
                <path d="M17.6755 5.00033C17.6755 3.19366 14.554 1.66699 10.8582 1.66699C7.16245 1.66699 4.04102 3.19366 4.04102 5.00033V6.66699C4.04102 8.47366 7.16245 10.0003 10.8582 10.0003C14.554 10.0003 17.6755 8.47366 17.6755 6.66699V5.00033ZM10.8582 15.8337C7.16245 15.8337 4.04102 14.307 4.04102 12.5003V15.0003C4.04102 16.807 7.16245 18.3337 10.8582 18.3337C14.554 18.3337 17.6755 16.807 17.6755 15.0003V12.5003C17.6755 14.307 14.554 15.8337 10.8582 15.8337Z" fill="#DDDDDD" />
                <path d="M17.6755 8.33301C17.6755 10.1397 14.554 11.6663 10.8582 11.6663C7.16245 11.6663 4.04102 10.1397 4.04102 8.33301V10.833C4.04102 12.6397 7.16245 14.1663 10.8582 14.1663C14.554 14.1663 17.6755 12.6397 17.6755 10.833V8.33301Z" fill="#DDDDDD" />
              </>
            );
          }
          if (shape === 'camera') {
            return (
              <>
              <circle cx="19" cy="19" r="17.5" fill="black" stroke="white" strokeWidth="3" />
              <path d="M19 22C20.2426 22 21.25 20.9926 21.25 19.75C21.25 18.5074 20.2426 17.5 19 17.5C17.7574 17.5 16.75 18.5074 16.75 19.75C16.75 20.9926 17.7574 22 19 22Z" fill="white" />
              <path d="M16.75 12.25L15.3775 13.75H11.5V25.75H26.5V13.75H22.6225L21.25 12.25H16.75ZM19 23.5C16.93 23.5 15.25 21.82 15.25 19.75C15.25 17.68 16.93 16 19 16C21.07 16 22.75 17.68 22.75 19.75C22.75 21.82 21.07 23.5 19 23.5Z" fill="white" />
              </>
            );
          }
          if (shape === 'pencil') {
            return (
              <>
              <circle cx="19" cy="19" r="17.5" fill="black" stroke="white" strokeWidth="3" />
              <path d="M12.0962 23.0913V25.9038H14.9087L23.2037 17.6088L20.3912 14.7963L12.0962 23.0913ZM25.9037 14.9088L23.0912 12.0963L21.1937 14.0013L24.0062 16.8138L25.9037 14.9088Z" fill="white" />
              </>
            );
          }
          if (shape === 'home') {
            return (
              <>
              <g filter="url(#filter0_d_372_8491)">
              <circle cx="21" cy="21" r="16" fill="white" />
              </g>
              <path d="M19.1668 27.7916V22.2916H22.8335V27.7916H27.4168V20.4583H30.1668L21.0002 12.2083L11.8335 20.4583H14.5835V27.7916H19.1668Z" fill="black" />
              <defs>
              <filter id="filter0_d_372_8491" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.471012 0 0 0 0 0.471012 0 0 0 0 0.471012 0 0 0 0.15 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_372_8491" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_372_8491" result="shape" />
              </filter>
              </defs>
              </>
            );
          }
          if (shape === 'download') {
            return (
              <>
              <path d="M4 14.5V19.5C4 20.0523 4.44772 20.5 5 20.5H19C19.5523 20.5 20 20.0523 20 19.5V14.5" stroke="#555555" strokeWidth="2" />
              <path d="M12 3V16M12 16L7.5 11.5M12 16L16.5 11.5" stroke="#555555" strokeWidth="2" />
              </>
            );
          }
          if (shape === 'pagenation-left') {
            return (
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="#BBBBBB" />
            );
          }
          if (shape === 'pagenation-left--black') {
            return (
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="#555555" />
            );
          }
          if (shape === 'pagenation-right') {
            return (
              <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" fill="#555555" />
            );
          }
          if (shape === 'pagenation-right--gray') {
            return (
              <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" fill="#BBBBBB" />
            );
          }
          if (shape === 'arrow-left') {
            return (
              <path d="M9.41437 11.9999L16.4144 4.9999L15.0002 3.58569L6.58594 11.9999L15.0002 20.4141L16.4144 18.9999L9.41437 11.9999Z" fill="black" />
            );
          }
          if (shape === 'arrow-right') {
            return (
              <path d="M7.91797 15.333L12.418 10.583L7.91797 5.83301" stroke="#BBBBBB" />
            );
          }
          if (shape === 'arrow-up') {
            return (
              <path d="M7.78656 15.41L12.6105 10.83L17.4345 15.41L18.9163 14L12.6105 8L6.30469 14L7.78656 15.41Z" fill="#888888" />
            );
          }
          if (shape === 'arrow-down') {
            return (
              <path d="M7.78656 9L12.6105 13.58L17.4345 9L18.9163 10.41L12.6105 16.41L6.30469 10.41L7.78656 9Z" fill="#888888" />
            );
          }
          if (shape === 'arrow-link') {
            return (
              <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" fill="#888888" />
            );
          }
          if (shape === 'close-circle') {
            return (
              <path d="M12 3.5C7.0374 3.5 3 7.5374 3 12.5C3 17.4626 7.0374 21.5 12 21.5C16.9626 21.5 21 17.4626 21 12.5C21 7.5374 16.9626 3.5 12 3.5ZM15.7863 15.0137L14.5137 16.2863L12 13.7726L9.4863 16.2863L8.2137 15.0137L10.7274 12.5L8.2137 9.9863L9.4863 8.7137L12 11.2274L14.5137 8.7137L15.7863 9.9863L13.2726 12.5L15.7863 15.0137Z" fill="#DDDDDD" />
            );
          }
          if (shape === 'close-circle-bk') {
            return (
              <path d="M12 3C7.0374 3 3 7.0374 3 12C3 16.9626 7.0374 21 12 21C16.9626 21 21 16.9626 21 12C21 7.0374 16.9626 3 12 3ZM15.7863 14.5137L14.5137 15.7863L12 13.2726L9.4863 15.7863L8.2137 14.5137L10.7274 12L8.2137 9.4863L9.4863 8.2137L12 10.7274L14.5137 8.2137L15.7863 9.4863L13.2726 12L15.7863 14.5137Z" fill="black" />
            );
          }
          if (shape === 'clock') {
            return (
              <path d="M12.2906 1H7.14531V2.7151H12.2906V1ZM8.86041 12.1482H10.5755V7.00286H8.86041V12.1482ZM15.7465 6.47118L16.9643 5.25345C16.5955 4.8161 16.1925 4.40448 15.7551 4.04431L14.5374 5.26203C13.2082 4.19867 11.536 3.56408 9.71796 3.56408C5.45593 3.56408 2 7.02001 2 11.282C2 15.5441 5.44736 19 9.71796 19C13.9886 19 17.4359 15.5441 17.4359 11.282C17.4359 9.47261 16.8013 7.80038 15.7465 6.47118ZM9.71796 17.2935C6.39924 17.2935 3.7151 14.6093 3.7151 11.2906C3.7151 7.97189 6.39924 5.28776 9.71796 5.28776C13.0367 5.28776 15.7208 7.97189 15.7208 11.2906C15.7208 14.6093 13.0367 17.2935 9.71796 17.2935Z" fill="black" />
            );
          }
          if (shape === 'busd') {
            return (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_801_15774)">
              <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0B90B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M4.59583 5.96759L8.00386 2.55957L9.36272 3.91843L5.95471 7.32647L4.59583 5.96759ZM4.59832 10.0401L10.0446 4.59371L11.4035 5.95259L5.95719 11.3989L4.59832 10.0401ZM12.0816 6.6345L6.63524 12.0808L7.9941 13.4397L13.4404 7.99336L12.0816 6.6345ZM2.56055 8.00245L3.91941 6.64357L5.27829 8.00245L3.91941 9.36131L2.56055 8.00245Z" fill="white" />
              </g>
              <defs>
              <clipPath id="clip0_801_15774">
              <rect width="16" height="16" rx="5" fill="white" />
              </clipPath>
              </defs>
              </svg>
            );
          }
          if (shape === 'setting') {
            return (
              <>
              <g clipPath="url(#clip0_372_8700)">
              <path d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5698 5.11 19.3998 5.02 19.2198 5.02C19.1598 5.02 19.0998 5.03 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.88984 5.03 4.82984 5.02 4.76984 5.02C4.59984 5.02 4.42984 5.11 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.42984 18.89 4.59984 18.98 4.77984 18.98C4.83984 18.98 4.89984 18.97 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.1098 18.97 19.1698 18.98 19.2298 18.98C19.3998 18.98 19.5698 18.89 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM17.4498 11.27C17.4898 11.58 17.4998 11.79 17.4998 12C17.4998 12.21 17.4798 12.43 17.4498 12.73L17.3098 13.86L18.1998 14.56L19.2798 15.4L18.5798 16.61L17.3098 16.1L16.2698 15.68L15.3698 16.36C14.9398 16.68 14.5298 16.92 14.1198 17.09L13.0598 17.52L12.8998 18.65L12.6998 20H11.2998L11.1098 18.65L10.9498 17.52L9.88984 17.09C9.45984 16.91 9.05984 16.68 8.65984 16.38L7.74984 15.68L6.68984 16.11L5.41984 16.62L4.71984 15.41L5.79984 14.57L6.68984 13.87L6.54984 12.74C6.51984 12.43 6.49984 12.2 6.49984 12C6.49984 11.8 6.51984 11.57 6.54984 11.27L6.68984 10.14L5.79984 9.44L4.71984 8.6L5.41984 7.39L6.68984 7.9L7.72984 8.32L8.62984 7.64C9.05984 7.32 9.46984 7.08 9.87984 6.91L10.9398 6.48L11.0998 5.35L11.2998 4H12.6898L12.8798 5.35L13.0398 6.48L14.0998 6.91C14.5298 7.09 14.9298 7.32 15.3298 7.62L16.2398 8.32L17.2998 7.89L18.5698 7.38L19.2698 8.59L18.1998 9.44L17.3098 10.14L17.4498 11.27ZM11.9998 8C9.78984 8 7.99984 9.79 7.99984 12C7.99984 14.21 9.78984 16 11.9998 16C14.2098 16 15.9998 14.21 15.9998 12C15.9998 9.79 14.2098 8 11.9998 8ZM11.9998 14C10.8998 14 9.99984 13.1 9.99984 12C9.99984 10.9 10.8998 10 11.9998 10C13.0998 10 13.9998 10.9 13.9998 12C13.9998 13.1 13.0998 14 11.9998 14Z" fill="#555555" />
              </g>
              <defs>
              <clipPath id="clip0_372_8700">
              <rect width="24" height="24" fill="white" />
              </clipPath>
              </defs>
              </>
            );
          }
          if (shape === 'adf') {
            return (
              <>
                <path d="M10.2852 20C15.808 20 20.2852 15.5228 20.2852 10C20.2852 4.47715 15.808 0 10.2852 0C4.76231 0 0.285156 4.47715 0.285156 10C0.285156 15.5228 4.76231 20 10.2852 20Z" fill="black" />
                <path d="M16.6276 9.22267V10.8036H11.6942V14.429H10.1133V7.14648H11.6942V9.22267H16.6276Z" fill="white" />
                <path d="M16.6247 5.56641H11.6914V7.14736H16.6247V5.56641Z" fill="white" />
                <path d="M6.43567 5.56641L3.95312 14.4299H5.52773L6.5436 10.8109H8.00392V7.14101H10.1119V5.56641H6.43567Z" fill="white" />
              </>
            );
          }
          if (shape === 'bnb') {
            return (
              <>
                <path d="M19.9798 12.419C18.6442 17.7762 13.2183 21.0365 7.86044 19.7006C2.50486 18.365 -0.755423 12.9387 0.580735 7.58197C1.91572 2.22419 7.34169 -1.03634 12.6979 0.299234C18.0553 1.63481 21.3154 7.0617 19.9797 12.4191L19.9798 12.419H19.9798Z" fill="#F3BA2F" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2799 6.34732L7.69051 8.93676L7.69056 8.93665L6.18395 7.42998L10.2799 3.33398L14.3773 7.43121L12.8706 8.93788L10.2799 6.34732ZM5.12 8.49372L3.61328 10.0007L5.11989 11.5071L6.62662 10.0003L5.12 8.49372ZM7.69051 11.0647L10.2799 13.654L12.8706 11.0635L14.378 12.5693L14.3773 12.5701L10.2799 16.6673L6.18395 12.5713L6.18182 12.5692L7.69051 11.0647ZM15.44 8.49457L13.9333 10.0013L15.4399 11.5079L16.9466 10.0012L15.44 8.49457Z" fill="white" />
                <path d="M11.8078 9.99956H11.8084L10.2797 8.4707L9.14968 9.60036V9.60036L9.01987 9.73022L8.75213 9.99801L8.75 10.0001L8.75213 10.0023L10.2797 11.53L11.8085 10.0012L11.8093 10.0003L11.8079 9.99956" fill="white" />
              </>
            );
          }
          if (shape === 'busd20') {
            return (
              <>
                <g clipPath="url(#clip0_491_20929)">
                <circle cx="10.2812" cy="10" r="10" fill="#F0B90B" />
                <path d="M10.5078 3L12.1755 4.70783L7.97624 8.90707L6.30859 7.23943L10.5078 3Z" fill="white" stroke="#F0B90B" />
                <path d="M13.0394 5.5332L14.7071 7.24103L7.97624 13.9719L6.30859 12.3042L13.0394 5.5332Z" fill="white" stroke="#F0B90B" />
                <path d="M5.44889 8.0625L7.11653 9.77033L5.44889 11.438L3.78125 9.77033L5.44889 8.0625Z" fill="white" stroke="#F0B90B" />
                <path d="M15.5785 8.0625L17.2461 9.77033L10.5153 16.5012L8.84766 14.8335L15.5785 8.0625Z" fill="white" stroke="#F0B90B" />
                </g>
                <defs>
                <clipPath id="clip0_491_20929">
                <rect width="20" height="20" fill="white" transform="translate(0.28125)" />
                </clipPath>
                </defs>
              </>
            );
          }
          if (shape === 'carousel_prev') {
            return (
              <>
              <circle cx="17" cy="17" r="16" transform="rotate(-180 17 17)" stroke="black" />
              <path d="M19.0002 23L20.4102 21.59L15.8302 17L20.4102 12.41L19.0002 11L13.0002 17L19.0002 23Z" fill="black" />
              </>
            );
          }
          if (shape === 'carousel_next') {
            return (
              <>
              <circle cx="17" cy="17" r="16" stroke="black" />
              <path d="M14.8983 11L13.4883 12.41L18.0683 17L13.4883 21.59L14.8983 23L20.8983 17L14.8983 11Z" fill="black" />
              </>
            );
          }
          if (shape === 'binance') {
            return (
              <>
              <rect width="13.2753" height="14" rx="6.63763" fill="#F0B90B" />
              <path d="M6.64173 2.35303L7.73351 3.52861L4.98435 6.41918L3.89258 5.27125L6.64173 2.35303Z" fill="white" stroke="white" />
              <path d="M8.29911 4.0957L9.39088 5.27129L4.98435 9.90449L3.89258 8.75656L8.29911 4.0957Z" fill="white" stroke="white" />
              <path d="M3.32615 5.83838L4.41792 7.01397L3.32615 8.1619L2.23438 7.01397L3.32615 5.83838Z" fill="white" stroke="white" />
              <path d="M9.95536 5.83838L11.0471 7.01397L6.6406 11.6472L5.54883 10.4992L9.95536 5.83838Z" fill="white" stroke="white" />
              </>
            );
          }

          if (shape === 'medal') {
            return (
              <path
                d="M8.00032 18.5019C8.30732 18.7019 8.69932 18.7619 9.06732 18.6349L11.6033 17.7709C11.8607 17.6831 12.1399 17.6831 12.3973 17.7709L14.9333 18.6349C15.3013 18.7609 15.6933 18.7019 16.0003 18.5019V22.3959L12.0003 21.0379L8.00032 22.3959V18.5019ZM11.6773 16.1319L9.61532 16.8349C9.38448 16.9135 9.13287 16.905 8.90782 16.8111C8.68277 16.7172 8.4998 16.5442 8.39332 16.3249L7.38832 14.2599C7.29599 14.069 7.14541 13.9125 6.95832 13.8129L4.95832 12.7529C4.7525 12.6434 4.59138 12.4655 4.50283 12.2498C4.41427 12.0342 4.40383 11.7944 4.47332 11.5719L5.18332 9.29885C5.2439 9.1048 5.2439 8.8969 5.18332 8.70285L4.47332 6.42985C4.40365 6.20708 4.4141 5.96696 4.50286 5.75108C4.59162 5.53521 4.7531 5.35718 4.95932 5.24785L6.95832 4.18785C7.14525 4.08845 7.29582 3.93229 7.38832 3.74185L8.39332 1.67385C8.49997 1.45464 8.68301 1.28194 8.90804 1.18821C9.13308 1.09447 9.3846 1.08617 9.61532 1.16485L11.6773 1.86785C11.8867 1.93932 12.1139 1.93932 12.3233 1.86785L14.3853 1.16485C14.6162 1.08624 14.8678 1.09469 15.0928 1.18862C15.3179 1.28254 15.5008 1.45546 15.6073 1.67485L16.6123 3.74085C16.7047 3.93166 16.8552 4.08819 17.0423 4.18785L19.0423 5.24785C19.2481 5.35731 19.4093 5.53524 19.4978 5.75088C19.5864 5.96652 19.5968 6.20633 19.5273 6.42885L18.8173 8.70185C18.7567 8.8959 18.7567 9.1038 18.8173 9.29785L19.5273 11.5709C19.597 11.7936 19.5865 12.0337 19.4978 12.2496C19.409 12.4655 19.2475 12.6435 19.0413 12.7529L17.0423 13.8129C16.8554 13.9123 16.7048 14.0684 16.6123 14.2589L15.6073 16.3259C15.5007 16.5451 15.3176 16.7178 15.0926 16.8115C14.8676 16.9052 14.616 16.9135 14.3853 16.8349L12.3233 16.1319C12.1139 16.0604 11.8867 16.0604 11.6773 16.1319ZM12.0003 5.99985C11.7351 5.99985 11.4808 6.10521 11.2932 6.29274C11.1057 6.48028 11.0003 6.73463 11.0003 6.99985V10.9999C11.0003 11.2651 11.1057 11.5194 11.2932 11.707C11.4808 11.8945 11.7351 11.9999 12.0003 11.9999C12.2655 11.9999 12.5199 11.8945 12.7074 11.707C12.895 11.5194 13.0003 11.2651 13.0003 10.9999V6.99985C13.0003 6.73463 12.895 6.48028 12.7074 6.29274C12.5199 6.10521 12.2655 5.99985 12.0003 5.99985Z"
                fill="white"
              />
            );
          }
          return <path d={d} fill={color} />;
        })()}
        </g>
      </svg>
    );
  }
}
