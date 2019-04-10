import React from 'react'
import { RootLayout as Layout } from '../Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
          <p
            style={{
              color: 'cornflowerblue',
              fontSize: 50,
              fontWeight: 'bold',
            }}
          >
            Glue
          </p>
          <h2>
            .NET Core + React + libraries + boilerplate for modular webbased
            applications
          </h2>
          <br />
          <Link to="/docs/get-started/introduction">
            <Button type="primary" size="large" style={{ marginRight: 10 }}>
              Get Started
            </Button>
          </Link>
          <Button
            type="primary"
            size="large"
            href="https://github.com/cvluca/gatsby-starter-markdown"
          >
            Github
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
