import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Board from '@/components/Board'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/b/:boardId/:boardName',
    name: 'board',
    component: Board
  }
]
