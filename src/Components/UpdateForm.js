import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { reduxForm, Field } from 'redux-form';
import { load } from './store';
import axios from 'axios';
import { connect } from 'react-redux';

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

const TextFieldWrapper = props => {
  const { input, ...other } = props
  return <TextField {...input} {...other} />;

};
/**
 * Форма обновления записи таблицы
 * @param {*} props 
 */
function UpdateForm(props) {
  const classes = useStyles();
  const { id } = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="film_name" label="Название фильма" />
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="country" label="Страна" type="text2" />
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="regisseur" label="Режиссёр" type="text3" />
          <Field component={TextFieldWrapper} variant="outlined" margin="normal" required fullWidth name="date_release" type="date" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Update dart</Button>
          <Button onClick={() => axios.get(`http://localhost:3002/ticket/${id}`).then(response => props.load(response.data[0]))} fullWidth variant="contained" color="primary" className={classes.submit}>Upload data</Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}
let Form = reduxForm({ form: "UpdateForm" })(UpdateForm);


// You have to connect() to any reducers that you wish to connect to yourself
Form = connect(
  state => ({
    initialValues: state.ticket.data, // pull initial values from account reducer
  }),
  { load: load }, // bind account loading action creator
)(Form);

export default Form;