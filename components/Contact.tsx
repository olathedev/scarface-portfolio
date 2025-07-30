"use client";
import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setSuccess(false);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      setIsLoading(true);
      // console.log("lfggg");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setEmail("");

      console.log("data", data);
    } catch (error) {
      setSuccess(true);
      // setEmail("");
      setError("An error occurred while subscribing. Please try again later.");
    } finally {
      setError(null);
      // setEmail("");
      setIsLoading(false);
      setSuccess(false);
    }
  };

  return (
    <section
      className="flex flex-col gap-8 py-4 md:py-8 relative px-4"
      id="contact"
    >
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

        <form
          className="flex flex-col w-full mt-6 gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your email address…"
            className="p-2.5 bg-[var(--background)] w-full border border-[var(--card-border)] rounded-lg text-[var(--text-primary)] text-sm text-center"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-xs text-[var(--text-secondary)] text-center mt-1">
            Weekly newsletter only. No spam, unsubscribe at any time.
          </p>
          {error && (
            <p className="text-xs text-red-500 text-center mt-1">{error}</p>
          )}
          {success && (
            <p className="text-xs text-green-600 text-center mt-1">
              Successfully subscribed!
            </p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary cursor-pointer text-white py-2 px-4 rounded-lg hover:opacity-90 text-sm mt-2"
            >
              {isLoading ? "loading..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
