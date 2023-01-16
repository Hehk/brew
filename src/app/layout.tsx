import 'server-only'

import { getCssText } from "../../stitches.config"
import "./globals.css"
import SupabaseListener from "@/components/supabase-listener"
import createClient from "@/utils/supabase-server"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <SupabaseListener accessToken={session?.access_token} />
        {children}
        </body>
    </html>
  )
}

export const revalidate = 0
