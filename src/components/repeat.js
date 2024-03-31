import { Component } from "react";



class Dee extends Component{

    constructor(){

        super()
        this.state={
            click:false
        }
    }




render(){
   

return(

<>


    <button onClick={()=>this.gg(true)}>click here</button>



</>
)

}
    
}


export default Dee;