import {useEffect, useState } from 'react'
import './Friends.css'
import Bainchod from './bainchod';
export default function Friends() {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
    .then(data=>setFriends(data))
  },[])


  return (
    <div className='box'>
      <h3>Friends:{friends.length}</h3>
      {
        friends.map(friend => <Bainchod friend={friend}></Bainchod>)
    }
    </div>
  )
}