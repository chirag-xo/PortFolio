"use client";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { toast } from "react-hot-toast";

export const ContactSection = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!fullName || !email || !message) {
    toast.error(" Fill out the required details  （︶^︶）");
    return;
  }

  const formData = new FormData(form);
  formData.append("access_key", "59807565-aa93-4884-8fdd-dbc4e7f03c62");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully! 🚀");
      form.reset(); // Clear the form after successful submission
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch (error) {
    toast.error("Something went wrong. Please try later.");
    console.error("Form error:", error);
  }
}

  return (
    <>
      <section className="flex items-center justify-center">
        <div className="container max-w-2xl mx-auto px-4 py-14 flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col gap-2 items-center">
            <span className="flex items-center gap-2 text-lime-400 font-medium uppercase tracking-wider text-sm mb-2">
              <SparkleIcon className="size-5 text-lime-400" />
              Connect with me
            </span>
            <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm font-semibold">Available for work</div>
            </div>
            <h2 className="text-white px-8 font-host-grotesk text-5xl sm:text-2xl md:px-16 md:text-5xl font-bold leading-tight text-center">
              <TextAnimate
                className="px-8"
                animation="blurInUp"
                by="character"
                duration={1}
              >
                Let&apos;s start a project together
              </TextAnimate>
            </h2>
          </div>
          <form
            className="space-y-6 flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="lg:w-96 sm:w-80 rounded-lg bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                autoComplete="off"
              />
            </div>
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="lg:w-96 sm:w-80 rounded-lg bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                autoComplete="off"
              />
            </div>
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="lg:w-96 sm:w-80 rounded-lg bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-lime-400 resize-none"
              ></textarea>
            </div>

            <InteractiveHoverButton type="submit">
              Submit
            </InteractiveHoverButton>
          </form>
        </div>
      </section>
    </>
  );
};
