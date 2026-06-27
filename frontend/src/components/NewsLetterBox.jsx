function NewsLetterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="background-image text-center mt-5 mb-5">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now and get 20% off
      </p>
      <p className="text-white mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        consequuntur sunt labore unde necessitatibus voluptates, consectetur
        porro ut eum maxime, aut exercitationem dolore recusandae reiciendis
        eligendi minus in nam harum.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="h-14 w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3"
      >
        <input
          required
          type="email"
          placeholder="Enter your Email"
          className="w-full sm:flex-1 outline-none p-2"
        />
        <button type="submit" className="bg-black text-white text-xs px-4 py-3">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
