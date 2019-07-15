import React, { useState, FunctionComponent } from 'react';
import classNames from 'classnames';
import { NoSsr, Typography, MenuItem, Chip, Paper, TextField, FormControl } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { stylesStatus } from 'styles/SignUp/status'
import { useTheme } from '@material-ui/styles';
import Select from 'react-select';
import selectStatus from 'configs/form/status'
import { useTranslation } from 'react-i18next';

const Status = () => {
  const [multi, setMulti] = useState([])
  const theme = useTheme()
  const styles = stylesStatus(theme)
  const status = selectStatus()
  const { t } = useTranslation('status');

  //@ts-ignore
  const handleChange = name => value => {
    setMulti(value)
  };
  //@ts-ignore
  function NoOptionsMessage(props) {
    return (
      <Typography
        color="textSecondary"
        className={styles.noOptionsMessage}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }
  //@ts-ignore
  function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
  }
  //@ts-ignore
  function Control(props) {
    return (
      <TextField
        fullWidth
        InputProps={{
          inputComponent,
          inputProps: {
            className: styles.input,
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    );
  }
  //@ts-ignore
  function Option(props) {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component="div"
        style={{
          fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
  }
  //@ts-ignore
  function Placeholder(props) {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.placeholder}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }
  //@ts-ignore
  function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
  }
  //@ts-ignore
  function MultiValue(props) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
  }
  //@ts-ignore
  function Menu(props) {
    return (
      <Paper square className={styles.paper} {...props.innerProps}>
        {props.children}
      </Paper>
    );
  }
  const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    ValueContainer,
  };
  const selectStyles = {
    //@ts-ignore
    input: base => ({
      ...base,
      color: '#red',
      '& input': {
        font: 'inherit',
      },
    }),
  };
  return (
      <div className={styles.root}>
        <FormControl margin="normal" fullWidth>
          <Select
            classes={styles}
            styles={selectStyles}
            textFieldProps={{
              label: t('label'),
              InputLabelProps: {
                shrink: true,
              },
            }}
            options={status}
            components={components}
            value={multi}
            onChange={handleChange('multi')}
            placeholder={t('placeholder')}
            isMulti
          />
        </FormControl>
      </div>
  )
};

/*
 * Export
 */
export default Status;
