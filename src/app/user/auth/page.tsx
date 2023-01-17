"use client"

import Header from "@/components/header"
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import supabase from "@/utils/supabase-browser"
import useUser from "@/utils/use-user"

export default function LoginPage() {
  const user = useUser()

  let body = null
  if (user === "loading") {
    body = <p>Loading...</p>
  } else if (user === null) {
    body = (
      <Auth
        redirectTo="/"
        socialLayout="horizontal"
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              fonts: {
                bodyFontFamily: "var(--font-jet-brains-mono)",
                buttonFontFamily: "var(--font-jet-brains-mono)",
                inputFontFamily: "var(--font-jet-brains-mono)",
                labelFontFamily: "var(--font-jet-brains-mono)",
              },
            },
          },
        }}
      />
    )
  } else {
    body = (
      <>
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>
        <p>User: </p>
      </>
    )
  }

  return (
    <>
      <Header loggedIn={!!user} />
      <main>
        <div className="max-w-sm mx-auto">{body}</div>
      </main>
    </>
  )
}
