import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Validation from 'react-validation';
import validator from 'validator';
import Routes from '../routes';

// must change to FormContainer later

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            middleName: '',
            gender: '',
            tin: '',
            errors: {},
            isNotEmpty: true,
            redirect: false
        };
    }

    onClick = (event) => {
        event.preventDefault();
        this.setState({
            errors: this.form.validateAll()
        });
    };

    handleNewTextChange(event, item) {
        const key = item;
        const val = event.target.value;
        const obj  = {};
        obj[key] = val;
        this.setState(obj);
    }

    handlePostRequest() {
        console.log(this.state.errors);
        const self = this;
        if (Object.keys(this.state.errors).length === 0) {
            axios.post('http://localhost:3000/form1', {
                data: this.state
            })
            .then(function(response) {
                console.log('did we receive from server? ', response);
                self.setState({redirect: true});
                // ADD "NEXT PAGE" METHOD HERE
            })
            .catch((err) => {
                console.log('Error!', err);
            });
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            errors: this.form.validateAll()
        }, () => this.handlePostRequest());
    }

    render() {
        if (this.state.redirect) return <Redirect to="/form2" />;
        return (
            <div>
                <Link to="/form2">Form 2</Link>
                <Validation.components.Form ref={(c) => {this.form = c;}}>
                    Last Name: <Validation.components.Input
                        type="text"
                        validations={['required']}
                        onChange={(event) => this.handleNewTextChange(event, 'lastName')}
                        value=""
                        name="lastName"
                        placeholder="Last Name"/><br/>
                    First Name: <Validation.components.Input
                        type="text"
                        validations={['required']}
                        onChange={(event) => this.handleNewTextChange(event, 'firstName')}
                        value=""
                        name="firstName"
                        placeholder="First Name"/><br/>
                    Middle Name: <Validation.components.Input
                        type="text"
                        validations={['required']}
                        onChange={(event) => this.handleNewTextChange(event, 'middleName')}
                        value=""
                        name="middleName"
                        placeholder="Middle Name"/><br/>
                    Gender: <Validation.components.Input
                        type="text"
                        validations={['required']}
                        onChange={(event) => this.handleNewTextChange(event, 'gender')}
                        value=""
                        name="gender"
                        placeholder="Gender"/><br/>
                    TIN #: <Validation.components.Input
                        type="text"
                        validations={['required']}
                        onChange={(event) => this.handleNewTextChange(event, 'tin')}
                        value=""
                        name="tin"
                        placeholder="TIN #"/><br/>
                    <button className="button" onClick={this.onClick}>Show errors model (validateAll)</button>
                    <div>Errors model: {JSON.stringify(this.state.errors)}</div>
                    { !this.state.isNotEmpty ?
                        <button disabled>Submit</button> :
                        <button type="button" onClick={this.handleFormSubmit}>Submit</button>
                    }
                </Validation.components.Form>
            </div>
        );
    }
}

AppContainer.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
