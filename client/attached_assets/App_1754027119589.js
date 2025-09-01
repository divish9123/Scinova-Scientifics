// Scinova Scientifics Scrollable Landing Page — Styled Like SaaSable Theme

import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: grey[200],
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
    },
  },
});

const Section = ({ title, children, id }) => (
  <Box
    id={id}
    sx={{
      py: 12,
      backgroundColor: id === "Services" ? grey[100] : "inherit",
    }}
  >
    <Container maxWidth="lg">
      {title && (
        <Typography
          variant="h4"
          sx={{ color: "#148ade", fontWeight: 700, mb: 4 }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Container>
  </Box>
);

export default function ScinovaLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Scinova Scientifics
          </Typography>
          <Button color="inherit" href="#About Us" sx={{ textTransform: "none" }}>
            About Us
          </Button>
          <Button color="inherit" href="#Services" sx={{ textTransform: "none" }}>
            Services
          </Button>
          <Button color="inherit" href="#Contact Us" sx={{ textTransform: "none" }}>
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Section id="home">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.img
            src="/scinova-logo.jpg"
            alt="Scinova Scientifics Logo"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ maxWidth: "180px", marginBottom: "4rem", borderRadius: "12px" }}

          />

          <Box
            sx={{
              maxWidth: 600,
              margin: "0 auto",
              px: 2,
              py: 3,
              border: "2px solid #eee",
              borderRadius: 2,
              background: "#fff",
              boxShadow: 2,
              mb: 4,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700,mb: 1.5}} >
              SCINOVA SCIENTIFICS
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: "#d32f2f", mt: 1, mb: 2 }}
            >
              SCIENCE AS A SERVICE
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Scinova Scientifics is a young, strong and dynamic team of highly experienced
              professional consultants who are passionate on delivering Science as a Service
              for Healthcare, Pharmaceutical and allied Organizations.
            </Typography>
          </Box>
        </Box>
        

        <Typography variant="h6" gutterBottom color="text.secondary">
          We’re not just riding the science wave — we’re steering it.
        </Typography>
        <Typography paragraph>
          Scinova Scientifics is a bold, future-forward collective of scientists, strategists,
          and technologists delivering Science as a Service for healthcare, pharma, and allied industries.
        </Typography>
        <Typography paragraph>
          Backed by seasoned professionals (MDs, PhDs, and M.Pharm experts), we bring a powerhouse of
          deep domain expertise with a startup-style hunger to disrupt and deliver.
        </Typography>
      </Section>

      <Section title="What We Offer" id="About Us">
  <Grid container spacing={4}>
    {[
      {
        title: "🧬 Nutrigenomics Profiling",
        desc: "We have partnered with high tech Gene Labs to get the cutting-edge technologies to offer Nutrigenomics services to our clients. This field is striding rapidly and will be popular destination in future for healthcare decision making.",
      },
      {
        title: "🔐 Anti-Counterfeit Tech",
        desc: "We also know the importance of delivering secure products to your esteemed customers, while protecting them from counterfeit products. In a way, we help you protect your valuable assets in the market place and pave a way for them to stand reputed. We offer Anti-counterfeit tech to suit your requirements.",
      },
      {
        title: "🌐 Global Sourcing & Product Development",
        desc: "Innovation is the way to go. We offer innovative services in critical product development, worldwide product sourcing, and enabling technologies — all tailored to keep you ahead of the race. Our global partnerships ensure rapid, reliable, and compliant delivery of APIs, niche ingredients, and custom formulations that meet evolving market demands.",
      },
    ].map((item, index) => (
      <Grid item xs={12} sm={6} md={6} key={item.title}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: "100%",
            }}
          >
            {item.title === "🔐 Anti-Counterfeit Tech" ? (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Typography
                  variant="h6"
                  component="a"
                  href="https://qrmor.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#2b3f87",
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#1d2c6b",
                    },
                  }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
              </motion.div>
            ) : (
              <Typography
                variant="h6"
                sx={{ color: "#2b3f87", fontWeight: 700 }}
                gutterBottom
              >
                {item.title}
              </Typography>
            )}

            <Typography variant="body1" color="text.secondary">
              {item.desc}
            </Typography>
          </Paper>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</Section>



      <Section title="Why Scinova?" id="Services">
        <Typography variant="body1" paragraph>
          Innovation drives us. Precision defines us. We blend domain expertise, tech-enabled
          solutions, and a strong ethical foundation to support your business.
        </Typography>

        <Grid container spacing={4}>
          {[
            "🧠 Expert-driven writing & consulting (PhDs, MDs, M.Pharm)",
            "🌎 Global sourcing with local execution",
            "🧬 Customized nutrigenomics & wellness profiling",
            "🔐 Advanced anti-counterfeit strategies",
            "✍️ Multilingual scientific content (AI-enhanced)",
            "📞 On-demand call support, PG & CME connects",
          ].map((point, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  {point}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Section>

<Section title="Our Esteemed Clients" id="clients">
  <Box sx={{ textAlign: "center", mb: 4 }}>
    <Typography variant="body1" paragraph>
      We value your business and would like to associate with you as a service provider.
    </Typography>

    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100%",
        py: 2,
      }}
    >
      <motion.div
        style={{
          display: "inline-flex",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          delay: 1,
          ease: "linear",
          repeat: Infinity,
          times: [0, 1.5, 1], 
          repeatDelay: 1,
        }}
      >
        {/* First copy of logos */}
        <Box display="inline-flex" gap={4}>
          {[
            "zydus.png",
            "british-biologicals.png",
            "cadila.png",
            "kepler.png",
            "emami.png",
            "UNISON.png",
            "Acmedix.png",
          ].map((logo, index) => (
            <Box
              key={`logo1-${index}`}
              component="img"
              src={`/assets/logos/${logo}`}
              alt={logo.replace(/\.(png|jpg|jpeg|svg)/, "")}
              sx={{
                height: "50px",
                width: "auto",
                objectFit: "contain",
                mx: 2,
              }}
            />
          ))}
        </Box>

        {/* Second copy of logos (for seamless loop) */}
        <Box display="inline-flex" gap={4}>
          {[
            "zydus.png",
            "british-biologicals.png",
            "cadila.png",
            "kepler.png",
            "emami.png",
            "UNISON.png",
            "Acmedix.png",
          ].map((logo, index) => (
            <Box
              key={`logo2-${index}`}
              component="img"
              src={`/assets/logos/${logo}`}
              alt={logo.replace(/\.(png|jpg|jpeg|svg)/, "")}
              sx={{
                height: "50px",
                width: "auto",
                objectFit: "contain",
                mx: 2,
              }}
            />
          ))}
        </Box>
      </motion.div>
    </Box>

    <Typography
      variant="caption"
      display="block"
      sx={{ mt: 2, color: "text.secondary" }}
    >
      *Gurukrupa Enterprise & Scinova Scientifics
    </Typography>
  </Box>
</Section>


      <Section title="Let’s Build Something Meaningful" id="Contact Us">
        <Typography paragraph>
          Whether you're in pharma, healthcare, wellness, or research — we’re ready to partner with you.
        </Typography>
        <Typography paragraph>
          Reach out to explore how Scinova Scientifics can collaborate with your organization.
        </Typography>

        <Typography>
          📍 <strong>Scinova Scientifics</strong><br />
          A unit of Gurukrupa Enterprise<br />
          609, Athens, Opp. Zanshi Rani Statue,<br />
          Shiv Ranjani Cross Roads, Satellite,<br />
          Ahmedabad, India – 380015 🇮🇳<br /><br />
          📧 <a href="mailto:padmarajg@scinovas.com">padmarajg@scinovas.com</a> |{" "}
          <a href="mailto:chaitanya@scinovas.com">chaitanya@scinovas.com</a><br />
          📞 +91 99740 51262 | +91 98250 97907
        </Typography>
      </Section>

      <Box sx={{ py: 4, backgroundColor: grey[100], textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Scinova Scientifics — All Rights Reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
 


// import React, { useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Container,
//   Grid,
//   Paper,
// } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { grey, blue } from "@mui/material/colors";
// import { motion } from "framer-motion";
// import "./App.css";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[200],
//     },
//     secondary: {
//       main: grey[200],
//     },
//     background: {
//       default: "#ffffff",
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, sans-serif",
//     h4: {
//       fontWeight: 700,
//     },
//     body1: {
//       fontSize: "1.1rem",
//       lineHeight: 1.7,
//     },
//   },
// });

// const Section = ({ title, children, id }) => (
//   <Box id={id} className={`section ${id === "Services" ? "section-grey" : ""}`}>
//     <Container maxWidth="lg">
//       {title && <Typography variant="h4" className="section-title">{title}</Typography>}
//       {children}
//     </Container>
//   </Box>
// );

// export default function ScinovaLandingPage() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="fixed" color="primary" elevation={1}>
//         <Toolbar>
//           <Typography variant="h6" className="navbar-title">
//             Scinova Scientifics
//           </Typography>
//           <Button color="inherit" href="#About Us" className="nav-button">About Us</Button>
//           <Button color="inherit" href="#Services" className="nav-button">Services</Button>
//           <Button color="inherit" href="#Contact Us" className="nav-button">Contact Us</Button>
//         </Toolbar>
//       </AppBar>

//       <Toolbar />

//       <Section id="home">
//         <Box className="home-header">
//           <motion.img
//             src="/scinova-logo.jpg"
//             alt="Scinova Scientifics Logo"
//             initial={{ scale: 1, opacity: 0 }}
//             animate={{ scale: 1.5, opacity: 1 }}
//             transition={{ duration: 1.4, ease: "easeOut" }}
//             className="logo-image"
//           />
//           <Box className="intro-box">
//             <Typography variant="h5" className="intro-heading">SCINOVA SCIENTIFICS</Typography>
//             <Typography variant="subtitle1" className="intro-subtitle">SCIENCE AS A SERVICE</Typography>
//             <Typography variant="body1" color="text.secondary">
//               Scinova Scientifics is a young, strong and dynamic team of highly experienced
//               professional consultants who are passionate on delivering Science as a Service
//               for Healthcare, Pharmaceutical and allied Organizations.
//             </Typography>
//           </Box>
//         </Box>

//         <Typography variant="h6" gutterBottom color="text.secondary">
//           We’re not just riding the science wave — we’re steering it.
//         </Typography>
//         <Typography paragraph>
//           Scinova Scientifics is a bold, future-forward collective of scientists, strategists,
//           and technologists delivering Science as a Service for healthcare, pharma, and allied industries.
//         </Typography>
//         <Typography paragraph>
//           Backed by seasoned professionals (MDs, PhDs, and M.Pharm experts), we bring a powerhouse of
//           deep domain expertise with a startup-style hunger to disrupt and deliver.
//         </Typography>
//       </Section>

//       <Section title="What We Offer" id="About Us">
//         <Grid container spacing={4}>
//           {[
//             {
//               title: "🧬 Nutrigenomics Profiling",
//               desc: "We have partnered with high tech Gene Labs to get the cutting-edge technologies to offer Nutrigenomics services to our clients...",
//             },
//             {
//               title: "🔐 Anti-Counterfeit Tech",
//               desc: "We also know the importance of delivering secure products to your esteemed customers...",
//             },
//             {
//               title: "🌐 Global Sourcing & Product Development",
//               desc: "Innovation is the way to go. We offer innovative services in critical product development...",
//             },
//           ].map((item, index) => (
//             <Grid item xs={12} sm={6} md={6} key={item.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <Paper elevation={3} className="offer-card">
//                   {item.title === "🔐 Anti-Counterfeit Tech" ? (
//                     <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
//                       <Typography
//                         variant="h6"
//                         component="a"
//                         href="https://qrmor.in"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="offer-link"
//                         gutterBottom
//                       >
//                         {item.title}
//                       </Typography>
//                     </motion.div>
//                   ) : (
//                     <Typography variant="h6" className="offer-title" gutterBottom>
//                       {item.title}
//                     </Typography>
//                   )}
//                   <Typography variant="body1" color="text.secondary">{item.desc}</Typography>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Section>

//       <Section title="Why Scinova?" id="Services">
//         <Typography variant="body1" paragraph>
//           Innovation drives us. Precision defines us...
//         </Typography>
//         <Grid container spacing={4}>
//           {[
//             "🧠 Expert-driven writing & consulting (PhDs, MDs, M.Pharm)",
//             "🌎 Global sourcing with local execution",
//             "🧬 Customized nutrigenomics & wellness profiling",
//             "🔐 Advanced anti-counterfeit strategies",
//             "✍️ Multilingual scientific content (AI-enhanced)",
//             "📞 On-demand call support, PG & CME connects",
//           ].map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Paper elevation={2} className="why-card">
//                 <Typography variant="body1" color="text.secondary">{point}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Section>

//       <Section title="Our Esteemed Clients" id="clients">
//         <Box className="clients-container">
//           <Typography variant="body1" paragraph>
//             We value your business...
//           </Typography>
//           <Box className="logo-marquee-wrapper">
//             <motion.div
//               className="logo-marquee"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ duration: 25, delay: 1, ease: "linear", repeat: Infinity }}
//             >
//               {[1, 2].flatMap(loop =>
//                 [
//                   "zydus.png",
//                   "british-biologicals.png",
//                   "cadila.png",
//                   "kepler.png",
//                   "emami.png",
//                   "UNISON.png",
//                   "Acmedix.png",
//                   "Scinova.png",
//                 ].map((logo, index) => (
//                   <Box
//                     key={`${loop}-${index}`}
//                     component="img"
//                     src={`/assets/logos/${logo}`}
//                     alt={logo.replace(/\.(png|jpg|jpeg|svg)/, "")}
//                     className="client-logo"
//                   />
//                 ))
//               )}
//             </motion.div>
//           </Box>
//           <Typography variant="caption" display="block" className="client-caption">
//             *Gurukrupa Enterprise & Scinova Scientifics
//           </Typography>
//         </Box>
//       </Section>

//       <Section title="Let’s Build Something Meaningful" id="Contact Us">
//         <Typography paragraph>
//           Whether you're in pharma, healthcare, wellness, or research...
//         </Typography>
//         <Typography paragraph>
//           Reach out to explore how Scinova Scientifics can collaborate...
//         </Typography>
//         <Typography className="contact-text">
//           📍 <strong>Scinova Scientifics</strong><br />
//           A unit of Gurukrupa Enterprise<br />
//           609, Athens, Opp. Zanshi Rani Statue...<br /><br />
//           📧 <a href="mailto:padmarajg@scinovas.com">padmarajg@scinovas.com</a> |{" "}
//           <a href="mailto:chaitanya@scinovas.com">chaitanya@scinovas.com</a><br />
//           📞 +91 99740 51262 | +91 98250 97907
//         </Typography>
//       </Section>

//       <Box className="footer">
//         <Typography variant="body2" color="text.secondary">
//           © 2025 Scinova Scientifics — All Rights Reserved.
//         </Typography>
//       </Box>
//     </ThemeProvider>
//   );
// }


