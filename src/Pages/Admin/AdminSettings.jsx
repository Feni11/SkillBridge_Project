import { useState } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";
import Sidebar from "./Sidebar";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    background: "#F4F8FC",
    fontFamily: subFamily,
    fontSize: "13px",
    "& fieldset": { borderColor: "rgba(7,32,71,0.12)" },
    "&:hover fieldset": { borderColor: teal },
    "&.Mui-focused fieldset": { borderColor: teal },
  },
  "& .MuiInputLabel-root": {
    fontFamily: subFamily,
    fontSize: "13px",
    color: muted,
    "&.Mui-focused": { color: teal },
  },
};

const AdminSettings = () => {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@skillbridge.com",
    phone: "+91 98765 00000",
    address: "Ahmedabad, Gujarat",
    currentPass: "",
    newPass: "",
    notes: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <Sidebar>
      <Box sx={{ p: { xs: 2, md: 3.5 } }}>
        {/* Header */}
        <Box sx={{ display: { xs: "none", md: "block" }, mb: 3 }}>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "22px",
              color: navy,
            }}
          >
            Settings
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "13px",
              color: muted,
              mt: 0.3,
            }}
          >
            Manage your admin account
          </Typography>
        </Box>

        <Box
          sx={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(7,32,71,0.08)",
            boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
            p: { xs: 2.5, md: 3.5 },
            maxWidth: 600,
          }}
        >
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={inputSx}
              />
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={inputSx}
              />
            </Grid>

            {/* Phone */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={inputSx}
              />
            </Grid>

            {/* Address */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={inputSx}
              />
            </Grid>

            {/* Current Password */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Current Password"
                name="currentPass"
                type="password"
                value={form.currentPass}
                onChange={handleChange}
                size="small"
                fullWidth
                placeholder="Enter current password"
                sx={inputSx}
              />
            </Grid>

            {/* New Password */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="New Password"
                name="newPass"
                type="password"
                value={form.newPass}
                onChange={handleChange}
                size="small"
                fullWidth
                placeholder="Enter new password"
                sx={inputSx}
              />
            </Grid>

            {/* Notes */}
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Notes / Description"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                placeholder="Any notes..."
                sx={inputSx}
              />
            </Grid>
          </Grid>

          {/* Save Button */}
          <Box
            onClick={handleSave}
            sx={{
              mt: 2.5,
              background: navy,
              color: "#fff",
              fontFamily: headingFamily,
              fontWeight: 700,
              fontSize: "13px",
              textAlign: "center",
              py: 1.5,
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              "&:hover": { background: teal, transform: "translateY(-2px)" },
            }}
          >
            💾 Save Changes
          </Box>

          {/* Success Message */}
          {saved && (
            <Box
              sx={{
                mt: 1.5,
                px: 2,
                py: 1.2,
                borderRadius: "10px",
                background: "rgba(46,125,50,0.08)",
                border: "1px solid rgba(46,125,50,0.2)",
                fontSize: "12px",
                fontWeight: 600,
                fontFamily: subFamily,
                color: "#2e7d32",
                textAlign: "center",
              }}
            >
              ✅ Settings saved successfully!
            </Box>
          )}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default AdminSettings;
