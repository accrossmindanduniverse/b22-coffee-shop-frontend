import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Private = ({children, auth, ...rest}) => {
  const { onAuth } = auth
  return (
    <Route { ...rest } render={() => {
        if (!onAuth) {
          return (<Redirect to='/signin'/>)
        } else {
          return (children)
        }
    }}/>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Private)
