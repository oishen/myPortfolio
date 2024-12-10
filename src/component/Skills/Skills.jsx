import ProgressBar from "../ProgressBar/ProgressBar"

const Skills = () => {
    return (
        <div id="skills" >
            <div className="container-lg mt-5 pt-5">
                <div className="w-100">
                    <h1 className="h1 text-center">Skills</h1>
                    <div className="col-lg-6 m-auto mt-5">
                        
                        <ProgressBar label={'HTML'} percentage={80} />
                        <ProgressBar label={'CSS'} percentage={80} />
                        <ProgressBar label={'JavaScript'} percentage={60} />
                        <ProgressBar label={'jQuery'} percentage={40} />
                        <ProgressBar label={'Bootstrap'} percentage={90} />
                        <ProgressBar label={'ReactJS'} percentage={55} />
                        <ProgressBar label={'PHP'} percentage={50} />
                        <ProgressBar label={'MySql'} percentage={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills