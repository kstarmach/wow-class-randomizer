import Expansions from "./expansions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1><span>Select your expansion</span></h1>
      <Expansions />
      <p>© 2023 kstar</p>
    </main>
  )
}
