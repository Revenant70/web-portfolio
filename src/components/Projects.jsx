

function Projects() {

    return(
        <div id='Projects' className=" h-screen w-screen flex flex-col justify-items-center items-center scrollbar-hide snap-y snap-mandatory overflow-scroll">
            <div className="min-h-screen w-8/12 flex flex-col justify-center gap-16 snap-start">
                <div className="flex flex-row justify-end w-full h-64">
                    <div className="bg-black h-64 w-6/12">
                    </div>
                </div>
                <div className="flex flex-row justify-start w-full h-64 ">
                    <div className="bg-black h-64 w-6/12">
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-8/12 flex flex-col justify-center gap-16 snap-start">
                <div className="flex flex-row justify-end w-full h-64 ">
                    <div className="bg-black h-64 w-6/12">
                    </div>
                </div>
                <div className="flex flex-row justify-start w-full h-64 ">
                    <div className="bg-black h-64 w-6/12">
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Projects

