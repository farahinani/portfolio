"use client";
/* eslint-disable react/no-unescaped-entities */
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { useState } from "react";

export const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // ✅ simpan reference
    setLoading(true);

    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    // if (res.ok) {
    //   setSuccess(true);
    //   e.currentTarget.reset();
    // }
    if (res.ok) {
      form.reset();      // ✅ reset dulu
      setSuccess(true);  // baru tukar UI

      setTimeout(() => {
        setOpen(false);   // close modal
        setSuccess(false); // reset state untuk next open
      }, 2000);
    }

  }

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className='container'>
        <div className='bg-gradient-to-r from-fuchsia-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Got an idea? <br />Let’s make it happen.</h2>
              <p className="text-sm md:text-base mt-2">
                {/* Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals. */}
                Ready to bring your next project to life? Let’s connect and explore how I can help you achieve your objectives.
              </p>
            </div>
            <div>
              {/* <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button> */}

              {/* <a
                href="mailto:farahinaniahmad@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="w-4" />
              </a> */}

              {/* BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                Contact Me
              </button>

              {/* MODAL */}
              {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-2xl w-full max-w-md">
                    <h2 className="font-serif text-2xl mb md:text-3xl">Get In Touch</h2>

                    {success ? (
                      <>
                      <p className="text-green-600">Message sent successfully!</p>
                      <p>Thank you for your message. I’ll get back to you shortly.</p>
                      </>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          name="name"
                          placeholder="Your name"
                          required
                          className="w-full border p-2 rounded"
                        />
                        <input
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="w-full border p-2 rounded"
                        />
                        <textarea
                          name="message"
                          placeholder="Your message"
                          required
                          className="w-full border p-2 rounded"
                        />

                        <button
                          disabled={loading}
                          className="w-full bg-black text-white py-2 rounded"
                        >
                          {loading ? "Sending..." : "Send"}
                        </button>

                        <div className="flex justify-center">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-sm text-gray-500"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              )}



            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
