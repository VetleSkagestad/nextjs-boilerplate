import React from "react";

const members = [
    { name: "Alice Smith", role: "Lead Developer" },
    { name: "Bob Johnson", role: "Game Designer" },
    { name: "Carol Lee", role: "Artist" },
    { name: "David Kim", role: "Sound Engineer" },
    // Add more members as needed
];

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            {/* About Section */}
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-4">About GameDev Syndicate</h1>
                <p className="text-lg text-gray-700">
                    GameDev Syndicate is a collective of passionate developers, artists, and designers dedicated to creating innovative and engaging games. Our mission is to foster creativity, collaboration, and excellence in game development.
                </p>
            </section>

            {/* Members Grid Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Our Members</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
                            <div className="text-lg font-medium">{member.name}</div>
                            <div className="text-gray-500">{member.role}</div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
