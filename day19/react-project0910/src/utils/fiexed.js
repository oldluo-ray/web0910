// 定义修改根标签字体的代码.用于适配
// 这里代码,只是希望在项目运行的时候,调用一次就可以了,其他地方不需要这里的代码.所以不需要导出
function adapter() {
  // const rootFz = (document.documentElement.clientWidth * 100) / 375
  // document.documentElement.style.fontSize = rootFz + 'px'

  const rootFz = document.documentElement.clientWidth / 10
  document.documentElement.style.fontSize = rootFz + 'px'
}
adapter()
window.onresize = adapter
