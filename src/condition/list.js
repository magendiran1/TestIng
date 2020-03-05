import React, { useState } from 'react'
import Person from './Person'
const List =(props)=>{
 const [personstate,sepersonstate]= useState({
      Person :[
          {name:"mage",age:24},
          {name:"dhoni",age:45},
          {name:"vijay",age:47}
      ],
      otherstate :"some other values"
  }
  )
console.log(personstate)

const   nameChangeHandler =()=>{
    sepersonstate({
          Person :[
              {name:"magendiran",age:25},
              {name:"CSKdhoni",age:46},
              {name:"Thalapathi Vijay",age:48}

          ]
      })
  }
        return (
            <div>
                <button onClick={nameChangeHandler}>State change </button>
<Person name={personstate.Person[0].name} age={personstate.Person[0].age}/>
<Person  name={personstate.Person[1].name} age={personstate.Person[1].age}/>
<Person  name={personstate.Person[2].name} age={personstate.Person[2].age}/>
{/* <Person/> */}

            </div>
        )
    }


export default List
