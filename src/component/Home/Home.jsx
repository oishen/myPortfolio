import TextWriter from "../TextWrite/TextWriter"

const Home = () => {
    return (
        <div id="home" >
            <div className="container-lg mt-5">
                <div className="row ">
                    <div className="col-lg col-12 mt-5">
                        <h5 className="h5">Hi, I am</h5>
                        <h3 className="h3">Soy Sen</h3>
                        <TextWriter/>
                        <p className="text-secondary" >With a passion for creating stunning and user-friendly web interfaces, I specialize in bringing designs to life through code. My expertise lies in HTML, CSS, JavaScript, and modern frontend frameworks. I strive to deliver seamless user experiences that leave a lasting impression.</p>
                        <a className="btn btn-outline-warning rounded-pill ps-4 pe-4" download href="./src/component/asset/frontend.pdf" >
                            {/* icon download */}
                            <i className="fa fa-download fa-bounce"></i> Download Cv
                        </a>
                    </div>

                    <div className="col-lg d-flex align-items-center justify-content-center mt-5">
                        <div className="rounded-circle border border-3 border-warning" id="circle">
                            <img src="./src/component/asset/profile1.png" alt="" id="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home