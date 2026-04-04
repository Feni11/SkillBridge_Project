import { useState } from "react";
import { Box, Typography, InputAdornment, TextField } from "@mui/material";
import Sidebar from "./Sidebar";
import SearchIcon from "@mui/icons-material/Search";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const swapUsers = [
  {
    id: 1,
    name: "Rhea Shah",
    category: "Design",
    teaches: "UI/UX Design",
    value: 20000,
    learns: "React",
    rating: 4.9,
    swaps: 24,
    availability: "4:00 PM – 6:00 PM",
  },
  {
    id: 2,
    name: "Karan Patel",
    category: "Development",
    teaches: "Python & Data",
    value: 18000,
    learns: "React",
    rating: 4.8,
    swaps: 18,
    availability: "10:00 PM – 12:00 PM",
  },
  {
    id: 3,
    name: "Priya Nair",
    category: "Fitness",
    teaches: "Yoga & Wellness",
    value: 5000,
    learns: "React",
    rating: 5.0,
    swaps: 31,
    availability: "6:00 PM – 8:00 PM",
  },
  {
    id: 4,
    name: "Amit Sharma",
    category: "Finance",
    teaches: "Finance & Investment",
    value: 22000,
    learns: "React",
    rating: 4.7,
    swaps: 15,
    availability: "7:00 PM – 9:00 PM",
  },
  {
    id: 5,
    name: "Sneha Joshi",
    category: "Design",
    teaches: "Video Editing",
    value: 12000,
    learns: "React",
    rating: 4.9,
    swaps: 20,
    availability: "2:00 PM – 5:00 PM",
  },
  {
    id: 6,
    name: "Raj Mehta",
    category: "Business",
    teaches: "Public Speaking",
    value: 15000,
    learns: "React",
    rating: 4.8,
    swaps: 12,
    availability: "9:00 PM – 11:00 PM",
  },
  {
    id: 7,
    name: "Ananya Singh",
    category: "Music",
    teaches: "Guitar Lessons",
    value: 8000,
    learns: "React",
    rating: 4.9,
    swaps: 28,
    availability: "1:00 PM – 3:00 PM",
  },
  {
    id: 8,
    name: "Dev Kapoor",
    category: "Development",
    teaches: "React & Frontend",
    value: 25000,
    learns: "React",
    rating: 4.7,
    swaps: 16,
    availability: "10:00 PM – 12:00 PM",
  },
  {
    id: 9,
    name: "Meera Iyer",
    category: "Language",
    teaches: "French Language",
    value: 7000,
    learns: "React",
    rating: 5.0,
    swaps: 22,
    availability: "4:00 PM – 6:00 PM",
  },
];

const AdminSwapUsers = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = swapUsers.filter((u) => {
    const query = search.toLowerCase().trim();
    return (
      u.name.toLowerCase().includes(query) ||
      u.teaches.toLowerCase().includes(query) ||
      u.category.toLowerCase().includes(query) ||
      u.id.toString().includes(query) ||
      u.rating.toString().includes(query)
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
            Swap Users
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
            Users who want to teach and swap skills
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

        {/* Table */}
        <Box
          sx={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(7,32,71,0.08)",
            boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
            overflow: "hidden",
            overflowX: "auto",
          }}
        >
          <table
            style={{ width: "100%", borderCollapse: "collapse", minWidth: 650 }}
          >
            <thead>
              <tr style={{ background: "#F4F8FC" }}>
                {[
                  "#",
                  "Name",
                  // "Category",
                  "Teaches",
                  "Wants to Learn",
                  "Availability",
                  "Skill Value",
                  "swaps",
                  "rating",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "12px",
                      color: navy,
                      padding: "14px 16px",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <tr
                    key={u.id}
                    style={{ borderTop: "1px solid rgba(7,32,71,0.06)" }}
                  >
                    <td
                      style={{
                        padding: "14px 16px",
                        fontFamily: subFamily,
                        fontSize: "13px",
                        color: muted,
                      }}
                    >
                      {u.id}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "13px",
                            color: navy,
                            fontWeight: 600,
                            textAlign: "left",
                          }}
                        >
                          {u.name}
                        </Typography>
                      </Box>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "left" }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          px: 1.2,
                          py: 0.4,
                          borderRadius: "6px",
                          fontSize: "11px",
                          fontWeight: 600,
                          fontFamily: subFamily,
                          background: "rgba(0,151,167,0.1)",
                          color: teal,
                        }}
                      >
                        {u.teaches}
                      </Box>
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontFamily: subFamily,
                        fontSize: "13px",
                        color: muted,
                        textAlign: "left",
                      }}
                    >
                      {u.learns}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontFamily: subFamily,
                        fontSize: "13px",
                        color: muted,
                        textAlign: "left",
                      }}
                    >
                      🕐 {u.availability}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "13px",
                        color: navy,
                        textAlign: "left",
                      }}
                    >
                      {u.value}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "13px",
                        color: navy,
                        textAlign: "left",
                      }}
                    >
                      {u.swaps}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "13px",
                        color: navy,
                        textAlign: "left",
                      }}
                    >
                      {u.rating}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    style={{
                      padding: "40px",
                      textAlign: "center",
                      fontFamily: subFamily,
                      color: muted,
                    }}
                  >
                    No users found matching "{search}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default AdminSwapUsers;
