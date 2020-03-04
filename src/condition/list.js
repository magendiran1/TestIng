import React, { Component } from 'react'
import Person from './Person'
export class List extends Component {
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
const {liste}= this.state.person
        return (
            <div>
                {liste.map( persons=>{
                    return <Person names={persons.name} ages={persons.age} />
                })}
            </div>
        )
    }
}

export default List
