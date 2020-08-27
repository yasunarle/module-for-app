import { useFirebase } from "./plugins/firebase"

const { getUser, login } = useFirebase()

// --- 実行テスト ---
login()
console.log("--- test.js: ", getUser())
