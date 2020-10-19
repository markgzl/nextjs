import React from 'react'


export default class NewsDetailPage extends React.Component {
  static async getInitialProps ({query}){
   
    return {id: query.id}
  }
  constructor(props){
    super(props)
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