import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';
import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>App Development</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    App development has been a passion of mine since early high
                    school. It was my first real venture into software development,
                    and allowed me to very easily learn and train myself to write
                    better code, all while creating cool projects along the way.
                </p>
                <br />
                <p>
                    I don't release the apps that I make publicly as I not only
                    find it difficult to finish apps, but also it's not a
                    priority of mine since I develop mostly because I enjoy the
                    process of learning and creating. However if I am going to
                    dedicate a whole page of my portfolio to my apps, you bet
                    I'll have some examples to showoff.
                </p>
                <br />
                <p>
                    Below are some more recent app development endevours I've been
                    working on. I hope you enjoy the experiences and enjoy the stories
                    behind each of the projects.
                </p>
            </div>
            <h2>Fundy Financial Tracking App</h2>
            <br />
            <p>
                In 2021, for my highschool software development major work, I developed
                a financial tracking application aimed at teenagers. This app would
                better allow them to view, track, and make changes to their savings
                and spending goals, by encorporating a fun GUI and a easy to use layout.
            </p>
            <br />
            <p>
                This app was never properly finished, as I didn't have the resources
                to pay for API access to banks, and had to setup my own dummy server
                instead. I have included some screenshots below of the app,
                and a link to try it out is on my github.
            </p>
            <br />
            <br />
            <br />
            <div className="captioned-image">
                <img src={girlRun} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A collage of screenshots of the Fundy app.
                    </sub>
                </p>
            </div>
            <p>
                This app gave me a great excuse to teach myself SwiftUI,
                Objective C, and also some JSON. It was a great experience
                being able to learn with a specific purpose in mind, as
                well as an end goal. This was truely a great experience,
                and I believe that without it, my job and hobbies would be
                wildly different.
            </p>
            <br />
            <h2>TurboUp</h2>
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
                <img src={girlRun} alt="" />
            <br />
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
            <br />
            <h2>The Future of my App Development</h2>
            <br />
            <p>
                I love to make apps and will continue to make music as long as
                I can. I think soon enough I will be releasing solo apps publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I've been developing for over 6 years and have made
                countless various projects for all destinations in that time. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for checking it out I hope you enjoyed!
            </p>
            <br />
        </div>
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
