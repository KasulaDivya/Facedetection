
import divs from "./index.module.css"
import "./styles.css"
function Ff(){

    const rr ={
        color:"pink",
    }
    return (
        <div>
        <h1 style={{color:"red",fontSize:20}}>hello</h1>
        <h2 style={rr}>hii</h2>
        <h3 className="pink">divya</h3>
        <h4 className={divs.pink}>hyy</h4>
        </div>
    )
}

export default Ff;