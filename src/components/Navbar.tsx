interface NavbarProps {
    brand: { name: string; logo: string };
    links: string[];
}

function Navbar({ brand, links }: NavbarProps) {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 50px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px" }}>
                <span>{brand.logo}</span> {brand.name}
            </div>
            <ul style={{ display: "flex", listStyle: "none", gap: "25px", margin: 0, padding: 0 }}>
                {links.map((link) => (
                    <li key={link} style={{ cursor: "pointer", color: "#34495e", fontWeight: 500 }}>
                        {link}
                    </li>
                ))}
            </ul>
            <button style={{
                padding: "10px 20px",
                backgroundColor: "#2c3e50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
            }}>
                Liên hệ
            </button>
        </nav>
    );
}

export default Navbar;
