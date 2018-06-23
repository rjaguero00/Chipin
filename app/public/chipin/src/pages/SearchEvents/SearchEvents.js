
import React, { Component } from 'react';

import SearchList from '../../components/SearchList';
import SearchItem from '../../components/SearchItem';
import SearchModal from '../../components/SearchModal';
import Application from '../../components/Application';
import { Col, Row, Container } from "../../components/Grid";
import API from '../../utils/API.js';

class SearchEvents extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.loadActivities();
    };

    loadActivities = () => {
        API.getActivities()
            .then(res => {
                this.setState({ activities: res.data })
            })
            .catch(err => console.log(err));
    };

    // submit search function for future filtered search of activities
    // submitSearch = (searchData) => {
    //     console.log(searchData);

    //     API.searchActivites(searchData)
    //         .then(res => {
    //             this.setState({ results: res.data.response.docs });
    //             console.log(this.state.results)
    //         }
    //         )
    //         .catch(err => console.log(err));
    // };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="container">
                            <div>
                                <SearchList>{this.state.results}</SearchList>
                                <SearchModal>{this.state.modalIsOpen}</SearchModal>
                                <Application />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default SearchEvents;
