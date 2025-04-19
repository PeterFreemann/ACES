'use client'

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="bg-base-200 p-6 bg-gray-300">
      <footer className="footer grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
        <aside className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-serif">FreeMann</span>
          </div>
          <p className="text-base-content font-serif md:text-left text-center">
            Most developer-friendly & highly <br />customizable Tailwind UI Kit.
          </p>
        </aside>

        <nav className="text-base-content grid text-left">
          <h6 className="footer-title font-semibold text-lg font-serif">Services</h6>
          <Link to="/branding" className="link text-grey-200 link-hover font-serif">Branding</Link>
          <Link to="/design" className="link link-hover font-serif">Design</Link>
          <Link to="/marketing" className="link link-hover">Marketing</Link>
          <Link to="/advertisement" className="link link-hover">Advertisement</Link>
        </nav>

        <nav className="text-base-content grid text-left">
          <h6 className="footer-title font-semibold text-lg font-serif">Company</h6>
          <Link to="/about" className="link link-hover font-serif">About us</Link>
          <Link to="/contact" className="link link-hover font-serif">Contact</Link>
          <Link to="/jobs" className="link link-hover font-serif">Jobs</Link>
          <Link to="/press" className="link link-hover font-serif">Press kit</Link>
        </nav>

        <nav className="text-base-content grid text-left">
          <h6 className="footer-title font-semibold text-lg font-serif">Legal</h6>
          <Link to="/terms" className="link link-hover font-serif">Terms of use</Link>
          <Link to="/privacy" className="link link-hover font-serif">Privacy policy</Link>
          <Link to="/cookies" className="link link-hover font-serif">Cookie policy</Link>
        </nav>
      </footer>
    </section>
  );
}
