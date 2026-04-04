import { useState } from "react";
import { Box, Typography, Avatar, Drawer, IconButton } from "@mui/material";
import { Link, useLocation, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const navItems = [
  { label: "Profile", icon: "👤", path: "/profile/userprofile", section: "Main" },
  {
    label: "My Skills",
    icon: "🎯",
    path: "/profile/skills",
    section: "Skills",
  },
  {
    label: "Availability",
    icon: "⏳",
    path: "/profile/availability",
    section: "Skills",
  },
  {
    label: "My Swaps",
    icon: "🔄",
    path: "/profile/myswaps",
    section: "Activity",
  },
  {
    label: "Requests",
    icon: "📩",
    path: "/profile/requests",
    section: "Activity",
    badge: 2,
  },
];

const SidebarContent = ({ location, handleLogout, onClose }) => {
  const sections = [...new Set(navItems.map((n) => n.section))];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: headingColor,
      }}
    >
      {/* User Info */}
      <Box
        sx={{
          px: 2.5,
          py: 3,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
        src="/person2.png"
          sx={{
            width: 50,
            height: 50,
            background: "linear-gradient(135deg, #0097A7, #0a2d4a)",
            border: "2px solid #0097A7",
            fontFamily: headingFamily,
            fontWeight: 800,
            fontSize: "20px",
          }}
        >
          A
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 700,
              fontSize: "14px",
              color: "#fff",
              textAlign: "left",
            }}
          >
            Arjun Mehta
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
              mt: 0.3,
              textAlign: "left",
            }}
          >
            arjun@gmail.com
          </Typography>
        </Box>
        {/* Close button — mobile only */}
        {onClose && (
          <IconButton
            onClick={onClose}
            sx={{ color: "rgba(255,255,255,0.5)", p: 0.5 }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        )}
      </Box>

      {/* Nav Links */}
      <Box sx={{ px: 1.5, py: 2, flex: 1, overflowY: "auto" }}>
        {sections.map((section) => (
          <Box key={section}>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "10px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                px: 1.2,
                py: 0.8,
                mt: 1,
              }}
            >
              {section}
            </Typography>

            {navItems
              .filter((n) => n.section === section)
              .map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Box
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={onClose}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      px: 1.5,
                      py: 1.2,
                      borderRadius: "10px",
                      mb: 0.3,
                      textDecoration: "none",
                      background: isActive ? subColor : "transparent",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background: isActive
                          ? subColor
                          : "rgba(255,255,255,0.07)",
                      },
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "16px", width: 22, textAlign: "center" }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 600,
                        fontSize: "13px",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
                        flex: 1,
                        textAlign: "left",
                      }}
                    >
                      {item.label}
                    </Typography>
                    {item.badge && (
                      <Box
                        sx={{
                          background: "#e24b4b",
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: 700,
                          px: 0.8,
                          py: 0.2,
                          borderRadius: "100px",
                          minWidth: 18,
                          textAlign: "center",
                        }}
                      >
                        {item.badge}
                      </Box>
                    )}
                  </Box>
                );
              })}
          </Box>
        ))}

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            mx: 1.2,
            my: 1.5,
          }}
        />

        {/* Logout */}
        <Box
          onClick={handleLogout}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            px: 1.5,
            py: 1.2,
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": { background: "rgba(255,80,80,0.1)" },
          }}
        >
          <Typography sx={{ fontSize: "16px", width: 22, textAlign: "center" }}>
            🚪
          </Typography>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 600,
              fontSize: "13px",
              color: "rgba(255,100,100,0.8)",
            }}
          >
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ProfileDashboard = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    history.push("/login");
  };

  // Current page name find karo
  const currentPage = navItems.find((n) => n.path === location.pathname);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#F4F8FC" }}>
      {/* ── DESKTOP SIDEBAR ── */}
      <Box
        sx={{
          width: 260,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <SidebarContent
          location={location}
          handleLogout={handleLogout}
          onClose={null}
        />
      </Box>

      {/* ── MOBILE DRAWER ── */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 260, background: headingColor, border: "none" },
        }}
      >
        <SidebarContent
          location={location}
          handleLogout={handleLogout}
          onClose={() => setDrawerOpen(false)}
        />
      </Drawer>

      {/* ── MAIN CONTENT ── */}
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {/* Mobile Top Bar */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            background: "#fff",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid rgba(7,32,71,0.07)",
            gap: 1.5,
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          {/* Hamburger */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              color: headingColor,
              p: 0.8,
              border: "1px solid rgba(7,32,71,0.12)",
              borderRadius: "8px",
            }}
          >
            <MenuIcon sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Page Name */}
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 700,
              fontSize: "15px",
              color: headingColor,
              flex: 1,
            }}
          >
            {currentPage?.icon} {currentPage?.label || "Dashboard"}
          </Typography>

          {/* Edit Button — right side */}
          
          {["/dashboard/profile", "/dashboard/skills", "/dashboard/availability"].includes(location.pathname) && (
            <Box
              sx={{
                px: 2,
                py: 0.8,
                background: headingColor,
                color: "#fff",
                borderRadius: "8px",
                fontFamily: headingFamily,
                fontWeight: 700,
                fontSize: "12px",
                cursor: "pointer",
                "&:hover": { background: subColor },
              }}
            >
              Edit
            </Box>
          )}
        </Box>

        {/* Page Content */}
        {children}
      </Box>
    </Box>
  );
};

export default ProfileDashboard;
