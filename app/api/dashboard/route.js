import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const urls = await collection.find({}).toArray();

    return Response.json(urls);
}