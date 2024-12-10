
const Contact = () => {
    return (
        <div id="contact">
            <div className="container-lg mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <h1 className="h1" >Lets</h1>
                        <h1 className="h1" >Get in Touch</h1>
                        <p className="text-secondary">I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. I’m always open to discussing new opportunities, collaborations, or exciting challenges. Let’s create something amazing together!</p>
                    </div>

                    <div className="col-lg-5">
                        <form >
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" required /><br />
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className="form-control" required /><br />
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" className="form-control" ></textarea><br />
                            <button className="btn btn-warning ps-4 pe-4 rounded-3 text-white" type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact