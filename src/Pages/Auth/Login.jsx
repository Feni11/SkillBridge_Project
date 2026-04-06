import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasError = !!emailError || !!passwordError;

  const handleLogin = () => {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ac\.in)$/;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email!");
      isValid = false;
    } else setEmailError("");

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else setPasswordError("");

    if (isValid) {
      const userName = email.split("@")[0];
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", userName);
      localStorage.setItem("userEmail", email);
      history.push("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* ── Outer — full screen center ── */}
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
        {/* ── Card ── */}
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
            borderRadius: "16px",
            my: 0,
            py: 4,
            boxShadow: "0 4px 24px rgba(7,32,71,0.10)",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              color: headingColor,
              fontSize: { xs: "24px", sm: "28px" },
              fontFamily: headingFamily,
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            SkillBridge
          </Typography>

          <Typography
            sx={{
              fontFamily: subFamily,
              color: subColor,
              fontSize: "13px",
              px: 2,
              mt: 0.5,
            }}
          >
            Where Learning Meets Opportunity
          </Typography>

          {/* Divider */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              my: 3,
              backgroundColor: "#0096a71e"
            }}
          />

          {/* Form */}
          <Box sx={{ textAlign: "left", width: "85%", mx: "auto" }}>
            {/* Email */}
            <Typography
              sx={{
                fontFamily: subFamily,
                color: subColor,
                fontSize: "14px",
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="johndoe@gmail.com"
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
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: headingColor },
                  "&:hover fieldset": {
                    borderColor: `${headingColor} !important`,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: `${headingColor} !important`,
                  },
                  input: { fontSize: "14px", padding: "10px 0" },
                },
              }}
            />

            {/* Password */}
            <Typography
              sx={{
                fontFamily: subFamily,
                color: subColor,
                fontSize: "14px",
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              Password
            </Typography>
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
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 18, color: subColor }} />
                      ) : (
                        <Visibility sx={{ fontSize: 18, color: subColor }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: headingColor },
                  "&:hover fieldset": {
                    borderColor: `${headingColor} !important`,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: `${headingColor} !important`,
                  },
                  input: { fontSize: "14px", padding: "10px 0" },
                },
              }}
            />

            {/* Forgot Password */}
            <Typography
              component={Link}
              to="/ForgotPass"
              sx={{
                color: subColor,
                textDecoration: "none",
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "12px",
                mt: 1,
                fontFamily: subFamily,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Forgot Password?
            </Typography>
          </Box>

          {/* Sign In Button */}
          <Box sx={{ mt: 3, width: "85%", mx: "auto" }}>
            <Box
              onClick={handleLogin}
              sx={{
                width: "100%",
                backgroundColor: headingColor,
                color: "white",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 700,
                py: 1.4,
                fontFamily: subFamily,
                cursor: "pointer",
                transition: "background 0.3s",
                "&:hover": { backgroundColor: subColor },
              }}
            >
              Sign in
            </Box>
          </Box>

          {/* Sign Up */}
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ fontFamily: subFamily, color: subColor, fontSize: "13px" }}
            >
              Don't have an account?{" "}
              <Typography
                component={Link}
                to="/SignUp"
                sx={{
                  color: headingColor,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
