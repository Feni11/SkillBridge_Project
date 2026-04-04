import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Sidebar from "./Sidebar";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const muted = "#4A6080";

const initialComplaints = [
  {
    id: 1,
    users: "Pooja Shah vs Karan Patel",
    date: "27 Mar 2026",
    status: "Open",
    msg: "Payment of ₹12,000 not received after swap completion. Karan agreed to pay but hasn't responded since.",
  },
  {
    id: 2,
    users: "Rohan Desai vs Sneha Joshi",
    date: "25 Mar 2026",
    status: "Under Review",
    msg: "Skill quality was not as described. Sneha promised advanced video editing but only covered basics.",
  },
  {
    id: 3,
    users: "Yash Trivedi vs Amit Sharma",
    date: "20 Mar 2026",
    status: "Resolved",
    msg: "Scheduling conflict — both users agreed on a new time. Issue resolved.",
  },
];

const statusStyle = {
  Open: { bg: "rgba(229,57,53,0.1)", color: "#e53935" },
  "Under Review": { bg: "rgba(245,124,0,0.1)", color: "#f57c00" },
  Resolved: { bg: "rgba(46,125,50,0.1)", color: "#2e7d32" },
};

const AdminComplaints = () => {
  const [complaints, setComplaints] = useState(initialComplaints);

  const resolve = (id) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Resolved" } : c)),
    );
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
              textAlign: "left",
            }}
          >
            Complaint Management
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
            Review and resolve user disputes
          </Typography>
        </Box>

        {/* MUI Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: "16px",
            border: "1px solid rgba(7,32,71,0.08)",
            boxShadow: "0 4px 16px rgba(7,32,71,0.05)",
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ background: "#F4F8FC" }}>
                {["#", "Users", "Date", "Message", "Status", "Actions"].map(
                  (h) => (
                    <TableCell
                      key={h}
                      sx={{
                        fontFamily: headingFamily,
                        fontWeight: 700,
                        fontSize: "12px",
                        color: navy,
                        borderBottom: "1px solid rgba(7,32,71,0.08)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {complaints.map((c) => (
                <TableRow
                  key={c.id}
                  sx={{ "&:hover": { background: "#f8fbfd" } }}
                >
                  <TableCell
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "13px",
                      color: muted,
                      borderBottom: "1px solid rgba(7,32,71,0.06)",
                      textAlign: "left",
                    }}
                  >
                    {c.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "13px",
                      color: navy,
                      borderBottom: "1px solid rgba(7,32,71,0.06)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    {c.users}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "12px",
                      color: muted,
                      borderBottom: "1px solid rgba(7,32,71,0.06)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    {c.date}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "12px",
                      color: muted,
                      borderBottom: "1px solid rgba(7,32,71,0.06)",
                      maxWidth: 280,
                      textAlign: "left",
                    }}
                  >
                    {c.msg}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid rgba(7,32,71,0.06)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 600,
                        fontFamily: subFamily,
                        background: statusStyle[c.status].bg,
                        color: statusStyle[c.status].color,
                      }}
                    >
                      {c.status}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: "1px solid rgba(7,32,71,0.06)" }}
                  >
                    <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
                      <Box
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
                          whiteSpace: "nowrap",
                          "&:hover": { background: "rgba(0,151,167,0.18)" },
                        }}
                      >
                        📋 View
                      </Box>
                      {c.status !== "Resolved" && (
                        <>
                          <Box
                            sx={{
                              px: 1.5,
                              py: 0.6,
                              borderRadius: "7px",
                              fontSize: "11px",
                              fontWeight: 600,
                              fontFamily: subFamily,
                              cursor: "pointer",
                              background: "rgba(245,124,0,0.1)",
                              color: "#f57c00",
                              whiteSpace: "nowrap",
                              "&:hover": { background: "rgba(245,124,0,0.2)" },
                            }}
                          >
                            ⚠️ Warn
                          </Box>
                          <Box
                            onClick={() => resolve(c.id)}
                            sx={{
                              px: 1.5,
                              py: 0.6,
                              borderRadius: "7px",
                              fontSize: "11px",
                              fontWeight: 600,
                              fontFamily: subFamily,
                              cursor: "pointer",
                              background: "rgba(46,125,50,0.1)",
                              color: "#2e7d32",
                              whiteSpace: "nowrap",
                              "&:hover": { background: "rgba(46,125,50,0.2)" },
                            }}
                          >
                            ✅ Resolve
                          </Box>
                        </>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Sidebar>
  );
};

export default AdminComplaints;
