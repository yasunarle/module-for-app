let user = null
function useState() {
  console.log("useState func 実行...")

  function setUser() {
    // user = user
  }

  function login() {
    user = { name: "yasunari" }
  }
  return { setUser, login }
}

export { useState }
