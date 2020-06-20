import React, {PureComponent} from 'react';
import posts from "../posts/post_manager";
import ReactHtmlParser from "react-html-parser";
import loadjs from 'loadjs'

class Post extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOK: false,
            scriptLoaded: false,
            slug: "",
            title: "Loading...",
            time: "",
            body: "<div></div>"
        }

        console.log("constructor.. ", this.state.scriptLoaded)

    }

    componentDidMount() {
        console.log("componentDidMount")
        let slug = window.location.pathname.replace("/posts/", "")
        slug = slug.replace(/-/g, " ")

        const r = async () => {
            for (let i = 0; i < posts.length; i++)
                if (posts[i].title === slug) {
                    await this.setState({
                        slug: slug,
                        title: posts[i].title,
                        time: posts[i].time,
                        body: posts[i].body
                    })
                    await this.setState({
                        isOK: true
                    }, () => {
                        loadjs('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', function () {
                            console.log("OKOK")
                        });
                        console.log("eval")
                    })

                    break;
                }


        }
        r().then(async r => {
            if (!this.state.isOK)
                await this.setState({
                    slug: "",
                    title: "Post Not Found",
                    time: "",
                    body: "<div></div>"
                })
        })

    }

    componentWillUnmount() {
        window.deleteMathJax()
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
            </>
        );
    }
}

export default Post;
