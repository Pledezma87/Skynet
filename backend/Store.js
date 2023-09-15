// src/redux/reducers/authReducer.js
const initialState = {
    token: null,
    // Otros datos del usuario si es necesario
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { ...state, token: action.payload };
      // Agrega casos para otras acciones y datos del usuario si es necesario
      default:
        return state;
    }
  };
  
  export default authReducer;
  