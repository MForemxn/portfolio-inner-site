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
                        <h1>CDM Computer Services</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.cdm.com.au/'}
                        >
                            <h4>cdm.com.au</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Information Technology Support Consultant</h3>
                        <b>
                            <p>Apr 2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As an IT Support Consultant at CDM Computer Services, I provide onsite, remote, and helpdesk support to businesses across Sydney. My role involves troubleshooting hardware and software issues, managing support tickets, and ensuring smooth IT operations for clients.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            • Diagnosing and resolving technical issues across various environments
                        </p>
                    </li>
                    <li>
                        <p>
                            • Supporting Microsoft desktop operating systems in Active Directory networks
                        </p>
                    </li>
                    <li>
                        <p>
                            • Installing, upgrading, and maintaining hardware, software, and peripherals
                        </p>
                    </li>
                    <li>
                        <p>
                            • Managing and documenting client IT systems
                        </p>
                    </li>
                    <li>
                        <p>
                            • Providing excellent customer service and technical guidance
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
                        <h3>Holiday Camp Teacher</h3>
                        <b>
                            <p>Jan 2022 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As the Head Teacher at Code Camp, I lead a dynamic team in providing immersive and engaging tech education experiences for students aged 5-13 during holiday camps.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            🚀 Crafting a curriculum that combines creativity and learning, ensuring each child discovers the exciting world of coding, robotics, and digital innovation
                        </p>
                    </li>
                    <li>
                        <p>
                            🌐 Fostering a supportive environment that encourages curiosity and critical thinking
                        </p>
                    </li>
                    <li>
                        <p>
                            💡 Inspiring the next generation of tech enthusiasts, equipping them with valuable skills for the future
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Tom Sparkes Instrument Repairs</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.tomsparkes.com/'}
                        >
                            <h4>tomsparkes.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Instrument Repair Technician</h3>
                        <b>
                            <p>Dec 2019 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As a dedicated repair and service specialist at Tom Sparkes Oboes, I work with precision and care to maintain and restore brass and woodwind instruments to their optimal performance.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            • Diagnosing and addressing mechanical issues and performance concerns
                        </p>
                    </li>
                    <li>
                        <p>
                            • Conducting thorough maintenance and tuning to enhance sound quality and playability
                        </p>
                    </li>
                    <li>
                        <p>
                            • Upholding the highest standards of craftsmanship and quality assurance
                        </p>
                    </li>
                </ul>
            </div>
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
                        <h3>Retail Salesworker</h3>
                        <b>
                            <p>Feb 2021 - Oct 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Passionate retail professional with a strong dedication to delivering exceptional customer experiences. At Easter Egg Warehouse, I served as a retail salesperson, where I developed deep product knowledge and honed my ability to understand and meet customer needs.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            • Focused on personalized service and building genuine relationships
                        </p>
                    </li>
                    <li>
                        <p>
                            • Developed deep product knowledge and customer service skills
                        </p>
                    </li>
                    <li>
                        <p>
                            • Created a welcoming atmosphere that encouraged repeat business
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>TurboUp LLC</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.turboup.com/'}
                        >
                            <h4>turboup.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Co-Founder</h3>
                        <b>
                            <p>Jun 2023 - Apr 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Passionate about merging innovation with community, I led the charge as the Developer, Co-founder, and Marketing at TurboUp. I spearheaded the development of TurboUp, a groundbreaking social platform designed exclusively for car enthusiasts.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            👨‍💻 Driving the technical vision and development of the platform
                        </p>
                    </li>
                    <li>
                        <p>
                            🤝 Co-founding and leading strategic decisions for the company
                        </p>
                    </li>
                    <li>
                        <p>
                            📢 Managing marketing efforts and brand awareness campaigns
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
