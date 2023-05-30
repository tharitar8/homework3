// reducers/usernameReducer.js
const initialState = {
	username: '',
	password: '',
}

const usernameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USERNAME':
			console.log('SET_USERNAME action:', action)
			console.log('Received payload:', action.payload)
			return {
				...state,
				username: action.payload.username,
				password: action.payload.password,
			}
		default:
			return state
	}
}

export default usernameReducer
