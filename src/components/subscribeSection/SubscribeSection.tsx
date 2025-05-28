export default function SubscriptionBlock() {
  return (
    <section className="text-white py-16 space-y-12 px-4">
      {/* Header Section */}
      <div className="flex w-full items-start">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Lorem Ipsum</h2>
          <p className="text-gray-300 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

      {/* Subscription Card */}
      <div className="bg-[#1A130C] rounded-xl mx-auto p-6 md:p-10 shadow-md w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">Stay in the loop</h3>
            <p className="text-gray-300">
              Subscribe to receive the latest news and updates about TDA. <br />
              We promise not to spam you!
            </p>
          </div>

          {/* Form Section */}
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3 bg-white rounded-2xl p-2 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 text-black focus:outline-none w-full sm:w-72 rounded-md sm:rounded-l-md"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition sm:rounded-r-md"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
