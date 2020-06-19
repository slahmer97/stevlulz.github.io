import React, {PureComponent} from 'react';
import {FULLNAME} from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends PureComponent {
    render() {
        return (
            <div className="page__footer">
                <footer>

                    <div className="page__footer-follow">
                        <ul className="social-icons">

                            <li><strong>Follow:</strong></li>

                            <li><a href="https://github.com/jmichaux"> <FontAwesomeIcon icon={faGithub}/> GitHub</a></li>


                            <li><a href="https://jmichaux.github.io/feed.xml"><i className="fa fa-fw fa-rss-square"
                                                                                 /> Feed</a></li>
                        </ul>
                    </div>

                    <div className="page__footer-copyright">© 2020 {FULLNAME}. Powered by <a
                        href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a
                        href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal
                        Mistakes</a>.
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;