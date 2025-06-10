import React from "react";



export default function ContactPage() {
    return (
        <main className="container mx-auto max-w-lg py-12 px-4">
            <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1 text-primary">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full border border-secondary rounded px-3 py-2 bg-background text-primary"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium mb-1 text-primary">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full border border-secondary rounded px-3 py-2 bg-background text-primary"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium mb-1 text-primary">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full border border-secondary rounded px-3 py-2 bg-background text-primary"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-accent text-accent-foreground px-4 py-2 rounded hover:bg-accent-dark"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
}