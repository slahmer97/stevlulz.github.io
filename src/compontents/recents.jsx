import React, {Component} from 'react';

class Recents extends Component {
    render() {
        return (
            <div className="archive">
                <h3 className="archive__subtitle">Recent posts</h3>
                <div className="list__item">
                    <article className="archive__item" itemScope="" itemType="https://schema.org/CreativeWork">
                        <h2 className="archive__item-title" itemProp="headline">
                            <a href="https://stevlulz.github.io/first-blog/" rel="permalink">First blog </a>
                        </h2>
                        <p className="page__meta"> May 05, 2019 </p>
                        <p className="archive__item-excerpt" itemProp="description">Welcome </p>
                    </article>
                </div>
            </div>
        );
    }
}

export default Recents;