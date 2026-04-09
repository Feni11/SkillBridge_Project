import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PersonIcon from "@mui/icons-material/Person";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';
const navy = "#072047";
const teal = "#0097A7";
const tealLight = "#2dcfdf";
const muted = "#4A6080";
const bg = "#F4F8FC";
const border = "rgba(7,32,71,0.08)";

const initialMessages = [
  {
    id: 1,
    from: "peer",
    text: "Hi! I saw your React profile. I'd love to swap — I teach Python & Data Analysis.",
    time: "10:24 AM",
  },
  {
    id: 2,
    from: "me",
    text: "That sounds great! I've been wanting to learn Python for a while now.",
    time: "10:26 AM",
  },
  {
    id: 3,
    from: "peer",
    text: "My course value is ₹18,000 and yours is ₹20,000. So you'd receive ₹2,000 from me to balance the swap. Does that work?",
    time: "10:28 AM",
  },
  {
    id: 4,
    from: "me",
    text: "Works for me! When can we start? I'm free evenings 6–8 PM.",
    time: "10:30 AM",
  },
  {
    id: 5,
    from: "peer",
    text: "Perfect, evenings work great! Let's finalize the deal then 🤝",
    time: "10:31 AM",
  },
];

const peer = {
  name: "Karan Patel",
  skill: "Python & Data",
  letter: "K",
  online: true,
};
const mySkill = { name: "React Dev", value: 20000 };
const peerSkill = { name: "Python & Data", value: 18000 };
const diff = mySkill.value - peerSkill.value;

// ── Agreement Content ──
const swapAgreementClauses = [
  {
    title: "1. Skill Exchange",
    body: "Both parties agree to teach or share the skills listed in their profiles. The exchange of skills will be conducted through mutual communication and cooperation.",
  },
  {
    title: "2. Skill Information",
    body: "Each user must provide accurate information about their skills, including Skill Name, Estimated Learning Duration, Course Value, and Weekly Availability. This information is visible on the user's profile so that other users can make informed decisions.",
  },
  {
    title: "3. Skill Duration",
    body: "Each skill available on the platform has an estimated learning duration measured in hours. Both parties acknowledge that the duration represents an approximate time required to learn the skill.",
  },
  {
    title: "4. Skill Value Difference",
    body: `Each skill listed includes a course value. Skill A: ${mySkill.name} — ₹${mySkill.value.toLocaleString("en-IN")}. Skill B: ${peerSkill.name} — ₹${peerSkill.value.toLocaleString("en-IN")}. Value Difference: ₹${Math.abs(diff).toLocaleString("en-IN")}.`,
  },
  {
    title: "5. Difference Payment",
    body: "If the value of one skill is higher than the other, the user receiving the higher-value skill agrees to pay the difference amount to the other user.",
  },
  {
    title: "6. Communication",
    body: "Once a skill swap request is accepted, both users will be able to communicate through the platform's chat system to schedule and manage their learning sessions.",
  },
  {
    title: "7. Mutual Respect and Responsibility",
    body: "Both parties agree to maintain respectful communication and fulfill their commitments honestly while exchanging skills.",
  },
  {
    title: "8. Platform Role",
    body: "The Skill Swap Platform acts only as a facilitator to connect users. The platform is not responsible for the quality of teaching, learning speed, or personal disputes between users.",
  },
  {
    title: "9. Agreement Acceptance",
    body: 'This agreement becomes valid when the Second Party accepts the skill swap request on the platform. By clicking "I Agree", both users confirm that they have read, understood, and agreed to all the terms mentioned in this agreement.',
  },
];

const paidAgreementClauses = [
  {
    title: "1. Purpose",
    body: "The purpose of this agreement is to allow the First Party (Teacher) to provide skill training to the Second Party (Learner) through the Skill Swap Platform.",
  },
  {
    title: "2. Skill Information",
    body: `The Teacher agrees to teach the skill mentioned in their profile. Skill: ${peerSkill.name}. Estimated Duration: 30 Hours.`,
  },
  {
    title: "3. Payment Terms",
    body: "The Learner agrees to pay the Teacher according to the price mentioned on the Teacher's profile or as mutually agreed during the discussion. Payment will be based on the number of learning hours or sessions completed.",
  },
  {
    title: "4. Learning Duration",
    body: "The estimated duration mentioned on the profile represents the approximate time required to learn the skill. The actual learning speed may vary depending on the learner's understanding and practice.",
  },
  {
    title: "5. Communication",
    body: "After accepting the agreement, both users will be able to communicate through the platform chat system to schedule and conduct learning sessions.",
  },
  {
    title: "6. Responsibility",
    body: "The Teacher agrees to provide guidance and knowledge related to the skill. However, the Teacher is not responsible if the Learner takes more time to fully understand the skill. The Learner agrees to participate actively and respectfully during the learning sessions.",
  },
  {
    title: "7. Platform Role",
    body: "The Skill Swap Platform acts only as a facilitator to connect users. The platform is not responsible for teaching quality, learning outcomes, or personal disputes between users.",
  },
  {
    title: "8. Agreement Acceptance",
    body: 'This agreement becomes valid when the Learner accepts the terms on the platform. By clicking "I Agree", both parties confirm that they have read, understood, and agreed to all the terms mentioned above.',
  },
];

export default function Chatbox() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  // Modal states
  const [dealModal, setDealModal] = useState(false);
  const [agreementModal, setAgreementModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  const [selectedDeal, setSelectedDeal] = useState(null); // "swap" | "paid"
  const [agreed, setAgreed] = useState(false);
  const [reportDone, setReportDone] = useState(false);
  const [toast, setToast] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text, time: now },
    ]);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Step 1: Deal type select → open Agreement
  const proceedToDeal = () => {
    if (!selectedDeal) {
      showToast("Please select a deal type first.");
      return;
    }
    setDealModal(false);
    setAgreed(false);
    setAgreementModal(true);
  };

  // Step 2: I Agree → close agreement → send system message
  const handleAgree = () => {
    setAgreed(true);
    setTimeout(() => {
      setAgreementModal(false);
      const now = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const text =
        selectedDeal === "swap"
          ? `✅ Both parties have signed the Skill Swap Agreement. You can now start the skill exchange! (Diff: ₹${Math.abs(diff).toLocaleString("en-IN")} payable)`
          : `✅ Both parties have signed the Paid Learning Agreement. Sessions can now begin at ₹400/hr.`;
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), from: "system", text, time: now },
      ]);
      setSelectedDeal(null);
      setAgreed(false);
    }, 1200);
  };

  const clauses =
    selectedDeal === "swap" ? swapAgreementClauses : paidAgreementClauses;
  const agreementTitle =
    selectedDeal === "swap"
      ? "Skill Swap Agreement"
      : "Paid Skill Teaching Agreement";
  const agreementParties =
    selectedDeal === "swap"
      ? {
          a: "First Party (Sender): You — React Dev",
          b: `Second Party (Receiver): ${peer.name} — ${peer.skill}`,
        }
      : {
          a: `First Party (Teacher): ${peer.name} — ${peer.skill}`,
          b: "Second Party (Learner): You",
        };

  // ── Deal Option Card ──
  const DealOption = ({ type, icon, title, desc }) => (
    <Box
      onClick={() => setSelectedDeal(type)}
      sx={{
        flex: 1,
        minWidth: 130,
        border: `1.5px solid ${selectedDeal === type ? teal : border}`,
        borderRadius: "14px",
        p: 2,
        cursor: "pointer",
        background: selectedDeal === type ? "rgba(0,151,167,0.06)" : "#fff",
        transition: "all 0.2s",
        textAlign: "center",
        "&:hover": { borderColor: teal, background: "rgba(0,151,167,0.03)" },
      }}
    >
      <Typography sx={{ fontSize: "26px", mb: 0.8 }}>{icon}</Typography>
      <Typography
        sx={{
          fontFamily: headingFamily,
          fontWeight: 700,
          fontSize: "13px",
          color: navy,
          mb: 0.4,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: subFamily,
          fontSize: "11px",
          color: muted,
          lineHeight: 1.5,
        }}
      >
        {desc}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // p: { xs: 0, sm: 2 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 780,
          height: { xs: "100vh", sm: "92vh" },
          background: "#fff",
          borderRadius: { xs: 0, sm: "24px" },
          border: { xs: "none", sm: `1px solid ${border}` },
          boxShadow: "0 8px 40px rgba(7,32,71,0.1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* ── HEADER ── */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #072047 0%, #0a2d4a 60%, #0097A7 100%)",
            px: 2.5,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
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
              opacity: 0.25,
              pointerEvents: "none",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                {peer.letter}
              </Box>
              {peer.online && (
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#4caf50",
                    border: "2px solid #fff",
                    position: "absolute",
                    bottom: 1,
                    right: 1,
                  }}
                />
              )}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#fff",
                }}
              >
                {peer.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {peer.skill} · {peer.online ? "Online" : "Offline"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              {
                icon: <PersonIcon sx={{ fontSize: 18, color: "#fff" }} />,
                fn: () => {},
              },
              {
                icon: <WarningAmberIcon sx={{ fontSize: 18, color: "#fff" }} />,
                fn: () => setReportModal(true),
              },
            ].map((b, i) => (
              <Box
                key={i}
                onClick={b.fn}
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": { background: "rgba(255,255,255,0.2)" },
                }}
              >
                {b.icon}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── SWAP INFO BAR ── */}
        <Box
          sx={{
            background: "rgba(0,151,167,0.05)",
            borderBottom: "1px solid rgba(0,151,167,0.12)",
            px: 2.5,
            py: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                px: 1.2,
                py: 0.5,
                borderRadius: "20px",
                background: "rgba(7,32,71,0.08)",
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: subFamily,
                color: navy,
              }}
            >
              🎯 {mySkill.name} — ₹{mySkill.value.toLocaleString("en-IN")}
            </Box>
            <Typography sx={{ fontSize: "14px", color: muted }}>⇄</Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.5,
                borderRadius: "20px",
                background: "rgba(0,151,167,0.1)",
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: subFamily,
                color: teal,
              }}
            >
              📊 {peerSkill.name} — ₹{peerSkill.value.toLocaleString("en-IN")}
            </Box>
          </Box>
          <Typography
            sx={{ fontFamily: subFamily, fontSize: "11px", color: muted }}
          >
            Diff:{" "}
            <Box component="span" sx={{ fontWeight: 700, color: navy }}>
              ₹{Math.abs(diff).toLocaleString("en-IN")}
            </Box>
          </Typography>
        </Box>

        {/* ── MESSAGES ── */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: { xs: 2, sm: 2.5 },
            py: 2.5,
            display: "flex",
            flexDirection: "column",
            gap: 1.8,
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(7,32,71,0.1)",
              borderRadius: "4px",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ flex: 1, height: "1px", background: border }} />
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "11px",
                color: muted,
                whiteSpace: "nowrap",
              }}
            >
              Today, Apr 6
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: border }} />
          </Box>

          {messages.map((m) => {
            if (m.from === "system")
              return (
                <Box
                  key={m.id}
                  sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      height: "1px",
                      background: "rgba(0,151,167,0.2)",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "11.5px",
                      color: teal,
                      fontWeight: 600,
                      textAlign: "center",
                      maxWidth: "80%",
                      lineHeight: 1.6,
                    }}
                  >
                    {m.text}
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      height: "1px",
                      background: "rgba(0,151,167,0.2)",
                    }}
                  />
                </Box>
              );

            const isMe = m.from === "me";
            return (
              <Box
                key={m.id}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "flex-end",
                  flexDirection: isMe ? "row-reverse" : "row",
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: isMe
                      ? `linear-gradient(135deg, ${navy}, #0a2d4a)`
                      : `linear-gradient(135deg, ${teal}, ${tealLight})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: headingFamily,
                    fontWeight: 800,
                    fontSize: "11px",
                    color: "#fff",
                  }}
                >
                  {isMe ? "R" : peer.letter}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "68%",
                    alignItems: isMe ? "flex-end" : "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1.2,
                      borderRadius: "16px",
                      borderBottomRightRadius: isMe ? "4px" : "16px",
                      borderBottomLeftRadius: isMe ? "16px" : "4px",
                      background: isMe
                        ? `linear-gradient(135deg, ${navy}, #0a2d4a)`
                        : bg,
                      border: isMe ? "none" : `1px solid ${border}`,
                      color: isMe ? "#fff" : navy,
                      fontFamily: subFamily,
                      fontSize: "13.5px",
                      lineHeight: 1.6,
                      wordBreak: "break-word",
                    }}
                  >
                    {m.text}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: subFamily,
                      fontSize: "10px",
                      color: muted,
                      mt: 0.4,
                      px: 0.3,
                    }}
                  >
                    {m.time}
                  </Typography>
                </Box>
              </Box>
            );
          })}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 0.5 }}>
            <Box
              onClick={() => setReportModal(true)}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                px: 1.8,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: subFamily,
                color: "#e53935",
                background: "rgba(229,57,53,0.06)",
                border: "1px solid rgba(229,57,53,0.15)",
                cursor: "pointer",
                "&:hover": { background: "rgba(229,57,53,0.12)" },
              }}
            >
              ⚠️ Report this conversation
            </Box>
          </Box>
          <div ref={messagesEndRef} />
        </Box>

        {/* ── INPUT AREA ── */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            borderTop: `1px solid ${border}`,
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            background: "#fff",
          }}
        >
          <Box
            onClick={() => setDealModal(true)}
            sx={{
              px: 1.5,
              py: 1,
              borderRadius: "10px",
              border: "1.5px solid rgba(0,151,167,0.3)",
              background: "rgba(0,151,167,0.06)",
              color: teal,
              fontSize: "11.5px",
              fontWeight: 700,
              fontFamily: subFamily,
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.2s",
              "&:hover": { background: teal, color: "#fff", borderColor: teal },
            }}
          >
            🤝 Finalize Deal
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              background: bg,
              borderRadius: "12px",
              border: `1px solid ${border}`,
              px: 1.5,
              "&:focus-within": { borderColor: teal },
              transition: "border 0.2s",
            }}
          >
            <IconButton size="small" sx={{ color: muted, p: 0.5 }}>
              <AttachFileIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <TextField
              multiline
              maxRows={4}
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              variant="standard"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  fontFamily: subFamily,
                  fontSize: "13.5px",
                  color: navy,
                  py: 1,
                },
                "& .MuiInput-underline:before": { display: "none" },
                "& .MuiInput-underline:after": { display: "none" },
              }}
            />
          </Box>
          <Box
            onClick={sendMessage}
            sx={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${navy}, ${teal})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              "&:hover": { opacity: 0.85 },
            }}
          >
            <SendIcon sx={{ fontSize: 17, color: "#fff" }} />
          </Box>
        </Box>
      </Box>

      {/* ── STEP 1: DEAL TYPE MODAL ── */}
      <Dialog
        open={dealModal}
        onClose={() => {
          setDealModal(false);
          setSelectedDeal(null);
        }}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "20px", overflow: "hidden", m: 2 } }}
      >
        <Box
          sx={{
            background: `linear-gradient(135deg, ${navy}, #0a2d4a)`,
            px: 3,
            py: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
                fontSize: "17px",
                color: "#fff",
              }}
            >
              🤝 Finalize Skill Deal
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "11px",
                color: "rgba(255,255,255,0.45)",
                mt: 0.3,
              }}
            >
              Choose how to proceed
            </Typography>
          </Box>
          <IconButton
            onClick={() => {
              setDealModal(false);
              setSelectedDeal(null);
            }}
            sx={{
              color: "rgba(255,255,255,0.5)",
              "&:hover": { color: "#fff" },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 3 }}>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "12px",
              color: muted,
              mb: 2.5,
              lineHeight: 1.6,
            }}
          >
            Choose how you want to proceed with {peer.name}. An agreement will
            be generated for both parties to sign.
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 2.5, flexWrap: "wrap" }}>
            <DealOption
              type="swap"
              icon="🔄"
              title="Skill Swap"
              desc={`Exchange skills. Pay only the ₹${Math.abs(diff).toLocaleString("en-IN")} difference.`}
            />
            <DealOption
              type="paid"
              icon="💰"
              title="Paid Learning"
              desc="Pay ₹400/hr to learn from Karan directly."
            />
          </Box>
          <Box
            onClick={proceedToDeal}
            sx={{
              background: `linear-gradient(135deg, ${navy}, ${teal})`,
              color: "#fff",
              fontFamily: subFamily,
              fontWeight: 700,
              fontSize: "14px",
              textAlign: "center",
              py: 1.5,
              borderRadius: "12px",
              cursor: "pointer",
              mb: 1,
              "&:hover": { opacity: 0.88 },
            }}
          >
            View Agreement →
          </Box>
          <Box
            onClick={() => {
              setDealModal(false);
              setSelectedDeal(null);
            }}
            sx={{
              border: `1px solid ${border}`,
              color: muted,
              fontFamily: subFamily,
              fontSize: "13px",
              textAlign: "center",
              py: 1.2,
              borderRadius: "12px",
              cursor: "pointer",
              "&:hover": { background: bg },
            }}
          >
            Cancel
          </Box>
        </DialogContent>
      </Dialog>

      {/* ── STEP 2: AGREEMENT MODAL ── */}
      <Dialog
        open={agreementModal}
        onClose={() => setAgreementModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "20px", overflow: "hidden", m: 2 } }}
      >
        {/* Header */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${navy}, #0a2d4a)`,
            px: 3,
            py: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
              {selectedDeal === "swap"
                ? "📋 Skill Swap Agreement"
                : "📋 Paid Teaching Agreement"}
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "11px",
                color: "rgba(255,255,255,0.45)",
                mt: 0.3,
              }}
            >
              Read carefully before signing
            </Typography>
          </Box>
          <IconButton
            onClick={() => setAgreementModal(false)}
            sx={{
              color: "rgba(255,255,255,0.5)",
              "&:hover": { color: "#fff" },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <DialogContent sx={{ p: 0 }}>
          {/* Scrollable agreement body */}
          <Box
            sx={{
              px: 3,
              pt: 3,
              pb: 1,
              maxHeight: "55vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": { width: "4px" },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(7,32,71,0.12)",
                borderRadius: "4px",
              },
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontFamily: headingFamily,
                fontWeight: 800,
                fontSize: "17px",
                color: navy,
                textAlign: "center",
                mb: 0.5,
              }}
            >
              {agreementTitle.toUpperCase()}
            </Typography>
            <Typography
              sx={{
                fontFamily: subFamily,
                fontSize: "12px",
                color: muted,
                textAlign: "center",
                mb: 2.5,
              }}
            >
              This Agreement is made between two users of the Skill Swap
              Platform.
            </Typography>

            {/* Parties */}
            <Box
              sx={{
                background: "rgba(0,151,167,0.05)",
                border: "1px solid rgba(0,151,167,0.15)",
                borderRadius: "12px",
                p: 2,
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: "12.5px",
                  color: navy,
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                {agreementParties.a}
              </Typography>
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontSize: "12.5px",
                  color: navy,
                  fontWeight: 600,
                }}
              >
                {agreementParties.b}
              </Typography>
            </Box>

            {/* Clauses */}
            {clauses.map((c, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      width: 3,
                      height: 14,
                      borderRadius: "2px",
                      background: teal,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: headingFamily,
                      fontWeight: 700,
                      fontSize: "12.5px",
                      color: navy,
                    }}
                  >
                    {c.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "12px",
                    color: muted,
                    lineHeight: 1.8,
                    pl: 1.5,
                  }}
                >
                  {c.body}
                </Typography>
              </Box>
            ))}

            {/* Bottom spacer */}
            <Box sx={{ height: 8 }} />
          </Box>

          {/* Sticky bottom — I Agree */}
          <Box
            sx={{
              px: 3,
              py: 2.5,
              borderTop: `1px solid ${border}`,
              background: "#fff",
            }}
          >
            {agreed ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  py: 1.5,
                  borderRadius: "12px",
                  background: "rgba(46,125,50,0.08)",
                  border: "1px solid rgba(46,125,50,0.2)",
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 20, color: "#2e7d32" }} />
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#2e7d32",
                  }}
                >
                  Agreement Signed! Starting session...
                </Typography>
              </Box>
            ) : (
              <>
                <Typography
                  sx={{
                    fontFamily: subFamily,
                    fontSize: "11px",
                    color: muted,
                    textAlign: "center",
                    mb: 1.5,
                    lineHeight: 1.6,
                  }}
                >
                  By clicking "I Agree", you confirm that you have read,
                  understood, and agreed to all the terms mentioned in this
                  agreement.
                </Typography>
                <Box
                  onClick={handleAgree}
                  sx={{
                    background: `linear-gradient(135deg, ${navy}, ${teal})`,
                    color: "#fff",
                    fontFamily: subFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    textAlign: "center",
                    py: 1.5,
                    borderRadius: "12px",
                    cursor: "pointer",
                    mb: 1,
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 0.88 },
                  }}
                >
                  ✅ I Agree & Sign
                </Box>
                <Box
                  onClick={() => setAgreementModal(false)}
                  sx={{
                    border: `1px solid ${border}`,
                    color: muted,
                    fontFamily: subFamily,
                    fontSize: "13px",
                    textAlign: "center",
                    py: 1.2,
                    borderRadius: "12px",
                    cursor: "pointer",
                    "&:hover": { background: bg },
                  }}
                >
                  Go Back
                </Box>
              </>
            )}
          </Box>
        </DialogContent>
      </Dialog>

      {/* ── REPORT MODAL ── */}
      <Dialog
        open={reportModal}
        onClose={() => setReportModal(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "20px", m: 2 } }}
      >
        <DialogContent sx={{ p: 3.5, textAlign: "center" }}>
          <Typography sx={{ fontSize: "36px", mb: 1.5 }}>⚠️</Typography>
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: "17px",
              color: navy,
              mb: 1,
            }}
          >
            Report this Conversation?
          </Typography>
          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: "12px",
              color: muted,
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            This will send a report to the SkillBridge admin team. They will
            review the chat and take action if needed.
          </Typography>
          {reportDone ? (
            <Box
              sx={{
                background: "rgba(46,125,50,0.08)",
                border: "1px solid rgba(46,125,50,0.2)",
                borderRadius: "12px",
                py: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#2e7d32",
                }}
              >
                ✅ Report submitted successfully!
              </Typography>
            </Box>
          ) : (
            <>
              <Box
                onClick={() => {
                  setReportDone(true);
                  setTimeout(() => {
                    setReportModal(false);
                    setReportDone(false);
                  }, 2000);
                }}
                sx={{
                  background: "#e53935",
                  color: "#fff",
                  fontFamily: subFamily,
                  fontWeight: 700,
                  fontSize: "14px",
                  textAlign: "center",
                  py: 1.5,
                  borderRadius: "12px",
                  cursor: "pointer",
                  mb: 1,
                  "&:hover": { background: "#c62828" },
                }}
              >
                Yes, Report
              </Box>
              <Box
                onClick={() => setReportModal(false)}
                sx={{
                  border: `1px solid ${border}`,
                  color: muted,
                  fontFamily: subFamily,
                  fontSize: "13px",
                  textAlign: "center",
                  py: 1.2,
                  borderRadius: "12px",
                  cursor: "pointer",
                  "&:hover": { background: bg },
                }}
              >
                Cancel
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── TOAST ── */}
      {toast && (
        <Box
          sx={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            background: navy,
            color: "#fff",
            px: 2.5,
            py: 1.2,
            borderRadius: "10px",
            fontFamily: subFamily,
            fontSize: "13px",
            boxShadow: "0 4px 16px rgba(7,32,71,0.2)",
            zIndex: 9999,
            whiteSpace: "nowrap",
          }}
        >
          {toast}
        </Box>
      )}
    </Box>
  );
}
