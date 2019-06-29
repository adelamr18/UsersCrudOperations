import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../app.css';
import { connect } from 'react-redux';
import { getDashboardUsers, deleteDashboardUsers, updateDashboardUsers ,addDashboardUsers } from '../actions';
import { bindActionCreators } from 'redux'
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
            changeUserName: '',
            selectedUserId: '',
            showEditForm: false,
            addedName: '',
            addedAge: '',
    
        };
    }
    showeditbar(id) {
        this.setState({
            //  canEdit: !this.state.canEdit,
            selectedUserId: id
        })

    }
    componentWillMount() {
        this.props.getDashboardUsers();
    }

    deleteUser = (id) => {
        this.props.deleteDashboardUsers(id)
        this.props.getDashboardUsers()

    }
    onChangeUserName = (event) => {
        event.preventDefault();
        this.setState({
            changeUserName: event.target.value
        })
    }
    handleClick = (user, username) => {
        this.setState({
            selectedUserId: ''
        })
        this.props.updateDashboardUsers(user, username)
        this.props.getDashboardUsers()
    }
    addNewUsers=()=>{
        this.props.addDashboardUsers(this.state.addedName,this.state.addedAge,this.props.login.dashboardusers.length-1)
        this.props.getDashboardUsers();
    }
    onAddedName = (event) => {
        this.setState({
            addedName: event.target.value
        })
        console.log(this.state.addedName, this.state.addedAge)
    }
    onAddedAge = (event) => {
        this.setState({
            addedAge: event.target.value
        })

        console.log(this.state.addedAge)

    }



    showDashboardUsers = ({ dashboardusers }) => {
// var array=dashboardusers;
// const lastelement=array.slice(-1).pop();
// console.log(lastelement)



        if (dashboardusers) {
            const lastId=dashboardusers.map((item) =>{
                console.log(item.id);
            })
            return dashboardusers.map((user) => {
                return (
                    <div>
                        <div className="users-container" key={user.id} >
                            <div className="card-container d-flex justify-content-center card">
                                <div>
                                    {
                                        (this.state.selectedUserId === user.id) && (
                                            <div>
                                                <input value={this.state.changeUserName} onChange={this.onChangeUserName.bind(this)} type="text" className="form-control" placeholder="Enter Name" />
                                                <button type="button" onClick={this.handleClick.bind(this, user, this.state.changeUserName)} className="btn btn-danger" >Confirm</button>
                                            </div>
                                        )}
                                </div>
                                <div className="card-body">
                                    <p className="card-text"></p>
                                </div>
                                <h4>{user.name}</h4>
                                <h5>{user.age}</h5>
                                <h5>{user.id}</h5>
                                <div>
                                    <button type="button" onClick={this.showeditbar.bind(this, user.id)} className="btn btn-danger" >Edit</button>
                                    <button type="button" onClick={this.deleteUser.bind(this, user.id)} className="btn btn-success" >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-items" to="/">Home</Link>
                    <Link className="navbar-items" to="/login">Login</Link>
                    <Link className="navbar-items" to="/logout">Logout</Link>
                </nav>
                <div className="big-container">
                    <div className="dashboard-users">
                        <div className="card-container d-flex justify-content-center card">
                            <div className="card-body ">
                                <h4 className="card-title">Add User</h4>
                                <p>Name</p>
                                <input value={this.state.addedName} onChange={this.onAddedName} type="text" className="form-control" placeholder="Enter Name" />
                                <p>Age</p>
                                <input value={this.state.addedAge} onChange={this.onAddedAge} type="number" className="form-control" placeholder="Enter Age" />
                                <button type="button" className="btn btn-danger" >Cancel</button>
                                <button type="button" onClick={this.addNewUsers.bind(this)} className="btn btn-success" >Add</button>
                            </div>
                        </div>
                        {
                            this.showDashboardUsers(this.props.login)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDashboardUsers, deleteDashboardUsers, updateDashboardUsers,addDashboardUsers }, dispatch)
}
function mapStateToProps(state) {
    debugger
    return {
        login: state.login
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)