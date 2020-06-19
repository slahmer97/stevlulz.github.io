import React, {Component} from 'react';
import posts from "../posts/post_manager";
import ReactHtmlParser from "react-html-parser";
import Helmet from "react-helmet";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            time: "",
            body: "<div></div>"
        }
    }

    componentDidMount() {
        let slug = window.location.pathname.replace("/posts/", "")
        slug = slug.replace(/-/g, " ")
        for (let i = 0; i < posts.length; i++)
            if (posts[i].title === slug) {
                this.setState({
                    title: posts[i].title,
                    time: posts[i].time,
                    body: posts[i].body
                })
                break;
            }
        console.log(slug);
    }

    render() {
        const {title, time, body} = this.state
        return (
            <>
                <article className="page" itemScope="" itemType="http://schema.org/CreativeWork">
                    <div className="page__inner-wrap">
                        <header>
                            <h1 className="page__title" itemProp="headline">{title}</h1>
                            <p className="page__meta">
                                <time dateTime="2019-05-05T00:00:00+00:00">{time}</time>
                            </p>
                        </header>
                        <section className="page__content" itemProp="text">
                            {ReactHtmlParser(body)}
                        </section>
                    </div>
                </article>
                <Helmet>
                    <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
                </Helmet>

            </>
        );
    }
}

export default Post;