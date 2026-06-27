import { assets } from "../assets/assets"
import Title from "../components/Title"


function Contact() {
    return (
        <div>
            <div className="text-center text-2xl mt-5 mb-5">
                <Title text1={'Contact'} text2={'US'}/>
            </div>

            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-10">
                <img className="w-full md:max-w-[480px]" src={assets.contact_img} />
                <div className="flex flex-col justify-center items-start gap-6">
                  <p className="font-semibold text-xl text-gray-600">Our Store</p>
                  <p>98232 Wiliam Station <br />Suite 3</p>
                  <p></p>
                  <p></p>
                </div>
            </div>
        </div>
    )
}


export default Contact