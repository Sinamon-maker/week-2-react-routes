import React from 'react'

import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/15ffc21a-2cbb-409f-88b4-ae9c70b882b8"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
