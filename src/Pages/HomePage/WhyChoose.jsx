import { Box, Typography, Container, createTheme, Grid } from "@mui/material";
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
      B435: 435,
      B388: 388,
      B331: 331,
    },
  },
});

const WhyChoose = () => {
  const bgColor = "#0A1628";
  const headingColor = "#ffff";
  const subColor = "#ffffff80";
  const headingFamily = '"Plus Jakarta Sans", sans-serif';
  const subFamily = '"Inter", sans-serif';

  const choose = [
    {
      icon: "💸",
      name: "Pay the Gap",
      desc: "Each skill has its own value. If your package costs less, simply pay the difference — fair and transparent.",
    },
    {
      icon: "🌐",
      name: "Community Based",
      desc: "Built on trust and real connections. Every swap strengthens our growing network of learners.",
    },
    {
      icon: "🕐",
      name: "Flexible Timing",
      desc: "Schedule sessions whenever works for you. Morning, evening, weekends — your time, your rules.",
    },
    {
      icon: "🔒",
      name: "Secure Platform",
      desc: "Verified profiles, ratings, and reviews ensure every swap is safe, trustworthy, and high quality.",
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: bgColor, py: { xs: 6, md: 10 } }}>
          <Container maxWidth="xl">
            <Box sx={{ px: { xs: 0, B490: 3 } }}>
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
                    color: "#0097A7",
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
                  ✦ Benefits
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: {
                    xs: "30px",
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
                Why Choose SkillBridge?
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
                We're not just a platform — we're a movement. Here's what makes
                us different.
              </Typography>

              <Grid container spacing={{xs: 4,md: 2}}>
                {choose.map((i) => (
                  <Grid
                    key={i.name}
                    size={{ xs: 12, sm: 6, md: 3 }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      rowGap: 6,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "80%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        backgroundColor: "#ffffff0d",
                        border: "1px solid rgba(255, 255, 255, 0.09)",
                        borderRadius: "22px",
                        padding: {
                          xs: "30px 24px",
                          sm: "32px 24px",
                          md: "24px 20px",
                          B1060: "32px 24px",
                        },
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(0,151,167,0.10)",
                          borderColor: "rgba(0,151,167,0.3)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "32px", mb: 1.5, textAlign: "left" }}
                      >
                        {i.icon}
                      </Typography>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontFamily: headingFamily,
                          fontWeight: 700,
                          fontSize: "16px",
                          color: headingColor,
                          textAlign: "left",
                          mb: 1,
                        }}
                      >
                        {i.name}
                      </Typography>

                      {/* Desc */}
                      <Typography
                        sx={{
                          fontFamily: subFamily,
                          fontSize: "13.44px",
                          color: subColor,
                          textAlign: "left",
                          lineHeight: 1.65,
                        }}
                      >
                        {i.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default WhyChoose;
