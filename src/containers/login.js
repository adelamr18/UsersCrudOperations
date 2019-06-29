import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { withRouter } from 'react-router-dom'

import '../app.css';
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        }

    }
    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })

    }
    checkUsers = (event) => {
        event.preventDefault();
        this.props.getUsers(this.state.email, this.state.password, this.props.history)

    }
    checkflag = ({ isAuthenticated }) => {
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="login-container-big">
                <div className="panel-heading">
                <div className="panel-title">
                </div>
                </div>
                <form onSubmit={this.checkUsers}>
                    <div className="login-container">
                        <div className="form-group">
                            <label >Email address</label>
                            <input value={this.state.email} onChange={this.onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input value={this.state.password} onChange={this.onChangePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" >
                            </input>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers }, dispatch)
}
function mapStateToProps(state) {
    return {
        login: state.login
    }
}
export default withRouter(connect(mapStateToProps, (mapDispatchToProps))(Login));

