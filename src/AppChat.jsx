import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Chats from './pages/Chats'
import Home from './pages/Home'
import { authUser } from './redux/actions/authActions'
import { updateUser } from './redux/actions/userActions'
import { PrivateRoute } from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

export const AppChat = () => {

  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem('data-auth'));
  if (data) {
    dispatch(authUser(data.token));
    dispatch(updateUser(data.user));
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        } />
        <Route path="/chats" element={
          <PrivateRoute>
            <Chats />
          </PrivateRoute>
        } />
      </Routes>
    </div>

  )
}
