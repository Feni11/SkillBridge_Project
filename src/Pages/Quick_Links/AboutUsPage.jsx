// responsive done
import { useState } from "react";
import { Box, Typography, Container, Grid, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import FeedbackForm from "../Auth/FeedbackForm";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,

      //custome breakpoint
      B1060: 1060,
      B950: 950,
      B490: 490,
      B388: 388,
      B331: 331,
    },
  },
});

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const stats = [
  { value: "1,200+", label: "Active Members" },
  { value: "340+", label: "Skills Listed" },
  { value: "850+", label: "Swaps Completed" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    emoji: "🔄",
    label: "Skill Exchange",
    desc: "Every skill has value. Trade yours fairly and grow together as a community.",
  },
  {
    emoji: "⚖️",
    label: "Fair Pricing",
    desc: "No hidden fees. Pay only the difference in skill value — transparent always.",
  },
  {
    emoji: "🤝",
    label: "Peer Learning",
    desc: "Learn from real people with real experience. No classrooms, just conversations.",
  },
];

const AboutUsPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh" }}>
        {/* ── HERO ── */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #072047 0%, #0a2d4a 60%, #0097A7 100%)",
            py: { xs: 7, md: 10 },
              px: { xs: 2.5, B490: 5 },
            pb: { xs: "80px", md: "100px" },
            // px: 2,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow blob */}
          <Box
            sx={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #0097A7 0%, transparent 70%)",
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />

          <Container maxWidth="xl">
            {/* Badge */}
            <Typography
              sx={{
                display: "inline-flex",
                bgcolor: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "11px",
                fontFamily: subFamily,
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                mb: 2.5,
              }}
            >
              ✦ About Us
            </Typography>

            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: { xs: "32px", sm: "41.6px", md: "48px" },
                color: "#ffffff",
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              We're Building the Future
              <br />
              of{" "}
              <Box component="span" sx={{ color: "#2dcfdf" }}>
                Skill Exchange
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: { xs: "14.4px", md: "16px" },
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                maxWidth: 480,
                mx: "auto",
              }}
            >
              SkillSwap is the premier marketplace for human talent — teach what
              you know, learn what you need, pay only the difference.
            </Typography>
          </Container>
        </Box>

        {/* ── STATS OVERLAP ── */}
        <Container maxWidth="xl">
          <Box
            sx={{
              mt: { xs: "-40px", md: "-56px" },
              px: { xs: 0, B490: 3 },
              position: "relative",
              zIndex: 2,
              mb: { xs: 5, md: 7 },
            }}
          >
            {/* // Stats Grid ma aa change karo */}
            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {stats.map((s) => (
                <Grid key={s.label} size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      height: "60px",
                      background: "#fff",
                      borderRadius: "18px",
                      py: { xs: 2, B331: 2.5, md: 3 },
                      px: { xs: 1, B331: 2, md: 3 },
                      border: "1px solid rgba(7,32,71,0.06)",
                      boxShadow: "0 8px 32px rgba(7,32,71,0.1)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: "rgba(0,151,167,0.2)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 800,
                        fontSize: { xs:"21px",  B331: "23px", B288: "24px", sm: "32px", md: "30.4px" },
                        color: headingColor,
                        lineHeight: 1,
                        mb: 0.8,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: { xs: "11.6px", B388: "12px", md: "13.6px" },
                        color: "#4A6080",
                        mt: 1
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ── VALUES ── */}
          <Box sx={{ px: { xs: 0, B490: 3 }, mb: { xs: 5, md: 12 } }}>
            <Typography
              sx={{
                display: "inline-flex",
                bgcolor: "rgba(0,151,167,0.1)",
                color: subColor,
                fontSize: "11px",
                fontFamily: subFamily,
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "100px",
                border: "1px solid rgba(0,151,167,0.22)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                mb: 1.5,
              }}
            >
              ✦ Our Values
            </Typography>
            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: { xs: "28.8px", md: "32px" },
                color: headingColor,
                mb: 0.8,
              }}
            >
              What We Stand For
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "14.4px",
                color: subColor,
                mb: 4,
              }}
            >
              The principles that guide every decision we make.
            </Typography>

            <Grid container spacing={{ xs: 1.5, md: 3 }}>
              {values.map((v) => (
                <Grid key={v.label} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      background: "#F4F8FC",
                      border: "1px solid rgba(7,32,71,0.08)",
                      borderRadius: "18px",
                      p: { xs: 2.5, md: 3.5 },
                      position: "relative",
                      overflow: "hidden",
                      height: "80%",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 16px 40px rgba(7,32,71,0.10)",
                        borderColor: "rgba(0,151,167,0.3)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        background: "rgba(0,151,167,0.08)",
                        border: "1px solid rgba(0,151,167,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22.4px",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {v.emoji}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "15.2px",
                        color: headingColor,
                        mb: 1,
                      }}
                    >
                      {v.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "13.12px",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.8,
                        color: subColor,
                      }}
                    >
                      {v.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <FeedbackForm/>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUsPage;
