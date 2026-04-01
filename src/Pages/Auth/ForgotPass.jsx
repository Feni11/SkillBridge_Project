import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// icon
import EmailIcon from "@mui/icons-material/Email";

const ForgotPass = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1526,
        B1140: 1140,
        B700: 700,
        B450: 450,
        B370: 370,
      },
    },
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleReset = () => {
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ac\.in)$/;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email!");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      console.log("Reset link sent to:", email);
    }
  };

  const headingColor = "#072047";
  const subColor = "#0097A7";
  const headingFamily = '"Plus Jakarta Sans", sans-serif';
  const subFamily = '"Inter", sans-serif';

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#E8F2F8",
          width: "100%",
          height: "100vh",
          overflow: "hidden", //add
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "90%",
                B370: "80%",
                B450: "70%",
                sm: "55%",
                B700: "50%",
                md: "40%",
                B1140: "30%",
                lg: "30%",
              },
              borderRadius: 4,
              // my: 12,
              my: 0,  
              py: 5,
              boxShadow: 2,
              flexShrink: 0,
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                color: headingColor,
                fontSize: { xs: "26px", B370: "30px" },
                fontFamily: headingFamily,
                fontWeight: 600,
                letterSpacing: "1.3px",
                textAlign: "center",
              }}
            >
              SkillBridge
            </Typography>

            <Typography
              sx={{
                fontFamily: subFamily,
                color: subColor,
                fontSize: { xs: "14px", B370: "15px" },
                px: 2,
                textAlign: "center",
              }}
            >
              Where Learning Meets Opportunity
            </Typography>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E0D5CB",
                my: 3,
              }}
            />

            {/* Form */}
            <Box
              sx={{
                width: "85%",
                mx: "auto",
                mt: 4,
              }}
            >
              {/* Email */}
              <Typography
                sx={{
                  fontFamily: subFamily,
                  color: subColor,
                  fontSize: "15px",
                  fontWeight: 700,
                  textAlign: 'left',
                  mb: 0.5,
                }}
              >
                Email Address
              </Typography>

              <TextField
                fullWidth
                placeholder="johndoe@example.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                FormHelperTextProps={{
                  sx: {
                    display: emailError ? "block" : "none", // ✅ no space when no error
                    margin: 0,
                  },
                }}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          backgroundColor: headingColor,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "4px",
                          width: 28,
                          height: 20,
                        }}
                      >
                        <EmailIcon sx={{ fontSize: 16 }} />
                      </Box>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#fff",
                    borderRadius: "8px",

                    "& fieldset": {
                      borderColor: "#072047",
                    },
                    "&:hover fieldset": {
                      borderColor: "#072047 !important",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#072047 !important",
                    },
                    input: {
                      fontSize: "14px",
                      padding: "10px 0",
                    },
                  },
                }}
              />

              {/* Button */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <IconButton
                  onClick={handleReset}
                  sx={{
                    width: "100%",
                    backgroundColor: headingColor,
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    py: 1.3,
                    fontFamily: subFamily,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: subColor,
                    },
                  }}
                >
                  Reset Password
                </IconButton>
              </Box>

              {/* Back */}
              <Typography
                component="a"
                href="/Login"
                sx={{
                  display: "block",
                  textAlign: "center",
                  mt: 2,
                  color: subColor,
                  fontFamily: subFamily,
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                }}
              >
                Back To Login
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ForgotPass;