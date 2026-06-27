import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 mt-4 mb-4">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 p-4">
        <img src={assets.about_img} className="w-full md:max-w-[450px] "/>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate blanditiis quidem deserunt recusandae impedit sapiente consectetur, rerum quasi quam sed qui velit eaque. Repudiandae voluptatem officia eaque quidem consequuntur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum, ipsam ab labore quibusdam dolorum aliquid, quasi dolore voluptatibus voluptatem hic sapiente, assumenda placeat quod ratione numquam eum debitis doloribus!</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum, ipsam ab labore quibusdam dolorum aliquid, quasi dolore voluptatibus voluptatem hic sapiente, assumenda placeat quod ratione numquam eum debitis doloribus!</p>
        </div>
      </div>
      <div className="text-xl py-4 p-2">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
            <div className="border px-5 py-5 md:px-16 md:py-20 flex flex-col gap-5">
                <b>Quality Assurance: </b>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi inventore dolorem aspernatur veritatis quasi earum consequatur? Ab, hic sed.</p>
            </div>
            <div className="border px-5 py-5 md:px-16 md:py-20 flex flex-col gap-5">
                <b>Convenience: </b>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi inventore dolorem aspernatur veritatis quasi earum consequatur? Ab, hic sed.</p>
            </div>
            <div className="border px-5 py-5 md:px-16 md:py-20 flex flex-col gap-5">
                <b>Exceptional Customer Service: </b>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi inventore dolorem aspernatur veritatis quasi earum consequatur? Ab, hic sed.</p>
            </div>
        </div>
        <NewsLetterBox />
    </div>
  );
}

export default About;
