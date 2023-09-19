function Contact() {
  return (
    <div
      id="Contact"
      className="h-screen w-full flex justify-center items-center"
    >
      <div className="w-4/12 h-screen flex flex-col justify-center items-center">
        <form className="flex flex-col gap-3 justify-center items-center w-10/12 h-screen">
          <h2 className="text-6xl font-secondary border-accent1 border-b-2 mb-8">
            Reach me
          </h2>
          <div className="flex flex-row justify-between w-full">
            <label
              className="flex flex-col w-full justify-center items-center mr-2"
              htmlFor="fname"
            >
              <span className="text-xl font-secondary">
                Your full name{" "}
              </span>
              <input
                className="border border-secondary rounded-xl p-4 m-2 w-full"
                type="text"
                id="fname"
                name="user_name"
                placeholder="John Doe"
              />
            </label>
            <label
              className="flex flex-col w-full justify-center items-center ml-2"
              htmlFor="email"
            >
              <span className="text-xl font-secondary">Your email </span>
              <input
                className="border border-secondary rounded-xl p-4 m-2 w-full"
                type="text"
                id="email"
                name="user_email"
                placeholder="johndoe@gmail.com"
              />
            </label>
          </div>

          <label
            className="flex flex-col w-full justify-center items-center"
            htmlFor="message"
          >
            <span className="text-xl font-secondary mb-3">Your message </span>
            <textarea
              className="border border-secondary rounded-md p-4 w-full h-32 resize-y"
              type="text"
              id="message"
              name="user_message"
              placeholder="Hey Jackson, I wanted to discuss collaborating"
            />
          </label>
          <button
            className="border border-secondary rounded-full h-12 w-4/12 mt-8"
            type="button"
          >
            Shoot
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
