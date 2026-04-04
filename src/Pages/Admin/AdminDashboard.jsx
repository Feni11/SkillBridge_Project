import { Box, Typography, Grid } from "@mui/material";
import Sidebar from '../Admin/Sidebar'
import { useState } from "react";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const stats = [
  {
    icon: "👥",
    value: "1,284",
    label: "Total Signups",
    change: "+12% this month",
    up: true,
    color: teal,
  },
  {
    icon: "🎯",
    value: "191",
    label: "Total Skills",
    change: "+8% this month",
    up: true,
    color: navy,
  },
  {
    icon: "🔄",
    value: "115",
    label: "Swap Teachers",
    change: "+15% this month",
    up: true,
    color: "#00ACC1",
  },
  {
    icon: "⚠️",
    value: "8",
    label: "Complaints",
    change: "-3% this month",
    up: false,
    color: "#e53935",
  },
];

const activities = [
  {
    icon: "👤",
    bg: "rgba(0,151,167,0.12)",
    text: "Rhea Shah joined the platform",
    time: "2 min ago",
  },
  {
    icon: "🔄",
    bg: "rgba(7,32,71,0.08)",
    text: "Karan Patel & Ananya Singh started a swap",
    time: "15 min ago",
  },
  {
    icon: "⚠️",
    bg: "rgba(229,57,53,0.1)",
    text: "New complaint filed by Pooja Shah",
    time: "1 hr ago",
  },
  {
    icon: "✅",
    bg: "rgba(46,125,50,0.1)",
    text: "Raj Mehta's profile approved",
    time: "2 hr ago",
  },
];

const AdminDashboard = () => {
const [active, setActive] = useState("dashboard");

  return (
    <Sidebar active={active} setActive={setActive}>
    <Box sx={{ p: { xs: 2, md: 3.5 } }}>
      {/* Topbar */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "22px",
              color: navy,
              textAlign: 'left',
            }}
          >
            Dashboard Overview
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "13px",
              color: muted,
              mt: 0.3,
              textAlign: 'left',
            }}
          >
            Welcome back, Admin 👋
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              background: "#F4F8FC",
              border: "1px solid rgba(7,32,71,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "16px",
              position: "relative",
            }}
          >
            🔔
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#e53935",
                position: "absolute",
                top: 6,
                right: 6,
                border: "1.5px solid #fff",
              }}
            />
          </Box>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0097A7, #2dcfdf)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "13px",
              color: "#fff",
            }}
          >
            A
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {stats.map((s) => (
          <Grid key={s.label} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "16px",
                p: { xs: 2, md: 2.5 },
                border: "1px solid rgba(7,32,71,0.08)",
                boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 24px rgba(7,32,71,0.1)",
                },
              }}
            >
              <Typography sx={{ fontSize: "28px", mb: 1 }}>{s.icon}</Typography>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: { xs: "20px", md: "26px" },
                  color: s.color,
                  mb: 0.5,
                }}
              >
                {s.value}
              </Typography>
              <Typography
                sx={{ fontFamily: subFamily, fontSize: "12px", color: muted }}
              >
                {s.label}
              </Typography>
              {/* <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: "11px",
                  fontWeight: 600,
                  color: s.up ? "#2e7d32" : "#e53935",
                  mt: 0.5,
                }}
              >
                {s.change}
              </Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      {/* <Box
        sx={{
          background: "#fff",
          borderRadius: "16px",
          p: { xs: 2.5, md: 3 },
          border: "1px solid rgba(7,32,71,0.08)",
          boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
        }}
      >
        <Typography
          sx={{
            fontFamily: headingFamily,
            fontWeight: 700,
            fontSize: "15px",
            color: navy,
            mb: 2,
          }}
        >
          Recent Activity
        </Typography>
        {activities.map((a, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 1.8,
              borderBottom:
                i < activities.length - 1
                  ? "1px solid rgba(7,32,71,0.06)"
                  : "none",
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                background: a.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              {a.icon}
            </Box>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "13px",
                color: navy,
                flex: 1,
              }}
            >
              {a.text}
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "11px",
                color: muted,
                flexShrink: 0,
              }}
            >
              {a.time}
            </Typography>
          </Box>
        ))}
      </Box> */}

    </Box>
    </Sidebar>
  );
};

export default AdminDashboard;
