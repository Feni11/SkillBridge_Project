import { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  InputAdornment,
  TextField,
} from "@mui/material";
import Sidebar from "./Sidebar";
import SearchIcon from "@mui/icons-material/Search";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const initialUsers = [
  {
    id: 1,
    letter: "R",
    name: "Rhea Shah",
    skill: "UI/UX Design",
    email: "rhea@gmail.com",
    verified: true,
  },
  {
    id: 2,
    letter: "K",
    name: "Karan Patel",
    skill: "Python & Data",
    email: "karan@gmail.com",
    verified: false,
  },
  {
    id: 3,
    letter: "P",
    name: "Priya Nair",
    skill: "Yoga & Wellness",
    email: "priya@gmail.com",
    verified: true,
  },
  {
    id: 4,
    letter: "A",
    name: "Amit Sharma",
    skill: "Finance",
    email: "amit@gmail.com",
    verified: false,
  },
  {
    id: 5,
    letter: "R",
    name: "Raj Mehta",
    skill: "Public Speaking",
    email: "raj@gmail.com",
    verified: true,
  },
];

const AdminVerified = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const toggle = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, verified: !u.verified } : u)),
    );
  };

  const filteredUsers = users.filter((u) => {
    const query = search.toLowerCase().trim();
    if (!query) return true;

    const statusText = u.verified ? "verified" : "not verified";
    const matchesStatus =
      query === "verified" ? u.verified === true : statusText.includes(query);
    return (
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      matchesStatus
    );
  });

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
            Verified Badge Control
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
            Manage blue tick (✔️) verification for top users
          </Typography>
        </Box>

        <TextField
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{
            display: "flex",
            justifyContent: "left",
            mt: 0,
            mb: 2.5,
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

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((u) => (
              <Box
                key={u.id}
                sx={{
                  background: "#fff",
                  borderRadius: "14px",
                  px: { xs: 2, md: 2.5 },
                  py: 2,
                  border: "1px solid rgba(7,32,71,0.08)",
                  boxShadow: "0 4px 16px rgba(7,32,71,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                  "&:hover": { borderColor: "rgba(0,151,167,0.2)" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0097A7, #072047)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: headingFamily,
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {u.letter}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "14px",
                        color: navy,
                        textAlign: "left",
                      }}
                    >
                      {u.name}
                      {u.verified && (
                        <span
                          style={{
                            color: "#1DA1F2",
                            marginLeft: "4px",
                            fontSize: "12px",
                          }}
                        >
                          ✔️
                        </span>
                      )}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" }, // 600px thi nani screen ma niche avi jashe
                        alignItems: { xs: "flex-start", sm: "center" },
                        gap: { xs: 0.2, sm: 1 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: subFamily,
                          fontSize: "12px",
                          color: muted,
                          textAlign: "left",
                        }}
                      >
                        {u.skill}
                      </Typography>

                      {/* Dot separator: Mobile ma hide thase, Desktop ma dekhase */}
                      <Box
                        sx={{
                          display: { xs: "none", sm: "block" },
                          color: muted,
                          fontSize: "12px",
                        }}
                      >
                        •
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: subFamily,
                          fontSize: "12px",
                          color: muted,
                          textAlign: "left",
                          wordBreak: "break-all", // Jo email motu hoy to cut na thay
                        }}
                      >
                        {u.email}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "12px",
                      color: muted,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {u.verified ? "Verified" : "Not Verified"}
                  </Typography>

                  <Switch
                    checked={u.verified}
                    onChange={() => toggle(u.id)}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": { color: teal },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        { backgroundColor: teal },
                    }}
                  />
                </Box>
              </Box>
            ))
          ) : (
            /* No Results Found State */
            <Box sx={{ textAlign: "center", py: 6 }}>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "16px",
                  color: navy,
                }}
              >
                No users found for "{search}"
              </Typography>
              <Typography
                sx={{ fontFamily: subFamily, fontSize: "13px", color: muted }}
              >
                Check the spelling or try another name.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default AdminVerified;
