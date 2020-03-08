import React, { Component } from 'react'
import Workmap from './Workmap'

 class Map extends Component {
    
    state={
        mens :[
            {name:"mendy",age :24},
            {name: "girish", age :24}
        ]
    }

     deleteHandeler = (index)=>{
 const persondel = this.state.mens
 persondel.splice(index,1)
 this.setState({
     persondel :persondel
 })
    }
    render() {
        const men= this.state.mens
        return (
            <div>
                {men.map((person,index)=>{
                    return <Workmap clicked={()=>this.deleteHandeler(index)} data={person.name} agess={person.age} />
                })}
                
            </div>
        )
    }
}

export default Map