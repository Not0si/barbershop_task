import { User } from '@interfaces/index'
import { login } from '@services/Users'
import { redirect } from 'react-router-dom'


const isAuthenticated = async () => {
  const userString = localStorage.getItem('user')
  if (userString) {
    try {
      const user = JSON.parse(userString) as User
      const result = await login(user?.email, user?.password)

      return result?.success ?? false

    } catch {
      localStorage.removeItem('user')
      return false
    }
  }

  return false
}

export const PrivatePagesGuard = async () => {
  const result = await isAuthenticated()

  if (!result) {
    return redirect('/login')
  }

  return {}
}

export const PublicPagesGuard = async () => {
  const result = await isAuthenticated()
  if (result) {
    return redirect('/')
  }

  return {}
}

