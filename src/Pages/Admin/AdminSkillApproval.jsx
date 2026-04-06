import { useState } from "react";
import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,
      B565: 565,
    },
  },
});

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const initialApprovals = [
  {
    id: "apr-1",
    letter: "M",
    name: "French Language",
    by: "Meera Iyer",
    category: "Language",
    value: "₹7,000",
  },
  {
    id: "apr-2",
    letter: "D",
    name: "React Advanced",
    by: "Dev Kapoor",
    category: "Development",
    value: "₹25,000",
  },
  {
    id: "apr-3",
    letter: "P",
    name: "Pilates",
    by: "Priya Nair",
    category: "Fitness",
    value: "₹6,000",
  },
  {
    id: "apr-4",
    letter: "A",
    name: "Brand Identity",
    by: "Amit Sharma",
    category: "Design",
    value: "₹15,000",
  },
  {
    id: "apr-5",
    letter: "S",
    name: "Video Editing Pro",
    by: "Sneha Joshi",
    category: "Design",
    value: "₹12,000",
  },
];

const AdminSkillApproval = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(initialApprovals);
  const [done, setDone] = useState({});

  const handle = (id, action) => {
    setDone((prev) => ({ ...prev, [id]: action }));
  };

  const filteredUsers = items.filter((u) => {
    const query = search.toLowerCase().trim();
    return (
      u.name.toLowerCase().includes(query) ||
      u.by.toLowerCase().includes(query) ||
      u.category.toLowerCase().includes(query)
    );
  });

  return (
    <Sidebar>
      <ThemeProvider theme={theme}>
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
              Skill Approval
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "13px",
                color: muted,
                textAlign: "left",
                mt: 0.3,
              }}
            >
              Review and approve new skill listings before they go live
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
              filteredUsers.map((u) => {
                const status = done[u.id];
                return (
                  <Box
                    key={u.id}
                    sx={{
                      background: "#fff",
                      borderRadius: "14px",
                      px: { xs: 2, md: 2.5 },
                      py: 2.2,
                      border: status
                        ? `1px solid ${status === "approved" ? "rgba(46,125,50,0.3)" : "rgba(229,57,53,0.2)"}`
                        : "1px solid rgba(7,32,71,0.08)",
                      boxShadow: "0 4px 16px rgba(7,32,71,0.04)",
                      display: "flex",
                      alignItems: { xs: "flex-start", B565: "center" },    
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      flexDirection: { xs: "column", B565: "row" },
                      gap: 2,
                      transition: "all 0.2s ease",
                      "&:hover": { borderColor: "rgba(0,151,167,0.2)" },
                    }}
                  >
                    {/* Left — info */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #0097A7, #072047)",
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
                          {u.name}{" "}
                          {u.verified && (
                            <span
                              style={{ color: "#1DA1F2", marginLeft: "4px" }}
                            >
                              ✔️
                            </span>
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "12px",
                            color: muted,
                            mt: 0.3,
                            textAlign: "left",
                          }}
                        >
                          by {u.by} · {u.category} · {u.value}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Right — buttons or status */}
                    {status ? (
                      <Box
                        sx={{
                          px: 1.8,
                          py: 0.6,
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: 700,
                          fontFamily: subFamily,
                          background:
                            status === "approved"
                              ? "rgba(46,125,50,0.1)"
                              : "rgba(229,57,53,0.08)",
                          color: status === "approved" ? "#2e7d32" : "#e53935",
                        }}
                      >
                        {status === "approved" ? "✅ Approved" : "❌ Rejected"}
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                          justifyContent: { xs: "flex-end", sm: "flex-start" },
                        }}
                      >
                        <Box
                          onClick={() => handle(u.id, "approved")}
                          sx={{
                            px: 1.8,
                            py: 0.7,
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: 600,
                            fontFamily: subFamily,
                            cursor: "pointer",
                            background: "rgba(46,125,50,0.1)",
                            color: "#2e7d32",
                            transition: "all 0.2s",
                            "&:hover": { background: "rgba(46,125,50,0.2)" },
                          }}
                        >
                          ✅ Approve
                        </Box>
                        <Box
                          onClick={() => handle(u.id, "rejected")}
                          sx={{
                            px: 1.8,
                            py: 0.7,
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: 600,
                            fontFamily: subFamily,
                            cursor: "pointer",
                            background: "rgba(229,57,53,0.08)",
                            color: "#e53935",
                            transition: "all 0.2s",
                            "&:hover": { background: "rgba(229,57,53,0.18)" },
                          }}
                        >
                          ❌ Reject
                        </Box>
                      </Box>
                    )}
                  </Box>
                );
              })
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
                  No listings found for "{search}"
                </Typography>
                <Typography
                  sx={{ fontFamily: subFamily, fontSize: "13px", color: muted }}
                >
                  Try searching by skill name or creator.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </Sidebar>
  );
};

export default AdminSkillApproval;
