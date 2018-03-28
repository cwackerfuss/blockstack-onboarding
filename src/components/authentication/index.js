import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PanelShell from 'Common/PanelShell'
import Auth from './views/Auth'

export default class Authentication extends Component {
  render() {
    return (
      <PanelShell>
        <Auth />
      </PanelShell>
    )
  }
}
