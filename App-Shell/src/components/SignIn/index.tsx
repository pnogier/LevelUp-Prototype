/*
 * Package Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles'
import { styleSignIn } from 'styles/SignIn/signin'
import FormHelperText from '@material-ui/core/FormHelperText';

import { useTranslation } from 'react-i18next';

import inputSingin from 'configs/form/inputSignin'

/*
 * Local Import
 */

/*
 * Component
 */
const SignIn = () => {
  const theme = useTheme()
  const style = styleSignIn(theme)
  const inputsData = inputSingin()
	const { t } = useTranslation('signin');

  return (
    <main className={style.main}>
      <CssBaseline />
      <Paper className={style.paper}>
        <Avatar className={style.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('login')}
        </Typography>
        <form className={style.form}>
        {
          inputsData.map((input) => {
            return (
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor={input.type}>{input.placeholder}</InputLabel>
                <Input id={input.name} name={input.name} autoComplete={input.name} autoFocus />
                <FormHelperText>{t('required')}</FormHelperText>
              </FormControl>
            )
          })
        }
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t('rememberme')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={style.submit}
          >
            {t('signin')}
          </Button>
        </form>
      </Paper>
      <Link to="/">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={style.submit}
        >
          <p>{t('back')}</p>
        </Button>
      </Link>
    </main>
  )
};

/*
 * Export
 */
export default SignIn;
