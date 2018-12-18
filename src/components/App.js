import React, {Component} from "react";
import {connect} from "react-redux";
import ConnectedTodos from "./Todo";
import ConnectedGoals from "./Goal";
import {handelReceiveData} from "../actions/common";
class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;

        dispatch(handelReceiveData())
    }

    render() {
        const {loading} = this.props;

        if (loading === true) {
            return <h3>Loading</h3>
        }
        return (
            <div className="App">
                <ConnectedTodos/>
                <ConnectedGoals/>
            </div>
        );
    }
}

export default connect((state) => ({
    loading: state.loading
}))(App);

