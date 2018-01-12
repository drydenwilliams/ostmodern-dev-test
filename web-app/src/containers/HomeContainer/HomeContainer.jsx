import React from 'react'
import { connect } from 'react-redux'

import { selectEpisode } from '../../actions/sets-actions'
import ContentList from '../../components/ContentList/ContentList'

class HomeContainer extends React.Component {

  constructor () {
    super()
    this.handleEpisodeClick = this.handleEpisodeClick.bind(this)
  }

  handleEpisodeClick (episodeItem) {
    const { dispatch } = this.props
    dispatch(selectEpisode(episodeItem))
  }

  componentWillReceiveProps (nextProps) {
    const { history } = this.props
    if (nextProps.selectedEpisode !== this.props.selectedEpisode) {
      history.push(`/${nextProps.selectedEpisode.slug}`)
    }
  }

  render () {
    const { homeSet, homeSetItems } = this.props

    if (!homeSet) {
      return <div>Loading...</div>
    }

    return (
      <div className="home-container">
        <h1>{homeSet.title} set</h1>
        
        <ContentList
          items={homeSetItems}
          handleEpisodeClick={this.handleEpisodeClick}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    homeSet: state.sets.homeSet,
    homeSetItems: state.sets.homeSetItems,
    selectedEpisode: state.sets.selectedEpisode
  }
}

export default connect(mapStateToProps)(HomeContainer)
