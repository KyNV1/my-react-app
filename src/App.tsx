import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import { siteData } from "./siteData";

function App() {
  const containerStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    color: "#2c3e50",
    backgroundColor: "#fff",
    minHeight: "100vh",
  };

  const featureSectionStyle: React.CSSProperties = {
    padding: "80px 50px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      {/* 1. Navbar: Nhận brand và links qua Props */}
      <Navbar brand={siteData.brand} links={siteData.navLinks} />

      {/* 2. Hero: Nhận nội dung quảng cáo qua Props */}
      <Hero
        title={siteData.hero.title}
        subtitle={siteData.hero.subtitle}
        cta={siteData.hero.cta}
      />

      {/* 3. Features: Duyệt mảng dữ liệu và render các FeatureCard qua Props */}
      <section style={featureSectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "2rem" }}>
          Tại sao chọn chúng tôi?
        </h2>
        <div style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {siteData.features.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </section>

      {/* 4. Footer: Nhận thông tin bản quyền qua Props */}
      <Footer
        company={siteData.footer.company}
        year={siteData.footer.year}
      />
    </div>
  );
}

export default App;
