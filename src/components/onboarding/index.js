import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import PanelShell from 'Common/PanelShell'
import Show from 'Common/Show'
import {
  Email,
  Username,
  Password,
  Hooray
} from './views'

const VIEWS = {
  EMAIL: 'EMAIL',
  USERNAME: 'USERNAME',
  PASSWORD: 'PASSWORD',
  HOORAY: 'HOORAY'
}

class Onboarding extends Component {
  state = {
    email: '',
    password: '',
    username: '',
    view: VIEWS.EMAIL
  }

  handleValueChange = key => ({ target }) => {
    this.setState({
      [key]: target.value
    })
  }

  updateView = view => () => this.setState({ view })

  render() {
    const { email, password, username, view } = this.state
    const { history } = this.props

    return (
      <PanelShell>
        <Show when={view === VIEWS.EMAIL}>
          <Email
            next={this.updateView(VIEWS.USERNAME)}
            email={email}
            handleValueChange={this.handleValueChange('email')}
          />
        </Show>
        <Show when={view === VIEWS.USERNAME}>
          <Username
            previous={this.updateView(VIEWS.EMAIL)}
            next={this.updateView(VIEWS.PASSWORD)}
            email={email}
            username={username}
            handleValueChange={this.handleValueChange('username')}
          />
        </Show>
        <Show when={view === VIEWS.PASSWORD}>
          <Password
            previous={this.updateView(VIEWS.USERNAME)}
            next={this.updateView(VIEWS.HOORAY)}
            password={password}
            handleValueChange={this.handleValueChange('password')}
          />
        </Show>
        <Show when={view === VIEWS.HOORAY}>
          <Hooray
            goToApp={() => {}}
            goToRecovery={() => history.push('/seed')}
            email={email}
            username={username}
          />
        </Show>
      </PanelShell>
    )
  }
}

export default withRouter(Onboarding)
