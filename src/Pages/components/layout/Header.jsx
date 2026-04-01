import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  createTheme
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,

      //custome breakpoint
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  return (
    <>
        <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          px: 2,
          backgroundColor: "#ffffff",
          borderBottom: `1px solid ${headingColor}22`,
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: 1 }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            variant="h6"
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

          {/* Desktop Nav Links */}
          {!isMobile ? (
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
                      // fontSize: '16px',
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
          ) : (
            // Mobile — Hamburger Icon
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: headingColor }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop Login Button */}
          {!isMobile && (
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
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
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
          {/* Drawer Top — Logo + Close */}
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

          {/* Nav Links */}
          <List sx={{ flex: 1 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <ListItem
                  key={link.label}
                  button
                  component={Link}           // ← Link sathe connect
                  to={link.path}             // ← path sathe
                  onClick={() => setDrawerOpen(false)} // ← click kare to drawer band
                  sx={{
                    borderRadius: "10px",
                    mb: 0.5,
                    background: isActive
                      ? "rgba(0,151,167,0.08)"
                      : "transparent",
                    "&:hover": {
                      background: "rgba(0,151,167,0.06)",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}    // ← link.label sahi
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

          {/* Mobile Login Button */}
          <Box sx={{ px: 1, mb: 3 }}>
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
          </Box>
        </Box>
      </Drawer>
      </ThemeProvider>
    </>
  );
}
