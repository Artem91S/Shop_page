export default function OrangeCircle({className}) {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="294"
      height="350"
      viewBox="0 0 297 359"
      fill="none"
    >
      <g opacity="0.13" filter="url(#filter0_f_266_7719)">
        <circle cx="63" cy="125" r="114" fill="#FA7515" />
      </g>
      <defs>
        <filter
          id="filter0_f_266_7719"
          x="-171"
          y="-109"
          width="468"
          height="468"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur_266_7719"
          />
        </filter>
      </defs>
    </svg>
  );
}
