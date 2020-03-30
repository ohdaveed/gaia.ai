import React from 'react'
import NavB from './NavB'
import AdminBar from './AdminBar'

const Header = () => {
	const token = localStorage.getItem('tokens')

	return <> {token ? <AdminBar /> : <NavB />}</>
}

export default Header
