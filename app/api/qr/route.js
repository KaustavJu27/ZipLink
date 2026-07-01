import QRCode from "qrcode";

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const url = searchParams.get("url");

    if (!url) {
        return Response.json(
            { error: "URL is required" },
            { status: 400 }
        );
    }

    try {
        const qr = await QRCode.toDataURL(url);

        return Response.json({
            qr,
        });
    } catch (err) {
        return Response.json(
            { error: "Failed to generate QR" },
            { status: 500 }
        );
    }
}