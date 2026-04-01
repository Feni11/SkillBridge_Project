import { Box, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ProfileDashboard from "./ProfileDashboard";

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
      B550: 550,
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

const requests = [
  {
    name: "Rhea Shah",
    skill: "Wants to swap: UI/UX ↔ React",
    color: "linear-gradient(135deg,#0097A7,#0A1628)",
    letter: "R",
  },
  {
    name: "Meera Iyer",
    skill: "Wants to swap: French ↔ Graphic Design",
    color: "linear-gradient(135deg,#072047,#00ACC1)",
    letter: "M",
  },
];

const UserRequest = () => {
  return (
    <ThemeProvider theme={theme}>
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
              Requests
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
              Skill swap requests from other users
            </Typography>
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 } }}>
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
                📩
              </Box>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "14px",
                  color: headingColor,
                }}
              >
                Incoming Requests
              </Typography>
            </Box>

            {requests.map((req, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  background: "#F4F8FC",
                  borderRadius: "12px",
                  px: 2,
                  py: 1.8,
                  mb: 1.5,
                  border: "1px solid rgba(7,32,71,0.06)",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: req.color,
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
                  {req.letter}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "13px",
                      color: headingColor,
                      textAlign: "left",
                      ml: { xs: 0, md: 3 },
                    }}
                  >
                    {req.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "12px",
                      color: "#4A6080",
                      mt: 0.3,
                      textAlign: "left",
                      ml: { xs: 0, md: 3 },
                    }}
                  >
                    {req.skill}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    width: { xs: "100%", B550: "auto" }, // ← xs ma full width
                    justifyContent: { xs: "flex-start", B550: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 0.8,
                      background: subColor,
                      color: "#fff",
                      borderRadius: "8px",
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": { background: headingColor },
                    }}
                  >
                    Accept
                  </Box>
                  <Box
                    sx={{
                      px: 2,
                      py: 0.8,
                      background: "transparent",
                      color: "#e24b4b",
                      border: "1px solid rgba(226,75,75,0.3)",
                      borderRadius: "8px",
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": { background: "rgba(226,75,75,0.06)" },
                    }}
                  >
                    Reject
                  </Box>
                </Box>
              </Box>
            ))}

            {requests.length === 0 && (
              <Box sx={{ textAlign: "center", py: 6 }}>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: headingColor,
                    mb: 1,
                  }}
                >
                  No requests yet
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "13px",
                    color: "#4A6080",
                  }}
                >
                  When someone sends you a swap request, it will appear here.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </ProfileDashboard>
    </ThemeProvider>
  );
};

export default UserRequest;
