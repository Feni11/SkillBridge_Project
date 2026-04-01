import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import FeedbackForm from "../Auth/FeedbackForm";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,
      B1060: 1060,
      B950: 950,
      B490: 490,
      B388: 388,
      B331: 331,
    },
  },
});

// ── Design Tokens ──
const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123, Decor Lane, Navrangpura,", "Ahmedabad, Gujarat 380009"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 91234 56789"],
  },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: subFamily,
    fontSize: "13px",
    borderRadius: "10px",
    background: "#fff",
    "& fieldset": { borderColor: "rgba(7,32,71,0.15)" },
    "&:hover fieldset": { borderColor: subColor },
    "&.Mui-focused fieldset": { borderColor: subColor, borderWidth: "1.5px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: subFamily,
    fontSize: "12px",
    color: "#4A6080",
    "&.Mui-focused": { color: subColor },
  },
};

export default function Contact_us() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#e8eef4", minHeight: "100vh" }}>
        <Box>
          {/* ── Header ── */}
          <Box
            sx={{
              background:
                "linear-gradient(135deg, #072047 0%, #0a2d4a 60%, #0097A7 100%)",
              py: { xs: 7, md: 9 },
              px: { xs: 2.5, B490: 5 },
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              mb: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #0097A7 0%, transparent 70%)",
                opacity: 0.2,
                pointerEvents: "none",
              }}
            />

            <Typography
              sx={{
                display: "inline-flex",
                bgcolor: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "11px",
                fontFamily: subFamily,
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                mb: 2.5,
              }}
            >
              ✦ Get In Touch
            </Typography>

            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "48px" },
                color: "#ffffff",
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              Contact
              <Box component="span" sx={{ color: "#2dcfdf" }}>
                Us
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: { xs: "0.88rem", md: "16px" },
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                // textAlign: 'left'
              }}
            >
              Have a question or ready to swap? We'd love to hear from you.
            </Typography>
          </Box>

          <Container maxWidth="lg">
            {/* ── Main Grid — Form + Info ── */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" },
                gap: { xs: 5, md: 6 },
                mx: { xs: 0, B490: 3 },
                py: 9,
              }}
            >
              {/* ── Contact Form ── */}
              <Box
                sx={{
                  background: "#fff",
                  border: "1px solid rgba(7,32,71,0.07",
                  borderRadius: "14px",
                  p: { xs: 3, md: 4.5 },
                  boxShadow: "0 4px 20px rgba(7,32,71,0.05)",
                }}
              >
                {/* Top accent */}
                <Box
                  sx={{
                    height: 3,
                    background: `linear-gradient(90deg, ${subColor}, #2dcfdf, ${subColor})`,
                    mb: 3.5,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontSize: { xs: "22px", md: "28px" },
                    fontWeight: 500,
                    color: headingColor,
                    mb: 0.5,
                  }}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontWeight: 300,
                    fontSize: "12px",
                    color: "#4A6080",
                    mb: 3,
                  }}
                >
                  Fill in the form and we'll get back to you shortly.
                </Typography>

                {!submitted ? (
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {/* Name + Email row */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        size="small"
                        fullWidth
                        required
                        sx={inputSx}
                      />
                      <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        size="small"
                        fullWidth
                        required
                        sx={inputSx}
                      />
                    </Box>

                    {/* Phone + Subject row */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        size="small"
                        fullWidth
                        sx={inputSx}
                      />
                      <TextField
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        size="small"
                        fullWidth
                        sx={inputSx}
                      />
                    </Box>

                    {/* Message */}
                    <TextField
                      label="Your Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      fullWidth
                      required
                      sx={inputSx}
                    />

                    {/* Submit */}
                    <Box
                      onClick={handleSubmit}
                      sx={{
                        background: headingColor,
                        color: "#fff",
                        fontFamily: subFamily,
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        py: 1.6,
                        borderRadius: "10px",
                        cursor: "pointer",
                        mt: 0.5,
                        transition: "all 0.25s",
                        "&:hover": {
                          background: subColor,
                          transform: "translateY(-2px)",
                          boxShadow: `0 8px 24px rgba(0,151,167,0.3)`,
                        },
                      }}
                    >
                      Send Message
                    </Box>
                  </Box>
                ) : (
                  /* Thank You */
                  <Box textAlign="center" py={4}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(0,151,167,0.1)",
                        border: "2px solid rgba(0,151,167,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2.5,
                        fontSize: "28px",
                      }}
                    >
                      ✉️
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontSize: "26px",
                        fontWeight: 500,
                        color: headingColor,
                        mb: 1,
                      }}
                    >
                      Message Sent!
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "#4A6080",
                        lineHeight: 1.9,
                        maxWidth: 300,
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </Typography>
                    <Box
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      sx={{
                        display: "inline-block",
                        border: `1px solid ${subColor}`,
                        color: subColor,
                        fontFamily: subFamily,
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        px: 3,
                        py: 1,
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": { background: "rgba(0,151,167,0.08)" },
                      }}
                    >
                      Send Another
                    </Box>
                  </Box>
                )}
              </Box>

              {/* ── Contact Info ── */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {contactInfo.map((c) => (
                  <Box
                    key={c.title}
                    sx={{
                      background: "#fff",
                      border: `1px solid rgba(7,32,71,0.07)`,
                      borderRadius: "14px",
                      textAlign: "left",
                      p: 3,
                      display: "flex",
                      gap: 2.5,
                      alignItems: "flex-start",
                      transition: "all 0.3s",
                      "&:hover": {
                        borderColor: "rgba(0,151,167,0.3)",
                        transform: "translateX(4px)",
                        boxShadow: "0 8px 24px rgba(7,32,71,0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "10px",
                        background: "rgba(0,151,167,0.08)",
                        border: "1px solid rgba(0,151,167,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: headingFamily,
                          fontWeight: 600,
                          fontSize: "12px",
                          color: headingColor,
                          letterSpacing: "0.5px",
                          mb: 0.8,
                          textTransform: "uppercase",
                        }}
                      >
                        {c.title}
                      </Typography>
                      {c.lines.map((line, i) => (
                        <Typography
                          key={i}
                          sx={{
                            fontFamily: subFamily,
                            fontWeight: 300,
                            fontSize: "13px",
                            color: "#4A6080",
                            lineHeight: 1.8,
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
        <FeedbackForm />
      </Box>
    </ThemeProvider>
  );
}
