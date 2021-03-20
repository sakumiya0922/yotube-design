import React, {Component} from 'react';

interface Hako3Props {
  message:string,
}

const Hako3:React.FC<Hako3Props> = (props) => {
  const {message} = props
  return(
    <div>
      <p>{message}</p>
    </div>
  )
}

export default Hako3
