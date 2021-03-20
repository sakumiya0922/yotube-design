import React, {Component} from 'react';

interface Hako2Props {
  message:string,
}

const Hako2:React.FC<Hako2Props> = (props) => {
  const {message} = props
  return(
    <div>
      <p>{message}</p>
    </div>
  )
}

export default Hako2
