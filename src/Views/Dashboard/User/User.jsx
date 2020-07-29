import React, {useState, useEffect} from 'react';
import { db } from '../../../Firebase/firestore'
import { auth } from '../../../Firebase/auth'
const User = () => {
  const [access, setAccess] = useState('loading');

useEffect(() => {
  auth.onAuthStateChanged(user => {
    if(user){
      db.collection('users').doc(auth.currentUser.uid).get()
      .then(res => {
        if(res.data().type === 'Unassigned') setAccess(true);
        else if(res.data().type === 'admin') setAccess(false);
      })
    }
  })
});
  return (
    <div>
      {access === 'loading' ? "Loading..." : access ?
        <div>Welcome User Dashboard</div>
      : "Access Denied"}
    </div>
  );
};

export default User;