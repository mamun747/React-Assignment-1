// Search component as a named export
export const Search = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_1480)">
      <path
        d="M2.25 7.5C2.25 8.18944 2.3858 8.87213 2.64963 9.50909C2.91347 10.146 3.30018 10.7248 3.78769 11.2123C4.2752 11.6998 4.85395 12.0865 5.49091 12.3504C6.12787 12.6142 6.81056 12.75 7.5 12.75C8.18944 12.75 8.87213 12.6142 9.50909 12.3504C10.146 12.0865 10.7248 11.6998 11.2123 11.2123C11.6998 10.7248 12.0865 10.146 12.3504 9.50909C12.6142 8.87213 12.75 8.18944 12.75 7.5C12.75 6.81056 12.6142 6.12787 12.3504 5.49091C12.0865 4.85395 11.6998 4.2752 11.2123 3.78769C10.7248 3.30018 10.146 2.91347 9.50909 2.64963C8.87213 2.3858 8.18944 2.25 7.5 2.25C6.81056 2.25 6.12787 2.3858 5.49091 2.64963C4.85395 2.91347 4.2752 3.30018 3.78769 3.78769C3.30018 4.2752 2.91347 4.85395 2.64963 5.49091C2.3858 6.12787 2.25 6.81056 2.25 7.5Z"
        stroke="#71717A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 15.75L11.25 11.25"
        stroke="#71717A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1480">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ChatOption = (props) => (
  <svg
    width="77"
    height="77"
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="38.5" cy="38.5" r="38.5" fill="#F26922" />
    <path
      d="M37.8192 58.552C34.912 58.552 32.6856 57.724 31.14 56.068C29.6312 54.412 28.8768 52.0752 28.8768 49.0576V28.3024C28.8768 25.2848 29.6312 22.948 31.14 21.292C32.6856 19.636 34.912 18.808 37.8192 18.808C40.7264 18.808 42.9344 19.636 44.4432 21.292C45.9888 22.948 46.7616 25.2848 46.7616 28.3024V32.3872H41.0208V27.916C41.0208 25.524 40.0088 24.328 37.9848 24.328C35.9608 24.328 34.9488 25.524 34.9488 27.916V49.4992C34.9488 51.8544 35.9608 53.032 37.9848 53.032C40.0088 53.032 41.0208 51.8544 41.0208 49.4992V43.5928H46.7616V49.0576C46.7616 52.0752 45.9888 54.412 44.4432 56.068C42.9344 57.724 40.7264 58.552 37.8192 58.552Z"
      fill="white"
    />
  </svg>
);
export default ChatOption;

export const CrossButton = (props) => (
  <svg
    width="173"
    height="173"
    viewBox="0 0 173 173"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_1_446)">
      <circle cx="86.5" cy="82.5" r="38.5" fill="#FAFAFA" />
    </g>
    <g clipPath="url(#clip0_1_446)">
      <path
        d="M93.8369 75.1641L78.1627 90.8383"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78.1631 75.1641L93.8373 90.8383"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_446"
        x="0"
        y="0"
        width="173"
        height="173"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="24" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_446"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_446"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1_446">
        <rect
          width="38"
          height="38"
          fill="white"
          transform="translate(67 64)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const Plus = ({ props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_499)">
      <path
        d="M8 3.33203L8 12.6654"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 8L12.6663 8"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_499">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HorizontalLine = ({classname}) => (
  <svg
    width="610"
    height="29"
    viewBox="0 0 610 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...classname}
  >
    <rect x="6" y="13" width="598" height="3" fill="#E4E4E7" />
    <circle cx="15" cy="14.5" r="14.5" fill="#E4E4E7" />
    <circle cx="305" cy="14.5" r="14.5" fill="#E4E4E7" />
    <circle cx="595" cy="14.5" r="14.5" fill="#E4E4E7" />
  </svg>
);
