import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import SignIn from './SignIn';
import axios from 'axios';

/**
 * Компонент-обёртка для формы входа
 * @param {*} props 
 */
function SignInForm(props) {
    const history = useHistory();
    return (
        <SignIn onSubmit={
            values => {
                axios
                    .post(`http://localhost:3002/login/`, values)
                    .then(res => { res.data.success && (history.push('/Application') || props.setAccessLevel(res.data.accessLevel)) });
            }
        }
        />
    );
}
/**
 * Компонент, отвечающий за навигацию на странице
 * @param {*} props 
 */
export default function Routing(props) {
    const { accessLevel, setAccessLevel } = props;
    const { FrameBody } = props;
    return (
        <div>
            <Router> 
                <Switch>
                    <Route path='/SignIn' render={props => <SignInForm {...props} setAccessLevel={setAccessLevel} />} />
                    <Route path='/Application' render={props => <FrameBody {...props} accessLevel={accessLevel} />} />
                    <Route path='/' render={props => <FrameBody {...props} />} />

                </Switch>
            </Router>
        </div>
    )
}
