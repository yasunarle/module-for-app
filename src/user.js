function useState() {
  console.log("useState func 実行...")

  let user = null

  function setUser(user) {
    user = user
  }
  return setUser
}

export { useState }
