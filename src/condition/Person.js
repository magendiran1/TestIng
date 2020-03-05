import React, { Component } from 'react'

export class Person extends Component {
    
    render() {
        return (
            <div>
<p>i am {this.props.name} and my age is {this.props.age}</p>

            </div>
        )
    }
}

export default Person
