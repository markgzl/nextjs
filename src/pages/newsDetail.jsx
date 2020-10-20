import React from 'react'


export default class NewsDetailPage extends React.Component {
  static async getInitialProps ({query,...rest}){
    return {id: query.id}
  }
  constructor(props){
    super(props)
    console.log(props)
  }

  add = () => {

  }
  render(){
    return (
      <div className="container">
				NewsDetailPage
      </div>
    )
  }
}