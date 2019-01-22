import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'

const Comments = ({ identifier, url, title }) => (
  <DiscussionEmbed
    shortname={'www-buildingthings-io'}
    config={{
      url,
      identifier,
      title,
    }}
  />
)

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
