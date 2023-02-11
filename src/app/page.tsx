import "server-only"

import Header from "@/components/header"
import getSession from "@/utils/get-session"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await getSession()
  const loggedIn = !!session

  // TODO - figure out some kind of hero page
  if (!loggedIn) {
    redirect("/auth")
  }

  const buttonCls =
    "border border-black font-mono py-2 px-4 rounded-sm shadow-md shadow-indigo-300 hover:shadow-lg hover:shadow-indigo-400 transition duration-200 ease-in-out"

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="container mx-auto px-4">
        <section className="mb-8 md:mb-16">
          <h2 className="font-mono text-2xl mb-4">Log</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <Link className={buttonCls} href="/log/new">
              Custom
            </Link>
            <Link className={buttonCls} href="/log/new">
              Espresso
            </Link>
            <Link className={buttonCls} href="/log/new">
              Aeropress
            </Link>
            <button className={buttonCls}>+</button>
          </div>
        </section>
        <section className="mb-8 md:mb-16">
          <h2 className="font-mono text-2xl mb-4">Your Coffee</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className={buttonCls}>
              <h3 className="font-mono text-xl mb-2">Onyx Coffee</h3>
              <div>Krampus</div>
              <div>Roast: 2023/01/01</div>
            </div>

            <div className={buttonCls}>
              <h3 className="font-mono text-xl mb-2">Central Market</h3>
              <div>Decaf</div>
              <div>Roast: 2023/01/01</div>
            </div>

            <button className={buttonCls}>+</button>
          </div>
        </section>
        <section className="mb-8 md:mb-16">
          <h2 className="font-mono text-2xl mb-4">Activity</h2>
        </section>
      </main>
    </>
  )
}
