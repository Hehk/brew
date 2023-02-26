import 'server-only'

import { getSession } from "@/utils/supabase-server"
import Header from '@/components/header'

export default async function Page() {
    const session = await getSession()

  return (
    <>
      <Header loggedIn={!!session} />
      <main className="container mx-auto px-4">
        <h2>Welcome to Brew!</h2>
        <p>This is a work in progress, to make brewing delicious coffee easier!</p>
      </main>
    </>
  )
}
