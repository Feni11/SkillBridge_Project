// responsive done (search ma letter nana )
import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Button,
  createTheme,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FeedbackForm from "../Auth/FeedbackForm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
      B1000: 1000,
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

const categories = [
  "All",
  "Design",
  "Development",
  "Music",
  "Business",
  "Fitness",
  "Language",
  "Finance",
];

const skills = [
  {
    id: 1,
    name: "Rhea Shah",
    role: "UX Designer",
    letter: "R",
    bg: "linear-gradient(135deg,#0097A7,#0A1628)",
    skill: "UI/UX Design",
    price: 20000,
    category: "Design",
    rating: 4.9,
    swaps: 24,
    availability: "4:00 PM – 6:00 PM",
  },
  {
    id: 2,
    name: "Karan Patel",
    role: "Data Analyst",
    letter: "K",
    bg: "linear-gradient(135deg,#0A1628,#0D2D4A)",
    skill: "Python & Data",
    price: 18000,
    category: "Development",
    rating: 4.8,
    swaps: 18,
    availability: "10:00 PM – 12:00 PM",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Yoga Instructor",
    letter: "P",
    bg: "linear-gradient(135deg,#4A6080,#0A1628)",
    skill: "Yoga & Wellness",
    price: 5000,
    category: "Fitness",
    rating: 5.0,
    swaps: 31,
    availability: "6:00 PM – 8:00 PM",
  },
  {
    id: 4,
    name: "Amit Sharma",
    role: "Finance Analyst",
    letter: "A",
    bg: "linear-gradient(135deg,#0097A7,#072047)",
    skill: "Finance & Investment",
    price: 22000,
    category: "Finance",
    rating: 4.7,
    swaps: 15,
    availability: "7:00 PM – 9:00 PM",
  },
  {
    id: 5,
    name: "Sneha Joshi",
    role: "Video Editor",
    letter: "S",
    bg: "linear-gradient(135deg,#00ACC1,#0A1628)",
    skill: "Video Editing",
    price: 12000,
    category: "Design",
    rating: 4.9,
    swaps: 20,
    availability: "2:00 PM – 5:00 PM",
  },
  {
    id: 6,
    name: "Raj Mehta",
    role: "Startup Founder",
    letter: "R",
    bg: "linear-gradient(135deg,#072047,#0097A7)",
    skill: "Public Speaking",
    price: 15000,
    category: "Business",
    rating: 4.8,
    swaps: 12,
    availability: "9:00 PM – 11:00 PM",
  },
  {
    id: 7,
    name: "Ananya Singh",
    role: "Guitar Teacher",
    letter: "A",
    bg: "linear-gradient(135deg,#0D2D4A,#0097A7)",
    skill: "Guitar Lessons",
    price: 8000,
    category: "Music",
    rating: 4.9,
    swaps: 28,
    availability: "1:00 PM – 3:00 PM",
  },
  {
    id: 8,
    name: "Dev Kapoor",
    role: "React Developer",
    letter: "D",
    bg: "linear-gradient(135deg,#0097A7,#4A6080)",
    skill: "React & Frontend",
    price: 25000,
    category: "Development",
    rating: 4.7,
    swaps: 16,
    availability: "10:00 PM – 12:00 PM",
  },
  {
    id: 9,
    name: "Meera Iyer",
    role: "French Tutor",
    letter: "M",
    bg: "linear-gradient(135deg,#072047,#00ACC1)",
    skill: "French Language",
    price: 7000,
    category: "Language",
    rating: 5.0,
    swaps: 22,
    availability: "4:00 PM – 6:00 PM",
  },
];

const SkillsPage = () => {
  const [requestingId, setRequestingId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = skills.filter((s) => {
    const matchCategory =
      activeCategory === "All" || s.category === activeCategory;
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.skill.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleSwapRequest = (id) => {
    setRequestingId(id); // Je button par click karyu eni ID set thase

    // Simulate API Call (2 second pachi pachhu normal thai jase)
    setTimeout(() => {
      setRequestingId(null);
      // Console ma check kari sako ke request gai ke nai
      console.log("Request sent for ID:", id);
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#F4F8FC", minHeight: "100vh" }}>
        {/* ── HERO BANNER ── */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #072047 0%, #0a2d4a 60%, #0097A7 100%)",
            py: { xs: 6, md: 8 },
            px: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
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
            <Box sx={{ px: { xs: 1, B490: 3 }, textAlign: "center" }}>
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
                ✦ Browse Skills
              </Typography>

              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", sm: "41.6px", md: "48px" },
                  color: "#ffffff",
                  lineHeight: 1.1,
                  mb: 1.5,
                }}
              >
                Find Your Perfect{" "}
                <Box component="span" sx={{ color: "#2dcfdf" }}>
                  Skill Match
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: { xs: "14.4px", md: "16px" },
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                Browse profiles, find a skill you need — pay only the difference
                in value.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  placeholder="Search skills or people..."
                  inputProps={{
                    style: { fontSize: { xs: "13px", B388: "15px" } },
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  size="small"
                  sx={{
                    width: { xs: "100%", sm: 480 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "100px",
                      background: "#fff",
                      fontFamily: subFamily,
                      fontSize: "15.2px",
                      py: 0.5,
                      "& fieldset": { border: "none" },
                      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#4A6080", fontSize: 22 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── FILTERS + CONTENT ── */}
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: 0, B490: 3 }, py: { xs: 4, md: 6 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    sx={{
                      fontFamily: subFamily,
                      fontWeight: 600,
                      fontSize: "13.12px",
                      textTransform: "none",
                      borderRadius: "100px",
                      px: 2.5,
                      py: 0.8,
                      background:
                        activeCategory === cat ? headingColor : "#fff",
                      color: activeCategory === cat ? "#fff" : headingColor,
                      border: `1px solid ${activeCategory === cat ? headingColor : "rgba(7,32,71,0.12)"}`,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background:
                          activeCategory === cat ? headingColor : "#e8f0f7",
                      },
                    }}
                  >
                    {cat}
                  </Button>
                ))}
              </Box>

              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: "14.08px",
                  color: "#4A6080",
                  flexShrink: 0,
                }}
              >
                {filtered.length} skill{filtered.length !== 1 ? "s" : ""} found
              </Typography>
            </Box>

            {/* ── CARDS GRID ── */}
            <Grid
              container
              spacing={{ xs: 3, md: 2, B1000: 3 }}
              justifyContent="left"
            >
              {filtered.map((user) => (
                <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      borderRadius: "16px",
                      border: "1px solid rgba(7,32,71,0.07)",
                      boxShadow: "0 4px 20px rgba(7,32,71,0.05)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 16px 40px rgba(7,32,71,0.12)",
                        borderColor: "rgba(0,151,167,0.3)",
                      },
                    }}
                  >
                    {/* Left teal accent bar */}
                    {/* <Box sx={{ width: "5px", background: subColor, flexShrink: 0 }} /> */}

                    <CardContent
                      sx={{
                        p: { xs: 3, md: 2, B1000: 3 },
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Avatar center + name + role below */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 64,
                            height: 64,
                            background: user.bg,
                            fontFamily: headingFamily,
                            fontWeight: 800,
                            fontSize: "20.8px",
                            mb: 1.2,
                          }}
                        >
                          {user.letter}
                        </Avatar>
                        <Typography
                          sx={{
                            fontFamily: headingFamily,
                            fontWeight: 700,
                            fontSize: "16px",
                            color: headingColor,
                            textAlign: "center",
                          }}
                        >
                          {user.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "12.48px",
                            color: "#4A6080",
                            textAlign: "center",
                          }}
                        >
                          {user.role}
                        </Typography>
                      </Box>

                      {/* Skill chip */}
                      <Box sx={{ textAlign: "center", mb: 2 }}>
                        <Chip
                          label={user.skill}
                          sx={{
                            fontFamily: subFamily,
                            fontWeight: 600,
                            fontSize: "12px",
                            background: "rgba(0,151,167,0.08)",
                            color: subColor,
                            borderRadius: "8px",
                            height: 28,
                          }}
                        />
                      </Box>

                      {/* Rating + Swaps */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "13.12px",
                            color: "#4A6080",
                          }}
                        >
                          ★ {user.rating} rating
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "13.12px",
                            color: "#4A6080",
                          }}
                        >
                          ↺ {user.swaps} swaps
                        </Typography>
                      </Box>

                      {/* Availability */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          background: "rgba(0,151,167,0.06)",
                          border: "1px solid rgba(0,151,167,0.15)",
                          borderRadius: "8px",
                          px: 1.5,
                          py: 0.8,
                          mb: 2,
                        }}
                      >
                        <AccessTimeIcon
                          sx={{ fontSize: 20, color: "#0097A7", flexShrink: 0 }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "#4A6080",
                              lineHeight: 1.2,
                              textAlign: "left",
                              mb: 1,
                              ml: 1,
                            }}
                          >
                            Available
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontWeight: 600,
                              fontSize: "12.5px",
                              color: headingColor,
                              lineHeight: 1.2,
                              textAlign: "left",
                              ml: 1,
                            }}
                          >
                            {user.availability}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Price + Button */}
                      <Box
                        sx={{
                          mt: "auto",
                          background: "#F4F8FC",
                          borderRadius: "10px",
                          px: 2,
                          py: 1.5,
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          "@media (max-width: 350px) and (min-width: 280px)": {
                            flexDirection: "column",
                            alignItems: "stretch",
                            gap: 1.2,
                          },
                          "@media (max-width: 690px) and (min-width: 600px)": {
                            flexDirection: "column",
                            alignItems: "stretch",
                            gap: 1.2,
                          },
                          "@media (max-width: 950px) and (min-width: 900px)": {
                            flexDirection: "column",
                            gap: 1.5,
                            alignItems: "center",
                          },
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontSize: "11.2px",
                              color: "#4A6080",
                              "@media (max-width: 950px) and (min-width: 900px)":
                                {
                                  alignItems: "center",
                                },
                            }}
                          >
                            Skill Value
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: headingFamily,
                              fontWeight: 800,
                              fontSize: "17.6px",
                              color: headingColor,
                            }}
                          >
                            ₹{user.price.toLocaleString()}
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          disableElevation
                          onClick={() => handleSwapRequest(user.id)}
                          // Jyare sending hoy tyare button click na thai shake
                          disabled={requestingId === user.id}
                          sx={{
                            fontFamily: subFamily,
                            fontWeight: 600,
                            fontSize: "12.48px",
                            textTransform: "none",
                            borderRadius: "10px",
                            px: 2,
                            py: 0.8,
                            background:
                              requestingId === user.id ? "#ccc" : subColor,
                            color: "#fff",
                            "&:hover": { background: headingColor },
                            transition: "all 0.2s ease",
                            "@media (max-width: 950px) and (min-width: 900px)":
                              {
                                width: "100%",
                              },
                            // 600 thi niche pacho normal width thai jase
                            "@media (max-width: 599px)": {
                              width: "auto",
                            },
                            "@media (max-width: 280px)": {
                              width: "auto",
                            },
                          }}
                        >
                          {requestingId === user.id ? "Sending Request..." : "Swap Now"}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {filtered.length === 0 && (
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: headingColor,
                    mb: 1,
                  }}
                >
                  No skills found
                </Typography>
                <Typography sx={{ fontFamily: subFamily, color: "#4A6080" }}>
                  Try a different search or category
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
        <FeedbackForm />
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;
