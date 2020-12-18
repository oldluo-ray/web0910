import React from 'react'

export default function Count(props) {
  return (
    <div>
      <input type='text' ref={props.aaa} />
    </div>
  )
}

// export default class Count extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type='text' ref={this.props.ref} />
//       </div>
//     )
//   }
// }

// export default React.forwardRef((props, ref) => {
//   return <input type='text' ref={ref} />
// })
