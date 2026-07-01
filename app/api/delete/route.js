import clientPromise from "@/lib/mongodb";

export async function DELETE(request) {

    const body = await request.json();

    const client = await clientPromise;

    const db = client.db("bitlinks");

    const collection = db.collection("url");

    const result = await collection.deleteOne({
        shorturl: body.shorturl,
    });

    if (result.deletedCount === 1) {
        return Response.json({
            success: true,
            message: "Deleted Successfully",
        });
    }

    return Response.json({
        success: false,
        message: "URL not found",
    });
}