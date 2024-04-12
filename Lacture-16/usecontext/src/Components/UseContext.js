import React, {useContext} from 'react';
import { context } from '../App';

export const UseContext = () => {
    let myName = useContext(context);
  return (
    <div>My Name is... {myName}</div>
  )
}
