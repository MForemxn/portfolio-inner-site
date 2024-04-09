import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

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
                    <h2>@Bluey on Tiktok</h2>
                    <br />
                    <p>
                        Once I got my car, I fell in love and started making short TikTok videos as an excuse...
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
                    <h3>Video Links:</h3>
                    <br />
                    <ul>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                            >
                                <p>
                                    <b>VIDEO</b> - Pixel Art Walk Cycle Time-lapse
                                    and Tutorial
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                            >
                                <p>
                                    <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                    Time-lapse
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                            >
                                <p>
                                    <b>VIDEO</b> - Pixel Art Bipedal Creature Run
                                    Cycle Time-lapse
                                </p>
                            </a>
                        </li>
                    </ul>
                    <br />
                    <div className="captioned-image">
                        <img src={gsts} alt="" />
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
            </div>
        </div>
            );
            };

            export default ArtProjects;
