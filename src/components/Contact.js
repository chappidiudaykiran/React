const Contact=()=>{
    return(
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-sm p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">Contact Us</h1>
                        <p className="text-base text-gray-600">We'd love to hear from you.</p>
                    </div>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-800 font-medium mb-2 text-sm">Name</label>
                            <input type="text" className="w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:border-[#fc8019] transition-colors" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2 text-sm">Email</label>
                            <input type="email" className="w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:border-[#fc8019] transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2 text-sm">Message</label>
                            <textarea rows="5" className="w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:border-[#fc8019] transition-colors resize-none" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-[#fc8019] text-white font-semibold hover:bg-[#e87316] transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;