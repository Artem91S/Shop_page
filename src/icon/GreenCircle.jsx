export default function GreenCircle({className}) {
  return (
    <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" width={className} height={className} viewBox="0 0 178 357" fill="none">
    <g filter="url(#filter0_f_266_7863)">
      <circle cx="178.5" cy="178.5" r="98.5" fill="#E2F8F0" fill-opacity="0.8"/>
    </g>
    <defs>
      <filter id="filter0_f_266_7863" x="0" y="0" width="357" height="357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_266_7863"/>
      </filter>
    </defs>
  </svg>
  )
}
