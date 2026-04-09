import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import axios from "axios";

const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  const [form, setForm] = useState({
    phone: "",
    location: "",
    teachingSkills: [],
    skillFees: "",
  });

  // Profile load karvo
  useEffect(() => {

    
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");  
        const res = await axios.get("http://localhost:3001/api/profile", {
          headers: { Authorization: `Bearer ${token}` }, 
        });
        setProfile(res.data);
        setForm({
          phone: res.data.phone || "",
          location: res.data.location || "",
          teachingSkills: res.data.teachingSkills || [],
          skillFees: res.data.skillFees || "",
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
    
  }, []);

  // Skill add karvo
  const addSkill = () => {
    if (skillInput.trim() && !form.teachingSkills.includes(skillInput.trim())) {
      setForm({
        ...form,
        teachingSkills: [...form.teachingSkills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  // Skill remove karvo
  const removeSkill = (s) => {
    setForm({
      ...form,
      teachingSkills: form.teachingSkills.filter((x) => x !== s),
    });
  };

  // Form submit
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put("http://localhost:3001/api/profile", form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(res.data.user);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (!profile) return null;

  const stats = [
    { val: profile.swapsDone, lbl: "Swaps Done" },
    { val: profile.avgRating, lbl: "Avg Rating" },
    { val: profile.skillsListed, lbl: "Skills Listed" },
  ];

  const infoRows = [
    { icon: "👤", label: "Full Name", value: profile.name },
    { icon: "📧", label: "Email", value: profile.email },
    { icon: "📱", label: "Phone", value: profile.phone || "Not added" },
    { icon: "📍", label: "Location", value: profile.location || "Not added" },
  ];

  return (
    <>
      {/* Topbar */}
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
            My Profile
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "12px",
              color: "#4A6080",
              textAlign: "left",
              mt: 0.3,
            }}
          >
            View and manage your profile
          </Typography>
        </Box>
        <Box
          onClick={() => setOpen(true)}
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
            "&:hover": { background: subColor },
          }}
        >
          Edit Profile
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 } }}>
        {/* Stats */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((s) => (
            <Grid key={s.lbl} size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "14px",
                  border: "1px solid rgba(7,32,71,0.07)",
                  p: 2.5,
                  textAlign: "center",
                  "&:hover": {
                    borderColor: "rgba(0,151,167,0.2)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "24px",
                    color: headingColor,
                  }}
                >
                  {s.val}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "11px",
                    color: "#4A6080",
                    mt: 0.5,
                  }}
                >
                  {s.lbl}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          {/* Basic Info */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                  👤
                </Box>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: headingColor,
                  }}
                >
                  Basic Info
                </Typography>
              </Box>
              {infoRows.map((row) => (
                <Box
                  key={row.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                        textAlign: "left",
                    gap: 1.5,
                    py: 1.2,
                    borderBottom: "1px solid rgba(7,32,71,0.05)",
                    "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      background: "#F4F8FC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      flexShrink: 0,
                        textAlign: "left",
                    }}
                  >
                    {row.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: subFamily,
                        fontSize: "10px",
                        color: "#4A6080",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontWeight: 600,
                        textAlign: "left",
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 600,
                        fontSize: "13px",
                        color: headingColor,
                        textAlign: "left",
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Teaching Skills */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                  🎯
                </Box>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: headingColor,
                  }}
                >
                  Teaching Skills
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
                {profile.teachingSkills.length > 0 ? (
                  profile.teachingSkills.map((s) => (
                    <Box
                      key={s}
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        px: 1.5,
                        py: 0.6,
                        borderRadius: "100px",
                        background: "rgba(0,151,167,0.1)",
                        color: subColor,
                        border: "1px solid rgba(0,151,167,0.2)",
                      }}
                    >
                      {s}
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "12px",
                      color: "#4A6080",
                    }}
                  >
                    No skills added yet
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  pt: 2,
                  borderTop: "1px solid rgba(7,32,71,0.06)",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "11px",
                    color: "#4A6080",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  Skill Value
                </Typography>
                <Typography
                  sx={{
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "22px",
                    color: headingColor,
                  }}
                >
                  ₹{profile.skillFees?.toLocaleString() || "0"}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Edit Profile Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "20px", p: 1 } }}
      >
        <DialogContent>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "18px",
              color: headingColor,
              mb: 0.5,
            }}
          >
            Edit Profile
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "12px",
              color: "#4A6080",
              mb: 3,
            }}
          >
            Update your profile information
          </Typography>

          {/* Name — autofill, disabled */}
          <TextField
            fullWidth
            label="Full Name"
            value={profile.name}
            disabled
            sx={{ mb: 2 }}
            size="small"
          />

          {/* Email — autofill, disabled */}
          <TextField
            fullWidth
            label="Email"
            value={profile.email}
            disabled
            sx={{ mb: 2 }}
            size="small"
          />

          {/* Phone */}
          <TextField
            fullWidth
            label="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            sx={{ mb: 2 }}
            size="small"
            placeholder="+91 98765 43210"
          />

          {/* Location */}
          <TextField
            fullWidth
            label="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            sx={{ mb: 2 }}
            size="small"
            placeholder="Ahmedabad, Gujarat"
          />

          {/* Teaching Skills */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <TextField
                fullWidth
                label="Add Teaching Skill"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
                size="small"
                placeholder="e.g. Graphic Design"
              />
              <Button
                onClick={addSkill}
                variant="contained"
                sx={{
                  background: headingColor,
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": { background: subColor },
                }}
              >
                Add
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {form.teachingSkills.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  onDelete={() => removeSkill(s)}
                  sx={{
                    background: "rgba(0,151,167,0.1)",
                    color: subColor,
                    fontFamily: subFamily,
                    fontSize: "12px",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Skill Fees */}
          <TextField
            fullWidth
            label="Skill Fees (₹)"
            value={form.skillFees}
            onChange={(e) => setForm({ ...form, skillFees: e.target.value })}
            sx={{ mb: 3 }}
            size="small"
            placeholder="20000"
            type="number"
          />

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              onClick={() => setOpen(false)}
              sx={{
                textTransform: "none",
                color: "#4A6080",
                fontFamily: subFamily,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                background: headingColor,
                borderRadius: "9px",
                textTransform: "none",
                fontFamily: headingFamily,
                fontWeight: 700,
                "&:hover": { background: subColor },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfile;