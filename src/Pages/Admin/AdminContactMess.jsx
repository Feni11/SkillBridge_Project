import { useState } from "react";
import { Box, Typography, InputAdornment, TextField } from "@mui/material";
import Sidebar from "./Sidebar";
import SearchIcon from "@mui/icons-material/Search";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const initialMessages = [
  {
    id: 1,
    name: "Rohan Desai",
    email: "rohan@email.com",
    date: "30 Mar 2026",
    phoneNub: "9076798634",
    subject: "Skill swap",
    msg: "How do I list my skill on the platform?",
    read: false,
  },
  {
    id: 2,
    name: "Nisha Verma",
    email: "nisha@email.com",
    date: "29 Mar 2026",
    phoneNub: "9076798634",
    subject: "Complaint",
    msg: "I have a complaint about a swap deal.",
    read: true,
  },
  {
    id: 3,
    name: "Pooja Shah",
    email: "pooja@email.com",
    date: "27 Mar 2026",
    phoneNub: "9076798634",
    subject: "Complaint",
    msg: "Payment not received after swap completion.",
    read: false,
  },
  {
    id: 4,
    name: "Yash Trivedi",
    email: "yash@email.com",
    date: "28 Mar 2026",
    phoneNub: "9076798634",
    subject: "Skill swap",
    msg: "Can I swap multiple skills at the same time?",
    read: true,
  },
];

const AdminContactMess = () => {
  const [messages, setMessages] = useState(initialMessages);

  const markRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: true } : m)),
    );
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  const [search, setSearch] = useState("");
  const [items, setItems] = useState(initialMessages);

  const filteredComplaint = items.filter((m) => {
    const query = search.toLowerCase().trim();
    return (
      m.name.toLowerCase().includes(query) ||
      m.email.toLowerCase().includes(query) ||
      m.subject.toLowerCase().includes(query)
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
            Contact Messages
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
            {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
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
          {filteredComplaint.length > 0 ? (
            filteredComplaint.map((m) => (
              <Box
                key={m.id}
                sx={{
                  background: "#fff",
                  borderRadius: "14px",
                  p: { xs: 2, md: 2.5 },
                  border: m.read
                    ? "1px solid rgba(7,32,71,0.08)"
                    : "1px solid rgba(0,151,167,0.3)",
                  boxShadow: "0 4px 16px rgba(7,32,71,0.04)",
                  transition: "all 0.2s ease",
                  "&:hover": { borderColor: "rgba(0,151,167,0.3)" },
                }}
              >
                {/* Top row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 1,
                  }}
                >
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
                      {m.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "12px",
                        color: muted,
                        mt: 0.2,
                        textAlign: "left",
                      }}
                    >
                      {m.email} · {m.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "12px",
                        color: muted,
                        mt: 0.2,
                        textAlign: "left",
                      }}
                    >
                      {m.phoneNub}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "12px",
                        color: muted,
                        mt: 0.2,
                        textAlign: "left",
                      }}
                    >
                      {m.subject}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 600,
                      fontFamily: subFamily,
                      background: m.read
                        ? "rgba(7,32,71,0.07)"
                        : "rgba(0,151,167,0.1)",
                      color: m.read ? navy : teal,
                    }}
                  >
                    {m.read ? "Read" : "Unread"}
                  </Box>
                </Box>

                {/* Message */}
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "13px",
                    color: muted,
                    lineHeight: 1.7,
                    mb: m.read ? 0 : 1.5,
                    textAlign: "left",
                  }}
                >
                  {m.msg}
                </Typography>

                {/* Mark read button */}
                {!m.read && (
                  <Box
                    onClick={() => markRead(m.id)}
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      width: "10%",
                      px: 1.8,
                      py: 0.6,
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: subFamily,
                      cursor: "pointer",
                      background: "rgba(0,151,167,0.08)",
                      color: teal,
                      transition: "all 0.2s",
                      "&:hover": { background: "rgba(0,151,167,0.18)" },
                    }}
                  >
                    ✔ Mark as Read
                  </Box>
                )}
              </Box>
            ))
          ) : (
            <Box sx={{ textAlign: "center", py: 6 }}>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "16px",
                  color: navy,
                }}
              >
                No messages found for "{search}"
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default AdminContactMess;
