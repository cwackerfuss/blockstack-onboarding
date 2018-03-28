import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PanelShell from 'Common/PanelShell'
import Show from 'Common/Show'
import {
  KeyInfo,
  UnlockKey,
  Key,
  KeyConfirm,
  KeyComplete,
  RecoveryOptions
} from './views'

const VIEWS = {
  KEY_INFO: 'KEY_INFO',
  UNLOCK_KEY: 'UNLOCK_KEY',
  KEY: 'KEY',
  KEY_CONFIRM: 'KEY_CONFIRM',
  KEY_COMPLETE: 'KEY_COMPLETE',
  RECOVERY_OPTIONS: 'RECOVERY_OPTIONS'
}

export default class Seed extends Component {
  state = {
    password: '',
    view: VIEWS.KEY_INFO
  }

  handleValueChange = key => ({ target }) => {
    this.setState({
      [key]: target.value
    })
  }

  updateView = view => () => this.setState({ view })

  render() {
    const { password, view } = this.state

    return (
      <PanelShell>
        <Show when={view === VIEWS.KEY_INFO}>
          <KeyInfo
            next={this.updateView(VIEWS.UNLOCK_KEY)}
            handleValueChange={this.handleValueChange('password')}
          />
        </Show>
        <Show when={view === VIEWS.UNLOCK_KEY}>
          <UnlockKey
            previous={this.updateView(VIEWS.KEY_INFO)}
            next={this.updateView(VIEWS.KEY)}
            password={password}
            handleValueChange={this.handleValueChange('password')}
          />
        </Show>
        <Show when={view === VIEWS.KEY}>
          <Key
            previous={this.updateView(VIEWS.UNLOCK_KEY)}
            next={this.updateView(VIEWS.KEY_CONFIRM)}
          />
        </Show>
        <Show when={view === VIEWS.KEY_CONFIRM}>
          <KeyConfirm
          previous={this.updateView(VIEWS.KEY)}
            next={this.updateView(VIEWS.KEY_COMPLETE)}
          />
        </Show>
        <Show when={view === VIEWS.KEY_COMPLETE}>
          <KeyComplete
          />
        </Show>
      </PanelShell>
    )
  }
}
