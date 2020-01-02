import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { version, name } from '../package.json'
import '../styles/one.css';
import '../styles/two.scss';

const Hola = () => {
  return (
    <Layout title="Hola | Next.js + TypeScript Example">
      <h1>Name: {name} 👋</h1>
      <span className='header'>Version: {version}</span>
      <span className='header-g'>Version: {version}</span>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Hola
