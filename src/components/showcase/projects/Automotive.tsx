import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';

export interface ArtProjectsProps {
}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Automotive Mechanics</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development, cars,
                    engines, and anything automotive will always hold a special
                    place in my heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the motoring side of me alive.
                </p>
            </div>
            <div className="text-block">
                <h2>UTS Motorsports</h2>
                <br />
                <p>
                    In university, I was invited to join the UTS:ME team, competing
                    in the F:SAE competition. I was on the software team, and was
                    tasked to create a realtime telemetry system with a small team.
                    Alongside this, I further helped with maintainence of the car itself,
                    helping me further my knowledge and love of cars.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Eight Frame Run cycle animated by
                            myself, original sprite by kevink
                        </sub>
                    </p>
                </div>
                <p>
                    I really started enjoying the work I was doing, and felt I
                    was improving a lot. Around 2024, I started to even work on
                    making a realistic racing simulator for driver training.
                    This was just running Asseto Corsa, however was able to be
                    customised into realistic environments and charecteristics.
                </p>
                <br />
            </div>
            <div className="text-block">
                <h2>@Blueyvf on TikTok</h2>
                <br />
                <p>
                    Towards the end of highschool I started a tiktok account for
                    my first car, a 2016 Series 2 VF Commodore. I enjoyed making
                    videos, and it gave me an excuse to work on an take care of
                    my car. Also, it was a great chance for me to explore a
                    creative side I hadn't really explored before, and being
                    able to teach myself about filming, cameras, and editing was
                    a very fun phase in my live. None of my videos ever went
                    particularly viral, with the exception of one that did over
                    20 million views. You can check out my page {' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.tiktok.com/@blueyvf?is_from_webapp=1&sender_device=pc"
                    >
                        here.
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@blueyvf" data-unique-id="blueyvf"
                                data-embed-type="creator">
                        <section><a target="_blank"
                                    href="https://www.tiktok.com/@blueyvf?refer=creator_embed">@blueyvf</a></section>
                    </blockquote>
                    <script async src="embed.js"></script>
                </p>
                <br />
            </div>
            <br />

            <h3>Links:</h3>
            <br />
            <ul>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.utsmotorsports.com/"
                    >
                        <p>
                            <b>WEBSITE</b> - UTS Motorsports Official Website
                        </p>
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.tiktok.com/@blueyvf?is_from_webapp=1&sender_device=pc"
                    >
                        <p>
                            <b>TIKTOK</b> - My page @Blueyvf
                        </p>
                    </a>
                </li>
            </ul>
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> My Own Little Project Car: 2016 Series 2 VF Commodore
                    </sub>
                </p>
            </div>
            <br />
            <p>
                This page is currently a work in progress. I've recently
                found myself wanting to make more modifications to my car,
                and I have some project plans and ideas in the works. Expect
                updates to this page as I dive back into the world of car mods!
            </p>
            {/* <h3> Screen record time-lapses and make gifs</h3> */}
        </div>
)
    ;
};

export default ArtProjects;
