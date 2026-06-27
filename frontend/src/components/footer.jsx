import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="px-6 sm:px-14 mt-5 border p-3">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-10 mb-10 text-sm">
        <div>
          <img src={assets.Sprint_logo} alt="Sprintix" className="mb-5 w-32" />
          <p className="px-2 w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, dolorum? Nam quo voluptas totam ut quae blanditiis,
            magni nostrum delectus repellat voluptatibus, laborum id quaerat
            libero ratione praesentium? Iure, at.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>+9262698293820</li>
            <li>Sprintix@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center text-sm">
          Copyright 2026 @ Sprintix.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
