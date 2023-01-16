import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>Brew</h1>

      <nav>
        <ul>
          <li>
            <Link href="/user/auth">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
