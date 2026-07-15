import { Outlet } from 'react-router'
import Navbar from '../components/ui/navbar'
import { Toaster } from 'react-hot-toast'

function rootlayout() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </ >
  )
}

export default rootlayout