import { Box, Typography } from "@mui/material";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const availRows = [
  { label: "Available Hours / Week", value: "10 hrs" },
  { label: "Preferred Time", value: "Evenings" },
  { label: "Session Mode", value: "Online" },
  { label: "Days Available", value: "Mon – Fri" },
];

const UserAvailability = () => {
  return (
    <>
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
            Availability
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
            Your weekly availability for skill sessions
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
        <Box
          sx={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(7,32,71,0.07)",
            p: 3,
            maxWidth: 600,
            "@media (max-width: 550px)": {
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            },
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
              ⏳
            </Box>
            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 700,
                fontSize: "14px",
                color: headingColor,
              }}
            >
              Schedule
            </Typography>
          </Box>

          {availRows.map((row) => (
            <Box
              key={row.label}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#F4F8FC",
                borderRadius: "10px",
                px: 2,
                py: 1.5,
                mb: 1.2,
                flexWrap: "wrap", // ✅ Important
                "@media (max-width: 350px)": {
                  gap: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 600,
                  fontSize: "13px",
                  color: headingColor,
                  textAlign: "left",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {row.label}
              </Typography>

              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  fontFamily: subFamily,
                  color: subColor,
                  background: "rgba(0,151,167,0.1)",
                  px: 1.5,
                  py: 0.4,
                  borderRadius: "100px",
                  whiteSpace: "nowrap",

                  "@media (max-width: 350px)": {
                    flexBasis: "100%", // ✅ Badge ne niche dhakelvi mate
                    width: "fit-content",
                    // mt: 0.5,
                  },
                }}
              >
                {row.value}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UserAvailability;
