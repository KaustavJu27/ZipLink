import Link from "next/link";

export default function About() {
    const features = [
        {
            title: "URL Shortening",
            desc: "Convert long URLs into short and shareable links.",
            icon: "🔗",
        },
        {
            title: "QR Code",
            desc: "Generate and download QR codes instantly.",
            icon: "📱",
        },
        {
            title: "Analytics",
            desc: "Track clicks and monitor link usage.",
            icon: "📊",
        },
        {
            title: "Dashboard",
            desc: "Manage all your shortened URLs in one place.",
            icon: "📋",
        },
        {
            title: "Link Expiry",
            desc: "Create links that automatically expire.",
            icon: "⏰",
        },
        {
            title: "Search",
            desc: "Quickly search and find any saved link.",
            icon: "🔍",
        },
        {
            title: "Delete Links",
            desc: "Remove unwanted links with one click.",
            icon: "🗑️",
        },
        {
            title: "Responsive UI",
            desc: "Works beautifully across desktop and mobile.",
            icon: "💻",
        },
    ];

    const tech = [
        "Next.js",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "JavaScript",
        "QRCode",
        "Vercel",
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-fuchsia-100 py-12 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Hero */}
                <div className="text-center mb-16">

                    <h1 className="text-5xl font-bold text-gray-900">
                        About ZipLink
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        ZipLink is a modern URL shortening platform built with
                        Next.js and MongoDB. It helps users create custom short
                        links, generate QR codes, monitor analytics, manage links
                        through a dashboard, and set expiration dates.
                    </p>

                    <Link href="/shorten">
                        <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                            Try ZipLink
                        </button>
                    </Link>

                </div>

                {/* Features */}

                <h2 className="text-3xl font-bold text-center mb-10">
                    Features
                </h2>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-20">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition"
                        >

                            <div className="text-5xl mb-4">
                                {feature.icon}
                            </div>

                            <h3 className="font-bold text-xl mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600">
                                {feature.desc}
                            </p>

                        </div>

                    ))}

                </div>

                {/* Tech Stack */}

                <h2 className="text-3xl font-bold text-center mb-8">
                    Tech Stack
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-20">

                    {tech.map((item) => (

                        <span
                            key={item}
                            className="bg-white px-6 py-3 rounded-full shadow-md border border-purple-300 font-semibold"
                        >
                            {item}
                        </span>

                    ))}

                </div>

                {/* Workflow */}

                <h2 className="text-3xl font-bold text-center mb-8">
                    How ZipLink Works
                </h2>

                <div className="bg-white rounded-3xl shadow-xl p-10 mb-20">

                    <div className="grid md:grid-cols-5 gap-6 text-center">

                        <div>
                            <div className="text-4xl">🌐</div>
                            <p className="mt-3 font-semibold">
                                Enter URL
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl">⚡</div>
                            <p className="mt-3 font-semibold">
                                Generate Link
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl">📱</div>
                            <p className="mt-3 font-semibold">
                                QR Code
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl">📊</div>
                            <p className="mt-3 font-semibold">
                                Analytics
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl">📋</div>
                            <p className="mt-3 font-semibold">
                                Dashboard
                            </p>
                        </div>

                    </div>

                </div>

                {/* Why ZipLink */}

                <div className="bg-white rounded-3xl shadow-xl p-10 mb-20">

                    <h2 className="text-3xl font-bold mb-5">
                        Why ZipLink?
                    </h2>

                    <p className="text-gray-700 leading-8 text-lg">
                        ZipLink was developed as a full-stack web application to
                        simplify URL sharing while demonstrating modern web
                        development practices. The project integrates Next.js App
                        Router, MongoDB, dynamic routing, QR code generation,
                        analytics tracking, responsive UI design, and dashboard
                        management into a single platform.
                    </p>

                </div>

                {/* Future */}

                <div className="bg-white rounded-3xl shadow-xl p-10 mb-20">

                    <h2 className="text-3xl font-bold mb-5">
                        Future Enhancements
                    </h2>

                    <ul className="space-y-3 text-lg text-gray-700">

                        <li>✅ User Authentication</li>

                        <li>✅ Password Protected Links</li>

                        <li>✅ Custom Domains</li>

                        <li>✅ Advanced Analytics</li>

                        <li>✅ Team Collaboration</li>

                    </ul>

                </div>

                {/* CTA */}

                <div className="text-center">

                    <h2 className="text-4xl font-bold mb-5">
                        Ready to Shorten Your Links?
                    </h2>

                    <p className="text-gray-600 mb-8">
                        Create smart, shareable, and trackable links with ZipLink.
                    </p>

                    <Link href="/shorten">

                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition">

                            Get Started

                        </button>

                    </Link>

                </div>

            </div>

        </main>
    );
}