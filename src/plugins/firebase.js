const state = {
  user: null,
}

function useFirebase() {
  console.log("--- useFirebase 実行 ---")
  //
  // Getters
  //
  function getUser() {
    // const user = { name: "yasunari" }
    return state.user
  }
  //
  // Mutations
  //
  function setUser(user) {
    state.user = user
  }
  //
  // Actions
  //
  function login() {
    const user = {
      name: "yasunari",
    }
    setUser(user)
  }

  function logout() {
    setUser(null)
  }

  return { getUser, login, logout }
}

export { useFirebase }
