import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Easter Egg Warehouse</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.eastereggwarehouse.com.au/'}
                        >
                            <h4>eastereggwarehouse.com.au</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>IT Consultant</h3>
                        <b>
                            <p>Feb 2021 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    What started as a simple part time retail job, has progressed into
                    a IT Consultant role. My key responsibilities include site maintenance,
                    internal IT systems maintenance, new information systems implimentation,
                    and much more.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            🛒 Bringing a blend of customer service and tech
                            expertise to the Easter Egg Warehouse, I serve as
                            a dedicated Retail Staff member and occasional IT support.
                        </p>
                    </li>
                    <li>
                        <p>
                            🐣 My focus on creating delightful customer
                            experiences aligns with ensuring the smooth operation
                            of our warehouse through handling occasional technical
                            challenges.
                        </p>
                    </li>
                    <li>
                        <p>
                            💻 Balancing the sweetness of retail with the precision
                            of IT, I contribute to a seamless and efficient work environment.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Code Camp</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.codecamp.com.au/'}
                        >
                            <h4>codecamp.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Part Time Holiday Camp Teacher</h3>
                        <b>
                            <p>Jan 2022 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Shared my love of technology with the new generation through holiday
                    camp facilitating and teaching. These 2-3 day camps are of school aged
                    children, about various different topics surrounding technology and
                    computers. Through this, I was able to test my knowledge and improve
                    upon it through teaching.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            🚀 Joining Code Camp as the Head Teacher, I lead a
                            dynamic team in providing immersive and engaging
                            tech education experiences for students aged 5-13
                            during holiday camps.
                        </p>
                    </li>
                    <li>
                        <p>
                            🌐 My role involves crafting a curriculum that
                            combines creativity and learning, ensuring each
                            child discovers the exciting world of coding,
                            robotics, and digital innovation.
                        </p>
                    </li>
                    <li>
                        <p>
                            💡 As a passionate advocate for tech education, I
                            foster a supportive environment that encourages
                            curiosity and critical thinking. Together with my
                            team, we inspire the next generation of tech
                            enthusiasts, equipping them with valuable skills for
                            the future.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>TurboUp</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.turboup.com/'}
                        >
                            <h4>turboup.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Developer | Co-founder | Marketing</h3>
                        <b>
                            <p>Jun 2023 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Passionate about merging innovation with community, I lead
                    the charge as the Developer, Co-founder, and Marketing at
                    TurboUp. In the driver's seat from day one, I've spearheaded
                    the development of TurboUp, a groundbreaking social platform
                    designed exclusively for car enthusiasts.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            👨‍💻 Developer: Driving the technical vision, I
                            navigate the coding highway, steering TurboUp toward
                            a seamless user experience. From the engine room to
                            the user interface, my mission is to revitalize the
                            digital landscape for car aficionados.
                        </p>
                    </li>
                    <li>
                        <p>
                            🤝 Co-founder: In the trenches from the ideation
                            stage, I co-founded TurboUp to revolutionize how the
                            car community connects. Every line of code and
                            strategic decision is geared toward fostering a
                            vibrant, dynamic space for car enthusiasts to share
                            their passion.
                        </p>
                    </li>
                    <li>
                        <p>
                            📢 Marketing: Beyond coding, I wear the hat of Head
                            of Marketing, fueling TurboUp's reach. Crafting
                            campaigns that resonate, I accelerate our brand
                            awareness and drive engagement. TurboUp isn't just
                            an app; it's a movement, and I'm steering the
                            marketing wheel.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
