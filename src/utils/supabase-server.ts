import { headers, cookies } from "next/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "../lib/database.types"

const createClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

export default createClient

export const getSession = async () => {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session
}
