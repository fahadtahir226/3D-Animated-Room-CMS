import React, {useState, useEffect} from 'react';
import { db } from '../../../Firebase/firestore'
import { auth } from '../../../Firebase/auth'
const Admin = () => {
  const [access, setAccess] = useState('loading');

useEffect(() => {
  auth.onAuthStateChanged(user => {
    if(user){
      db.collection('users').doc(auth.currentUser.uid).get()
      .then(res => {
        console.log(res.data())
        if(res.data().type === 'unassigned') setAccess(false);
        else if(res.data().type === 'admin') setAccess(true);
      })
    }
  })
});
  return (
    <div>
    <div>
      {access === 'loading' ? "Loading..." : access ?
        <div>Welcome Admin Dashboard</div>
      : "Access Denied"}
    </div>
    </div>
  );
};

export default Admin;