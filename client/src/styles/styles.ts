import { makeStyles, Theme } from '@material-ui/core'

export const authFormStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    '& > .MuiTextField-root + .MuiTextField-root': {
      marginTop: theme.spacing(2),
    },
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}))
