import { Box, Typography, createTheme } from "@mui/material";
import ProfileDashboard from "./ProfileDashboard";
import { ThemeProvider } from "@mui/material/styles";

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

const swaps = [
  {
    name: "Priya Nair",
    taught: "UI Design",
    learned: "Yoga",
    status: "Completed",
    color: "linear-gradient(135deg,#4A6080,#0A1628)",
    letter: "P",
  },
  {
    name: "Karan Patel",
    taught: "Figma",
    learned: "Python",
    status: "Ongoing",
    color: "linear-gradient(135deg,#0A1628,#0D2D4A)",
    letter: "K",
  },
  {
    name: "Sneha Joshi",
    taught: "Brand Design",
    learned: "Video Editing",
    status: "Completed",
    color: "linear-gradient(135deg,#00ACC1,#0A1628)",
    letter: "S",
  },
];

const UserSwap = () => {
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
              My Swaps
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
              Your skill swap history
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
                🔄
              </Box>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "14px",
                  color: headingColor,
                }}
              >
                Swap History
              </Typography>
            </Box>

            {swaps.map((swap, i) => (
              <Box
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
                  // flexWrap: { xs: "wrap", B550: "nowrap" },
                  "@media (max-width: 550px)": { flexWrap: "wrap" },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: swap.color,
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
                  {swap.letter}
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
                    {swap.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "12px",
                      color: "#4A6080",
                      textAlign: "left",
                      ml: { xs: 0, md: 3 },
                      mt: 0.3,
                    }}
                  >
                    Taught: {swap.taught} · Learned: {swap.learned}
                  </Typography>
                </Box>
                
                  <Box
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      fontFamily: subFamily,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "100px",
                      "@media (max-width: 550px)": { width: "100%", mx: 'auto', textAlign: "right" },
                      background:
                        swap.status === "Completed"
                          ? "rgba(0,151,167,0.1)"
                          : "rgba(234,179,8,0.1)",
                      color: swap.status === "Completed" ? subColor : "#a06000",
                    }}
                  >
                    {swap.status}
                  </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </ProfileDashboard>
    </ThemeProvider>
  );
};

export default UserSwap;
