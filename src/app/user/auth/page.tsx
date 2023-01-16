'use client'

import Header from '@/components/header'
import {Auth } from '@supabase/auth-ui-react'
import { useUser } from '@supabase/auth-helpers-react'
import supabase from '@/utils/supabase-browser'

export default function LoginPage () {
  const user = useUser()

  let body = null
  if (!user) {
    body = (
      <Auth 
      redirectTo="/"
      socialLayout="horizontal"
      supabaseClient={supabase}
      />
    )
  } else {
    body = (
      <>
      <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      <p>User: </p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      </>
    )
  }

  return (
    <>
    <Header />
    <main>
      {body}
    </main>
</>
  )
}