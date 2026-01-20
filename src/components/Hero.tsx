interface HeroProps {
    title: string;
    subtitle: string;
    cta: string;
}

function Hero({ title, subtitle, cta }: HeroProps) {
    return (
        <section style={{
            textAlign: "center",
            padding: "100px 20px",
            backgroundColor: "#f8f9fa",
            backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
        }}>
            <h1 style={{ fontSize: "3.5rem", color: "#2c3e50", marginBottom: "20px" }}>{title}</h1>
            <p style={{ fontSize: "1.2rem", color: "#7f8c8d", maxWidth: "700px", margin: "0 auto 40px" }}>
                {subtitle}
            </p>
            <button style={{
                padding: "15px 40px",
                fontSize: "1.1rem",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)"
            }}>
                {cta}
            </button>
        </section>
    );
}

export default Hero;
