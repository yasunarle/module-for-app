import Fk from "../fremework/index"

const Home = {
  render: `
    <div class="home">
      <h1>Home Page</h1>
      <p>description</p>
    </div>
  `,
  data: {
    name: "",
  },
  methods: {
    login() {
      console.log("login")
    },
  },
}

console.log("fk", Fk(Home))

export default Home
