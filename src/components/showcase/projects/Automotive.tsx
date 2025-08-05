import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import vfCommodore from '../../../assets/pictures/projects/automotive/vf-commodore.png';
import vwGolf from '../../../assets/pictures/projects/automotive/vw-golf.png';

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
                    <img src={dnbDrumsProject} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> The UTS:ME Car from 2022
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
                </p>
                <br />
            </div>
            <div className="text-block">
                <h2>Cars I've Owned, Modified, and Loved</h2>
                <br />
                <p>
                    Over the years, I've had the pleasure of owning and working on
                    some fantastic cars. Each one has taught me something different
                    about automotive engineering, modification, and the pure joy of driving.
                </p>
                <br />
                <h3>1. 2016 Slipstream Blue VF Commodore</h3>
                <br />
                <p>
                    My first car and the one that started it all. This 2016 Series 2 VF Commodore
                    in Slipstream Blue was completely stock (with the exception of a waaay to loud exhaust and some fully sick rims) - no modifications, just enjoyed
                    exactly as it came from the factory. This car taught me the fundamentals
                    of car ownership, maintenance, and the Australian automotive culture.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={vfCommodore} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> My 2016 Slipstream Blue VF Commodore
                        </sub>
                    </p>
                </div>
                <br />
                <h3>2. 2017 MK7 VW Golf GTI</h3>
                <br />
                <p>
                    My current project car and the one that really got me into modifications.
                    This 2017 MK7 Golf GTI has been extensively modified with:
                </p>
                <br />
                <ul>
                    <li>
                        <p>• Revo Stage 2+ ECU tune</p>
                    </li>
                    <li>
                        <p>• Wagner Performance downpipe</p>
                    </li>
                    <li>
                        <p>• Leyo Motorsports cold air intake</p>
                    </li>
                    <li>
                        <p>• Xtreme 600nm clutch with single mass flywheel</p>
                    </li>
                    <li>
                        <p>• IS38 Turbocharger</p>
                    </li>
                    <li>
                        <p>• Invidia R400 Exhaust</p>
                    </li>
                    <li>
                        <p>• Ground Zero 12" Subwoofer with Cerwin Vega Amplifier</p>
                    </li>
                </ul>
                <br />
                <p>
                    This car has been an incredible learning experience, teaching me about
                    forced induction, engine management, and the importance of supporting
                    modifications when pushing power levels.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={vwGolf} alt="" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> My 2017 MK7 VW Golf GTI
                        </sub>
                    </p>
                </div>
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
