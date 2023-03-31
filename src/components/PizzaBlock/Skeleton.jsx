import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
     <circle cx="136" cy="127" r="120" /> 
    <rect x="-1" y="262" rx="11" ry="11" width="280" height="28" /> 
    <rect x="-1" y="305" rx="9" ry="9" width="280" height="88" /> 
    <rect x="2" y="419" rx="10" ry="10" width="95" height="30" /> 
    <rect x="126" y="411" rx="22" ry="22" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton