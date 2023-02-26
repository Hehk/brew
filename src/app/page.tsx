import "server-only"

import { getSession } from "@/utils/supabase-server"
import Header from "@/components/header"
import H1 from "@/components/h1"

export default async function Page() {
  const session = await getSession()

  return (
    <>
      <Header loggedIn={!!session} />
      <main className="container mx-auto px-4">
        <H1>Bringing science to brewing!</H1>
        <p>
          This is a work in progress, to make brewing delicious coffee easier!
        </p>
      </main>
    </>
  )
}
