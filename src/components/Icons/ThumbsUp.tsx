import React, { SVGProps } from 'react'

const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 20 20' {...props}>
    <path
      fill='currentColor'
      d='M13.648 7.362c-.133-.355 3.539-3.634 1.398-6.291-.501-.621-2.201 2.975-4.615 4.603C9.099 6.572 6 8.484 6 9.541v6.842C6 17.654 10.914 19 14.648 19 16.017 19 18 10.424 18 9.062c0-1.368-4.221-1.344-4.352-1.7zM5 7.457c-.658 0-3 .4-3 3.123v4.848c0 2.721 2.342 3.021 3 3.021.657 0-1-.572-1-2.26V9.816c0-1.768 1.657-2.359 1-2.359z'
    />
  </svg>
)

export default ThumbsUp
