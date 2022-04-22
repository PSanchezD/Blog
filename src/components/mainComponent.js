import { Component } from "react"
import Homepage from './Homepage'
import Footer from './footer'
import Sign from './signIn'
import SignUp from './singUp'
import User from './userPage'
import Nav from './nav'
import { Routes ,Route } from "react-router-dom"
import { UserContext } from './useContext'


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            value: "hello"
        }
    }

    render(){
        return(
            <>
                <div>
                    <UserContext.Provider msg={this.state.value}>
                        <Nav />
                        <Routes>
                            <Route path="/" element={<Homepage/>}/>
                            <Route path="/signin" element={<Sign/>} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/user" element={<User/>}/>
                        </Routes>
                        <Footer/>
                    </UserContext.Provider>
                </div>
            </>
        )
    }

}
export default Main