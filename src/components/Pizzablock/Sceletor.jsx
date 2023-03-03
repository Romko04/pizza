import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
    <ContentLoader 
    speed={2}
    width={290}
    height={475}
    viewBox="0 0 260 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="120" r="120" /> 
    <rect x="0" y="255" rx="10" ry="10" width="260" height="25" /> 
    <rect x="1" y="295" rx="10" ry="10" width="260" height="80" /> 
    <rect x="0" y="410" rx="0" ry="0" width="82" height="26" /> 
    <rect x="110" y="400" rx="30" ry="30" width="150" height="45" />
  </ContentLoader>
)

export default Sceleton