import { Component } from "react"
import Homepage from './Homepage'
import Footer from './footer'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
                <div>
                    <Homepage/>
                    <Footer/>
                </div>
            </>
        )
    }

}
export default Main