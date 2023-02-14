import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { MdWorkOutline } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const workExperience = [
    {
        company: 'LogicGate',
        title: 'Front End Developer',
        duration: '2022 -'
    },
    {
        company: 'Cognizant',
        title: 'Full-Stack Engineer',
        duration: '2019 - 2021'
    },
    {
        company: 'projekt202',
        title: 'UI Developer',
        duration: '2018 - 2019'
    },
    {
        company: 'Major 4 Apps',
        title: 'Founder',
        duration: '2011 - 2018'
    }
];
function Experience() {

    useEffect(() => {

    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
            

            <VerticalTimeline  lineColor={'purple'} layout={'1-column-left'}>
                <VerticalTimelineElement
                    className="project-card-view1"
                    contentStyle={{ background: 'transparent', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2022 - July 2022"
                    icon={<MdWorkOutline />}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h4 className="vertical-timeline-element-subtitle"><span className="purple">American Century Investments</span></h4>
                    <h5 className="vertical-timeline-element-title">Machine Learning Intern</h5>
                  
                    <p>Applied Natural Language Processing (NLP) for extracting sentiment, importance, and keywords on the customer call log transcripts
to yield valuable business insights. Developed text clustering using an unsupervised Self Organizing Map neural model. Performed stop word removal, lemmatization
and TF-IDF vectorization.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="project-card-view1"
                    contentStyle={{ background: 'transparent', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Nov 2021 - Feb 2022"
                    icon={<MdWorkOutline />}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h4 className="vertical-timeline-element-subtitle"><span className="purple">Virginia Tech</span></h4>
                    <h5 className="vertical-timeline-element-title">Research Assistant</h5>
                    
                    <p>
                    Research various deep learning architectures to detect human-object interactions in construction scenes. Trained Detectron with a feature backbone of ResNet-50-FPN to generate human and object bounding boxes.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                   className="project-card-view1"
                   contentStyle={{ background: 'transparent', color: '#fff' }}
                   contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                   date="Aug 2020 - July 2021"
                   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                   icon={<MdWorkOutline />}

                >
                    <h4 className="vertical-timeline-element-subtitle"><span className="purple">Tata Consultancy Services</span></h4>
                    <h5 className="vertical-timeline-element-title">Software Developer</h5>
                    
                    <p>
                    Transformed desktop application into web-based application based on microservices architecture and containers.
                    </p>
                    <p>
                    Collaborated with a group of 10 developers to design, develop, deploy and test code for an in-house web application used by 600+
users in the client’s internal team to track products quality defects.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </Container>
        </div>
    );
}

export default Experience;