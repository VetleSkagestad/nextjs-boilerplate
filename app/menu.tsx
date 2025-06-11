import React from "react";

const menuItems = [
    { label: "Homepage", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function MenuBar() {
    return (
        <nav
            style={{
            width: "100%",
            background: "var(--foreground)",
            padding: "0 2rem",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            <style>
            {`
            .menu-link {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.1rem;
            transition: color 0.2s, background 0.2s;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            }
            .menu-link:hover {
            color: rgb(161, 161, 161);
            }
            .menu-link.active {
            background: var(--highlight, #ffe066);
            color: #222 !important;
            box-shadow: 0 0 0 2px var(--highlight, #ffe066);
            }
            `}
            </style>
            <ul
            style={{
                display: "flex",
                gap: "2rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
            }}
            >
            {menuItems.map((item) => {
                let isActive = false;
                if (typeof window !== "undefined") {
                isActive = window.location.pathname === item.href;
                }
                return (
                <li key={item.href}>
                    <a
                    href={item.href}
                    className={`menu-link${isActive ? " active" : ""}`}
                    style={isActive ? { background: "var(--highlight, #ffe066)", color: "#222" } : undefined}
                    >
                    {item.label}
                    </a>
                </li>
                );
            })}
            </ul>
        </nav>
    );
}