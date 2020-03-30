import React from 'react'
import NavB from './NavB'
import AdminBar from './AdminBar'

const Header = (props) => {
	const token = JSON.parse(localStorage.getItem('tokens'))

	return <> {token ? <AdminBar /> : <NavB />}</>
}

export default Header
