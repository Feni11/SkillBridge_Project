import React from "react";
import { Typography, Box, Container, Grid, createTheme } from "@mui/material";
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

const HowItWork = () => {
  const headingColor = "#072047";
  const subColor = "#0097A7";
  const headingFamily = '"Plus Jakarta Sans", sans-serif';
  const subFamily = '"Inter", sans-serif';

  const steps = [
    {
      number: "01",
      icon: "🙋",
      title: "Create Profile",
      desc: "Sign up and build your profile. Tell us who you are and what drives you to learn and grow.",
    },
    {
      number: "02",
      icon: "🧠",
      title: "Add Your Skills",
      desc: "List what you can teach and what you want to learn. Be specific - better skills, better matches.",
    },
    {
      number: "03",
      icon: "🤝",
      title: "Connect & Swap",
      desc: "Our system finds your ideal match. Send a request, agree on a schedule, and start swapping.",
    },
    {
      number: "04",
      icon: "🚀",
      title: "Start Learning",
      desc: "Exchange sessions, grow together. Your skill has real value pay only the difference, nothing more.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#ffffff", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: 0, B490: 3 } }}>
            {/* ── Header ── */}
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
                ✦ Process
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: { xs: "34px", B331: "36px", sm: "39px", md: "40px" },
                color: headingColor,
                textAlign: "left",
                lineHeight: 1.1,
                letterSpacing: "0.8px",
                mb: 2,
              }}
            >
              How It Works
            </Typography>

            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: { xs: "14px", B388: "15px", md: "16px" },
                color: subColor,
                textAlign: "left",
                maxWidth: "420px",
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              Four simple steps to start exchanging skills with real people in
              your community.
            </Typography>

            {/* ── Cards — map ── */}
            <Grid
              container
              spacing={2}
              sx={{
                rowGap: 4,
              }}
            >
              {steps.map((step) => (
                <Grid item key={step.number} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      background: "#F4F8FC",
                      borderRadius: "20px",
                      p: { xs: "20px", md: "18px", lg: "26.4px" },
                      height: "90%",
                      border: "1px solid rgba(7,32,71,0.06)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 16px 40px rgba(7,32,71,0.10)",
                      },
                    }}
                  >
                    {/* Number */}
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 800,
                        fontSize: "3.5rem",
                        color: "rgba(3, 17, 40, 0.07)",
                        lineHeight: 1,
                        mb: 2,
                      }}
                    >
                      {step.number}
                    </Typography>

                    {/* Icon */}
                    <Typography
                      sx={{ fontSize: "2rem", mb: 1.5, textAlign: "left" }}
                    >
                      {step.icon}
                    </Typography>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "18px",
                        color: headingColor,
                        textAlign: "left",
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "14px",
                        color: subColor,
                        textAlign: "left",
                        lineHeight: 1.65,
                      }}
                    >
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HowItWork;
