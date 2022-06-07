import React, { useContext } from "react";
import NavB from "./NavB";
import AdminBar from "./AdminBar";
import { authContext } from "../context/AuthContext";

const Header = () => {
	const { auth } = useContext(authContext);

	if (auth.data) {
		return <AdminBar />;
	}
	//
	else {
		return <NavB />;
	}
};

export default Header;
