import { Box, Typography, Container, Divider, IconButton, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

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
      B490: 490, //py:0
      B388: 388,
      B331: 331,
    },
  },
});

const bgColor = "#071828";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const footerLinks = {
  "Quick Links": ["How It Works", "Browse Skills", "Why Us", "About"],
  Contact: ["hello@skillbridge.com", "Support Center", "Report Issue"],
  Legal: ["Terms of Service", "Privacy Policy", "Community Guidelines"],
};

const Footer = () => {
  return (
        <ThemeProvider theme={theme}>
    <Box
      sx={{
        background: bgColor,
        pt: { xs: 6, md: 8 },
        pb: 0,
         px: { xs: 0, B490: 3 }
      }}
    >
      <Container maxWidth="xl">
        {/* Top Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: { xs: 5, md: 4 },
            pb: { xs: 5, md: 6 },
            
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "#ffffff",
                textAlign: "left",
                letterSpacing: "0.6px",
                mb: 2,
              }}
            >
              Skill
              <Box component="span" sx={{ color: subColor }}>
                Bridge
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.8,
                textAlign: "left",
                maxWidth: 260,
              }}
            >
              Exchange skills, grow together, where knowledge is the only currency. Pay only the difference in skill value.
            </Typography>
          </Box>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Box key={title}>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#ffffff",
                  textAlign: "left",
                  mb: 2.5,
                }}
              >
                {title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
                {links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      textAlign: "left",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#0097A7" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            py: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © 2026 SkillBridge. All rights reserved.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              { icon: <XIcon sx={{ fontSize: 15 }} />, label: "X" },
              {
                icon: <LinkedInIcon sx={{ fontSize: 15 }} />,
                label: "LinkedIn",
              },
              {
                icon: <InstagramIcon sx={{ fontSize: 15 }} />,
                label: "Instagram",
              },
              {
                icon: <ChatBubbleOutlineIcon sx={{ fontSize: 15 }} />,
                label: "Chat",
              },
            ].map(({ icon, label }) => (
              <IconButton
                key={label}
                aria-label={label}
                sx={{
                  width: 36,
                  height: 36,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  borderRadius: "50%",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "#0097A7",
                    color: "#fff",
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Footer;
