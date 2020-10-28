import "./plugins/firebase"
import "./test"
// Fremework
import { mount } from "./fremework"
// Plugins
import { useFirebase } from "./plugins/firebase"
// Pages
import Home from "./pages/home"
const { getUser } = useFirebase()

// --- 実行テスト ---
console.log("--- main.js: ", getUser())

// --- メモ ---

// mount Home in #app
const app = document.getElementById("app")
app.innerHTML = "<h1>chenged</h1>"
