import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './ContentListItem.css'

import { fetchEpisodesContent, fetchDevidersContent } from '../../actions/sets-actions'

const propTypes = {
  item: PropTypes.object,
  dispatch: PropTypes.func,
  index: PropTypes.number,
  handleEpisodeClick: PropTypes.func
}

class ContentListItem extends React.Component {

  componentDidMount () {
    const { dispatch, item, index } = this.props

    if (!item.content_url) {
      return
    }

    const episodeUid = item.content_url.replace(/^\/+/g, '').split('/').splice(2)[0]
    if (item.content_type === 'divider') {
      dispatch(fetchDevidersContent(index, episodeUid))
    } else {
      dispatch(fetchEpisodesContent(index, episodeUid))
    }
  }

  renderTitleGroup () {
    const { item } = this.props
    if (!item.title) {
      return 'Loading...'
    }

    return <h3>{item.title}</h3>
  }

  renderLinkButton () {
    const { item, handleEpisodeClick } = this.props
    return (
      <button
        className="btn btn--secondary"
        onClick={() => handleEpisodeClick(item)}
      >
        View
            </button>
    )
  }

  render () {
    const { item } = this.props

    if (item.slug === 'standard') {
      return null
    }

    return (
      <div className="content-list__item">
        <div className="inner">
          {this.renderTitleGroup()}
          {this.renderLinkButton()}
        </div>
      </div>
    )
  }
}

ContentListItem.propTypes = propTypes

export default connect()(ContentListItem)