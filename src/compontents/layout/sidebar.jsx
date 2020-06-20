import React from 'react';
import {ADDRESS, DESCRIPTION, EMAIL_LINK, FACEBOOK_LINK, FULLNAME, GITHUB_LINK} from "../../constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import avatar from "./avatar.jpg";

function Sidebar(props) {
    return (

        <div className="sidebar sticky">
            <div itemScope="" itemType="https://schema.org/Person">
                <div className="author__avatar">
                    <img src={avatar} alt="SA Lamer" itemProp="image"/>
                </div>
                <div className="author__content">
                    <h3 className="author__name" itemProp="name">{FULLNAME}</h3>
                    <div className="author__bio" itemProp="description"><p>{DESCRIPTION}</p></div>
                </div>
                <div className="author__urls-wrapper">
                    <button className="btn btn--inverse">Follow</button>
                    <ul className="author__urls social-icons">
                        <li itemProp="homeLocation" itemScope="" itemType="http://schema.org/Place">
                            <FontAwesomeIcon icon={faMapMarker}/>
                            <span itemProp="name">{ADDRESS}</span>
                        </li>
                        <li>
                            <a href={"mailto:" + EMAIL_LINK}>
                                <meta itemProp="email" content={EMAIL_LINK}/>
                                <FontAwesomeIcon icon={faEnvelope}/> Email
                            </a>
                        </li>
                        <li>
                            <a href={FACEBOOK_LINK} itemProp="sameAs">
                                <FontAwesomeIcon icon={faFacebook}/> Facebook
                            </a>
                        </li>
                        <li>
                            <a href={GITHUB_LINK} itemProp="sameAs">
                                <FontAwesomeIcon icon={faGithub}/> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;