import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

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
            countryOfBirth: '',
            countryOfResidence: '',
            countryOfCitizenship: '',
            telephoneNumber: '',
            mobileNumber: '',
            email: '',
            civilStatus: ''
        };
    }

    handleNewTextChange(event, item) {
        const key = item;
        const val = event.target.value;
        const obj  = {};
        obj[key] = val;
        this.setState(obj);
    }

    handleFormSubmit() {
        const self = this;
        axios.post('http://localhost:3000/form1', {
            data: this.state
        })
        .then(function(response) {
            console.log('did we receive from server? ', response);
        })
        .catch((err) => {
            console.log('Error!', err);
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                Last Name: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'lastName')}
                    value={this.state.lastName}
                    placeholder="Last Name"/><br/>
                First Name: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'firstName')}
                    value={this.state.firstName}
                    placeholder="First Name"/><br/>
                Middle Name: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'middleName')}
                    value={this.state.middleName}
                    placeholder="Middle Name"/><br/>
                Gender: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'gender')}
                    value={this.state.gender}
                    placeholder="Gender"/><br/>
                TIN #: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'tin')}
                    value={this.state.tin}
                    placeholder="TIN #"/><br/>
                Country of Birth: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'countryOfBirth')}
                    value={this.state.countryOfBirth}
                    placeholder="Country of Birth"/><br/>
                Country of Residence: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'countryOfResidence')}
                    value={this.state.countryOfResidence}
                    placeholder="Country of Residence"/><br/>
                Country of Citizenship: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'countryOfCitizenship')}
                    value={this.state.countryOfCitizenship}
                    placeholder="Country of Citizenship"/><br/>
                Telephone Number: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'telephoneNumber')}
                    value={this.state.telephoneNumber}
                    placeholder="Telephone Number"/><br/>
                Mobile Number: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'mobileNumber')}
                    value={this.state.mobileNumber}
                    placeholder="Mobile Number"/><br/>
                Civil Status: <input
                    type="text"
                    onChange={(event) => this.handleNewTextChange(event, 'civilStatus')}
                    value={this.state.civilStatus}
                    placeholder="Civil Status"/><br/>
                {/* {this.state} */}
                <button type="button" onClick={() => this.handleFormSubmit()}>Submit Form</button><br/>
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
