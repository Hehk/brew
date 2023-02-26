import Link from "next/link"
import H1 from "@/components/h1"

export default function Header({ loggedIn }: { loggedIn: boolean }) {
  let link = (
    <Link
      className="underline decoration-2 underline-offset-4"
      href="/user/account"
    >
      Account
    </Link>
  )
  if (!loggedIn) {
    link = (
      <Link
        className="underline decoration-2 underline-offset-4"
        href="/user/auth"
      >
        Login
      </Link>
    )
  }

  return (
    <header className="container mx-auto flex justify-between pt-8 mb-8 md:mb-16 items-baseline px-4">
      <H1>
        <Link  href="/">Brew</Link>
      </H1>

      <nav className="font-sans">{link}</nav>
    </header>
  )
}
