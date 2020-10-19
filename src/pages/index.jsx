import React from 'react'
// import Link from 'next/link'
import { SEO, Nav, Footer } from '../components'
// import ScrollReveal from 'scrollreveal'
// import './main.scss'

export default class Home extends React.Component {
  // @ts-ignore
  static async getInitialProps({ query }) {
    return { id: query.id, }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <Nav />
        <main>
        </main>
        <footer>

        </footer>


      </div>
    )
  }
}