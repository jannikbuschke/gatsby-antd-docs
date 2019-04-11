import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Layout, Menu } from 'antd'

const { Header: AntdHeader } = Layout

interface Props {
  siteTitle: string
}

export class Header extends Component<Props> {
  render() {
    const { siteTitle } = this.props
    return (
      <AntdHeader>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/" style={{ textDecoration: 'none' }}>
              {siteTitle}
            </Link>
          </Menu.Item>
        </Menu>
      </AntdHeader>
    )
  }
}
