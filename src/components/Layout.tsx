import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    const mainStyle: React.CSSProperties = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f2f5"
    };

    const headerStyle: React.CSSProperties = {
        padding: "20px",
        backgroundColor: "#2c3e50",
        color: "white",
        textAlign: "center"
    };

    const contentStyle: React.CSSProperties = {
        flex: 1,
        padding: "40px 20px"
    };

    const footerStyle: React.CSSProperties = {
        padding: "20px",
        backgroundColor: "#bdc3c7",
        textAlign: "center"
    };

    return (
        <div style={mainStyle}>
            <header style={headerStyle}>
                <h1>My App Framework</h1>
                <p>Học về Composition trong React</p>
            </header>

            {/* Main Content Area */}
            <main style={contentStyle}>
                {children}
            </main>

            <footer style={footerStyle}>
                © 2026 Children Props Lesson
            </footer>
        </div>
    );
}

export default Layout;
