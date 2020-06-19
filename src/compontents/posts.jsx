import React, {Component} from 'react';
import posts from "./../posts/post_manager"
import {Link} from "react-router-dom";

class Posts extends Component {
    render() {
        return (
            <div className="archive">
                <h3 className="archive__subtitle">Posts</h3>
                <div className="list__item">
                    {posts.map((e,i)=>{
                        return (
                            <article key={i} className="archive__item" itemScope="" itemType="https://schema.org/CreativeWork">
                                <h2 className="archive__item-title" itemProp="headline">
                                    <Link to={"/posts/"+e.title.replace(/\s/g,"-")} rel="permalink">{e.title}</Link>
                                </h2>
                                <p className="page__meta">{e.time}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Posts;