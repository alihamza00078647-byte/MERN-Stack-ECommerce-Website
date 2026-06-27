function Title({ text1, text2 }) {
  return (
    <div className="inline-flex gap-2 items-center ">
      <h4 className="m-0 text-gray-500 font-normal">
        {text1}{" "}
        <span className="text-gray-700 font-semibold">{text2}</span>
      </h4>
      <span className="block w-8 md:w-11 h-[2px] bg-gray-700" />
    </div>
  );
}

export default Title;