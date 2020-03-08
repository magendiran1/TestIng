import React, { Component } from 'react'

export default class Workmap extends Component {
    render() {
        return (
            <div>
                <h1 onClick={this.props.clicked}  >
                      
                   {this.props.data} and  my is age {this.props.agess} what ur age is  {this.props.agess}
                </h1>
            </div>
        )
    }
}
