import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { reduxForm, Field } from 'redux-form';

/**
 * Настройка стилей страницы
 */
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


/**
 * Компонет-обёртка тестового поля
 * @param {*} props 
 */
const TextFieldWrapper = props => {
  const { input, ...other } = props
  return <TextField {...input} {...other} />;
};
/**
 * Форма добавления записи
 * @param {*} props 
 */
function AddForm(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="film_name" label="Название фильма" />
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="country" label="Страна" type="text2" />
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="regisseur" label="Режиссёр" type="text3" />
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="date_release" type="date" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Добавить запись</Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}
let Form = reduxForm({ form: "Form_is_ready" })(AddForm);
export default Form;