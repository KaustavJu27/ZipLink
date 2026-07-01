"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

    const [links, setLinks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/api/dashboard")
            .then((res) => res.json())
            .then((data) => setLinks(data))
            .catch((err) => console.error(err));
    }, []);

    const deleteLink = async (shorturl) => {

        const confirmDelete = confirm(
            "Are you sure you want to delete this URL?"
        );

        if (!confirmDelete) return;

        const response = await fetch("/api/delete", {

            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                shorturl,
            }),

        });

    const result = await response.json();

        if (result.success) {

            setLinks(
                links.filter(
                    (link) => link.shorturl !== shorturl
                )
            );

        }

    };

    const filteredLinks = links.filter((link) =>
        link.shorturl.toLowerCase().includes(search.toLowerCase()) ||
        link.url.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen p-8">

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <input
                type="text"
                placeholder="Search by short URL or original URL..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {links.length === 0 ? (
                <p className="text-gray-500">
                    No URLs created yet.
                </p>
            ) : (
                <table className="w-full border border-gray-300">

                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3">Short URL</th>
                            <th className="p-3">Original URL</th>
                            <th className="p-3">Clicks</th>
                            <th className="p-3">Created</th>
                            <th className="p-3">Last Visited</th>
                            <th className="p-3">Expiry</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredLinks.map((link) => (

                            <tr key={link._id}>

                                <td className="border p-3">
                                    {link.shorturl}
                                </td>

                                <td className="border p-3">
                                    {link.url}
                                </td>

                                <td className="border p-3 text-center">
                                    {link.clicks ?? 0}
                                </td>

                                <td className="border p-3">
                                    {link.createdAt
                                        ? new Date(link.createdAt).toLocaleString()
                                        : "-"}
                                </td>

                                <td className="border p-3">
                                    {link.lastVisited
                                        ? new Date(link.lastVisited).toLocaleString()
                                        : "Never"}
                                </td>

                                <td className="border p-3">
                                    {!link.expiresAt ? (
                                        <span className="text-green-600 font-semibold">
                                            Never
                                        </span>
                                    ) : new Date(link.expiresAt) > new Date() ? (
                                        <span className="text-blue-600 font-semibold">
                                            Active
                                        </span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">
                                            Expired
                                        </span>
                                    )}
                                </td>

                                <td className="border p-3">

                                    <button

                                        onClick={() => deleteLink(link.shorturl)}

                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"

                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>
            )}

        </main>
    );
}