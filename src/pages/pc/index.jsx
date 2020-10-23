import React from 'react'
import CountUp  from 'react-countup'
import { LayoutPc, MobilePower } from '@components'

export default class Home extends React.Component {
  static async getInitialProps({ query }) {
    return { id: query.id, }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <main>
          <LayoutPc>
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

  <MobilePower />
          </LayoutPc>
        </main>
        <footer>

        </footer>


      </div>
    )
  }
}