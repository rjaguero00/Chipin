import React, { Component } from 'react';
import API from '../../Utils/API.js';

class SearchItem extends Component {

    saveActivity = (event) => {
        const activityData = {
            title: this.props.title,
            body: this.props.body,
            location: this.props.location
        }
        console.log(activityData);
        API.saveActivity(activityData);
    }

    render() {
        return (
            <div className="card result-item">
                <div className="card-body">
                    <h5 className="card-title ">
                       <a href="">{this.props.title}</a></h5>
                    <p className="card-text">Activity: {this.props.body}</p>
                    <button onClick={this.saveActivity} className="btn btn-primary">Save</button>
                </div>
            </div>
        )
    }
}

export default SearchItem;