import React from 'react';
import {BrowserRouter as BR, Switch, Route} from 'react-router-dom';

import Navbar from "./compontents/layout/navbar";
import Sidebar from "./compontents/layout/sidebar";
import Footer from "./compontents/layout/footer";
import Recents from "./compontents/recents";
import About from "./compontents/about";
import Posts from "./compontents/posts";
import Post from "./compontents/post";

function App() {
    return (
        <>
            <BR>
                    <Navbar/>
                    <div className="initial-content">
                        <div id="main" role="main">
                            <Sidebar/>
                            <Switch>
                                <Route exact path={"/"} component={Recents}/>
                                <Route path={"/about"} component={About}/>
                                <Route exact path={"/posts/:slug"} component={Post}/>
                                <Route path={"/posts"} component={Posts}/>
                            </Switch>
                        </div>
                    </div>
            </BR>
            <Footer/>

        </>
    );
}

export default App;
