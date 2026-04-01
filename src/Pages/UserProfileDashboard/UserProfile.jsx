import { Box, Typography, Grid } from "@mui/material";
import ProfileDashboard from "./ProfileDashboard";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const stats = [
  { val: "12", lbl: "Swaps Done" },
  { val: "4.9", lbl: "Avg Rating" },
  { val: "3", lbl: "Skills Listed" },
];

const infoRows = [
  { icon: "👤", label: "Full Name", value: "Arjun Mehta" },
  { icon: "📧", label: "Email", value: "arjun@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 98765 43210" },
  { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat" },
];

const UserProfile = () => {
  return (
    <ProfileDashboard>
      {/* Topbar */}
      <Box
        sx={{
          background: "#fff",
          px: { xs: 2, md: 3.5 },
          py: 2,
          borderBottom: "1px solid rgba(7,32,71,0.07)",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "18px",
              color: headingColor,
              textAlign: 'left',
            }}
          >
            My Profile
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "12px",
              color: "#4A6080",
              mt: 0.3,
              textAlign: 'left'
            }}
          >
            View and manage your profile
          </Typography>
        </Box>
        <Box
          sx={{
            px: 2.5,
            py: 1,
            background: headingColor,
            color: "#fff",
            borderRadius: "9px",
            fontFamily: headingFamily,
            fontWeight: 700,
            fontSize: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": { background: subColor },
          }}
        >
          Edit Profile
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 } }}>
        {/* Stats */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((s) => (
            <Grid key={s.lbl} size={{ xs: 12, sm:  4 }}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "14px",
                  border: "1px solid rgba(7,32,71,0.07)",
                  p: 2.5,
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "rgba(0,151,167,0.2)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "24px",
                    color: headingColor,
                  }}
                >
                  {s.val}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "11px",
                    color: "#4A6080",
                    mt: 0.5,
                  }}
                >
                  {s.lbl}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          {/* Basic Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid rgba(7,32,71,0.07)",
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 2.5,
                  pb: 1.5,
                  borderBottom: "1px solid rgba(7,32,71,0.06)",
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "9px",
                    background: "rgba(0,151,167,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                >
                  👤
                </Box>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: headingColor,
                  }}
                >
                  Basic Info
                </Typography>
              </Box>
              {infoRows.map((row) => (
                <Box
                  key={row.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    py: 1.2,
                    borderBottom: "1px solid rgba(7,32,71,0.05)",
                    "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      background: "#F4F8FC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    {row.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "10px",
                        color: "#4A6080",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontWeight: 600,
                        textAlign: 'left',
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 600,
                        fontSize: "13px",
                        color: headingColor,
                        textAlign: 'left',
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Teaching Skills */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid rgba(7,32,71,0.07)",
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 2.5,
                  pb: 1.5,
                  borderBottom: "1px solid rgba(7,32,71,0.06)",
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "9px",
                    background: "rgba(0,151,167,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                >
                  🎯
                </Box>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: headingColor,
                  }}
                >
                  Teaching Skills
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
                {["Graphic Design", "UI/UX", "Figma", "Brand Identity"].map(
                  (s) => (
                    <Box
                      key={s}
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        px: 1.5,
                        py: 0.6,
                        borderRadius: "100px",
                        background: "rgba(0,151,167,0.1)",
                        color: subColor,
                        border: "1px solid rgba(0,151,167,0.2)",
                      }}
                    >
                      {s}
                    </Box>
                  ),
                )}
              </Box>
              <Box sx={{ pt: 2, borderTop: "1px solid rgba(7,32,71,0.06)" }}>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "11px",
                    color: "#4A6080",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                    mb: 0.5,
                    textAlign: {xs: "left", md: 'center'}
                  }}
                >
                  Skill Value
                </Typography>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "22px",
                    color: headingColor,
                    textAlign: {xs: "left", md: 'center'}
                  }}
                >
                  ₹20,000
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ProfileDashboard>
  );
};

export default UserProfile;
