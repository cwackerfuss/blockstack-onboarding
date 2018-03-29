import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import PanelShell from 'Common/PanelShell'
import ProgressBar from 'Common/ProgressBar'
import Show from 'Common/Show'
import { Email, Username, Password, Hooray } from './views'

const VIEWS = ['EMAIL', 'USERNAME', 'PASSWORD', 'HOORAY']

class Onboarding extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: '',
    username: '',
    view: 0
  }

  handleValueChange = key => ({ target }) => {
    this.setState({
      [key]: target.value
    })
  }

  updateView = view => () => this.setState({ view })

  render () {
    const { email, password, username, view } = this.state
    const { history } = this.props

    const percentProgress = view / VIEWS.length * 100

    return (
      <PanelShell>
        <ProgressBar percent={percentProgress} />
        <Show when={view === 0}>
          <Email
            next={this.updateView(1)}
            email={email}
            handleValueChange={this.handleValueChange('email')}
          />
        </Show>
        <Show when={view === 1}>
          <Username
            previous={this.updateView(0)}
            next={this.updateView(2)}
            email={email}
            username={username}
            handleValueChange={this.handleValueChange('username')}
          />
        </Show>
        <Show when={view === 2}>
          <Password
            previous={this.updateView(1)}
            next={this.updateView(3)}
            password={password}
            handleValueChange={this.handleValueChange('password')}
          />
        </Show>
        <Show when={view === 3}>
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
