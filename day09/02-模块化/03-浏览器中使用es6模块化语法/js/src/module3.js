export default function xxx() {
  console.log('module3----')
}

// export default function() {
//   console.log('module3----123')
// }

let fn = () => {
  console.log('fn----')
}

export let msg = '呵呵'
export { fn }
