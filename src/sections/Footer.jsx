const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="flex items-center justify-center social-icon">
          <a href="https://github.com/VinayHomkar" target="_blank">
            <img src="/assets/github.svg" alt="github" className="h-9 w-9" />
          </a>
        </div>
        <div className="flex items-center justify-center social-icon">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinayhomkar2024@gmail.com" target="_blank">
            <img src="/assets/gmail.svg" alt="twitter" className="h-9 w-9" />
          </a>
        </div>
        <div className="flex items-center justify-center social-icon">
          <a href="https://wa.me/7406167017" target="_blank">
            <img src="/assets/whatsapp.svg" alt="instagram" className="h-9 w-9" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Vinay Homkar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
