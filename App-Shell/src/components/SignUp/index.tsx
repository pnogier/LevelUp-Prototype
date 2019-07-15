/*
 * Package Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import withStyles from '@material-ui/core/styles/withStyles';
import { useTheme } from '@material-ui/styles'
import { styleSignUp } from 'styles/SignUp/signup'
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Status from './status'
import { useTranslation } from 'react-i18next';

import inputSingup from 'configs/form/inputSignup'
/*
 * Local Import
 */

/*
 * Component
 */
const SignUp = () => {
  const organization = ''
  const theme = useTheme()
  const style = styleSignUp(theme)
  const inputsData = inputSingup()
  const { t } = useTranslation('signup');
  
  return (
    <main className={style.main}>
      <Paper className={style.paper}>
        <Avatar className={style.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          { t('register') }
        </Typography>
        <form className={style.form}>
          {
            inputsData.map((input) => {
              return (
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor={input.name}>{input.placeholder}</InputLabel>
                  <Input
                    id={input.name}
                    name={input.name}
                    autoComplete={input.name}
                    type={input.type}
                    autoFocus
                  />
                  <FormHelperText>{t('required')}</FormHelperText>
                </FormControl>
              )
            })
          }
          <Status />
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
  );
};

/*
 * Export
 */
export default SignUp;
