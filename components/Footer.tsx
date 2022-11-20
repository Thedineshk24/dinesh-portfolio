const Footer = () => {
    return (
      <>
        <footer id="contact" className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Made with{" "}
            <span className="text-red-500">❤</span> by Dinesh Katariya.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/dinesh-katariya/"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/thedineshk24"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:thedineshk24@gmail.com"
                className="mr-4 hover:underline md:mr-6"
              >
                Send Email
              </a>
            </li>
          </ul>
        </footer>
      </>
    );
  };
  
  export default Footer;
  