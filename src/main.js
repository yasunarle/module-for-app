import "./plugins/firebase"
import "./test"
// Plugins
import { useFirebase } from "./plugins/firebase"

const { getUser } = useFirebase()

// --- 実行テスト ---
console.log("--- main.js: ", getUser())

// --- メモ ---
// const app = document.getElementById("app")
