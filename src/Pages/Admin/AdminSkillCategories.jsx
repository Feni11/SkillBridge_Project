import { useState } from "react";
import { Box, Typography, InputAdornment, TextField } from "@mui/material";
import Sidebar from "./Sidebar";
import SearchIcon from "@mui/icons-material/Search";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const categories = [
  {
    name: "Design",
    count: "48 skills",
    users: "32 active users",
    skills: ["UI/UX", "Video Editing", "Graphic Design"],
  },
  {
    name: "Development",
    count: "65 skills",
    users: "41 active users",
    skills: ["React", "Python", "Node.js"],
  },
  {
    name: "Fitness",
    count: "29 skills",
    users: "24 active users",
    skills: ["Yoga", "Gym Training", "Zumba"],
  },
  {
    name: "Finance",
    count: "22 skills",
    users: "18 active users",
    skills: ["Investment", "Accounting", "Trading"],
  },
  {
    name: "Music",
    count: "35 skills",
    users: "28 active users",
    skills: ["Guitar", "Piano", "Singing"],
  },
  {
    name: "Language",
    count: "19 skills",
    users: "15 active users",
    skills: ["French", "Spanish", "Japanese"],
  },
];

const AdminSkillCategories = () => {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase().trim()),
  );

  return (
    <Sidebar>
      <Box sx={{ p: { xs: 2, md: 3.5 } }}>
        {/* Header */}
        <Box sx={{ display: { xs: "none", md: "block" }, mb: 3 }}>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "22px",
              color: navy,
              textAlign: "left",
            }}
          >
            Skill Categories
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "13px",
              color: muted,
              mt: 0.3,
              textAlign: "left",
            }}
          >
            All skill categories and their listings
          </Typography>
        </Box>

        {/* Search */}
        <TextField
          placeholder="Search Categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 3,
            width: { xs: "100%", sm: 320 },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              background: "#fff",
              fontFamily: subFamily,
              fontSize: "13px",
              "& fieldset": { borderColor: "rgba(7,32,71,0.12)" },
              "&:hover fieldset": { borderColor: teal },
              "&.Mui-focused fieldset": { borderColor: teal },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 18, color: muted }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Cards Grid — CSS grid so cards control kari shakay */}
        {filteredCategories.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr", // ← 900-1200 par 2 column
                lg: "1fr 1fr 1fr", // ← 1200+ par 3 column
              },
              gap: 2.5,
            }}
          >
            {filteredCategories.map((cat) => (
              <Box
                key={cat.name}
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  p: 2.5,
                  border: "1px solid rgba(7,32,71,0.08)",
                  boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "rgba(0,151,167,0.3)",
                    boxShadow: "0 8px 24px rgba(7,32,71,0.1)",
                  },
                }}
              >
                {/* Top — Name + Badge */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "15px",
                      color: navy,
                    textAlign: "left"
                    }}
                  >
                    {cat.name}
                  </Typography>
                  <Box
                    sx={{
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 600,
                      fontFamily: subFamily,
                      background: "rgba(0,151,167,0.1)",
                      color: teal,
                      flexShrink: 0, // ← badge squeeze na thay
                    }}
                  >
                    {cat.count}
                  </Box>
                </Box>

                {/* Skill chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                  {cat.skills.map((s) => (
                    <Box
                      key={s}
                      sx={{
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        background: "rgba(7,32,71,0.07)",
                        color: navy,
                      }}
                    >
                      {s}
                    </Box>
                  ))}
                </Box>

                {/* Users count */}
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "12px",
                    color: muted,
                    mt: "auto",
                    textAlign: "left"
                  }}
                >
                  👤 {cat.users}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 700,
                fontSize: "16px",
                color: navy,
                mb: 0.5,
              }}
            >
              No categories found for "{search}"
            </Typography>
            <Typography
              sx={{ fontFamily: subFamily, fontSize: "13px", color: muted }}
            >
              Check the spelling or try another name.
            </Typography>
          </Box>
        )}
      </Box>
    </Sidebar>
  );
};

export default AdminSkillCategories;
