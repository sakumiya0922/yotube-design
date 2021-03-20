import React, { Component } from 'react';

interface Hako3Props {
  message: string,
}

const Hako3: React.FC<Hako3Props> = (props) => {
  const { message } = props
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }} />
  )
}

export default Hako3
