import React from "react";
import { Box, Typography, Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const skills = [
  { emoji: "🎸", name: "Guitar", teachers: 61 },
  { emoji: "💻", name: "Coding", teachers: 142 },
  { emoji: "🎵", name: "Music", teachers: 98 },
  { emoji: "🍳", name: "Cooking", teachers: 76 },
  { emoji: "🌍", name: "Languages", teachers: 115 },
  { emoji: "🏋️", name: "Fitness", teachers: 63 },
  { emoji: "🎨", name: "Design", teachers: 89 },
  { emoji: "📸", name: "Photography", teachers: 54 },
];

const skills2 = [
  { emoji: "🧘", name: "Yoga", teachers: 47 },
  { emoji: "🎤", name: "Public Speaking", teachers: 38 },
  { emoji: "🤖", name: "ML / AI", teachers: 72 },
  { emoji: "🎬", name: "Video Editing", teachers: 55 },
  { emoji: "🎹", name: "Piano", teachers: 41 },
  { emoji: "📱", name: "App Dev", teachers: 66 },
  { emoji: "✍️", name: "Writing", teachers: 83 },
  { emoji: "📊", name: "Finance", teachers: 59 },
];

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

const SkillCard = ({ emoji, name, teachers }) => (
  <Box
    sx={{
      minWidth: 180,
      background: "#fff",
      borderRadius: "16px",
      px: {xs: 1, B490:2.5},
      py: 2,
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      boxShadow: "0 2px 12px rgba(7,32,71,0.07)",
      border: "1px solid rgba(7,32,71,0.06)",
      mx: 1,
      flexShrink: 0,
      transition:
        "transform 0.25s ease, border 0.25s ease, box-shadow 0.25s ease",
      "&:hover": {
        border: `1px solid ${subColor}`,
        transform: "translateY(-4px)",
        boxShadow: "0 8px 40px rgba(10,22,40,0.11)",
      },
    }}
  >
    <Typography sx={{ fontSize: "32px", lineHeight: 1 }}>{emoji}</Typography>
    <Box>
      <Typography
        sx={{
          fontFamily: headingFamily,
          fontWeight: 700,
          fontSize: "0.95rem",
          color: headingColor,
          lineHeight: 1.2,
          textAlign: 'left'
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontFamily: subFamily,
          fontSize: "0.75rem",
          color: "#7a8fa6",
          textAlign: 'left',
          mt: 0.3,
        }}
      >
        {teachers} teachers
      </Typography>
    </Box>
  </Box>
);

const MarqueeRow = ({ items, direction = "left", duration = 30, paused }) => {
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";

  return (
    <Box sx={{ overflow: "visible", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${animName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          "@keyframes marqueeLeft": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
          "@keyframes marqueeRight": {
            "0%": { transform: "translateX(-50%)" },
            "100%": { transform: "translateX(0)" },
          },
        }}
      >
        {[...items, ...items].map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </Box>
    </Box>
  );
};

const PopularSkills = () => {
  const [paused, setPaused] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "#EEF3F9",
          py: { xs: 6, md: 10 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: 0, B490: 3 } }}>
            <Box sx={{ display: "flex", justifyContent: "left" }}>
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
                ✦ Categories
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: { xs: "34px", B331: "36px", sm: "39px", md: "40px" },
                color: headingColor,
                lineHeight: 1.15,
                textAlign: "left",
                mb: 2,
              }}
            >
              Popular Skills
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
              Browse hundreds of skills — find what you need or offer what you
              know.
            </Typography>
          </Box>
        </Container>

        {/* Bannev rows ek wrapper ma — hover pe bannev pause */}
        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{ py: 1 }}
        >
          <Box sx={{ mb: 2 }}>
            <MarqueeRow
              items={skills}
              direction="left"
              duration={35}
              paused={paused}
            />
          </Box>
          <MarqueeRow
            items={skills2}
            direction="right"
            duration={35}
            paused={paused}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PopularSkills;
