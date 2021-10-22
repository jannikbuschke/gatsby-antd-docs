import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Gatsby Ant Design Docs Boilerplate
      </p>
      <h2>A gatsby starter to create documentation websites</h2>
      <p>
        This is a fork of{' '}
        <a href="https://github.com/cvluca/gatsby-starter-markdown">
          https://github.com/cvluca/gatsby-starter-markdown
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://twitter.com/jannikbuschke"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/jannikbuschke/gatsby-antd-docs"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
