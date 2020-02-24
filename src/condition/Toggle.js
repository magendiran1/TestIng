import React, { Component } from 'react';

class Toggle extends Component {
constructor(){
    super()
    this.state={
islogged :false
    }
}
    
toggelebutton =()=>{
 
const test=this.state.islogged
    this.setState({
        islogged: !test
    }
    )
}
    render() {
        return (
            <div>
               <button onClick={this.toggelebutton}>Toggle</button>
               {this.state.islogged ?
                 
                 <div><p>Hi  am magendiran </p></div> : null
               }
                
            </div>
        );
    }
}

export default Toggle;