import React from 'react'
import AdminLogin from '../Admin-Login/AdminLogin'
import AdminNavLogin from '../Admin-NavLogin/AdminNavLogin'

export default function Admin() {
  return (
    <div>
      <AdminNavLogin/>
      <div className='' >
        <AdminLogin/>
      </div>
      
    </div>
  )
}
