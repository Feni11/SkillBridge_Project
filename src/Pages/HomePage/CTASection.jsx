import { Box, Typography, Button, Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const CTASection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "#ffff",
          py: { xs: 4, md: 6 },
          px: { xs: 0, B490: 3 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              background:
                "radial-gradient(ellipse at 65% 40%, #0d3a55 0%, #0a243a 45%, #071828 100%)",
              py: { xs: 7, md: 8 },
              px: { xs: 2, md: 6 },
              textAlign: "center",
            }}
          >
            {/* Teal glow blob — top right */}
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: -60,
                width: 340,
                height: 340,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #0097A7 0%, transparent 70%)",
                opacity: 0.25,
                pointerEvents: "none",
              }}
            />

            {/* Subtle blue glow — bottom left */}
            <Box
              sx={{
                position: "absolute",
                bottom: -60,
                left: "15%",
                width: 260,
                height: 260,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #1565C0 0%, transparent 70%)",
                opacity: 0.2,
                pointerEvents: "none",
              }}
            />

            {/* Content */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              {/* Heading */}
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: {xs: "28px", B331: "35px", B388: "38px", sm: "42px", md: "44px" },
                  color: "#ffffff",
                  lineHeight: 1.15,
                  letterSpacing: "0.6px",
                  mb: 2,
                }}
              >
                Start
                <Box component="span" sx={{ color: "#0097A7", fontSize: {xs: "28px", B331: "35px", B388: "38px", sm: "42px", md: "44px" }, }}>
                  Swapping
                </Box>
                <br />
                Skills Today
              </Typography>

              {/* Subtext */}
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: { xs: "14px", md: "14.4px" },
                  color: "rgba(255,255,255,0.45)",
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Join 1,200+ people already learning and teaching — completely
                free, forever.
              </Typography>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* Primary */}
                <Button
                component={Link}
                to="/login"
                  variant="contained"
                  disableElevation
                  sx={{
                    height: { xs: "42px", sm: "45px", md: "50px" },
                    fontFamily: subFamily,
                    fontWeight: 500,
                    fontSize: { xs: "13px", sm: "14px" },
                    textTransform: "none",
                    borderRadius: "999px",
                    background: "#ffffff",
                    color: "#071828",
                    px: {xs: 2, B331: 5,B388: 7, B490: 10, sm: 2 },
                    "&:hover": {
                      background: "#f0f0f0",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  Create Free Account →
                </Button>

                {/* Secondary */}
                <Button
                component={Link}
                to="/skills"
                  variant="outlined"
                  disableElevation
                  sx={{
                    height: { xs: "42px", sm: "45px", md: "50px" },
                    fontFamily: subFamily,
                    fontWeight: 500,
                    fontSize: { xs: "13px", sm: "14px" },
                    textTransform: "none",
                    borderRadius: "999px",
                    px: {xs: 6, B331: 9, B388: 11,B490: 14, sm: 3.5 },
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,0.3)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.07)",
                      borderColor: "rgba(255,255,255,0.5)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  Browse Skills
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CTASection;
