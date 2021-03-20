import React, {Component} from 'react';

interface Hako1Props {
  message:string,
}

const Hako1:React.FC<Hako1Props> = (props) => {
  const {message} = props
  return(
    <div style={{backgroundColor:"green",width:"100"}}>
    </div>
  )
}

export default Hako1



// const Hako1 = () => {
//     return (
//       <Hako1>”箱１”</Hako1>
//     )
// }

// const Hako2 = () => {
//   return (
//     <Hako2>”箱2”</Hako2>
//   )
// }
// const Hako3 = () => {
//   return (
//     <Hako3>”箱3”</Hako3>
//   )
// }

// export default Hako