import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p>I'm Almir Figueiredo from Brazil. I'm a Biologist with master degree in Ecology, public server in an enviromental agency, currently working hard on 
                            becoming a Full Stack Developer, working with Software and Web Development.
                            My purpose is to develop technologies that can impact on enviromental management and also reduce public service bureaucracy through web applications.</p>
                        <br />
                        <h4>Techs</h4>
                        <div className="ml-5">
                            <TechTag tag="react" tech="React" name="DiReact" size={20} color="deepskyblue" />
                            <TechTag tag="nodejs" tech="Node.js" name="DiNodejsSmall" size={20} color="lightgreen" />
                            <TechTag tag="html" tech="HTML" name="FaHtml5" size={20} color="darkorange" />
                            <TechTag tag="css" tech="CSS" name="DiCss3Full" size={20} color="teal" />
                            <TechTag tag="javascript" tech="Javascript" name="DiJsBadge" size={20} color="yellow" />
                            <TechTag tag="python" tech="Python" name="DiPython" size={20} color="deepskyblue" />
                            <br/>
                            <br/>  
                        </div>
                        <h4>Soft Skills</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Open-mindedness, problem solving, fast learning.</p>
                            <br/>
                            <br/>
                        </div>
                        <h4>Formal Education</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Graduate Diploma in Biology (USP/SP - Brazil)</p>
                            <br/>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Postgraduate Diploma in Environmental Management (USP/SP - Brazil)</p>
                            <br/>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Master Degree Diploma in Ecology (UnB/DF - Brazil)</p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage


