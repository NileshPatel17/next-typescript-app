import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { version, name } from '../package.json'

const Hola = () => {
  return (
    <Layout title="Hola | Next.js + TypeScript Example">
      <h1>Name: {name} 👋</h1>
      <h2>Version: {version}</h2>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Hola
