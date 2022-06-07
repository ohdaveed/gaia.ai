/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { authContext } from "../context/AuthContext";

const Dashboard = () => {
	const { setAuthData, auth } = useContext(authContext);

	const [user, setUser] = useState("Loading...");

	const onLogOut = () => {
		setAuthData(null);
	};

	useEffect(() => {
		async function fetchData() {
			const requestOptions = {
				method: "GET",
				headers: { Authorization: "Bearer " + auth.data },
			};

			const result = await fetch(
				"http://localhost:8000/api/users/currentuser",
				requestOptions
			)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setUser(data.username);
					// console.log("\n this is data from login");
					// console.log(data);
				});
		}
		fetchData();
	}, [auth.data]);

	return (
		<>
			<div
				style={{ height: "100vh" }}
				className="d-flex justify-content-center align-items-center"
			>
				<div style={{ width: 300 }}>
					<h2 className="text-center">
						Welcome, <FaBeer />
						{user}
					</h2>
					<Button
						variant="primary"
						type="button"
						className="w-100 mt-3"
						onClick={onLogOut}
					>
						Log Out
					</Button>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
