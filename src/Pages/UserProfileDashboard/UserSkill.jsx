import { Box, Typography, Grid } from "@mui/material";
import ProfileDashboard from "./ProfileDashboard";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const teachSkills = [
  "Graphic Design",
  "UI/UX Design",
  "Figma",
  "Brand Identity",
];
const learnSkills = ["React Development", "Video Editing", "Public Speaking"];

const UserSkill = () => {
  return (
    <ProfileDashboard>
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
              textAlign: "left",
            }}
          >
            My Skills
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "12px",
              color: "#4A6080",
              mt: 0.3,
              textAlign: "left",
            }}
          >
            Manage skills you teach and want to learn
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
        <Grid container spacing={2}>
          {/* Skills I Teach */}
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
                  Skills I Can Teach
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {teachSkills.map((s) => (
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
                ))}
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
                  Skill Value (per course)
                </Typography>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "24px",
                    color: headingColor,
                    textAlign: {xs: "left", md: 'center'}
                  }}
                >
                  ₹20,000
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Skills I Want to Learn */}
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
                  📚
                </Box>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: headingColor,
                  }}
                >
                  Skills I Want to Learn
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {learnSkills.map((s) => (
                  <Box
                    key={s}
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: subFamily,
                      px: 1.5,
                      py: 0.6,
                      borderRadius: "100px",
                      background: "rgba(7,32,71,0.06)",
                      color: headingColor,
                      border: "1px solid rgba(7,32,71,0.12)",
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ProfileDashboard>
  );
};

export default UserSkill;
