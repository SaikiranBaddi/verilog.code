// VLSI Fundamentals Course Data
export const vlsiCourse = {
  id: "vlsi-fundamentals",
  title: "CMOS & VLSI Design Fundamentals",
  category: "VLSI Foundation",
  level: "Beginner to Intermediate",
  duration: "18 Hours",
  rating: 4.92,
  description: "Comprehensive introduction to VLSI technology, CMOS inverter static/dynamic characteristics, MOSFET device physics, Lambda layout design rules, Static Timing Analysis (STA), power dissipation, and the modern ASIC design flow.",
  learningOutcomes: [
    "Understand N-Well CMOS fabrication process, photolithography, and layout stick diagrams",
    "Analyze CMOS inverter VTC (Voltage Transfer Curve), noise margins (NMH, NML), and threshold voltage",
    "Calculate static power dissipation (leakage) vs dynamic switching power ($P_{dyn} = \alpha C V^2 f$)",
    "Master Static Timing Analysis (STA) setup time ($t_{setup}$) and hold time ($t_{hold}$) equations",
    "Design standard cell layouts enforcing Lambda ($\lambda$) design rules and DRC constraints",
    "Understand clock skew, clock jitter, and setup/hold violation fixing techniques"
  ],
  modules: [
    {
      id: "vlsi-mod-1",
      title: "Module 1: Introduction to Integrated Circuit (IC) Technology",
      duration: "45 min",
      content: {
        summary: "Evolution of IC technology, Moore's Law, SSI to GSI, silicon wafer manufacturing, and microchip fabrication steps.",
        sections: [
          { type: "heading", text: "1. Moore's Law & Scaling" },
          { type: "paragraph", text: "Gordon Moore predicted in 1965 that the number of transistors on a microchip would double roughly every 2 years. Dennard scaling enabled simultaneous reduction of operating voltage and gate lengths while preserving power density." }
        ],
        revisionPoints: ["Moore's Law doubling period is ~2 years.", "Dennard scaling breakdown led to multi-core CPUs."]
      }
    },
    {
      id: "vlsi-mod-2",
      title: "Module 2: CMOS Inverter Static Characteristics",
      duration: "60 min",
      content: {
        summary: "Static CMOS inverter architecture, complementary PMOS/NMOS network, VTC regions, logic thresholds, and noise margins.",
        sections: [
          { type: "heading", text: "1. Complementary CMOS Inverter" },
          { type: "paragraph", text: "A static CMOS inverter consists of a PMOS pull-up network (PUN) connected to VDD and an NMOS pull-down network (PDN) connected to VSS. Since one network is off when the other is on, zero static DC current flows in steady state." }
        ],
        revisionPoints: ["Static CMOS inverter has infinite DC input impedance.", "Noise margins NMH and NML define noise tolerance."]
      }
    },
    {
      id: "vlsi-mod-3",
      title: "Module 3: Static Timing Analysis (STA) Setup & Hold Time",
      duration: "75 min",
      content: {
        summary: "Setup time, hold time, clock-to-q delay, combinational logic delay, clock skew, jitter, and fixing timing violations.",
        sections: [
          { type: "heading", text: "1. Setup & Hold Time Equations" },
          { type: "important", title: "Fundamental STA Equations", text: "• **Setup Constraint**: $T_{clk} \\ge T_{cq} + T_{comb} + T_{setup} - T_{skew}$\n• **Hold Constraint**: $T_{cq} + T_{comb} \\ge T_{hold} + T_{skew}$\n\nNotice that **Hold Constraint is completely independent of Clock Frequency ($T_{clk}$)**!" }
        ],
        revisionPoints: ["Fix setup violations by retiming or reducing logic delay.", "Fix hold violations by inserting buffer delay cells."]
      }
    }
  ]
};
