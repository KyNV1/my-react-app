interface FooterProps {
    company: string;
    year: number;
}

function Footer({ company, year }: FooterProps) {
    return (
        <footer style={{
            textAlign: "center",
            padding: "40px 20px",
            backgroundColor: "#2c3e50",
            color: "#ecf0f1"
        }}>
            <p style={{ margin: 0 }}>© {year} {company}. All rights reserved.</p>
            <div style={{ marginTop: "15px", fontSize: "0.9rem", opacity: 0.7 }}>
                Được xây dựng bằng React & TypeScript
            </div>
        </footer>
    );
}

export default Footer;
