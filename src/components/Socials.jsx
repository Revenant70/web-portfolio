import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Socials() {
    return (
        <>
            <div className="h-screen w-1/12 flex flex-col justify-center items-start gap-16 pl-8">
                <a href=""><FontAwesomeIcon icon={faTwitter} size={"lg"}/></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} size={"lg"}/></a>
                <a href=""><FontAwesomeIcon icon={faGithub} size={"lg"}/></a>
            </div>
        </>
    )
}

export default Socials