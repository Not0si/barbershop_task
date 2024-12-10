import {
  Button,
  Container,
  TextField,
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  Alert
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/Users'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const response = await login(email, password)
    if (response.success) {
      localStorage.setItem('user', JSON.stringify(response.user))
      navigate('/')
    } else {
      setError(response?.message ?? "Something went wrong")
    }
  }

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Box mb={3}>
            <Typography variant="h5" component="h1" gutterBottom>
              Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your credentials to sign in
            </Typography>
          </Box>

          {error && <Alert severity="error">{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                placeholder="Enter your email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                placeholder="Enter your password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default LogIn