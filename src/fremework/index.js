// 自作 リアクティブなフレームワーク
function createReactiveObject(target) {
  const handler = {
    get: function (target, prop, _) {
      // target => target
      // prop => observed[prop]
      // _ => receiver
      // -- Default --
      return target[prop] ? target[prop] : undefined
    },
    set: function (target, prop, value) {
      // obj => target
      // prop => observed[prop]
      // value => observed[prop] = value
      target[prop] = value
      return
    },
  }
  // 監視
  const observed = new Proxy(target, handler)
  return observed
}

// interface compornent {
//   data: object
// }

function fk(compornent) {
  const data = createReactiveObject(compornent.data)
  const render = compornent.render
  return data
}

function mount() {
  const app = document.getElementById("app")
  app.innerHTML = "<h1>chenged</h1>"
}

export { mount }
export default fk
