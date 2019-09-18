declare module '*.jpg' {
  const value: any
  export default value
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.svg' {
  // import React = require('react');
  const value: any
  export const ReactComponent: any
  export default value
}
