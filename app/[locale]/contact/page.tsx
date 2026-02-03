import { Cormorant_Garamond } from "next/font/google";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

const ContactPage = () => {
  const mapSrc =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.5722535747695!2d44.765523876555804!3d41.72974817468865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473003cb939e3%3A0xa9ac883f91aca3f4!2z4YOe4YOY4YOq4YOU4YOg4YOY4YOQIOGDmuGDkCDhg5nhg6Dhg53hg6Hhg6Lhg5AgTGEgQ3Jvc3RhIFBpenplcmlh!5e0!3m2!1sen!2sge!4v1769379578684!5m2!1sen!2sge",
    width = "600",
    height = "450",
    style = "border:0;",
    loading = "lazy",
    referrerpolicy = "no-referrer-when-downgrade";


  return (
    <div className="w-full px-5 sm:px-15 md:px-30 pt-40">
      <div className="gap-15 flex flex-col lg:flex-row w-full items-center">
        <div className="w-full lg:w-1/3 h-180">
          <span className={`${CormorantGaramond.className} text-3xl`}>Visit Us</span>
          <iframe
            src={mapSrc}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>

        <div className="lg:w-2/3 w-full flex flex-col gap-6">
          <div className="flex gap-3 sm:gap-5 lg:gap-10 w-full">
            <div className="flex flex-col w-1/2">
              <label className="mb-1">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-lg focus:outline-0 border-neutral-300"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-lg focus:outline-0 border-neutral-300"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg focus:outline-0 border-neutral-300"
            />
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <label className="mb-1">Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border p-3 rounded-lg focus:outline-0 border-neutral-300"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-1">Message</label>
            <textarea
              placeholder="Messege"
              className="border p-6 rounded-2xl focus:outline-0 border-neutral-300 resize-none h-64 w-full"
            />
          </div>

          <button className="w-full bg-[#E32929]/80 text-white py-4 rounded-2xl text-xl font-semibold mt-2 shadow-sm active:scale-[0.98] transition-transform">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
