import React, {createContext, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserType = {
  name: string;
  email: string;
  token: string;
};

const initialState: UserType = {
  name: '',
  email: '',
  token: '',
};

const UserContext = createContext<UserType | {}>({});

export const UserProvider = (props: any) => {
  function reducer(state: UserType, action: any): UserType {
    const user = action.payload;

    switch (action.type) {
      case 'LOGIN':
        AsyncStorage.setItem('userData', JSON.stringify(user));
        return {...user};
      case 'LOGOUT':
        AsyncStorage.removeItem('userData');
        console.log('Deslogou');
        return {...initialState};
      default:
        console.log('Caso não tratado');
        return {...state};
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
