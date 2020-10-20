import React from 'react'
// import Link from 'next/link'
import { SEO, Nav, Footer } from '../components'
import CountUp  from 'react-countup'
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
          <div>
          <CountUp
            className="account-balance"
            start={-875.039}
            end={16056327.012}
            duration={2.75}
            separator=","
            decimals={3}
            decimal="."
            prefix="EUR "
            suffix=" left"
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
          />

          </div>
        </main>
        <footer>

        </footer>


      </div>
    )
  }
}