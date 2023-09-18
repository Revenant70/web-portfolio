function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-around items-center h-screen w-10/12">
          <div className="flex flex-col">
            <h2 className="font-secondary text-3xl ">Hello, my name is</h2>
            <h1 className="font-secondary text-7xl pb-4 pt-2">
              Jackson McGillivary.
            </h1>
            <p className="font-serif text-2xl w-[20rem]">
              I am a software developer{" "}
              <span className="border-b-2 border-accent1">enthralled</span> by
              the idea of beautiful and efficient applications.
            </p>
          </div>
          <div>
            <img
              className="w-64 h-64 object-cover rounded-xl"
              src="./public/assets/pngs/Professional-headshot.png"
              alt="A headshot image of Jackson McGillivary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
