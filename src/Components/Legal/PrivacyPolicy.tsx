import { useEffect } from "react";
import CommonNavbar from "../Navbar";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <CommonNavbar />
      <div
        className="absolute z-10 rotate-45 overflow-hidden blur-2xl lg:block lg:px-36"
        aria-hidden="true"
      ></div>
      <div className="mb-16 border-black px-5 py-2 text-zinc-800 lg:mt-20 lg:px-72">
        <h1 className="text-4xl font-bold tracking-wider text-zinc-800">
          Privacy Policy
        </h1>
        <p className="mt-3 text-justify text-lg">
          At AceingDev, we respect your privacy. We do not collect personal
          information unless you voluntarily provide it through forms or direct
          communication.
        </p>

        <p className="mt-3 text-justify text-lg">
          We may use basic website analytics to understand visitor activity and
          improve user experience. This may include anonymous information such
          as browser type, pages visited, and time spent on the site. No
          personally identifying information is collected without your consent.
        </p>

        <p className="mt-3 text-justify text-lg">
          Your data is never sold, shared, or used for advertising purposes.
        </p>

        <p className="mt-3 text-justify text-lg">
          By using this website, you agree to this privacy policy. If you have
          questions, you can contact us at:
          <a
            className="ml-1 text-blue-600"
            href="mailto:contact@aceingdev.com"
          >
            contact@aceingdev.com
          </a>
        </p>
        <h1 className="mt-5 text-3xl font-bold">Contact Us</h1>
        <p className="mt-3 text-justify">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className="mt-3 space-y-4">
          {" "}
          <li className="ml-5 flex gap-x-3">
            <p>•</p>{" "}
            <p className="text-justify">
              By visiting this page on our website:{" "}
              <a className="text-blue-600" href="https://aceingdev.com">
                https://aceingdev.com
              </a>
            </p>
          </li>
          <li className="ml-5 flex gap-x-3">
            <p>•</p>{" "}
            <p className="text-justify">
              Protect and defend the rights or property of the Company
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PrivacyPolicy;
