// Course Mock Assessments & Final Tests Data
export const getPerformanceRating = (scorePercentage) => {
  if (scorePercentage >= 90) return { level: "Excellent", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", message: "Mastery Level! You are fully prepared for industrial silicon design and semiconductor technical interviews." };
  if (scorePercentage >= 80) return { level: "Strong", color: "text-blue-400 bg-blue-500/10 border-blue-500/30", message: "Strong performance! Review a few advanced topics before your interviews." };
  if (scorePercentage >= 70) return { level: "Good", color: "text-amber-400 bg-amber-500/10 border-amber-500/30", message: "Good understanding of fundamentals. Practice more MCQs and coding challenges." };
  if (scorePercentage >= 60) return { level: "Needs Revision", color: "text-orange-400 bg-orange-500/10 border-orange-500/30", message: "Needs Revision. Re-examine blocking vs non-blocking, latches, and timing equations." };
  return { level: "Relearn Fundamentals", color: "text-rose-400 bg-rose-500/10 border-rose-500/30", message: "We recommend reviewing the course modules thoroughly before attempting the assessment again." };
};

export const assessmentsData = {
  "verilog-fundamentals": {
    title: "Verilog HDL Masterclass Final Assessment",
    timeLimit: "30 Mins",
    totalQuestions: 20,
    passingScore: 70
  },
  "vlsi-fundamentals": {
    title: "VLSI & STA Signoff Assessment",
    timeLimit: "25 Mins",
    totalQuestions: 15,
    passingScore: 70
  },
  "digital-electronics": {
    title: "Digital Electronics Certification Exam",
    timeLimit: "20 Mins",
    totalQuestions: 15,
    passingScore: 70
  }
};
