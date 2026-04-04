import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  createTheme,
} from "@mui/material";

// icon
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1526,

        //custome breakpoint
        B1140: 1140,
        B700: 700,
        B450: 450,
        B370: 370,
      },
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error States
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const hasError = !!nameError || !!emailError || !!passwordError;
  //password hide and show
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //validation
  const handleLogin = () => {
    let isValid = true;

    // 1. Name Validation Logic
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else if (!nameRegex.test(name)) {
      setNameError("Numbers not allowed");
      isValid = false;
    } else if (name.trim().length < 3) {
      setNameError("Minimum 3 letters");
      isValid = false;
    } else if (name.trim().length > 20) {
      setNameError("Maximum 20 letters");
      isValid = false;
    } else {
      setNameError("");
    }

    // 2. Email Validation Logic
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

    // 3. Password Validation (Frontend mockup)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(" Use 6+ chars with upper, lower, number & special");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log("Login details:", { email, password });
    }
  };
  const headingColor = "#072047";
  const subColor = "#0097A7";
  const headingFamily = '"Plus Jakarta Sans", sans-serif';
  const subFamily = '"Inter", sans-serif';

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "#E8F2F8",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // py: 3,
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
              height: "auto",
              // my: hasError ? 1.4 : 5.7,
              py: 2,
              borderRadius: 4,
              boxShadow: 4,
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                color: headingColor,
                fontSize: { xs: "26px", B370: "30px" },
                fontFamily: headingFamily,
                fontWeight: 600,
                letterSpacing: "1.3px",
              }}
            >
              SkillBridge
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                color: subColor,
                fontSize: { xs: "14px", B370: "15px" },
              }}
            >
              Where Learning Meets Opportunity
            </Typography>

            {/* divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#0096a71e",
                my: 3,
              }}
            />

            <Box
              sx={{
                textAlign: "left",
                width: "85%",
                mx: "auto",
                mt: 4,
              }}
            >
              {/* Name */}
              <Typography
                sx={{
                  fontFamily: subFamily,
                  color: subColor,
                  fontSize: "15px",
                  fontWeight: 700,
                  mb: 0.5,
                }}
              >
                Name
              </Typography>
              <TextField
                fullWidth
                placeholder="john doe"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!nameError}
                helperText={nameError}
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
                        <PersonIcon sx={{ fontSize: 16 }} />
                      </Box>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#ffff",
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
                      color: headingColor,
                      fontSize: "14px",
                      padding: "10px 0",
                    },
                  },
                }}
              />

              {/* Email */}
              <Typography
                sx={{
                  fontFamily: subFamily,
                  color: subColor,
                  fontSize: "15px",
                  fontWeight: 700,
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
                    backgroundColor: "#ffff",
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
                      color: headingColor,
                      fontSize: "14px",
                      padding: "10px 0",
                    },
                  },
                }}
              />

              {/* Password Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    color: subColor,
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Password
                </Typography>
              </Box>

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
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
                        <LockIcon sx={{ fontSize: 16 }} />
                      </Box>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? (
                          <VisibilityOff
                            sx={{ fontSize: 18, color: subColor }}
                          />
                        ) : (
                          <Visibility sx={{ fontSize: 18, color: subColor }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#ffff",
                    borderRadius: "8px",
                    "& fieldset": { borderColor: "#072047" },
                    "&:hover fieldset": {
                      borderColor: "#072047 !important",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#072047 !important",
                    },
                    input: {
                      color: headingColor,
                      fontSize: "14px",
                      padding: "10px 0",
                    },
                  },
                }}
              />
            </Box>

            {/* Login Button */}
            <Box sx={{ mt: 3 }}>
              <IconButton
                onClick={handleLogin}
                sx={{
                  width: "85%",
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
                // disableRipple
              >
                Sign Up
              </IconButton>
            </Box>

            {/* Sign Up Link */}
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: subFamily,
                  color: subColor,
                  fontSize: { xs: "13px", B370: "15px" },
                }}
              >
                Already Have an Account?
                <Typography
                  component="a"
                  href="/Login"
                  sx={{
                    color: headingColor,
                    fontWeight: "bold",
                    textDecoration: "none",
                    ml: 1,
                    fontSize: { xs: "15px", B370: "16px" },
                  }}
                >
                  Sign in
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
