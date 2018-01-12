import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { fetchSets } from '../../actions/sets-actions'

import HomeContainer from '../HomeContainer/HomeContainer'
import EpisodeContainer from '../EpisodeContainer/EpisodeContainer'

class AppContainer extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchSets())
  }

  render () {
    return (
      <div>
        <header className="header">
        <div className="container">
          Skylark API - dev test
          </div>
        </header>
        <Router>
          <div className="container">
            <Route path='/' exact component={HomeContainer} />
            <Route path={`/:uid`} component={EpisodeContainer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default connect()(AppContainer)
