import React from "react"
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import Auth from "./components/Auth/Auth"
import PostDetails from './components/PostDetails/PostDetails'

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Navbar />
                <Switch>
                    <Route path="/Memories" exact component={() => <Redirect to="/Memories/posts" /> } />
                    <Route path="/Memories/posts" exact component={Home} />
                    <Route path="/Memories/posts/search" exact component={Home} />
                    <Route path="/Memories/posts/:id" component={PostDetails} /> 
                    <Route path="/Memories/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/Memories/posts" />)} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}


export default App