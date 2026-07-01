// import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"


// export default async function Page({ params }) {
//     const shorturl = (await params).shorturl

//     const client = await clientPromise;
//     const db = client.db("bitlinks")
//     const collection = db.collection("url")

//     const doc = await collection.findOne({shorturl: shorturl})

//     if (
//         doc.expiresAt &&
//         new Date() > new Date(doc.expiresAt)
//     ) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <h1 className="text-3xl font-bold text-red-600">
//                     This link has expired.
//                 </h1>
//             </div>
//         );
//     }

//     console.log(doc)
//     if(doc){
//                 await collection.updateOne(
//             { shorturl: shorturl },
//             {
//                 $inc: {
//                     clicks: 1,
//                 },
//                 $set: {
//                     lastVisited: new Date(),
//                 },
//             }
//         );
//          redirect(doc.url)
//     }
//     else{
//         redirect(`${process.env.NEXT_PUBLIC_HOST}`)
//     }
    
//     return <div>My Post: {url}</div>
//   }

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const shorturl = (await params).shorturl;

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({
        shorturl: shorturl,
    });

    // If URL doesn't exist
    if (!doc) {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }

    // Check if link has expired
    if (
        doc.expiresAt &&
        new Date() > new Date(doc.expiresAt)
    ) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-50">
                <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

                    <h1 className="text-4xl font-bold text-red-600 mb-4">
                        Link Expired
                    </h1>

                    <p className="text-gray-600 mb-6">
                        This short link has expired and is no longer available.
                    </p>

                    <a
                        href="/"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
                    >
                        Go to Home
                    </a>

                </div>
            </main>
        );
    }

    // Update analytics
    await collection.updateOne(
        { shorturl: shorturl },
        {
            $inc: {
                clicks: 1,
            },
            $set: {
                lastVisited: new Date(),
            },
        }
    );

    // Redirect to original URL
    redirect(doc.url);
}