const Contact = () => {
  return (
    <div className="min-h-screen  bg-primary/30 flex items-center justify-center p-4">
      <div className="bg-kuning shadow-md rounded-lg p-6 w-full max-w-sm transition hover:shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Contact Us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
              Name
            </label>
            <input type="text" id="name" placeholder="Your name" className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input type="email" id="email" placeholder="Your email" className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm text-gray-700 mb-1">
              Message
            </label>
            <textarea id="message" rows="3" placeholder="Your message" className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white text-sm font-medium py-2 rounded-md hover:bg-purple-600 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
