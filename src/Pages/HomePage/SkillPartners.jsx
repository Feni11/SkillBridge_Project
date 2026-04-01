import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Chip,
  Divider,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
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
      B490: 490, //py:0
      B388: 388,
      B331: 331,
    },
  },
});

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const partners = [
  {
    name: "Priya Shah",
    loc: "Surat, Gujarat",
    rating: "4.9",
    img: "/person1.png",
    teach: "🎨 Teaches: UI Design",
    learn: "📚 Wants: React",
    fee: "₹20,000 / month",
  },
  {
    name: "Arjun Mehta",
    loc: "Ahmedabad, Gujarat",
    rating: "4.8",
    img: "/person2.png",
    teach: "💻 Teaches: Coding",
    learn: "📚 Wants: Guitar",
    fee: "₹15,000 / month",
  },
  {
    name: "Neha Patel",
    loc: "Mumbai, Maharashtra",
    rating: "5.0",
    img: "/person3.png",
    teach: "🎵 Teaches: Music",
    learn: "📚 Wants: Yoga",
    fee: "₹12,000 / month",
  },
  {
    name: "Rohan Joshi",
    loc: "Pune, Maharashtra",
    rating: "4.7",
    img: "person4.png",
    teach: "🤖 Teaches: ML/AI",
    learn: "📚 Wants: Finance",
    fee: "₹25,000 / month",
  },
];

const PartnerCard = ({ partner, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      background: "white",
      borderRadius: "16px",
      overflow: "hidden",
      border: "1px solid rgba(10,22,40,0.08)",
      boxShadow: "0 2px 12px rgba(10,22,40,0.06)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 16px 40px rgba(10,22,40,0.12)",
        borderColor: "rgba(0,151,167,0.25)",
      },
    }}
  >
    {/* Top Banner */}
    <Box
      sx={{
        position: "relative",
        height: 80,
        background: "linear-gradient(135deg, #072047 0%, #0097A7 100%)",
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={partner.img}
        alt={partner.name}
        sx={{
          position: "absolute",
          bottom: -36,
          left: 20,
          width: {xs: 72, md: 62, B1060: 72},
          height: {xs: 72, md: 62, B1060: 72},
          borderRadius: "50%",
          border: "3px solid white",
          objectFit: "cover",
          boxShadow: "0 4px 14px rgba(10,22,40,0.15)",
        }}
      />
      {/* Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 14,
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(8px)",
          borderRadius: "100px",
          px: 1.2,
          py: 0.4,
          fontSize: "0.72rem",
          fontWeight: 700,
          color: "white",
          fontFamily: subFamily,
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        ⭐ {partner.rating}
      </Box>
    </Box>

    {/* Body */}
    <Box sx={{ pt: "44px", px: {xs:"15px", B1060: '20px'}, pb: 2.5 }}>
      <Typography
        sx={{
          fontFamily: headingFamily,
          fontWeight: 800,
          fontSize: "16px",
          color: headingColor,
          textAlign: "left",
          mb: 0.3,
        }}
      >
        {partner.name}
      </Typography>
      <Typography
        sx={{
          fontFamily: subFamily,
          fontSize: "0.72rem",
          color: "#4A6080",
          textAlign: "left",
          mb: 1.5,
        }}
      >
        📍 {partner.loc}
      </Typography>

      <Divider sx={{ mb: 1.5, borderColor: "rgba(10,22,40,0.07)" }} />

      {/* Skill Pills */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, mb: 1.5 }}>
        <Chip
          label={partner.teach}
          size="small"
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            fontFamily: subFamily,
            background: "rgba(0,151,167,0.08)",
            color: "#0097A7",
            border: "1px solid rgba(0,151,167,0.2)",
            borderRadius: "6px",
            height: 28,
            justifyContent: "flex-start",
          }}
        />
        <Chip
          label={partner.learn}
          size="small"
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            fontFamily: subFamily,
            background: "rgba(10,22,40,0.04)",
            color: headingColor,
            border: "1px solid rgba(10,22,40,0.1)",
            borderRadius: "6px",
            height: 28,
            justifyContent: "flex-start",
          }}
        />
      </Box>

      {/* Fee */}
      <Typography
        sx={{
          fontFamily: headingFamily,
          fontWeight: 700,
          fontSize: "13.6px",
          color: headingColor,
          textAlign: "left",
          mb: 1.5,
        }}
      >
        💰 {partner.fee}
      </Typography>

      {/* Button */}
      <Button
        fullWidth
        onClick={(e) => e.stopPropagation()}
        sx={{
          fontFamily: subFamily,
          fontWeight: 700,
          fontSize: "0.82rem",
          color: "white",
          background: subColor,
          borderRadius: "8px",
          py: 1,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            background: headingColor,
            boxShadow: "0 4px 16px rgba(0,151,167,0.3)",
          },
        }}
      >
        Send Request →
      </Button>
    </Box>
  </Box>
);

const SkillPartners = () => {
  const [selected, setSelected] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#ffff", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: 0, B490: 3 } }}>
            {/* ── Header ── */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  display: "inline-flex",
                  bgcolor: "#0097a71a",
                  color: subColor,
                  fontSize: "12px",
                  fontFamily: subFamily,
                  fontWeight: 700,
                  padding: {xs: "6px 12px",B331: "7px 16px"},
                  borderRadius: "100px",
                  border: "1px solid #0097a738",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  mb: 2,
                }}
              >
                ✦ Community
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: { xs: "34px", B331: "36px", sm: "39px", md: "40px" },
                color: headingColor,
                textAlign: "left",
                lineHeight: 1.1,
                letterSpacing: "0.8px",
                mb: 2,
              }}
            >
              Skill Partners
            </Typography>

            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: { xs: "14px", B388: "15px", md: "16px" },
                color: subColor,
                textAlign: "left",
                maxWidth: "420px",
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              Real people, real skills. Connect with experts ready to teach and
              learn.
            </Typography>

            {/* Cards Grid */}
            <Grid container spacing={{ xs: 2, md: 1, B1060: 2 }}>
              {partners.map((partner, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                  <PartnerCard
                    partner={partner}
                    onClick={() => setSelected(partner)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* ==================== Popup Dialog ==================== */}
        <Dialog
          open={!!selected}
          onClose={() => setSelected(null)}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: "28px",
              background: headingColor,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
            },
          }}
        >
          {selected && (
            <>
              {/* Popup Top */}
              <Box
                sx={{
                  height: 120,
                  // background: "linear-gradient(135deg, #0D1F3C, #0a2a3d)",
                  backgroundColor: headingColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  position: "relative",
                  paddingLeft: "6%",
                  paddingTop: "3%",
                }}
              >
                <Box
                  component="img"
                  src={selected.img}
                  alt={selected.name}
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    border: "3px solid rgba(255,255,255,0.15)",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  onClick={() => setSelected(null)}
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "white",
                    width: 32,
                    height: 32,
                    "&:hover": { background: "rgba(255,255,255,0.15)" },
                  }}
                >
                  <CloseIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>

              {/* Popup Body */}
              <DialogContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    color: "white",
                    mb: 0.5,
                  }}
                >
                  {selected.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.4)",
                    mb: 0.5,
                  }}
                >
                  📍 {selected.loc}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#00ACC1",
                    mb: 2,
                  }}
                >
                  ⭐ {selected.rating} Rating
                </Typography>

                <Divider
                  sx={{ borderColor: "rgba(255,255,255,0.07)", mb: 2 }}
                />

                {/* Skill Pills */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mb: 3,
                  }}
                >
                  <Chip
                    label={selected.teach}
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      fontFamily: subFamily,
                      background: "rgba(0,151,167,0.15)",
                      color: "#00ACC1",
                      border: "1px solid rgba(0,151,167,0.25)",
                      borderRadius: "100px",
                      justifyContent: "flex-start",
                      height: 30,
                    }}
                  />
                  <Chip
                    label={selected.learn}
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      fontFamily: subFamily,
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "100px",
                      justifyContent: "flex-start",
                      height: 30,
                    }}
                  />
                </Box>

                {/* Fee */}
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "white",
                    mb: 2,
                  }}
                >
                  💰 {selected.fee}
                </Typography>

                {/* * Send Request Button */}
                <Button
                  fullWidth
                  sx={{
                    fontFamily: subFamily,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: headingColor,
                    background: "white",
                    borderRadius: "100px",
                    py: 1.3,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      background: subColor,
                      color: "white",
                    },
                  }}
                >
                  Send Request →
                </Button>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default SkillPartners;
