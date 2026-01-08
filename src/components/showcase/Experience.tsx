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
                            href={'https://cdmcomputers.com.au/'}
                        >
                            <h4>cdmcomputers.com.au</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>IT Support Consultant</h3>
                        <b>
                            <p>Apr 2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As an IT Support Consultant at CDM Computer Services, I work across two core areas of the business: managed IT services for commercial clients and large-scale event networking delivered through our sister company, Quorix.
                </p>
                <br />
                <p>
                    On the MSP side, I provide comprehensive onsite, remote, and helpdesk support to businesses across Australia, supporting end users across a wide range of environments. My work is primarily focused on Windows-based systems, but I regularly support all major platforms and devices in mixed environments. I work extensively with Microsoft technologies, including user and device administration, Microsoft 365 administration, and the management of on-premises Active Directory and Exchange servers.
                </p>
                <br />
                <p>
                    My responsibilities extend beyond end user support into core infrastructure. I am involved in deploying, configuring, and troubleshooting corporate networking environments, including switches, routers, and firewalls. This work covers both physical and logical layers, from cabling and hardware installs through to VLANs, routing, firewall rules, and network fault isolation. I also handle hardware and software installations, upgrades, system documentation, and ongoing maintenance to ensure client environments remain stable, secure, and scalable.
                </p>
                <br />
                <p>
                    Through our sister company, Quorix, I am also involved in the planning, deployment, operation, and monitoring of temporary and semi-permanent networks for live events such as concerts and festivals. This includes building resilient wired and wireless networks under tight timeframes, supporting mission-critical connectivity during live operations, and assisting with event CCTV deployments.
                </p>
                <br />
                <p>
                    This role allows me to work across both traditional business IT and high-pressure event infrastructure, combining strong end user support with hands-on infrastructure delivery in dynamic environments.
                </p>
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
                        <h3>IT Manager</h3>
                        <b>
                            <p>Oct 2022 - Mar 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As IT Manager, I spearheaded the implementation and maintenance of all IT systems, ensuring seamless operations and driving technological innovation within the organization.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            • Managed and maintained all company IT infrastructure and systems
                        </p>
                    </li>
                    <li>
                        <p>
                            • Implemented new information systems and technologies to enhance business operations
                        </p>
                    </li>
                    <li>
                        <p>
                            • Provided technical support and troubleshooting for hardware and software issues
                        </p>
                    </li>
                    <li>
                        <p>
                            • Developed and maintained IT documentation and procedures
                        </p>
                    </li>
                    <li>
                        <p>
                            • Ensured data security and system integrity across all platforms
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
                            • Teaching programming fundamentals and computer science concepts
                        </p>
                    </li>
                    <li>
                        <p>
                            • Developing and implementing technology-focused curriculum
                        </p>
                    </li>
                    <li>
                        <p>
                            • Managing classroom technology and troubleshooting technical issues
                        </p>
                    </li>
                    <li>
                        <p>
                            • Mentoring students in coding, robotics, and digital innovation
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
                    As a dedicated repair and service specialist, I work with precision and care to maintain and restore brass and woodwind instruments to their optimal performance.
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
                        <h3>Co-Founder & Developer</h3>
                        <b>
                            <p>Jun 2023 - Apr 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As Co-Founder and Developer, I led the technical development of TurboUp, a social platform for car enthusiasts, overseeing all aspects of the product's technical implementation.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            • Led full-stack development of the platform using modern web technologies
                        </p>
                    </li>
                    <li>
                        <p>
                            • Designed and implemented scalable architecture and database systems
                        </p>
                    </li>
                    <li>
                        <p>
                            • Managed cloud infrastructure and deployment processes
                        </p>
                    </li>
                    <li>
                        <p>
                            • Implemented security best practices and data protection measures
                        </p>
                    </li>
                    <li>
                        <p>
                            • Oversaw technical team and development workflows
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
