import { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: subFamily,
    fontSize: "13px",
    borderRadius: "10px",
    background: "#F4F8FC",
    "& fieldset": { borderColor: "rgba(7,32,71,0.12)" },
    "&:hover fieldset": { borderColor: subColor },
    "&.Mui-focused fieldset": { borderColor: subColor, borderWidth: "1.5px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: subFamily,
    fontSize: "13px",
    color: "#4A6080",
    "&.Mui-focused": { color: subColor },
  },
};

const FeedbackForm = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);   // ✅ component ની અંદર
  const [hover, setHover] = useState(0);     // ✅ hover state define
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setHover(0);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <>
      {/* ── Blur Backdrop ── */}
      {open && (
        <Box
          onClick={handleClose}
          sx={{
            position: "fixed",
            inset: 0,
            background: "rgba(7,32,71,0.35)",
            backdropFilter: "blur(6px)",
            zIndex: 1200,
            transition: "all 0.3s ease",
          }}
        />
      )}

      {/* ── Feedback Modal ── */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 100 },
          right: { xs: 16, md: 32 },
          width: { xs: "calc(100vw - 32px)", sm: 480 },
          zIndex: 1300,
          transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Box sx={{
          background: "#fff",
          borderRadius: "20px",
          border: "1px solid rgba(7,32,71,0.08)",
          boxShadow: "0 24px 64px rgba(7,32,71,0.18)",
          overflow: "hidden",
        }}>

          {/* Top accent line */}
          <Box sx={{
            height: "3px",
            background: `linear-gradient(90deg, ${subColor}, #2dcfdf, ${subColor})`,
          }} />

          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 12, right: 12,
              width: 30, height: 30,
              background: "rgba(7,32,71,0.06)",
              "&:hover": { background: "rgba(7,32,71,0.12)" },
            }}
          >
            <CloseIcon sx={{ fontSize: 16, color: headingColor }} />
          </IconButton>

          <Box sx={{ p: { xs: 3, sm: 3.5 } }}>
            {!submitted ? (
              <>
                <Typography sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: headingColor,
                  mb: 0.5,
                  textAlign: "center",
                }}>
                  Send Us a Message
                </Typography>
                <Typography sx={{
                  fontFamily: subFamily,
                  fontSize: "12px",
                  color: "#4A6080",
                  textAlign: "center",
                  mb: 3,
                }}>
                  Fill in the form and we'll get back to you shortly.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                  {/* Rating */}
                  <Box>
                    <Typography sx={{
                      fontFamily: subFamily,
                      fontSize: "11px",
                      fontWeight: 500,
                      color: headingColor,
                      textAlign: 'left',
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      mb: 0.8,
                    }}>
                      Rating
                    </Typography>
                    <Box display="flex" gap={0.5}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Box
                          key={s}
                          onMouseEnter={() => setHover(s)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(s)}
                          sx={{
                            cursor: "pointer",
                            transition: "transform 0.15s",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        >
                          {s <= (hover || rating) ? (
                            <StarIcon sx={{ fontSize: 28, color: subColor }} />  // ✅ subColor (capital C)
                          ) : (
                            <StarBorderIcon sx={{ fontSize: 28, color: headingColor }} />
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Name + Email */}
                  <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
                    <TextField
                      label="Full Name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={inputSx}
                    />
                    <TextField
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={inputSx}
                    />
                  </Box>

                  {/* Message */}
                  <TextField
                    label="Your FeedBack"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    sx={inputSx}
                  />

                  {/* Submit */}
                  <Box
                    onClick={handleSubmit}
                    sx={{
                      background: headingColor,
                      color: "#fff",
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      textAlign: "center",
                      py: 1.6,
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        background: subColor,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Send Message →
                  </Box>
                </Box>
              </>
            ) : (
              /* Thank You */
              <Box sx={{ textAlign: "center", py: 3 }}>
                <Box sx={{
                  width: 60, height: 60,
                  borderRadius: "50%",
                  background: "rgba(0,151,167,0.1)",
                  border: "2px solid rgba(0,151,167,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  mx: "auto", mb: 2,
                  fontSize: "24px",
                }}>
                  ✅
                </Box>
                <Typography sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: headingColor,
                  mb: 1,
                }}>
                  Message Sent!
                </Typography>
                <Typography sx={{
                  fontFamily: subFamily,
                  fontSize: "13px",
                  color: "#4A6080",
                  lineHeight: 1.8,
                  mb: 2.5,
                }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </Typography>
                <Box
                  onClick={() => {
                    setSubmitted(false);
                    setRating(0);
                    setHover(0);
                    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  sx={{
                    display: "inline-block",
                    border: `1px solid ${subColor}`,
                    color: subColor,
                    fontFamily: subFamily,
                    fontWeight: 600,
                    fontSize: "12px",
                    px: 3, py: 1,
                    borderRadius: "8px",
                    cursor: "pointer",
                    "&:hover": { background: "rgba(0,151,167,0.08)" },
                  }}
                >
                  Send Another
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* ── Floating Button ── */}
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 32 },
          right: { xs: 16, md: 32 },
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: open ? subColor : headingColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1400,
          boxShadow: "0 8px 24px rgba(7,32,71,0.25)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.08)",
            background: subColor,
          },
        }}
      >
        {open
          ? <CloseIcon sx={{ color: "#fff", fontSize: 22 }} />
          : <ChatBubbleOutlineIcon sx={{ color: "#fff", fontSize: 22 }} />
        }
      </Box>
    </>
  );
};

export default FeedbackForm;
