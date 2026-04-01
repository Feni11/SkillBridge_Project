import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Avatar,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// import { useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const testimonials = [
  {
    stars: "★★★★★",
    text: "Taught Arjun graphic design, learned React in return. Paid only the small difference — totally worth it!",
    name: "Rhea Shah",
    role: "UX Designer · Mumbai",
    letter: "R",
    bg: "linear-gradient(135deg,#0097A7,#0A1628)",
  },
  {
    stars: "★★★★★",
    text: "Swapped Python skills for guitar lessons. Paid a small fee difference and learned faster than ever!",
    name: "Karan Patel",
    role: "Data Analyst · Surat",
    letter: "K",
    bg: "linear-gradient(135deg,#0A1628,#0D2D4A)",
  },
  {
    stars: "★★★★★",
    text: "Taught yoga, got brand strategy in return. Fair pricing made this the best decision of my career!",
    name: "Priya Nair",
    role: "Yoga Instructor · Bangalore",
    letter: "P",
    bg: "linear-gradient(135deg,#4A6080,#0A1628)",
  },
  {
    stars: "★★★★★",
    text: "Exchanged finance skills for UI design. Paid only the difference — my portfolio looks absolutely amazing!",
    name: "Amit Sharma",
    role: "Finance Analyst · Delhi",
    letter: "A",
    bg: "linear-gradient(135deg,#0097A7,#072047)",
  },
  {
    stars: "★★★★★",
    text: "Swapped video editing for coding classes. Fair skill pricing helped me build my freelance website quickly!",
    name: "Sneha Joshi",
    role: "Video Editor · Pune",
    letter: "S",
    bg: "linear-gradient(135deg,#00ACC1,#0A1628)",
  },
  {
    stars: "★★★★★",
    text: "Taught public speaking, learned ML/AI in return. Transparent pricing made every swap fair!",
    name: "Raj Mehta",
    role: "Startup Founder · Pune",
    letter: "R",
    bg: "linear-gradient(135deg,#072047,#0097A7)",
  },
];

// const VISIBLE = 3;

const Testimonials = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900

  const isMobile = useMediaQuery("(max-width:599.98px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:899.98px)");
  const VISIBLE = isMobile ? 1 : isTablet ? 2 : 3;

  // const VISIBLE = isMobile ? 1 : isTablet ? 2 : 3;

  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i === 0 ? total - VISIBLE : i - 1));
  const next = () => setIndex((i) => (i >= total - VISIBLE ? 0 : i + 1));

  const visible = testimonials.slice(index, index + VISIBLE);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: "#ffff", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="xl">
            <Box sx={{ px: { xs: 0, B490: 3 } }}>
              {" "}
              {/*sm ma px 0 lagtu nathi */}
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
                  ✦ Testimonials
                </Typography>
              </Box>
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
                Success Stories
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
                Hear from people who've already made life-changing skill swaps
                through our platform.
              </Typography>
              {/* Slider Row — button + cards + button */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* 3 Cards */}
                <Box
                  sx={{
                    display: "grid",
                    // gridTemplateColumns: {
                    //   xs: "repeat(1, 1fr)", // <600px
                    //   sm: "repeat(2, 1fr)", // 600–899px
                    //   md: "repeat(3, 1fr)", // ≥900px
                    // },
                    gridTemplateColumns: `repeat(${VISIBLE}, 1fr)`,
                    gap: 3,
                    flex: 1,
                    height: { xs: "auto", md: "285" },
                    overflow: "visible",
                  }}
                >
                  {visible.map((t, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        background: "#F4F8FC",
                        borderRadius: "22px",
                        p: 3.5,
                        border: "1px solid rgba(7,32,71,0.07)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 40px rgba(7,32,71,0.10)",
                          borderColor: "rgba(0,151,167,0.25)",
                        },
                      }}
                    >
                      {/* Stars */}
                      <Typography
                        sx={{
                          color: subColor,
                          fontSize: "14.4px",
                          letterSpacing: "2px",
                          mb: 2,
                        }}
                      >
                        {t.stars}
                      </Typography>

                      {/* Text */}
                      <Typography
                        sx={{
                          fontFamily: subFamily,
                          fontSize: {xs: "14px",sm: "14.4px"},
                          color: "#4A6080",
                          // color: '#ffffff80',
                          textAlign: "left",
                          lineHeight: 1.7,
                          mb: 3,
                          fontStyle: "italic",
                          flex: 1,
                        }}
                      >
                        "{t.text}"
                      </Typography>

                      {/* User */}
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Avatar
                          sx={{
                            width: 44,
                            height: 44,
                            background: t.bg,
                            fontFamily: headingFamily,
                            fontWeight: 800,
                            fontSize: "14.4px",
                          }}
                        >
                          {t.letter}
                        </Avatar>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: headingFamily,
                              fontWeight: 700,
                              fontSize: "14.08px",
                              color: headingColor,
                              textAlign: "left",
                            }}
                          >
                            {t.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontSize: "12px",
                              color: "#4A6080",
                              textAlign: "left",
                            }}
                          >
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              {/* Arrows — below cards, right aligned */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1.5,
                  pt: 4,
                }}
              >
                <IconButton
                  onClick={prev}
                  sx={{
                    width: 44,
                    height: 44,
                    border: "1px solid #072047",
                    color: headingColor,
                    transition: "all 0.2s ease",
                    "&:hover": { background: headingColor, color: "white" },
                  }}
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton
                  onClick={next}
                  sx={{
                    width: 44,
                    height: 44,
                    border: "1px solid #072047",
                    color: headingColor,
                    transition: "all 0.2s ease",
                    "&:hover": { background: headingColor, color: "white" },
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Testimonials;
