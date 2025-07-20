import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col gap-8 py-4 md:py-8 relative px-4" id="contact">
      {/* Header */}
      <header className="flex items-center gap-3 mb-4 justify-center">
        <h4 className="text-2xl md:text-3xl font-bold text-center text-[var(--text-primary)]">
          Connect with me
        </h4>
        <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-[var(--card-bg)] rounded-xl"></div>
      </header>

      <div className="border border-[var(--card-border)] w-full flex flex-col gap-2 items-center rounded-2xl p-6 sm:p-8 md:p-10 bg-[var(--card-bg)]">
        <h5 className="text-xl md:text-2xl text-[var(--text-secondary)] text-center">
          Join my newsletter
        </h5>
        <p className="text-sm md:text-base text-center text-[var(--text-muted)]">
          Receive fresh articles straight in your inbox, every Friday morning. I
          also share interesting finds from the internet!
        </p>

        <form className="flex flex-col w-full mt-6 gap-2">
          <input
            type="email"
            placeholder="Your email address…"
            className="p-2.5 bg-[var(--background)] w-full border border-[var(--card-border)] rounded-lg text-[var(--text-primary)] text-sm text-center"
          />
          <p className="text-xs text-[var(--text-secondary)] text-center mt-1">
            Weekly newsletter only. No spam, unsubscribe at any time.
          </p>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-[var(--text-secondary)] text-sm mt-2"
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
