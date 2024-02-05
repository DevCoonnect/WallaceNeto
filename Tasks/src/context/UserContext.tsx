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

    AsyncStorage.setItem('userData', JSON.stringify(user));

    return {name: user.name, email: user.email, token: user.token};
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
