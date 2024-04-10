import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
import gsts from '../../../assets/pictures/projects/art/gsts.png';
// @ts-ignore
// import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>TurboUp App</h2>
                <br />
                <p>
                    In late 2023 I started aiding in the development of the
                    TurboUp App, which was a truly amazing experience. TurboUp
                    was designed to be a social media app for car enthusiasts. I was
                    a cofounder of the project, and was in charge of everything
                    from frontend development, to marketing, to backend
                    development, and even merch designing. This allowed me to
                    work on a bigger project, with a team, and allowed me to
                    further expand on my knowledge and skills.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={gsts} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Some Screenshots of the TurboUp UI
                        </sub>
                    </p>
                </div>
                <p>
                    This project was initially written in SwiftUI,
                    however after wanting to expand it to the Andriod market,
                    we decided to move the whole application to React Native.
                    This was the first time I had written for multiplatform apps,
                    and once again was a great learning experience. Whilst doing
                    this, I was still managing the social media accounts, as well
                    as the merchandise. All in all, was a big effort, but every part
                    of the experience was helpful and enjoyable.
                </p>
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://apps.apple.com/au/app/turboup-photo-sharing-car-app/id1436441965"
                        >
                            <p>
                                <b>[iOS App Store]</b> - TurboUp App
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.Stripway.Stripway&hl=en_GB&gl=US"
                        >
                            <p>
                                <b>[Google Play Store]</b> - TurboUp App
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/MForemxn"
                    >
                        @MForemxn
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>UTS:ME Live Telemetry</h2>
                <br />
                <p>
                    While studying at UTS, I spent a lot of time on the motorsports
                    team, working on various projects. My most significant one was a
                    live telemetry system in order to pull data from the car, process
                    it, send it to a server, and allow us to view the data in a helpful
                    GUI in order for us to make timely changes to the driving style based
                    on the vitals of the car.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skip the Scroll in action, finding
                            the highest rated comments and scrolling right to
                            them
                        </sub>
                    </p>
                </div>
                <p>
                    This project allowed me to learn a lot of new skills, with the
                    most important one being AWS skills. This project, in it's
                    essence, pulled data from the Canbus located on the car, pulls
                    it onto a Raspberry Pi, runs it through a python script to
                    process it, then a different script sends it up to an AWS server.
                    From there, it is shifted to a AWS timestream database, where it
                    is pulled into a java script and displayed in a easy to view GUI.
                </p>
                <br />
            </div>
            <div className="text-block">
                <h2>masonforeman.com</h2>
                <br />
                <p>
                    masonforeman.com is my personal portfolio website,
                    and is the one you are currently on. Now I am
                    taking no credit for any part of this project,
                    all credit goes to Henry Heffernan, who is very
                    talented and designed and developed this whole site.
                    Him and his team are credited in the credits page.
                    I highly recommend you go and check out his stuff.
                    What I did do however was write the content to be a
                    fun and engaging way to view my projects and endeavours.
                </p>
                <br />
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Threejs to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a simple
                    react site that is hosted {' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://portfolio-inner-site-iota.vercel.app/"
                    >
                        here
                    </a> and works as a standalone web
                    app. The actual rendering of the 2D site is accomplished
                    using a CSS renderer provided by Threejs that transforms the
                    html of the 2D site with 3D CSS transforms to give the illusion
                    of three dimensionality.
                </p>
            </div>

            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
