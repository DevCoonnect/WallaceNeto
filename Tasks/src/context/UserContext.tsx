import React, {createContext, useReducer} from 'react';

type UserType = {
  name: string;
  email: string;
  token: string;
};

const initialState: UserType = {
  name: 'Ze do teste',
  email: 'ze@teste.com',
  token: 'jdfhkdsjfhkjdf',
};

const UserContext = createContext<UserType | {}>({});

export const UserProvider = (props: any) => {
  function reducer(state: UserType, action: any): UserType {
    const user = action.payload;
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
