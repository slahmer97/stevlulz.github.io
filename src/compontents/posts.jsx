import React, {Component} from 'react';
import posts from "./../posts/post_manager"
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            activePage: 1
        }
    }

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
    };

    render() {
        const {activePage} = this.state;
        return (
            <div className="archive">
                <h3 className="archive__subtitle">Posts</h3>
                <div className="list__item">
                    {posts.map((e, i) => {
                        return (
                            <article key={i} className="archive__item" itemScope=""
                                     itemType="https://schema.org/CreativeWork"
                                     style={{
                                         display: i <= activePage * 10 && i >= (activePage - 1) * 10 ? "" : "none",
                                     }}>
                                <h2 className="archive__item-title" itemProp="headline">
                                    <Link to={"/posts/" + e.title.replace(/\s/g, "-")} rel="permalink">{e.title}</Link>
                                </h2>
                                <p className="page__meta">{e.time}</p>
                            </article>
                        )
                    })}
                </div>
                <Pagination
                    hideFirstLastPages
                    pageRangeDisplayed={5}
                    activePage={activePage}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={10}
                    totalItemsCount={posts.length}
                    onChange={this.handlePageChange}
                />
            </div>

        );
    }
}

export default Posts;