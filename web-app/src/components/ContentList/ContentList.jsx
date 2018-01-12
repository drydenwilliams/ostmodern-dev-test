import React from 'react'
import './ContentList.css'
import ContentListItem from '../ContentListItem/ContentListItem'

const ContentList = ({ items, handleEpisodeClick }) => {
    return (
        <div className="content-list">
            {items.map((item, index) => (
                <ContentListItem
                  item={item}
                  index={index}
                  handleEpisodeClick={handleEpisodeClick}
                  key={item.uid}
                />
            ))}
        </div>
    )
}

export default ContentList
