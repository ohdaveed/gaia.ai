import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/auth.js'

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }){
	const { authTokens } = useAuth()
	const authenticated = localStorage.getItem('user')

	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	)
}

export default PrivateRoute
