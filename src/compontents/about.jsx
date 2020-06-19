import React from 'react';

const About = () => {
    return (
        <article className="page" itemScope="" itemType="http://schema.org/CreativeWork">
            <meta itemProp="headline" content="About" />
                <div className="page__inner-wrap">

                    <header>
                        <h1 className="page__title" itemProp="headline">About</h1>
                    </header>

                    <section className="page__content" itemProp="text">
                        <p>I’m a roboticist, cell biologist (PhD), and mathematician (BA) studying the movement and
                            control of complex systems. At the cellular level, I studied the mechanisms that control
                            cell-shape changes in embryonic cells. As a roboticist, I am applying reinforcement learning
                            to grasping. My long-term research objective is to combine tools from machine learning,
                            optimization, and control theory to design algorithms for robotic locomotion and
                            manipulation in real-world settings.</p>
                    </section>

                </div>
        </article>
    );
};

export default About;