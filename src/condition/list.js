import React, { Component } from 'react'
import Person from './Person'
export class list extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           person:[
               {name:"mage",age :24},
               {name:"girish",age:25},
               {name:"chara",age:28}
           ]
      }
  }
  
    render() {

        return (
            <div>
                {this.state.person.map( persons=>{
                    return <Person names={persons.name} ages={persons.age} />
                })}
            </div>
        )
    }
}

export default list
