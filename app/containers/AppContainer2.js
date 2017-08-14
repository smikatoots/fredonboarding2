import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Validation from 'react-validation';
import validator from 'validator';
import jspdf from 'jspdf';

class AppContainer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handlePrint = (event) => {
        event.preventDefault();
        console.log('TESTING');
        axios.post('http://localhost:3000/print')
        .then((response) => {
            return response;
        })
        .then((body) => {
            const doc = new jspdf();
            console.log('BODY', body);
            const data = body.data;
            const string = data.firstName + ', ' + data.lastName + ', ' + data.middleName + ', ' + data.gender + ', ' + data.tin;
            doc.text(string, 10, 10);
            doc.save('test.pdf');
        });
        // var doc = new jsPDF();
        // doc.text('Hello world!', 10, 10);
        // doc.save('test.pdf')
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handlePrint}>Submit</button>
            </div>
        );
    }
}

AppContainer2.propTypes = {
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
)(AppContainer2);
