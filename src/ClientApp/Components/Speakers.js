//import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { speakersFetchData } from  "../../redux/actions/speakers"


class Speakers extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            appData: []
        }
    }

    componentDidMount(){
        this.props.speakersFetchData();
    }

    render() {
        if(this.props.isLoading) {
            return <span><i>Loading data...</i></span>
        }
        else if(this.props.hasErrored){
            return <span>{this.props.errorMessage}</span>
        }
        else {
            var speakers = this.props.speakers.map(function(speaker){
                return  <tr>
                            <td>{speaker.id} </td><td>{speaker.firstName}</td> <td>{speaker.lastName}</td>
                        </tr>
            })
            return(
                <table>
                    {speakers}
                </table>
            )
        }
    }
}

Speakers.propTypes = {};
Speakers.defaultProps= {};

const mapStateToProps = (state) => {
    return {
        speakers: state.speakers.data,
        hasErrored: state.speakers.hasErrored,
        isLoading: state.speakers.isLoading,
        errorMessage: state.speakers.errorMessage
    };
};

export default connect(mapStateToProps, {speakersFetchData}) (Speakers)
