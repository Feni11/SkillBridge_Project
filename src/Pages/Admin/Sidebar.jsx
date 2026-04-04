import { useState } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory, useLocation } from "react-router-dom"; // v5 માટે useHistory અને useLocation

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const navSections = [
  {
    label: "Main",
    items: [
      {
        id: "dashboard",
        icon: "📊",
        label: "Dashboard",
        path: "/admin/dashboard", //done
      },
      { id: "users", icon: "👥", label: "Users", path: "/admin/users" }, //done
    ],
  },
  {
    label: "Skills",
    items: [
      {
        id: "skillcategory",
        icon: "🗂️",
        label: "Skill Category",
        path: "/admin/skillCategory", //done
      },
      {
        id: "swapusers",
        icon: "🔄",
        label: "Swap Users",
        path: "/admin/swapUsers", //done
      },
      {
        id: "skillapproval",
        icon: "✅",
        label: "Skill Approval",
        path: "/admin/skillApproval", //done
      },
    ],
  },
  {
    label: "Finance & Reports",
    items: [
      // { id: "revenue", icon: "💰", label: "Revenue", path: "/admin/revenue" },
      {
        id: "complaints",
        icon: "⚠️",
        label: "Complaints",
        path: "/admin/complaints", //Done
      },
      {
        id: "verified",
        icon: "✔️",
        label: "Verified Badge",
        path: "/admin/verifiedBadge", //done
      },
    ],
  },
  {
    label: "Communication",
    items: [
      {
        id: "contactus",
        icon: "✉️",
        label: "Contact Us",
        path: "/admin/ContactMess", //done
      },
      // {
      //   id: "announcement",
      //   icon: "📢",
      //   label: "Announcement",
      //   path: "/admin/announcement",
      // },
    ],
  },
  {
    label: "",
    items: [
      {
        id: "settings",
        icon: "⚙️",
        label: "Settings",
        path: "/admin/settings", //Done
      },
    ],
  },
];

// ── Sidebar content ──
const SidebarContent = ({ activeId, onClose, history }) => (
  <Box
    sx={{
      width: 240,
      background: "#072047",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      overflowX: "hidden",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: headingFamily,
            fontWeight: 800,
            fontSize: "20px",
            color: "#fff",
          }}
        >
          Skill{" "}
          <Box component="span" sx={{ color: "#2dcfdf" }}>
            Bridge
          </Box>
        </Typography>
        <Typography
          sx={{
            fontFamily: subFamily,
            fontSize: "10px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            mt: 0.3,
          }}
        >
          Admin Panel
        </Typography>
      </Box>
      {onClose && (
        <IconButton
          onClick={onClose}
          sx={{ color: "rgba(255,255,255,0.5)", p: 0.5 }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}
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
          fontWeight: 800,
          color: "#fff",
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

    {/* Nav Items */}
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
              onClick={() => {
                if (item.path) history.push(item.path);
                if (onClose) onClose();
              }}
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
                // Highlight Logic based on activeId
                color:
                  activeId === item.id ? "#2dcfdf" : "rgba(255,255,255,0.55)",
                background:
                  activeId === item.id ? "rgba(0,151,167,0.12)" : "transparent",
                borderLeft: `3px solid ${activeId === item.id ? "#2dcfdf" : "transparent"}`,
                transition: "all 0.2s",
                "&:hover": {
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <Box sx={{ fontSize: "15px", width: 20, textAlign: "center" }}>
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
        fontFamily: subFamily,
        fontSize: "13px",
        color: "rgba(255,255,255,0.4)",
        "&:hover": { color: "#e53935" },
      }}
    >
      <span>🚪</span> Logout
    </Box>
  </Box>
);

// ── Main Sidebar wrapper ──
const Sidebar = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  // URL ના આધારે શોધો કે કઈ આઈટમ એક્ટિવ છે
  const allItems = navSections.flatMap((s) => s.items);
  const currentItem = allItems.find((item) => item.path === location.pathname);

  // જો પાથ મેચ ન થાય (દા.ત. Home પર હોય), તો 'dashboard' ડિફોલ્ટ રાખવું
  const activeId = currentItem ? currentItem.id : "dashboard";

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#F4F8FC" }}>
      {/* Desktop Sidebar */}
      <Box
        sx={{
          width: 240,
          display: { xs: "none", md: "block" },
          position: "fixed",
          height: "100vh",
          zIndex: 100,
        }}
      >
        <SidebarContent activeId={activeId} history={history} />
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240, border: "none" } }}
      >
        <SidebarContent
          activeId={activeId}
          onClose={() => setDrawerOpen(false)}
          history={history}
        />
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, md: "240px" },
          overflow: "hidden", // ← page scroll band
          display: "flex",
          flexDirection: "column",
        }}
      >
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
            zIndex: 99,
          }}
        >
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              color: "#072047",
              p: 0.8,
              border: "1px solid rgba(7,32,71,0.12)",
              borderRadius: "8px",
            }}
          >
            <MenuIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 700,
              fontSize: "15px",
              color: "#072047",
              flex: 1,
            }}
          >
            {currentItem?.icon} {currentItem?.label || "Dashboard"}
          </Typography>
        </Box>

        {/* Page Content */}
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
