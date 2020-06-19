import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends PureComponent {
    render() {
        return (
            <div className="masthead">
                <div className="masthead__inner-wrap">
                    <div className="masthead__menu">
                        <nav id="site-nav" className="greedy-nav">

                            <Link className="site-title" to="/"> Blog </Link>
                            <ul className="visible-links">
                                <li className="masthead__menu-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="masthead__menu-item">
                                    <Link to="/posts">Posts</Link>
                                </li>
                            </ul>

                            <button className="greedy-nav__toggle hidden" type="button" count="0">
                                <span className="visually-hidden">Toggle menu</span>
                                <div className="navicon"/>
                            </button>
                            <ul className="hidden-links hidden"/>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}

export default Navbar;