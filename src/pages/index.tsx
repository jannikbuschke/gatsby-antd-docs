import React from 'react'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Header } from '../Header'

const IndexPage = () => {
  return (
    <div>
      <Header siteTitle={'gatsby-antd-docs'} />
      <div align="center" style={{ padding: 80 }}>
        <p
          style={{
            color: 'cornflowerblue',
            fontSize: 50,
            fontWeight: 'bold',
          }}
        >
          Gatsby Antd Markdown Documentation Boilerplate
        </p>
        <h2>A gatsby starter to create documentation websites</h2>
        <p>
          This is a fork of{' '}
          <a href="https://github.com/cvluca/gatsby-starter-markdown">
            https://github.com/cvluca/gatsby-starter-markdown
          </a>
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
  )
}

export default IndexPage
