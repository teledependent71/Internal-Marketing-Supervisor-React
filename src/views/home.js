import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Marketing Supervisor</title>
        <meta property="og:title" content="Internal Marketing Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
