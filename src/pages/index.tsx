import React from 'react'
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
        Glow app framework
      </p>
      <h2>A webapp framework build with ASP.NET Core and react.js</h2>
      <br />
      <Button.Group size="large">
        <Button>
          <Link to="https://twitter.com/jannikbuschke" target="blank">
            Twitter <TwitterOutlined />
          </Link>
        </Button>
        <Button>
          <Link to="https://github.com/jannikbuschke/glow" target="blank">
            Github <GithubOutlined />
          </Link>
        </Button>
        <Button type="primary">
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
