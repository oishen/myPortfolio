
const About = () => {
    return (
        <div id="about" >
            <div className="container-lg mt-5 pt-5">
                <div className="row">
                    <div className="col-lg d-none d-lg-block">
                        <img src="./src/component/asset/IMG_2523.JPG" alt="" className="w-75" />
                    </div>

                    <div className="col-lg col-12">
                        <h1 className="h1">About Me</h1>
                        <p className="text-secondary">Hello dear, my name's Soy Sen and I'm 22 years old. I gratuate at RUPP of the Computer Science department on 2024. I have experiences with Chip mong Tk condo for worker of stock position and frontend developer at Panel 7.</p>
                        <button type="button" className="btn btn-outline-warning ps-4 pe-4 rounded-pill" data-bs-toggle='modal' data-bs-target='#readMoreAboutMe' >Read More</button>
                    </div>
                    <div className="col-12 d-lg-none d-flex justify-content-center mt-5" >
                        <img src="./src/component/asset/IMG_2523.JPG" alt="" className="w-75" />
                    </div>
                </div>
            </div>

            <div className="modal fade" id="readMoreAboutMe">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="h5 modal-title">About Me</h5>
                            <button className="btn-close" data-bs-dismiss='modal' ></button>
                        </div>
                        <div className="modal-body">
                            Education:
                            <ul>
                                <li>2009 - 2021: Prek ambel Primary School</li>
                                <li>2013 - 2016: Samdach Techo Hun Sen Prek ambel Secondary School</li>
                                <li>2017 - 2020: Samdach Techo Hun Sen Prek ambel High School</li>
                                <li>2021 - 2024: Royal University of Phnom Penh</li>
                            </ul>
                            Skill
                            <p>Languages</p>
                            <ul>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap, JQuery and ReacJS</li>
                                <li>PHP</li>
                            </ul>
                            <p>Technology</p>
                            <ul>
                                <li>MySQL</li>
                                <li>Figma</li>
                            </ul>
                            Experience
                            <p>2020 - 2021: Worker of stock at Chip mong Tk condo</p>
                            <ul>
                                <li>Managed stock control processes, ensuring accurate inventory levels.</li>
                            </ul>
                            <p>2023 - 2024: Frontend Developer at Panel 7</p>
                            <ul>
                                <li>Designed and implemented user interfaces using Figma, ensuring a cohesive and visually appealing user experience.</li>
                                <li>Developed responsive websites using HTML, CSS, JavaScript and Bootstrap</li>
                                <li>Conducted regular website maintenance and updates, ensuring optimal performance and security.</li>
                                <li>Researched and implemented new web technologies to improve development processes and product offerings.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About