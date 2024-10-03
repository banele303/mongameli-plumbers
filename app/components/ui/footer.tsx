import Link from "next/link"



export default function Footer() {
    return (


        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">MONGAMELI PLUMBERS</h3>
                        <p>Building dreams and delivering excellence since 2010.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
                            <li><Link href="#services" className="hover:text-blue-400">Services</Link></li>
                           
                            <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>35 Welkom Street
                            Kloper Park
                            Germiston
                            Gauteng
                            1401</p>
                        <p>Phone: +27 83 946 2626</p>
                        <p>Email: info@mongameliplumbing.co.za</p>
                    </div>
                </div>
               
            </div>
            <div className="mt-8 text-center">
                    <p>&copy; 2024 Alex SouthFLow Marketing. All rights reserved.</p>
                </div>
        </footer>

    )
}