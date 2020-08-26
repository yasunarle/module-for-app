function useState() {
  let user = null

  function setUser(user) {
    user = user
  }
  return setUser
}

export { useState }
