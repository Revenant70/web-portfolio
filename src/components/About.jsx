
function About() {
    return(
        <div id='About' className="flex">
            <div className="basis-0/5 md:basis-1/5"></div>
            <div className="basis-0/5 md:basis-2/5"></div>
            <div className="h-screen basis-5/5 md:basis-2/5 flex flex-col justify-center items-center md:items-start">
                <h2 className="font-secondary text-center md:text-left text-4xl md:text-4xl lg:text-[2.5rem] w-10/12 md:w-11/12 lg:w-9/12 pb-4">Hello, I&apos;m Jackson, I like to build things.</h2>
                <p className="font-serif text-center md:text-left w-8/12 md:w-7/12 lg:w-6/12 text-sm md:text-[0.925srem] xl:text-lg leading-7">Cincinnati, &apos;02, that&apos;s where I began this adventure. Ever since then, I&apos;ve been hooked on challenges and creating. My path has led me through different interests like music production, video games, soccer, rock climbing, and programming. In all my endeavors, I work to blend creative design with a strong emphasis on efficiency and consistency, chasing that perfect mix of form and function.</p>
            </div>
        </div>
    )
}

export default About