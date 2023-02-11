import createClient from "@/utils/supabase-server"

export default async function () {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}
