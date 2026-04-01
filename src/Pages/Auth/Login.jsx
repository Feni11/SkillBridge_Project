import { useState } from "react";
import Link from "react-router-dom";
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
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error States
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const hasError = !!emailError || !!passwordError;

  //password hide and show
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //validation
  const handleLogin = () => {
    let isValid = true;

    // 1. Email Validation Logic
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

    // 2. Password Validation (Frontend mockup)
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
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
  // const boxColor = "#8C6D5A";
  const headingFamily = '"Plus Jakarta Sans", sans-serif';
  const subFamily = '"Inter", sans-serif';

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            // backgroundImage: "url('/Auth_bg4.png')",
            backgroundColor: "#E8F2F8",
            width: "100%",
            // height: "100vh",
            height: "auto",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                borderRadius: 4,
                my: hasError ? 4.4 : 7.2,
                py: 4,
                boxShadow: 2,
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
                  px: 2,
                }}
              >
                Where Learning Meets Opportunity
              </Typography>

              {/* divider */}
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#E0D5CB",
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
                      // backgroundColor: "rgba(254, 254, 254, 0.07)",
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
                        // color: boxColor,
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
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff
                              sx={{ fontSize: 18, color: subColor }}
                            />
                          ) : (
                            <Visibility
                              sx={{ fontSize: 18, color: subColor }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      // backgroundColor: "#FBF7F4",
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
                        // color: boxColor,
                        fontSize: "14px",
                        padding: "10px 0",
                      },
                    },
                  }}
                />

                {/* forgot password */}
                <Typography
                  component="a"
                  href="/ForgotPass"
                  // component = {Link}
                  // to="/ForgotPass"
                  sx={{
                    // color: "#A39081",
                    color: subColor,
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "right",
                    fontSize: "12px",
                    mt: 1,
                    fontFamily: subFamily,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Forgot Password?
                </Typography>
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
                  Sign in
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
                  Don't have an account?{" "}
                  <Typography
                    component="a"
                    href="/SignUp"
                    sx={{
                      color: headingColor,
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontSize: { xs: "15px", B370: "16px" },
                    }}
                  >
                    Sign Up
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
