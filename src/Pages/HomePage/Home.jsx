import { ThemeProvider } from "@mui/material/styles";
import HowItWork from "./HowItWork";
import PopularSkills from "./PopularSkills";
import SkillPartners from "./SkillPartners";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import CTASection from "./CTASection";
import { Link } from "react-router-dom";

import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Avatar,
  AvatarGroup,
  createTheme,
} from "@mui/material";

//icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeedbackForm from "../Auth/FeedbackForm";

const Home = () => {
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
        B310: 310,
      },
    },
  });

  const headingColor = "#072047";
  const subColor = "#0097A7";
  const headingFamily = '"Plus Jakarta Sans", sans-serif';
  const subFamily = '"Inter", sans-serif';

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #F4F8FC 50%, #cde8f5 100%)",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                py: { xs: 6, md: 10 },
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  px: { xs: 0, B490: 3 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        bgcolor: "#0097a71a",
                        color: subColor,
                        fontSize: {
                          xs: "11px",
                          B388: "12px",
                          B490: "13px",
                          sm: "14px",
                          md: "11px",
                          B950: "12px",
                        },
                        fontFamily: subFamily,
                        fontWeight: 700,
                        padding: { xs: "6px 8px", B331: "7px 16px" },
                        borderRadius: "100px",
                        marginBottom: "24px",
                        border: "1px solid #0097a738",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                      }}
                    >
                      ✦ Skill Development
                    </Typography>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: headingFamily,
                          fontWeight: 800,
                          fontSize: {
                            xs: "27px",
                            B310: "30px",
                            B331: "35px",
                            B388: "39px",
                            B490: "40px",
                            sm: "45px",
                            md: "42px",
                            B950: "45px",
                          },
                          color: headingColor,
                          lineHeight: 1.1,
                          letterSpacing: "1.4px",
                          textAlign: "left",
                          marginRight: { xs: "0", B1060: "7%" },
                        }}
                      >
                        {/* Turn Your Expertise Into Someone's Inspiration */}
                        Where Expertise Meets Inspiration
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: subFamily,
                          fontSize: {
                            xs: "12px",
                            B331: "14px",
                            B388: "14.5px",
                            B490: "15px",
                            B950: "16px",
                          },
                          color: subColor,
                          textAlign: "left",
                          mt: 3,
                          maxWidth: { sm: "620px", md: "420px" },
                          letterSpacing: "0.7px",
                        }}
                      >
                        SkillSwap is the premier marketplace for human talent
                        where knowledge is the only currency. Share what you
                        know - pay only the difference in skill value.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 0.5, B388: 2 },
                        justifyContent: { xs: "center", B331: "flex-start" },
                        width: "100%",
                      }}
                    >
                      <Button
                        component={Link}
                        to="/login"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: "#ffff",
                          backgroundColor: headingColor,
                          fontSize: {
                            xs: "12px",
                            B388: "12px",
                            md: "12px",
                            B950: "13px",
                            B1060: "14px",
                          },
                          fontFamily: subFamily,
                          fontWeight: 600,
                          border: "1px solid #0a162833",
                          padding: {
                            xs: "10px 27%",
                            B331: "9px 20px",
                            B388: "10px 22px",
                            B388: "11px 24px",
                          },
                          borderRadius: "100px",
                          cursor: "pointer",
                          mt: 3,
                          transition: "all 0.25s ease",
                          "&:hover": {
                            backgroundColor: subColor,
                            transform: "translateY(-3px)",
                            boxShadow: "0 10px 32px rgba(206, 250, 254, 0.35)",
                          },
                        }}
                      >
                        Join Now
                      </Button>
                      <Button
                        component={Link}
                        to="/skills"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: headingColor,
                          fontSize: {
                            xs: "12px",
                            B388: "12px",
                            md: "12px",
                            B950: "13px",
                            B1060: "14px",
                          },
                          fontFamily: subFamily,
                          fontWeight: 600,
                          border: "1px solid #0a162833",
                          padding: {
                            xs: "10px 25%",
                            B331: "9px 20px",
                            B388: "10px 22px",
                            B388: "11px 24px",
                          },
                          borderRadius: "100px",
                          cursor: "pointer",
                          mt: { xs: 1, B331: 3 },
                          transition: "all 0.25s ease",
                          "&:hover": {
                            backgroundColor: headingColor,
                            color: "#ffff",
                            transform: "translateY(-3px)",
                            boxShadow: "0 10px 32px rgba(206, 250, 254, 0.35)",
                          },
                        }}
                      >
                        Explore Skills
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" },
                        gap: 2,
                        mt: 5,
                      }}
                    >
                      <AvatarGroup
                        sx={{
                          "& .MuiAvatar-root": {
                            width: { xs: 33, B490: 35, md: 33, B950: 35 },
                            height: { xs: 33, B490: 35, md: 33, B950: 35 },
                            fontSize: "14px",
                            fontWeight: 700,
                            fontFamily: headingFamily,
                            border: "2.5px solid white",
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            background:
                              "linear-gradient(135deg, #0097A7, #072047)",
                          }}
                        >
                          A
                        </Avatar>
                        <Avatar
                          sx={{
                            background:
                              "linear-gradient(135deg, #072047, #0D2D4A)",
                          }}
                        >
                          R
                        </Avatar>
                        <Avatar
                          sx={{
                            background:
                              "linear-gradient(135deg, #00ACC1, #0097A7)",
                          }}
                        >
                          K
                        </Avatar>
                        <Avatar
                          sx={{
                            background:
                              "linear-gradient(135deg, #4A6080, #072047)",
                          }}
                        >
                          P
                        </Avatar>
                      </AvatarGroup>

                      <Typography
                        sx={{
                          fontFamily: subFamily,
                          fontSize: {
                            xs: "13.4px",
                            md: "13.8px",
                            B950: "14.8px",
                          },
                          color: "#4A6080",
                          lineHeight: 1.5,
                          textAlign: "left",
                          letterSpacing: 0.5,
                        }}
                      >
                        <strong
                          style={{
                            color: headingColor,
                            fontWeight: 700,
                            marginRight: "5px",
                          }}
                        >
                          1,200+ members
                        </strong>
                        already swapping
                        <br />
                        skills across India
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                      alignItems: "center",
                      mt: { xs: 6, md: 0 },
                    }}
                  >
                    {/* Sticker — Session complete */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: { xs: 0, md: 0, B1060: 5 },
                        left: { xs: 0, md: 3, B1060: -10 },
                        background: "#fff",
                        borderRadius: "14px",
                        px: 1.8,
                        py: 1,
                        boxShadow: "0 8px 28px rgba(7,32,71,0.12)",
                        border: "1px solid rgba(7,32,71,0.08)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        color: headingColor,
                        whiteSpace: "nowrap",
                        zIndex: 3,
                        animation: "floatUp 3.5s ease-in-out infinite",
                        animationDelay: "0s",
                      }}
                    >
                      ✅ Session complete!
                    </Box>

                    {/* Sticker — Matched */}
                    {/* <Box
                      sx={{
                        position: "absolute",
                        top: "60%",
                        left: { xs: -15, md: -8, B1060: -20 },
                        background: "#fff",
                        borderRadius: "14px",
                        px: 1.8,
                        py: 1,
                        boxShadow: "0 8px 28px rgba(7,32,71,0.12)",
                        border: "1px solid rgba(7,32,71,0.08)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        color: headingColor,
                        whiteSpace: "nowrap",
                        zIndex: 3,
                        animation: "floatUp 3.5s ease-in-out infinite",
                        animationDelay: "0.6s",
                      }}
                    >
                      ⚡ Matched in 2 mins
                    </Box> */}

                    {/* Sticker — Great swap */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 80,
                        right: { xs: -5, md: -20, B1060: -10 },
                        background: "#fff",
                        borderRadius: "14px",
                        px: 1.8,
                        py: 1,
                        boxShadow: "0 8px 28px rgba(7,32,71,0.12)",
                        border: "1px solid rgba(7,32,71,0.08)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        color: headingColor,
                        whiteSpace: "nowrap",
                        zIndex: 3,
                        animation: "floatUp 3.5s ease-in-out infinite",
                        animationDelay: "1.2s",
                      }}
                    >
                      ⭐ 5.0 · Great swap
                    </Box>

                    {/* Card */}
                    <Box
                      sx={{
                        width: { xs: "100%", md: "95%", B1060: "100%" },
                        maxWidth: { xs: "100%", md: 540 },
                        background: "#fff",
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow:
                          "0 24px 64px rgba(7,32,71,0.14), 0 0 0 1px rgba(7,32,71,0.08)",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image */}
                      <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=85&fit=crop&crop=top"
                        alt="Skill learning session"
                        sx={{
                          width: "100%",
                          height: {
                            xs: 260,
                            sm: 300,
                            md: 340,
                            B960: 350,
                            B1060: 360,
                          },
                          objectFit: "cover",
                          objectPosition: "center 25%",
                          display: "block",
                        }}
                      />

                      {/* Stats Bar */}
                      <Box
                        sx={{
                          background: headingColor,
                          px: 3,
                          py: 2.2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            sx={{
                              fontFamily: headingFamily,
                              fontWeight: 800,
                              fontSize: { xs: "17px", B388: "20.8px" },
                              color: "#fff",
                              letterSpacing: "-0.5px",
                              lineHeight: 1.2,
                            }}
                          >
                            1.2k+
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontSize: "11.2px",
                              color: "rgba(255,255,255,0.5)",
                              mt: 0.3,
                            }}
                          >
                            Members
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            width: "1px",
                            height: 32,
                            background: "rgba(255,255,255,0.15)",
                          }}
                        />

                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            sx={{
                              fontFamily: headingFamily,
                              fontWeight: 800,
                              fontSize: { xs: "17px", B388: "20.8px" },
                              color: "#fff",
                              letterSpacing: "-0.5px",
                              lineHeight: 1.2,
                            }}
                          >
                            340+
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontSize: "11.2px",
                              color: "rgba(255,255,255,0.5)",
                              mt: 0.3,
                            }}
                          >
                            Skills
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            width: "1px",
                            height: 32,
                            background: "rgba(255,255,255,0.15)",
                          }}
                        />

                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            sx={{
                              fontFamily: headingFamily,
                              fontWeight: 800,
                              fontSize: { xs: "17px", B388: "20.8px" },
                              color: "#fff",
                              letterSpacing: "-0.5px",
                              lineHeight: 1.2,
                            }}
                          >
                            98%
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontSize: "11.2px",
                              color: "rgba(255,255,255,0.5)",
                              mt: 0.3,
                            }}
                          >
                            Satisfied
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
      <FeedbackForm/>
      <HowItWork></HowItWork> {/*responsive done */}
      <PopularSkills></PopularSkills> {/*responsive done */}
      <SkillPartners></SkillPartners> {/*responsive done */}
      <WhyChoose></WhyChoose> {/*responsive done */}
      <Testimonials></Testimonials> {/*responsive done */}
      <AboutUs></AboutUs> {/*responsive done */}
      <CTASection></CTASection> {/*responsive done */}
    </>
  );
};

export default Home;
