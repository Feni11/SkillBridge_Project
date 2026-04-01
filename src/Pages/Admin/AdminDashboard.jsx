import { useState } from "react";
import { Box, Typography } from "@mui/material";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const navSections = [
  {
    label: "Main",
    items: [
      { id: "dashboard", icon: "📊", label: "Dashboard" },
      { id: "users", icon: "👥", label: "Users" },
    ],
  },
  {
    label: "Skills",
    items: [
      { id: "skillcategory", icon: "🗂️", label: "Skill Category" },
      { id: "swapusers", icon: "🔄", label: "Swap Users" },
      { id: "skillapproval", icon: "✅", label: "Skill Approval" },
    ],
  },
  {
    label: "Finance & Reports",
    items: [
      { id: "revenue", icon: "💰", label: "Revenue" },
      { id: "complaints", icon: "⚠️", label: "Complaints" },
      { id: "verified", icon: "✔️", label: "Verified Badge" },
    ],
  },
  {
    label: "Communication",
    items: [
      { id: "contactus", icon: "✉️", label: "Contact Us" },
      { id: "announcement", icon: "📢", label: "Announcement" },
    ],
  },
  {
    label: "",
    items: [{ id: "settings", icon: "⚙️", label: "Settings" }],
  },
];

const Sidebar = ({ active, setActive }) => {
  return (
    <Box
      sx={{
        width: 240,
        minWidth: 240,
        background: "#072047",
        minHeight: "100vh",
        height: "100vh", // ← fix
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflowY: "auto", // ← fix: scroll enable
        overflowX: "hidden",
        // scrollbar hide
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(255,255,255,0.1)",
          borderRadius: "4px",
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          px: 2.5,
          pt: 3,
          pb: 2.5,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: headingFamily,
            fontWeight: 800,
            fontSize: "20px",
            color: "#fff",
            textAlign: "left",
          }}
        >
          Skill
          <Box component="span" sx={{ 
            color: "#2dcfdf", 
            
           }}>
            Bridge
          </Box>
        </Typography>
        <Typography
          sx={{
            fontFamily: subFamily,
            fontSize: "10px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "1.5px",
            textAlign: "left",
            textTransform: "uppercase",
            mt: 0.3,
          }}
        >
          Admin Panel
        </Typography>
      </Box>

      {/* Admin Info */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0097A7, #2dcfdf)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: headingFamily,
            fontWeight: 800,
            fontSize: "16px",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          A
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 700,
              fontSize: "13px",
              color: "#fff",
            }}
          >
            Admin User
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Super Admin
          </Typography>
        </Box>
      </Box>

      {/* Nav */}
      <Box sx={{ flex: 1, py: 1.5 }}>
        {navSections.map((section, si) => (
          <Box key={si}>
            {section.label && (
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  px: 2.5,
                  pt: 1.5,
                  pb: 0.5,
                }}
              >
                {section.label}
              </Typography>
            )}
            {section.items.map((item) => (
              <Box
                key={item.id}
                onClick={() => setActive(item.id)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.5,
                  py: 1.1,
                  cursor: "pointer",
                  fontFamily: subFamily,
                  fontSize: "13px",
                  fontWeight: 500,
                  color:
                    active === item.id ? "#2dcfdf" : "rgba(255,255,255,0.55)",
                  background:
                    active === item.id ? "rgba(0,151,167,0.12)" : "transparent",
                  borderLeft: `3px solid ${active === item.id ? "#2dcfdf" : "transparent"}`,
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#fff",
                    background: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "15px",
                    width: 20,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                {item.label}
              </Box>
            ))}
            {si < navSections.length - 1 && (
              <Box
                sx={{
                  height: "1px",
                  background: "rgba(255,255,255,0.06)",
                  mx: 2.5,
                  my: 1,
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Logout */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          cursor: "pointer",
          flexShrink: 0,
          fontFamily: subFamily,
          fontSize: "13px",
          color: "rgba(255,255,255,0.4)",
          transition: "color 0.2s",
          "&:hover": { color: "#e53935" },
        }}
      >
        <span>🚪</span> Logout
      </Box>
    </Box>
  );
};

export default Sidebar;
