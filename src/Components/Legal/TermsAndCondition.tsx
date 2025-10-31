import { useEffect } from "react";
import CommonNavbar from "../Navbar";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <CommonNavbar />
      <div className="mb-16 border-black px-5 py-2 text-zinc-800 lg:mt-20 lg:px-72">
        <h1 className="text-4xl font-bold tracking-wider text-zinc-800">
          Terms and Conditions
        </h1>
        <div className="mt-4 pl-1">
          <p>Last updated: October 31, 2025</p>

          <p className="mt-3 text-justify text-lg">
            Welcome to AceingDev. By using this website, you agree to the terms
            below.
          </p>

          <h2 className="mt-3 text-justify text-lg"> Use of Website</h2>
          <p className="mt-3 text-justify text-lg">
            All content on this website is for information and portfolio
            purposes only. You may browse and share public content, but you may
            not copy, reproduce, or use any material for commercial purposes
            without permission.
          </p>

          <h2 className="mt-3 text-justify text-lg">
            No Professional Liability
          </h2>
          <p className="mt-3 text-justify text-lg">
            The information shared on this website does not constitute
            professional advice. For project work or consulting, a separate
            agreement will be provided.
          </p>

          <h2 className="mt-3 text-justify text-lg">Third-Party Links</h2>
          <p className="mt-3 text-justify text-lg">
            This website may contain links to other sites. We are not
            responsible for external content or privacy practices.
          </p>

          <h2 className="mt-3 text-justify text-lg">Intellectual Property</h2>
          <p className="mt-3 text-justify text-lg">
            All work, branding, designs, and content showcased on AceingDev are
            owned by AceingDev unless stated otherwise.
          </p>

          <h2 className="mt-3 text-justify text-lg">Contact</h2>
          <p className="mt-3 text-justify text-lg">
            For questions about these terms, email :{" "}
            <a
              className="ml-1 text-blue-600"
              href="mailto:contact@aceingdev.com"
            >
              contact@aceingdev.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
