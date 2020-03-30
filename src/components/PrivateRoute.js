import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/auth.js'

function PrivateRoute({ component: Component, ...rest }) {
	const { authTokens } = useAuth()
	const yes = true

	return (
		<Route
			{...rest}
			render={(props) =>
				yes ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	)
}

export default PrivateRoute
