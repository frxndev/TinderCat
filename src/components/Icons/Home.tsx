import React, { SVGProps } from 'react'

const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23.836 9.927c-.143-2.882-.738-7.39-2.967-9.67-.994-1.018-3.658 1.252-4.83 2.35A14.944 14.944 0 0 0 12 2.058c-1.433 0-2.807.197-4.081.56C6.75 1.522 4.078-.76 3.082.26.763 2.634.212 7.415.1 10.271c-.066.4-.1.807-.1 1.22 0 5.21 5.373 9.434 12 9.434s12-4.223 12-9.433c0-.533-.056-1.056-.164-1.565Z'
      fill='url(#a)'
    />
    <defs>
      <linearGradient id='a' x1={18.969} y1={0} x2={18.969} y2={12.567} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F36C5C' />
        <stop offset={1} stopColor='#EF3B76' />
      </linearGradient>
    </defs>
  </svg>
)

export default Home
