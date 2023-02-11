import { AuthUser } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import supabase from "./supabase-browser"

type state = "loading" | AuthUser | null
const useUser = () => {
  const [user, setUser] = useState<state>("loading")

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      console.log(res)
      const {
        data: { user },
        error,
      } = res
      if (error) {
        console.error(error)
      }
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return user
}

export default useUser
