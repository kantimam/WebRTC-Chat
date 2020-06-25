import React, { useState } from 'react'
import { Box, Button, TextField, FormHelperText } from '@material-ui/core'
import { makeStyles, useTheme, styled } from '@material-ui/core/styles'
import { useStateContext } from '../state/state'
import FormCard from './FormCard'
import login from '../api/login'

interface Props {
  login: () => void
}
const useStyles = makeStyles((theme) => ({
  formCard: {
    margin: 'auto',
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
}))

const Login = () => {
  const classes = useStyles()
  const { state, dispatch } = useStateContext()
  const [username, setName] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formError, setFormError] = useState('')
  console.log(state)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // validate input and count errors (maybe do onInput validation not to sure)
    let errors = 0
    if (!username) {
      setNameError('name is required')
      errors++
    }
    if (username.length < 4) {
      setNameError('min length for name is 4')
      errors++
    }
    if (password.length < 6) {
      setPasswordError('min length for password is 6')
      errors++
    }
    // if no errors try to submit
    if (!errors) {
      login(username, password)
        .then((data) => data.json())
        .then((json) =>
          dispatch({
            type: 'logIn',
            payload: json,
          })
        )
        .catch((e) => {
          // tell the user login failed keep it for 4 seconds the remove it
          console.log(e)
          setFormError('could not login')
          setTimeout(() => setFormError(''), 4000)
        })
    }
  }

  return (
    <Box display="flex" minHeight="100vh">
      <FormCard className={classes.formCard}>
        <form onSubmit={submit}>
          <TextField
            label="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            fullWidth
            required
            error={!!nameError}
            helperText={nameError}
          />

          <TextField
            label="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            className={classes.marginTop}
            type="password"
            fullWidth
            required
            error={!!passwordError}
            helperText={passwordError}
          />

          <Button
            className={classes.marginTop}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            SUBMIT
          </Button>

          <FormHelperText error={!!formError}>{formError}</FormHelperText>
        </form>
      </FormCard>
    </Box>
  )
}

export default Login