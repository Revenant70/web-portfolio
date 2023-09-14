import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Socials() {
    return (
        <>
            <div className="fixed left-0 top-0 h-screen">
                <div className="h-screen flex flex-col justify-center items-start gap-16 pl-8 bg-transparent">
                    <a href="https://twitter.com/Revenant_Dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size={"lg"}/></a>
                    <a href="https://www.linkedin.com/in/jackson-mcgillivary-297802266/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"lg"}/></a>
                    <a href="https://github.com/Revenant70" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size={"lg"}/></a>
                </div>
            </div>
        </>
    )
}

export default Socials