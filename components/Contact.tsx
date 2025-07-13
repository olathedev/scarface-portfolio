import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col gap-8 py-4 md:py-8 relative px-4" id="contact">
      {/* Header */}
      <header className="flex items-center gap-3 mb-4 justify-center">
        <h4 className="text-2xl md:text-3xl font-bold text-center">
          Connect with me
        </h4>
        <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-[#15161A] rounded-xl"></div>
      </header>

      <div className="border border-[#626468] w-full flex flex-col gap-2 items-center rounded-2xl p-6 sm:p-8 md:p-10">
        <h5 className="text-xl md:text-2xl text-[#47484C] text-center">
          Join my newsletter
        </h5>
        <p className="text-sm md:text-base text-center">
          Receive fresh articles straight in your inbox, every Friday morning. I
          also share interesting finds from the internet!
        </p>

        <form className="flex flex-col w-full mt-6 gap-2">
          <input
            type="email"
            placeholder="Your email address…"
            className="p-2.5 bg-[#15161A] w-full border border-[#626468] rounded-lg text-white text-sm text-center"
          />
          <p className="text-xs text-[#47484C] text-center mt-1">
            Weekly newsletter only. No spam, unsubscribe at any time.
          </p>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-[#47484C] text-sm mt-2"
            >
              Subscribe
            </button>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
