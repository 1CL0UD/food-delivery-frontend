import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div
      className="footer text-gray-200 bg-gray-800 flex flex-col items-center gap-4 py-4 px-[8vw] pt-20"
      id="footer"
    >
      <div className="footer-content w-full grid md:grid-cols-4 grid-cols-2 gap-20 mb-8">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            veritatis repellat voluptatibus, illo id deleniti.
          </p>
          <div className="footer-social-section flex gap-4">
            <img className="w-10" src={assets.facebook_icon} alt="" />
            <img className="w-10" src={assets.twitter_icon} alt="" />
            <img className="w-10" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="uppercase">Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy and policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="uppercase">Get in Touch</h2>
          <ul>
            <li>+1-234-567</li>
            <li>contact@food.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>
  );
};

export default Footer;
