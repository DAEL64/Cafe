import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const BookTablePage = () => {
  return (
    <div className={`${cormorant.className} min-h-screen pt-40 pb-20 px-5`}>
        
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-[#A04501] uppercase tracking-[0.3em] text-sm font-semibold">Reservations</span>
        <h1 className="text-5xl md:text-6xl mt-4 mb-6">Secure Your Table</h1>
        <p className="text-gray-600 text-lg italic">
          Join us for an authentic wood-fired experience. For parties larger than 8, please call us directly.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-[#D3CCC9] rounded-[40px] p-8 md:p-16 shadow-sm">
        <form className="flex flex-col gap-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">Date</label>
              <input 
                type="date" 
                className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">Time</label>
              <input 
                type="time" 
                className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">Guests</label>
              <input 
                type="number" 
                min="1"
                max="8"
                placeholder="2"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors"
              />
            </div>
          </div>

         
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">Special Requests</label>
            <textarea 
              placeholder="Allergies, anniversaries, or seating preferences..."
              rows={5}
              className="border border-[#D3CCC9] p-6 rounded-[35px] focus:outline-none focus:border-[#A04501] transition-colors resize-none"
            />
          </div>

          <button className="w-full bg-[#D6716F] hover:bg-[#A04501] text-white py-5 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] mt-4 uppercase tracking-widest">
            Confirm Reservation
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8 italic">
          By clicking confirm, you agree to our 15-minute grace period policy.
        </p>
      </div>
    </div>
  );
};

export default BookTablePage;