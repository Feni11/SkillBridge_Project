import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Dialog,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const initialUsers = [
  {
    id: 1,
    letter: "R",
    name: "Rhea Shah",
    verified: true,
    email: "rhea@email.com",
    skill: "UI/UX Design",
    joined: "12 Mar 2025",
    status: "Active",
    role: "user",
  },
  {
    id: 2,
    letter: "K",
    name: "Karan Patel",
    verified: false,
    email: "karan@email.com",
    skill: "Python & Data",
    joined: "15 Mar 2025",
    status: "Active",
    role: "user",
  },
  {
    id: 3,
    letter: "P",
    name: "Priya Nair",
    verified: true,
    email: "priya@email.com",
    skill: "Yoga & Wellness",
    joined: "18 Mar 2025",
    status: "Blocked",
    role: "user",
  },
  {
    id: 4,
    letter: "A",
    name: "Amit Sharma",
    verified: false,
    email: "amit@email.com",
    skill: "Finance",
    joined: "20 Mar 2025",
    status: "Active",
    role: "user",
  },
  {
    id: 5,
    letter: "S",
    name: "Sneha Joshi",
    verified: false,
    email: "sneha@email.com",
    skill: "Video Editing",
    joined: "22 Mar 2025",
    status: "Pending",
    role: "user",
  },
  {
    id: 6,
    letter: "R",
    name: "Raj Mehta",
    verified: true,
    email: "raj@email.com",
    skill: "Public Speaking",
    joined: "25 Mar 2025",
    status: "Active",
    role: "user",
  },
];

const statusColor = {
  Active: { bg: "rgba(46,125,50,0.1)", color: "#2e7d32" },
  Blocked: { bg: "rgba(229,57,53,0.08)", color: "#e53935" },
  Pending: { bg: "rgba(245,124,0,0.1)", color: "#f57c00" },
};

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

const AdminUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "user" });

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  const openEdit = (u) => {
    setEditUser(u);
    setForm({ name: u.name, email: u.email, role: u.role });
  };

  const saveEdit = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editUser.id
          ? { ...u, name: form.name, email: form.email, role: form.role }
          : u,
      ),
    );
    setEditUser(null);
  };

  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Blocked" ? "Active" : "Blocked" }
          : u,
      ),
    );
  };

  return (
    <Sidebar>
      {/* <Box sx={{ p: { xs: 2, md: 3.5 } }}> */}
      <Box
        sx={{
          p: { xs: 2, md: 3.5 },
          overflowY: "auto", 
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box sx={{ display: { xs: "none", md: "block" }, mb: 3 }}>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "22px",
              color: navy,
              textAlign: "left",
            }}
          >
            All Users
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "13px",
              color: muted,
              mt: 0.3,
              textAlign: "left",
            }}
          >
            {filtered.length} registered users
          </Typography>
        </Box>

        {/* Search */}
        <TextField
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{
            display: "flex",
            justifyContent: "left",
            mb: 2.5,
            width: { xs: "100%", sm: 320 },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              background: "#fff",
              fontFamily: subFamily,
              fontSize: "13px",
              "& fieldset": { borderColor: "rgba(7,32,71,0.12)" },
              "&:hover fieldset": { borderColor: teal },
              "&.Mui-focused fieldset": { borderColor: teal },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 18, color: muted }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Table */}
        <Box
          sx={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(7,32,71,0.08)",
            boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
            overflow: "hidden",
            overflowX: "auto",
            flex: 1, 
            minHeight: 0,
          }}
        >
          <table
            style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}
          >
            <thead>
              <tr style={{ background: "#F4F8FC" }}>
                {["#", "Name", "Email", "Joined", "Action"].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "12px",
                      color: navy,
                      padding: "14px 16px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr
                  key={u.id}
                  style={{ borderTop: "1px solid rgba(7,32,71,0.06)" }}
                >
                  <td
                    style={{
                      padding: "14px 16px",
                      fontFamily: subFamily,
                      fontSize: "13px",
                      color: muted,
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {u.id}
                  </td>
                  <td style={{ padding: "14px 16px", verticalAlign: "middle" }}>
                    <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center", gap: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: headingFamily,
                          fontWeight: 700,
                          fontSize: "13px",
                          color: navy,
                          textAlign: "center",
                        }}
                      >
                        {u.name}
                      </Typography>
                      {u.verified && (
                        <Typography sx={{ color: teal, fontSize: "14px" }}>
                          ✔️
                        </Typography>
                      )}
                      {u.role === "admin" && (
                        <Box
                          sx={{
                            px: 0.8,
                            py: 0.2,
                            borderRadius: "4px",
                            background: "rgba(7,32,71,0.07)",
                            fontSize: "10px",
                            fontWeight: 700,
                            fontFamily: subFamily,
                            color: navy,
                          }}
                        >
                          ADMIN
                        </Box>
                      )}
                    </Box>
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      fontFamily: subFamily,
                      fontSize: "13px",
                      color: muted,
                      textAlign: "center",
                      verticalAlign: "middle"
                    }}
                  >
                    {u.email}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      fontFamily: subFamily,
                      fontSize: "13px",
                      color: muted,
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {u.joined}
                  </td>

                  <td style={{ padding: "14px 16px",  }}>
                    <Box sx={{ display: "flex", gap: 0.8, justifyContent: "center" }}>
                      {/* Edit Button */}
                      <Box
                        onClick={() => openEdit(u)}
                        sx={{
                          px: 1.5,
                          py: 0.6,
                          borderRadius: "7px",
                          fontSize: "11px",
                          fontWeight: 600,
                          fontFamily: subFamily,
                          cursor: "pointer",
                          background: "rgba(0,151,167,0.08)",
                          color: teal,
                          "&:hover": { background: "rgba(0,151,167,0.18)" },
                        }}
                      >
                        Edit
                      </Box>
                      {/* Block/Unblock */}
                      <Box
                        onClick={() => toggleBlock(u.id)}
                        sx={{
                          px: 1.5,
                          py: 0.6,
                          borderRadius: "7px",
                          fontSize: "11px",
                          fontWeight: 600,
                          fontFamily: subFamily,
                          cursor: "pointer",
                          background:
                            u.status === "Blocked"
                              ? "rgba(46,125,50,0.1)"
                              : "rgba(229,57,53,0.08)",
                          color: u.status === "Blocked" ? "#2e7d32" : "#e53935",
                          "&:hover": {
                            background:
                              u.status === "Blocked"
                                ? "rgba(46,125,50,0.2)"
                                : "rgba(229,57,53,0.18)",
                          },
                        }}
                      >
                        {u.status === "Blocked" ? "Unblock" : "Block"}
                      </Box>
                    </Box>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <Box sx={{ textAlign: "center", py: 6 }}>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "15px",
                  color: navy,
                  mb: 0.5,
                }}
              >
                No users found
              </Typography>
              <Typography
                sx={{ fontFamily: subFamily, fontSize: "13px", color: muted }}
              >
                Try a different search
              </Typography>
            </Box>
          )}
        </Box>

        {/* ── EDIT MODAL ── */}
        <Dialog
          open={!!editUser}
          onClose={() => setEditUser(null)}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: "20px",
              p: 0,
              overflow: "hidden",
            },
          }}
        >
          {editUser && (
            <>
              {/* Modal Header */}
              <Box
                sx={{
                  background: navy,
                  px: 3,
                  py: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #0097A7 0%, transparent 70%)",
                    opacity: 0.2,
                    pointerEvents: "none",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 800,
                      fontSize: "16px",
                      color: "#fff",
                    }}
                  >
                    Edit User
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.45)",
                      mt: 0.3,
                    }}
                  >
                    Update user details
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => setEditUser(null)}
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    p: 0.5,
                    "&:hover": { color: "#fff" },
                  }}
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>

              {/* Modal Body */}
              <DialogContent
                sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}
              >
                {/* Name */}
                <TextField
                  label="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  size="small"
                  fullWidth
                  sx={inputSx}
                />

                {/* Email */}
                <TextField
                  label="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  size="small"
                  fullWidth
                  type="email"
                  sx={inputSx}
                />

                {/* Role Radio */}
                <Box
                  sx={{
                    background: "#F4F8FC",
                    borderRadius: "10px",
                    px: 2,
                    py: 1.5,
                    border: "1px solid rgba(7,32,71,0.08)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "12px",
                      color: navy,
                      mb: 1,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Role
                  </Typography>
                  <RadioGroup
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    row
                  >
                    <FormControlLabel
                      value="user"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: muted,
                            "&.Mui-checked": { color: teal },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "13px",
                            color: navy,
                          }}
                        >
                          User
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="admin"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: muted,
                            "&.Mui-checked": { color: teal },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontFamily: subFamily,
                            fontSize: "13px",
                            color: navy,
                          }}
                        >
                          Admin
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Box>

                {/* Save Button */}
                <Box
                  onClick={saveEdit}
                  sx={{
                    background: navy,
                    color: "#fff",
                    fontFamily: headingFamily,
                    fontWeight: 700,
                    fontSize: "13px",
                    textAlign: "center",
                    py: 1.5,
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": { background: teal },
                  }}
                >
                  Save Changes
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </Sidebar>
  );
};

export default AdminUsers;
