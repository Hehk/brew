import { JetBrains_Mono } from "@next/font/google"
import Header from "@/components/header"
const jetBrains = JetBrains_Mono({ subsets: ["latin"] })


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className={jetBrains.className}>Brew</div>
      </main>
    </>
  )
}
