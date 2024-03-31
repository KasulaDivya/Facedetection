import axios from "axios"
import React, { Component } from "react"
import Spinnertree from "../spinners/Loader"



class Mounting extends Component{

    constructor(){
        console.log("constructor")
        super()

        this.state={
            user:[],
            color:"red",
            counter:6
        }
    }
        
     componentDidMount(){
        console.log("componentdidmount")
        axios.get("https://dummyjson.com/users")
        .then(response=>{
            this.setState({
                user:response.data.users
            })
            console.log(response)
        })
    
     }     
    


    render(){
        console.log("render")
        return(
            <>
            <h1 style={{color:this.state.color}}>Hello Divya</h1>
            <h2>{this.state.counter}</h2>
            {
                this.state.user.length>0 ?
                <>
                   {
                    this.state.user.map((obj)=>{
                        return(
                            <div key={obj.id}>
                            <h3>{obj.firstName}</h3>
                            </div>
                        )
                    })
                   }
                </> : 
                <Spinnertree></Spinnertree>

            }
            </>
        )
       
    }
    static getDerivedStateFromProps(props,state){
        console.log("hyy stateprops")
        return{
           color:props.favclor,
           counter:props.tt
        }

    }


}

export default Mounting;


