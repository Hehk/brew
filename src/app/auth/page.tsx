"use client"
import supabase from "@/utils/supabase-browser"
import Header from "@/components/header"
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"

export default function LoginPage() {
  return (
    <>
      <Header loggedIn={false} />
      <main>
        <div className="max-w-sm mx-auto">
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
        </div>
      </main>
    </>
  )
}
