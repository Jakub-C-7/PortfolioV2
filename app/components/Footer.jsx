"use client";

import { styles } from "../styles";
import Image from "next/image";

const Footer = () => {
  function handleClick() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  return (
    <section
      id="footer"
      className="relative z-0 w-full h-1/5 mx-auto bg-background-contact"
    >
      <div className="self-center">
        <h2
          className={`${styles.sectionHeadText} text-white flex justify-center`}
        >
          thank you!
        </h2>
        <p className={"text-white flex justify-center"}>
          i appreciate you stopping by my campsite, find out even more about me
          below
        </p>
      </div>
      <div
        className={`${styles.paddingX} max-w-7xl flex justify-center mt-10 mb-10 gap-10 mx-auto`}
      >
        <a
          target="_blank"
          href="mailto:jakubchamera7@gmail.com"
          className="flex transition hover:scale-110"
        >
          <Image width={100} height={100} src="/socialsIcons/mail_main.png" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jakubchamera/"
          className="flex transition hover:scale-110"
        >
          <Image
            width={100}
            height={100}
            src="/socialsIcons/linkedin_main.png"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/Jakub-C-7"
          className="flex transition hover:scale-110"
        >
          <Image width={100} height={100} src="/socialsIcons/github_main.png" />
        </a>
      </div>

      <div
        className={`${styles.paddingX} flex mx-auto max-w-[20%] mb-6 hover:bg-[#E37A3E] rounded justify-center`}
      >
        <div class="popup" onClick={handleClick}>
          Art Credits
          <span class="popuptext" id="myPopup">
            3D Models: {""}
            <a
              href={"https://skfb.ly/6V9Ru"}
              className="hover:bg-[#E37A3E]"
              target="_blank"
            >
              Campsite {""}
            </a>
            <a
              href={"https://skfb.ly/o9ytH"}
              className="hover:bg-[#E37A3E]"
              target="_blank"
            >
              Workbench {""}
            </a>
            <a
              href={"https://skfb.ly/6XnUu"}
              className="hover:bg-[#E37A3E]"
              target="_blank"
            >
              Floppy Disk {""}
            </a>
            <a
              href={"https://skfb.ly/LZLq"}
              className="hover:bg-[#E37A3E]"
              target="_blank"
            >
              Autumn Tree Swing{" "}
            </a>
          </span>
        </div>
      </div>

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-center gap-5 pt-4 opacity-40`}
      >
        <p className={`text-white text-sm`}>&copy;Jakub Chamera</p>
      </div>
    </section>
  );
};

export default Footer;
