import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Mason Foreman</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a university student currently studuing at University of
                    Technology Sydney. I am set to graduate in 2027 with my
                    Bachelors in IT, with a Cybersecurity and Networking Major,
                    and my Diploma in IT Professional Practice.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:mason.foreman@icloud.com">
                        mason.foreman@icloud.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with Lego and I fell in love with building things. In
                    elementary school, I joined the Lego Robotics team at my
                    local primary school, which was my first real exposure to
                    programming.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me brainstorming this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2023, I got accepted into University of Technology Sydney
                    to study Information Technology. It was my first choice
                    and I was absolutely ecstatic to be going to such a great
                    university. Whilst at university, I held a part time job at
                    the Easter Egg Warehouse. Whilst this initially started as a
                    warehouse and retail job, I was soon able to start working
                    on some IT projects, primarily focusing on frontend work.
                    As of 2024, I still work there, and I continue to work on
                    various IT projects. I am currently looking for a new role
                    in the IT sector.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond university and work, I have a lot of hobbies
                            that I enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">App Development</Link>{' '}
                            and {' '}
                            <Link to="/projects/art">Cars</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            Throughout university, I was an active part of the
                            UTS Motorsports team, which you can read more about {' '}
                            <Link to="/projects/music">Here</Link>
                            . I thoroughly enjoyed every aspect of this venture,
                            and it taught me a lot about various different coding
                            practices and projects.
                        </p>
                        <br />
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, Janurary 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/MForemxn"
                    >
                        @MForemxn
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:mason.foreman@icloud.com">
                        mason.foreman@icloud.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
