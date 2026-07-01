// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Shorten = () => {
//     const [url, seturl] = useState("")
//     const [shorturl, setshorturl] = useState("")
//     const [generated, setGenerated] = useState("")

//     const generate = () => {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const raw = JSON.stringify({
//             "url": url,
//             "shorturl": shorturl
//         });

//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"
//         };

//         fetch("/api/generate", requestOptions)
//             .then((response) => response.json())
//             .then((result) => {
//                 setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
//                 seturl("")   
//                 setshorturl("")
//                 console.log(result)
//                 alert(result.message)
            
//             })
//             .catch((error) => console.error(error));
//     }


//     return (
//         <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
//             <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
//             <div className='flex flex-col gap-2'>
//                 <input type="text"
//                     value={url}
//                     className='px-4 py-2 focus:outline-purple-600 rounded-md'
//                     placeholder='Enter your URL'
//                     onChange={e => { seturl(e.target.value) }} />

//                 <input type="text"
//                     value={shorturl}
//                     className='px-4 py-2 focus:outline-purple-600 rounded-md'
//                     placeholder='Enter your preferred short URL text'
//                     onChange={e => { setshorturl(e.target.value) }} />
//                 <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
//             </div>

//             {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
//                 </code></>}
//         </div>
//     )
// }

// export default Shorten

"use client"

import Link from "next/link"
import React, { useState } from "react"

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [qr, setQr] = useState("")
    const [expiry, setExpiry] = useState("");

    const generate = () => {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const raw = JSON.stringify({
            url,
            shorturl,
            expiry,
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        }

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            // .then((result) => {
            //     setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            //     seturl("")
            //     setshorturl("")
            //     alert(result.message)
            // })
            .then(async (result) => {
                const shortLink = `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`;
                setGenerated(shortLink);
                await generateQR(shortLink);
                seturl("");
                setshorturl("");
                alert(result.message);
            })
            .catch((error) => console.error(error))
    }

    const generateQR = async (link) => {
    try {
        const response = await fetch(
            `/api/qr?url=${encodeURIComponent(link)}`
        );

        const data = await response.json();

        setQr(data.qr);

    } catch (err) {
        console.error(err);
    }};

    return (
        <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-fuchsia-100 flex items-center justify-center px-4">

            <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl border border-white p-10">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Create Short URLs
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Turn long links into short, beautiful and shareable URLs in
                        seconds.
                    </p>
                </div>

                <div className="space-y-5">

                    <input
                        type="text"
                        value={url}
                        placeholder="Paste your long URL..."
                        onChange={(e) => seturl(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-300 outline-none transition"
                    />

                    <input
                        type="text"
                        value={shorturl}
                        placeholder="Custom short name (optional)"
                        onChange={(e) => setshorturl(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-300 outline-none transition"
                    />

                    <input
                        type="datetime-local"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-300 outline-none transition"
                    />

                    <button
                        onClick={generate}
                        className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition"
                    >
                        Generate Short URL
                    </button>

                </div>

                {/* {generated && (
                    <div className="mt-10 rounded-2xl bg-purple-50 border border-purple-200 p-6">

                        <h2 className="text-xl font-bold text-purple-700 mb-3">
                            🎉 Your Short Link
                        </h2>

                        <Link
                            href={generated}
                            target="_blank"
                            className="text-blue-600 font-medium break-all hover:underline"
                        >
                            {generated}
                        </Link>

                    </div>
                )} */}
                {generated && (
                    <div className="mt-10 rounded-2xl bg-purple-50 border border-purple-200 p-6">

                        <h2 className="text-xl font-bold text-purple-700 mb-3">
                            🎉 Your Short Link
                        </h2>

                        <Link
                            href={generated}
                            target="_blank"
                            className="text-blue-600 font-medium break-all hover:underline"
                        >
                            {generated}
                        </Link>

                        {/*<div className="mt-6 flex justify-center"> */}
                        <div className="mt-6 flex flex-col items-center">
                            {qr && (
                                <img
                                    src={qr}
                                    alt="QR Code"
                                    className="w-48 h-48"
                                />
                            )}

                            {/* <div className="flex justify-center gap-4 mt-4"> */}
                            <div className="flex gap-4 mt-4">

                                <button
                                    onClick={() => navigator.clipboard.writeText(generated)}
                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                                >
                                    Copy Link
                                </button>

                                {qr && (
                                    <a
                                        href={qr}
                                        download="ziplink-qr.png"
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg"
                                    >
                                        Download QR
                                    </a>
                                )}

                            </div>
                        </div>

                    </div>
                )}
            
            </div>

        </main>
    )
}

export default Shorten