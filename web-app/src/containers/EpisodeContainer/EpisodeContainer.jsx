import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class EpisodeContainer extends Component {

  componentDidMount () {
    // TODO: get the episode if page refreshed
  }

  render() {
    const { selectedEpisode } = this.props
    const createdDate = new Date(selectedEpisode.created).toDateString()
    const endsOnDate = new Date(selectedEpisode.ends_on).toDateString()
    return (
      <div className="EpisodeContainer">
        <h1>
          {selectedEpisode.title}
          <br/>
          <small>{selectedEpisode.slug}</small>
        </h1>
        <div className="date-wrapper">
          <div className="">
          <span>Created on: </span>
          <strong>{createdDate}</strong>
          </div>
          <div className="">
          <span>Ends on: </span>
          <strong>{endsOnDate}</strong>
          </div>
        </div>
        <Link className="btn btn--secondary" to='/'>Back</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    homeSet: state.sets.homeSet,
    selectedEpisode: state.sets.selectedEpisode
  }
}

export default connect(mapStateToProps)(EpisodeContainer)
