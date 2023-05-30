// actions/username.js
export const setUsername = (username, password) => {
	return {
		type: 'SET_USERNAME',
		payload: {
			username: username,
			password: password,
		},
	}
}
