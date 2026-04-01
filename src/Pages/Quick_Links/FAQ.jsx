// responsive done
import { useState } from "react";
import { Box, Typography, Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import FeedbackForm from "../Auth/FeedbackForm";
const headingColor = "#072047";
const subColor = "#0097A7";
const headingFamily = '"Plus Jakarta Sans", sans-serif';
const subFamily = '"Inter", sans-serif';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,

      //custome breakpoint
      B1060: 1060,
      B950: 950,
      B490: 490,
      B388: 388,
      B331: 331,
    },
  },
});

const faqs = [
  {
    category: "Account & Profile",
    items: [
      {
        q: "How do I create an account?",
        a: "You can sign up using your email on the Signup page. After registration, you can create your profile and add your skills.",
      },
      {
        q: "What information should I add to my profile?",
        a: "You should add your name, skills you can teach, course duration, course value, and your weekly availability.",
      },
      {
        q: "Can I update my profile later?",
        a: "Yes, you can update your profile details anytime from your dashboard.",
      },
    ],
  },
  {
    category: "Skill Swap",
    items: [
      {
        q: "How does skill swapping work?",
        a: "You can send a request to another user. After accepting, both users can discuss and decide to exchange skills.",
      },
      {
        q: "What if both skills have different values?",
        a: "If there is a difference in course value, the user receiving the higher-value skill must pay the difference amount.",
      },
      {
        q: "Is skill swap mandatory?",
        a: "No, you can either swap skills or choose paid learning.",
      },
    ],
  },
  {
    category: "Paid Learning",
    items: [
      {
        q: "What if I don't have a skill to swap?",
        a: "You can still learn by paying the full course value mentioned on the teacher's profile.",
      },
      {
        q: "How is payment calculated?",
        a: "Payment is based on the total course value of the skill, not hourly.",
      },
      {
        q: "Do I need to pay full amount?",
        a: "Yes, for paid learning, the learner must pay the full course value.",
      },
    ],
  },
  {
    category: "Requests & Communication",
    items: [
      {
        q: "How do I send a skill request?",
        a: "You can send a request from the user's profile by clicking the 'Send Request' button.",
      },
      {
        q: "What happens after request acceptance?",
        a: "After acceptance, both users can communicate via chat and finalize the deal.",
      },
      {
        q: "Can I reject a request?",
        a: "Yes, you can accept or reject any incoming request from your dashboard.",
      },
    ],
  },
  {
    category: "Agreement & Rules",
    items: [
      {
        q: "Why do I need to accept an agreement?",
        a: "The agreement ensures both users understand the terms of skill exchange or payment before starting.",
      },
      {
        q: "Is the agreement legally binding?",
        a: "The agreement is a digital confirmation between users to follow the platform rules.",
      },
      {
        q: "Can I cancel after accepting the agreement?",
        a: "Cancellation depends on mutual understanding between both users.",
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <Box
      onClick={onToggle}
      sx={{
        background: isOpen ? "#fff" : "#F4F8FC",
        border: `1px solid ${isOpen ? "rgba(0,151,167,0.3)" : "rgba(7,32,71,0.07)"}`,
        borderRadius: "12px",
        p: { xs: 2, md: 2.5 },
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isOpen ? "0 8px 32px rgba(7,32,71,0.08)" : "none",
        "&:hover": {
          borderColor: "rgba(0,151,167,0.25)",
          background: "#fff",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Typography
          sx={{
            fontFamily: headingFamily,
            fontWeight: 600,
            fontSize: { xs: "13px", md: "14px" },
            color: headingColor,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          {q}
        </Typography>
        <Box
          sx={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen ? subColor : "rgba(0,151,167,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          {isOpen ? (
            <RemoveIcon sx={{ fontSize: 16, color: "#fff" }} />
          ) : (
            <AddIcon sx={{ fontSize: 16, color: subColor }} />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <Typography
          sx={{
            fontFamily: subFamily,
            fontWeight: 400,
            fontSize: { xs: "12.5px", md: "13px" },
            color: "#4A6080",
            lineHeight: 1.9,
            mt: 1.5,
            pr: 4,
          }}
        >
          {a}
        </Typography>
      </Box>
    </Box>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#F4F8FC", minHeight: "100vh" }}>
        {/* ── HERO HEADER ── */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #072047 0%, #0a2d4a 60%, #0097A7 100%)",
            py: { xs: 7, md: 9 },
            px: { xs: 2.5, B490: 5 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
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

          {/* Badge */}
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
            ✦ Got Questions?
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontFamily: headingFamily,
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "41.6px", md: "48px" },
              color: "#ffffff",
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            Frequently Asked{" "}
            <Box component="span" sx={{ color: "#2dcfdf" }}>
              Questions
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: subFamily,
              fontSize: { xs: "14.8px", md: "16px" },
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
            }}
          >
            Everything you need to know about SkillBridge.
          </Typography>

          {/* Search */}
        </Box>

        {/* ── FAQ CONTENT ── */}
        <Container maxWidth="md">
          <Box sx={{ py: { xs: 5, md: 8 }, px: { xs: 0, B490: 3 } }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {faqs.map((section) => {
                return (
                  <Box key={section.category}>
                    {/* Section heading */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: headingFamily,
                          fontWeight: 700,
                          fontSize: "11px",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: subColor,
                        }}
                      >
                        {section.category}
                      </Typography>
                      <Box
                        sx={{
                          flex: 1,
                          height: "1px",
                          background: "rgba(0,151,167,0.2)",
                        }}
                      />
                    </Box>

                    {/* FAQ Items */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                      }}
                    >
                      {section.items.map((item, i) => {
                        const id = `${section.category}-${i}`;
                        return (
                          <FAQItem
                            key={id}
                            q={item.q}
                            a={item.a}
                            isOpen={openId === id}
                            onToggle={() => toggle(id)}
                          />
                        );
                      })}
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* ── Bottom CTA ── */}
            <Box
              sx={{
                mt: 8,
                textAlign: "center",
                background: "#fff",
                border: "1px solid rgba(7,32,71,0.07)",
                borderRadius: "16px",
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: headingFamily,
                  fontWeight: 800,
                  fontSize: { xs: "20.8px", md: "24px" },
                  color: headingColor,
                  mb: 1,
                }}
              >
                Still have questions?
              </Typography>
              <Typography
                sx={{
                  fontFamily: subFamily,
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#4A6080",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Our team is happy to help. Reach out to us anytime.
              </Typography>
              <Box
                component={Link}
                to="/ContactUs"
                sx={{
                  display: "inline-block",
                  background: headingColor,
                  color: "#fff",
                  fontFamily: subFamily,
                  fontWeight: 600,
                  fontSize: "13px",
                  px: 4,
                  py: 1.4,
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                  "&:hover": {
                    background: subColor,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Contact Us
              </Box>
            </Box>
          </Box>
          <FeedbackForm />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
