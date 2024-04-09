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
                TurboUp App, which was a truly amazing experience. I was
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
            <h2>My love for Drum & Bass</h2>
            <br />
            <p>
                I've always loved drum & bass, and over the years I feel like I
                always come back to it. My first song I ever made was a DnB
                track and as I've continued to make music over these last few
                years the way I produce DnB really reflects my specific taste at
                that time. It's very fun looking back at the various DnB styles
                I've taken stabs at over time and how my taste has evolved.
            </p>
            <br />
            <p>
                The track below is a snip-it from a DnB track I started work on
                back in 2019. I recently decided to pick it up again and work on
                it more because I loved the idea, bassline and especially the
                drums. Below is a short demo of the track including a small
                buildup and drop.
            </p>
            <br />
            <br />
            <p>
                Like I said, I decided to come back to this track because I
                absolutely loved so much about it. When I picked up work on it
                again I decided to totally remix the drums and I'm super proud
                with how they turned out. So proud in fact, I wanted to show
                them off some more on their own! Below are the drums in the
                above track, but isolated. I have also included the sub bass
                because it is drum and bass after all!
            </p>
            <br />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div>
            <br />
            <p>
                There are a lot of layers to DnB drums, and I honestly find them
                the hardest to mix and get right since the sound design of DnB
                so often wants to fight in the same frequency range as the
                drums. Because of this I use very aggressive sidechain to keep
                the drums clear while giving me the freedom to not have to
                overly eq the bass and general sound design. I also find that
                parallel compression on drums in DnB can be an absolute life
                saver to keep the drums controlled but still hard hitting.
            </p>
            <br />
            <h2>The Future of my music</h2>
            <br />
            <p>
                I love to make music and will continue to make music as long as
                I can. I think soon enough I will be releasing music publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long ways away.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I've been producing for over 6 years and have made
                hundreds maybe even a thousand tracks/loops in that time. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for listening I hope you enjoyed!
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
