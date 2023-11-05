"use client";
import {UserContextProvider} from '../contexts/UserContext.js';
import Home from '../pages/Home';

export default () => {
  return (
    <UserContextProvider>
        <Home></Home>
    </UserContextProvider>
  )
}
