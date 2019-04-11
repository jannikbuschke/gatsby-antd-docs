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
            Gatsby Antd Markdown Documentation Boilerplate
          </p>
          <h2>
            A gatsby starter to manage and render documentation documents
            (jsx/markdown based)
          </h2>
          <p>
            This is a fork of{' '}
            <a href="https://github.com/cvluca/gatsby-starter-markdown" />
          </p>
          <br />
          <Link to="/docs/get-started/introduction">
            <Button type="primary" size="large" style={{ marginRight: 10 }}>
              Get Started
            </Button>
          </Link>
          <Button
            type="primary"
            size="large"
            href="https://github.com/jannikbuschke/gatsby-antd-docs"
            target="_blank"
          >
            Github
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
