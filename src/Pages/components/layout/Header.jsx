import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,
      B1060: 1060,
      B950: 950,
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

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Skills", path: "/skills" },
  { label: "FAQ", path: "/faq" },
  { label: "About Us", path: "/aboutUs" },
  { label: "Contact Us", path: "/ContactUs" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const history = useHistory();

  // ── localStorage check — page load ane route change par ──
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const name = localStorage.getItem("userName") || "";
    const email = localStorage.getItem("userEmail") || "";
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, [location.pathname]); // route change thashe to re-check thashe

  // ── Profile dropdown bahar click thashe to band thay ──
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setProfileMenuOpen(false);
    history.push("/");
  };

  // ── Profile Avatar Letter ──
  const avatarLetter = userName ? userName.trim()[0].toUpperCase() : "U";

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: `1px solid ${headingColor}22`,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, B490: 6 },
            py: 1,
          }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontFamily: headingFamily,
              fontWeight: 700,
              fontSize: { xs: "22px", md: "24px" },
              color: headingColor,
              letterSpacing: "0.5px",
              userSelect: "none",
              textDecoration: "none",
              "& span": { color: subColor },
            }}
          >
            Skill<span>Bridge</span>
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Button
                    key={link.label}
                    component={Link}
                    to={link.path}
                    sx={{
                      fontFamily: subFamily,
                      fontWeight: 500,
                      fontSize: "15px",
                      color: isActive ? subColor : headingColor,
                      textTransform: "none",
                      px: 1.5,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 6,
                        left: "50%",
                        transform: `translateX(-50%) scaleX(${isActive ? 1 : 0})`,
                        width: "60%",
                        height: "2px",
                        backgroundColor: subColor,
                        borderRadius: "2px",
                        transition: "transform 0.25s ease",
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: subColor,
                      },
                      "&:hover::after": {
                        transform: "translateX(-50%) scaleX(1)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Desktop Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {!isMobile && (
              <>
                {isLoggedIn ? (
                  // ── Profile Icon + Dropdown ──
                  <Box ref={profileRef} sx={{ position: "relative" }}>
                    <Box
                      onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${headingColor}, ${subColor})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontFamily: headingFamily,
                        fontWeight: 800,
                        fontSize: "15px",
                        color: "#fff",
                        border: `2px solid ${subColor}`,
                        transition: "all 0.2s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: `0 4px 12px ${subColor}44`,
                        },
                      }}
                    >
                      {avatarLetter}
                    </Box>

                    {/* Dropdown Menu */}
                    {profileMenuOpen && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "calc(100% + 10px)",
                          right: 0,
                          background: "#fff",
                          borderRadius: "14px",
                          border: "1px solid rgba(7,32,71,0.1)",
                          boxShadow: "0 8px 32px rgba(7,32,71,0.12)",
                          minWidth: 180,
                          zIndex: 999,
                          overflow: "hidden",
                          animation: "fadeIn 0.15s ease",
                        }}
                      >
                        {/* User Info */}
                        <Box
                          sx={{
                            px: 2,
                            py: 1.5,
                            borderBottom: "1px solid rgba(7,32,71,0.07)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: headingFamily,
                              fontWeight: 700,
                              fontSize: "14px", // Slightly larger for name
                              color: headingColor,
                              textAlign: "left",
                              textTransform: "capitalize", // Looks professional
                            }}
                          >
                            {userName || "User"}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: subFamily,
                              fontSize: "11px",
                              color: "#4A6080",
                              textAlign: "left",
                            }}
                          >
                            {localStorage.getItem("userEmail") || ""}
                          </Typography>
                        </Box>

                        {/* Profile Link */}
                        <Box
                          component={Link}
                          to="/profile"
                          onClick={() => setProfileMenuOpen(false)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.2,
                            px: 2,
                            py: 1.2,
                            textDecoration: "none",
                            fontFamily: subFamily,
                            fontSize: "13px",
                            color: headingColor,
                            cursor: "pointer",
                            "&:hover": {
                              background: "rgba(0,151,167,0.06)",
                              color: subColor,
                            },
                          }}
                        >
                          <PersonIcon sx={{ fontSize: 16 }} />
                          My Profile
                        </Box>

                        {/* Logout */}
                        <Box
                          onClick={handleLogout}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.2,
                            px: 2,
                            py: 1.2,
                            fontFamily: subFamily,
                            fontSize: "13px",
                            color: "#e53935",
                            cursor: "pointer",
                            borderTop: "1px solid rgba(7,32,71,0.07)",
                            "&:hover": { background: "rgba(229,57,53,0.06)" },
                          }}
                        >
                          <LogoutIcon sx={{ fontSize: 16 }} />
                          Logout
                        </Box>
                      </Box>
                    )}
                  </Box>
                ) : (
                  // ── Login Button ──
                  <Button
                    variant="contained"
                    component={Link}
                    to="/login"
                    sx={{
                      fontFamily: subFamily,
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      textTransform: "none",
                      backgroundColor: headingColor,
                      color: "#fff",
                      borderRadius: "8px",
                      px: 3,
                      py: 0.9,
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: subColor,
                        boxShadow: `0 4px 14px ${headingColor}44`,
                      },
                      transition: "all 0.25s ease",
                    }}
                  >
                    Login
                  </Button>
                )}
              </>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: headingColor }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 240,
            pt: 2,
            px: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Drawer Top */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              px: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 700,
                color: headingColor,
                fontSize: "1.2rem",
              }}
            >
              Skill<span style={{ color: subColor }}>Bridge</span>
            </Typography>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: headingColor }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Profile Info (logged in hoy to) */}
          {isLoggedIn && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 1,
                py: 1.5,
                mb: 2,
                background: "rgba(0,151,167,0.06)",
                borderRadius: "12px",
                border: "1px solid rgba(0,151,167,0.15)",
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${headingColor}, ${subColor})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: "14px",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {avatarLetter}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "13px",
                    color: headingColor,
                  }}
                >
                  {userName}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "11px",
                    color: "#4A6080",
                  }}
                >
                  Logged in
                </Typography>
              </Box>
            </Box>
          )}

          {/* Nav Links */}
          <List sx={{ flex: 1 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <ListItem
                  key={link.label}
                  button
                  component={Link}
                  to={link.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: "10px",
                    mb: 0.5,
                    background: isActive
                      ? "rgba(0,151,167,0.08)"
                      : "transparent",
                    "&:hover": { background: "rgba(0,151,167,0.06)" },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontFamily: subFamily,
                      color: isActive ? subColor : headingColor,
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "1rem",
                    }}
                  />
                </ListItem>
              );
            })}
          </List>

          {/* Mobile Bottom — Login or Logout */}
          <Box
            sx={{
              px: 1,
              mb: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {isLoggedIn ? (
              <>
                <Button
                  fullWidth
                  variant="outlined"
                  component={Link}
                  to="/profile"
                  onClick={() => setDrawerOpen(false)}
                  startIcon={<PersonIcon />}
                  sx={{
                    fontFamily: subFamily,
                    color: headingColor,
                    borderColor: "rgba(7,32,71,0.2)",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "8px",
                    py: 1,
                    "&:hover": { borderColor: subColor, color: subColor },
                  }}
                >
                  My Profile
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    handleLogout();
                    setDrawerOpen(false);
                  }}
                  startIcon={<LogoutIcon />}
                  sx={{
                    fontFamily: subFamily,
                    backgroundColor: "#e53935",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "8px",
                    py: 1.2,
                    "&:hover": { backgroundColor: "#c62828" },
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/login"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  fontFamily: subFamily,
                  backgroundColor: headingColor,
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  py: 1.2,
                  "&:hover": { backgroundColor: subColor },
                  transition: "all 0.2s ease",
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}
