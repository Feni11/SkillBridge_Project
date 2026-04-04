import { Box, Typography, Container, Chip, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

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
      B490: 490, //py:0
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
    emoji: "🌱",
    label: "Teach & Grow",
    color: "#0097a71a",
    textColor: headingColor,
  },
  {
    emoji: "💸",
    label: "Split the Gap",
    color: "#0097a71a",
    textColor: headingColor,
  },
  {
    emoji: "💡",
    label: "Lifelong Learning",
    color: "#0097a71a",
    textColor: headingColor,
  },
];

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#E8F2F8", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 5 },
              alignItems: "center",
              px: { xs: 0, B490: 3 },
            }}
          >
            {/* ── LEFT COLUMN ── */}
            <Box>
              {/* Badge */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    display: "inline-flex",
                    bgcolor: "#0097a71a",
                    color: subColor,
                    fontSize: "12px",
                    fontFamily: subFamily,
                    fontWeight: 700,
                    padding: { xs: "6px 12px", B331: "7px 16px" },
                    borderRadius: "100px",
                    border: "1px solid #0097a738",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    mb: 2,
                  }}
                >
                  ✦ About Us
                </Typography>
              </Box>

              {/* Heading */}
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: {
                    xs: "34px",
                    B331: "36px",
                    sm: "39px",
                    md: "40px",
                  },
                  color: headingColor,
                  textAlign: "left",
                  lineHeight: 1.1,
                  letterSpacing: "0.8px",
                  mb: 2,
                }}
              >
                What is SkillSwap?
              </Typography>

              {/* Sub */}
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: { xs: "14px", B388: "15px", md: "16px" },
                  color: "#4A6080",
                  lineHeight: 1.8,
                  maxWidth: 480,
                  textAlign: "left",
                  mb: 5,
                }}
              >
                Everyone has a skill worth sharing. Teach yours, learn theirs
                and pay only the difference in value.
              </Typography>

              {/* Stats Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", B490: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {stats.map((s) => (
                  <Box
                    key={s.label}
                    sx={{
                      background: "#ffffff",
                      borderRadius: "18px",
                      py: 3,
                      px: 3,
                      border: "1px solid rgba(7,32,71,0.06)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 32px rgba(7,32,71,0.09)",
                        borderColor: "rgba(0,151,167,0.2)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 800,
                        fontSize: { xs: "30px", md: "32px" },
                        color: headingColor,
                        lineHeight: 1,
                        mb: 0.8,
                        textAlign: {xs: "center", B490: "left"},
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: { xs: "13px", md: "13.6px" },
                        color: "#4A6080",
                        textAlign: {xs: "center", B490: "left"},
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* ── RIGHT COLUMN — unique card ── */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: "28px",
                p: { xs: 3.5, md: 5 },
                border: "1px solid rgba(7,32,71,0.07)",
                boxShadow: "0 8px 40px rgba(7,32,71,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                alignItems: "center",
              }}
            >
              {/* Our Mission */}
              <Box sx={{ pb: 3, borderBottom: "1px solid rgba(7,32,71,0.07)" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    mb: 1.8,
                  }}
                >
                  <Typography sx={{ fontSize: "22.4px", lineHeight: 1 }}>
                    🎯
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: { xs: "17px", md: "17.6px" },
                      color: headingColor,
                    }}
                  >
                    Our Mission
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: { xs: "14px", md: "14.72px" },
                    color: "#4A6080",
                    lineHeight: 1.8,
                    textAlign: "left",
                  }}
                >
                  To make learning accessible to everyone — teach what you know,
                  learn what you need, and pay only the difference in skill
                  value.
                </Typography>
              </Box>

              {/* Our Vision */}
              <Box sx={{ py: 3, borderBottom: "1px solid rgba(7,32,71,0.07)" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    mb: 1.8,
                  }}
                >
                  <Typography sx={{ fontSize: "22.4px", lineHeight: 1 }}>
                    🏹
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "17.6px",
                      color: headingColor,
                    }}
                  >
                    Our Vision
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "14.72px",
                    color: "#4A6080",
                    textAlign: "left",
                    lineHeight: 1.8,
                  }}
                >
                  A global community where every person can learn any skill they
                  desire, by sharing the skills they already have.
                </Typography>
              </Box>

              {/* Value chips */}
              <Box sx={{ pt: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.2,
                  }}
                >
                  {values.map((v) => (
                    <Chip
                      key={v.label}
                      label={`${v.emoji} ${v.label}`}
                      sx={{
                        fontFamily: subFamily,
                        fontWeight: 600,
                        fontSize: "13px",
                        background: v.color,
                        color: v.textColor,
                        border: "none",
                        borderRadius: "100px",
                        px: 1,
                        height: 34,
                        transition: "transform 0.2s ease",
                        "&:hover": { transform: "translateY(-2px)" },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
