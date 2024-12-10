import Card from "../Card/Card"
import products from '../../component/asset/project'

const Projects = () => {

    return (
        <div id="projects" >
            <div className="container-lg mt-5 pt-5">
                <div>
                    <h1 className="h1 text-center">Projects</h1>
                    <p className="text-secondary col-lg-10 m-auto mt-5 text-center">Throughout my career, I have designed and developed a range of projects that showcase my expertise in UI/UX and web design. Each project reflects a deep understanding of user needs, technical skills, and a passion for creating impactful digital experiences.</p>
                    <ul className="nav nav-pills border rounded-pill mt-4 m-auto" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active rounded-pill" data-bs-toggle="pill" href='#all'>All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill" data-bs-toggle="pill" href="#uiux">UI UX</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill" data-bs-toggle="pill" href="#webdesign">Website Design</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="all" className="container-lg tab-pane active"><br/>
                            <div className="row">
                                {products.map((pro, i)=>{
                                    return(
                                        <div key={i} className="col-4 col-lg-3">
                                            <Card url={pro.url} name={pro.name} description={pro.description} img={pro.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div id="uiux" className="container-lg tab-pane fade"><br/>
                            <div className="row">
                                {products.filter(f => f.name === 'UI UX').map((pro, i)=>{
                                    return(
                                        <div key={i} className="col-4 col-lg-3">
                                            <Card url={pro.url} name={pro.name} description={pro.description} img={pro.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div id="webdesign" className="container-lg tab-pane fade"><br/>
                            <div className="row">
                                {products.filter(f => f.name === 'Website design').map((pro, i)=>{
                                    return(
                                        <div key={i} className="col-4 col-lg-3">
                                            <Card url={pro.url} name={pro.name} description={pro.description} img={pro.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects