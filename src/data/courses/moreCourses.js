// Additional Comprehensive Courses across VLSI, Verilog, RTL, SystemVerilog, FPGA, and Semiconductors

export const computerArchitectureCourse = {
  id: "computer-architecture",
  title: "Computer Architecture & RISC-V Datapath",
  category: "VLSI Foundation",
  level: "Intermediate",
  duration: "20 Hours",
  rating: 4.93,
  description: "Learn processor microarchitecture, Instruction Set Architecture (ISA), RISC-V RV32I instruction execution, 5-stage classic RISC pipeline (IF, ID, EX, MEM, WB), pipeline hazards (structural, data, control), forwarding paths, branch prediction, and cache memory hierarchies.",
  learningOutcomes: [
    "Understand RISC vs CISC computer architecture trade-offs",
    "Decode 32-bit RISC-V instructions (R-type, I-type, S-type, B-type, U-type, J-type)",
    "Build single-cycle vs 5-stage pipelined processor datapaths",
    "Resolve data hazards using operand forwarding and load-use stalls",
    "Implement 2-bit saturating counter branch predictors",
    "Analyze L1/L2 cache structures (Direct Mapped, Set Associative) and write-through vs write-back policies"
  ],
  modules: [
    {
      id: "ca-mod-1",
      title: "Module 1: RISC-V ISA Architecture",
      duration: "60 min",
      content: {
        summary: "32 General purpose registers, Program Counter (PC), instruction encodings, and ALU control signals.",
        sections: [{ type: "heading", text: "1. RV32I Instruction Formats" }, { type: "paragraph", text: "RISC-V features a fixed 32-bit instruction length with orthogonal register specifiers rs1, rs2, and rd." }],
        revisionPoints: ["32 registers (x0 is hardwired to 0).", "Standard 5-stage pipeline: IF, ID, EX, MEM, WB."]
      }
    }
  ]
};

export const asicFlowCourse = {
  id: "asic-design-flow",
  title: "ASIC / VLSI Design Flow: RTL to GDSII",
  category: "VLSI Foundation",
  level: "Intermediate",
  duration: "18 Hours",
  rating: 4.91,
  description: "Complete walkthrough of the industrial ASIC design flow: Architecture spec, Verilog RTL coding, Linting & CDC checks, Logic Synthesis (Design Compiler), Floorplanning, Power Grid Design, Placement, Clock Tree Synthesis (CTS), Routing, DRC/LVS, and STA Tapeout Signoff.",
  learningOutcomes: [
    "Navigate each step of the front-end to back-end ASIC design flow",
    "Set up synthesis scripts with SDC constraints (create_clock, set_input_delay, set_output_delay)",
    "Understand placement congestion, clock tree skew balancing, and power network routing"
  ],
  modules: [
    {
      id: "asic-mod-1",
      title: "Module 1: Overview of Silicon Design Stages",
      duration: "50 min",
      content: {
        summary: "Front-end vs back-end engineering, SDC constraints, and EDA toolflows.",
        sections: [{ type: "heading", text: "1. Specification to GDSII" }, { type: "paragraph", text: "ASIC design transforms high-level Verilog code into physical polygon masks (GDSII/OASIS) ready for foundry fabrication." }],
        revisionPoints: ["Front-end covers RTL synthesis and STA.", "Back-end covers P&R, CTS, and physical DRC/LVS."]
      }
    }
  ]
};

export const rtlDesignCourse = {
  id: "verilog-rtl-design",
  title: "Verilog RTL Design & Advanced Architectures",
  category: "Verilog / RTL",
  level: "Intermediate to Advanced",
  duration: "22 Hours",
  rating: 4.96,
  description: "Advanced RTL design techniques: Valid/Ready handshaking protocols, credit-based flow control, pipelining strategies, round-robin arbiters, synchronous/asynchronous FIFOs, and clock domain crossing (CDC) synchronizers.",
  learningOutcomes: [
    "Design robust Valid/Ready handshaking interfaces without loss of data",
    "Implement parameterized Synchronous and Asynchronous Gray-code FIFOs",
    "Construct multi-flop, pulse, and handshake CDC synchronizers"
  ],
  modules: [
    {
      id: "rtl-mod-1",
      title: "Module 1: Valid/Ready Handshake Protocol Design",
      duration: "60 min",
      content: {
        summary: "Backpressure management, skid buffers, and latency-insensitive design.",
        sections: [{ type: "heading", text: "1. Ready/Valid Interface Rules" }, { type: "paragraph", text: "Data transfer occurs on a clock cycle when both VALID and READY are asserted high simultaneously." }],
        revisionPoints: ["Data is transferred when VALID && READY == 1.", "Skid buffers eliminate combinational paths on ready signals."]
      }
    }
  ]
};

export const systemVerilogCourse = {
  id: "systemverilog",
  title: "SystemVerilog for Design & Verification",
  category: "Verilog / RTL",
  level: "Intermediate",
  duration: "20 Hours",
  rating: 4.94,
  description: "Master SystemVerilog features: logic data type, packed/unpacked arrays, structs, enums, interfaces, modports, always_comb/always_ff, Object-Oriented Programming (OOP), SVA assertions, and functional coverage.",
  learningOutcomes: [
    "Utilize SystemVerilog synthesis constructs (`logic`, `always_comb`, `always_ff`, `always_latch`)",
    "Design clean bus interfaces with `interface`, `modport`, and clocking blocks",
    "Write SystemVerilog Assertions (SVA) for protocol checking"
  ],
  modules: [
    {
      id: "sv-mod-1",
      title: "Module 1: SystemVerilog Data Types & Procedural Blocks",
      duration: "55 min",
      content: {
        summary: "logic vs wire/reg, typedef, struct, enum, always_comb, and always_ff.",
        sections: [{ type: "heading", text: "1. SystemVerilog logic Type" }, { type: "paragraph", text: "The `logic` data type replaces `reg` and `wire` in single-driver assignments, avoiding historical confusion." }],
        revisionPoints: ["always_comb automatically enforces latch-free combinational logic.", "always_ff enforces edge-triggered sequential flops."]
      }
    }
  ]
};

export const fpgaCourse = {
  id: "fpga-design",
  title: "FPGA Design & Xilinx Vivado Architecture",
  category: "FPGA",
  level: "Intermediate",
  duration: "18 Hours",
  rating: 4.89,
  description: "Master FPGA hardware architecture: Look-Up Tables (LUT4, LUT6), Configurable Logic Blocks (CLB), Block RAM (BRAM), DSP48E1 slices, Vivado XDC timing constraints, synthesis, implementation, and bitstream generation.",
  learningOutcomes: [
    "Understand internal FPGA slice structures, LUTs, carry chains, and flip-flops",
    "Instantiate hard primitives (BRAM, DSP48, MMCM clock wizards) in Verilog",
    "Write XDC timing constraints (`create_clock`, `set_false_path`)"
  ],
  modules: [
    {
      id: "fpga-mod-1",
      title: "Module 1: FPGA Hardware Architecture",
      duration: "60 min",
      content: {
        summary: "SRAM LUTs, interconnect matrices, CLB slices, and dedicated carry lookahead chains.",
        sections: [{ type: "heading", text: "1. LUT6 Operation" }, { type: "paragraph", text: "A 6-input LUT (LUT6) consists of 64 bits of SRAM configuration cells multiplexed down to 1 output." }],
        revisionPoints: ["LUT6 can implement any 6-variable Boolean function.", "BRAMs provide dual-port synchronous memory blocks."]
      }
    }
  ]
};

export const staCourse = {
  id: "sta-cdc",
  title: "Static Timing Analysis (STA) & Clock Domain Crossing (CDC)",
  category: "VLSI Foundation",
  level: "Advanced",
  duration: "20 Hours",
  rating: 4.97,
  description: "Deep-dive into Static Timing Analysis (STA) signoff and CDC verification: Setup/Hold checks, clock skew, jitter, false paths, multicycle paths, 2-flop synchronizers, Gray-code counters, and CDC structural linting.",
  learningOutcomes: [
    "Perform STA timing checks across Max/Min PVT corners",
    "Constrain multicycle paths and false paths in SDC",
    "Analyze metastability, MTBF formulas, and multi-clock synchronizers"
  ],
  modules: [
    {
      id: "sta-mod-1",
      title: "Module 1: Setup and Hold STA Checks",
      duration: "65 min",
      content: {
        summary: "Data arrival time vs data required time, setup slack, and hold slack.",
        sections: [{ type: "heading", text: "1. Slack Equations" }, { type: "paragraph", text: "Setup Slack = Required Time - Arrival Time. Negative slack indicates a timing violation!" }],
        revisionPoints: ["Positive slack means timing constraints are met.", "Hold timing signoff is mandatory across all operating corners."]
      }
    }
  ]
};

export const riscvCourse = {
  id: "riscv-rtl-design",
  title: "32-bit RISC-V Processor Core RTL Architecture",
  category: "Verilog / RTL",
  level: "Advanced",
  duration: "24 Hours",
  rating: 4.98,
  description: "Build a complete 32-bit RISC-V RV32I processor core in synthesizable Verilog: Instruction Fetch, Decode, 32-word Register File, ALU execution, Memory interface, Control Unit, Hazard Unit, and Verilator testbenches.",
  learningOutcomes: [
    "Design an open-source RV32I RISC-V CPU core from initial specification",
    "Implement instruction memory, data memory decoders, and register files",
    "Verify binary instruction execution with self-checking testbenches"
  ],
  modules: [
    {
      id: "rv-mod-1",
      title: "Module 1: RISC-V Core Top-Level Architecture",
      duration: "70 min",
      content: {
        summary: "Datapath vs Control Unit division, bus interconnects, and memory mapping.",
        sections: [{ type: "heading", text: "1. Core Hierarchy" }, { type: "paragraph", text: "Top-level RISC-V core connects PC counter, Instruction Memory, RegFile, ALU, and Data Memory." }],
        revisionPoints: ["RV32I supports 32-bit base integer instructions.", "Control unit decodes opcodes, funct3, and funct7."]
      }
    }
  ]
};

export const verilogProblemSolvingCourse = {
  id: "verilog-problem-solving",
  title: "Verilog Coding & RTL Problem Solving",
  category: "Verilog / RTL",
  level: "Intermediate",
  duration: "15 Hours",
  rating: 4.91,
  description: "Practical coding course containing 100+ synthesizable Verilog problems: Gates, MUXes, Adders, Priority Encoders, Counters, Shift Registers, FSM sequence detectors, and RTL debugging exercises.",
  learningOutcomes: [
    "Solve 100+ real-world semiconductor RTL coding challenges",
    "Identify and repair latch inferences, race conditions, and width mismatches",
    "Write clean, synthesizable, production-ready Verilog modules"
  ],
  modules: [
    {
      id: "ps-mod-1",
      title: "Module 1: Combinational Logic Problems",
      duration: "45 min",
      content: {
        summary: "Multiplexers, decoders, parity generators, and priority encoders.",
        sections: [{ type: "heading", text: "1. 8-to-1 Multiplexer Design" }, { type: "paragraph", text: "Implement an 8:1 MUX using continuous assignment ternary operators and case statements." }],
        revisionPoints: ["Case statements synthesize into efficient multiplexer trees.", "Use default cases to prevent inferred latches."]
      }
    }
  ]
};

export const semiconductorCourse = {
  id: "semiconductor-physics",
  title: "Semiconductor Devices & MOSFET Physics",
  category: "VLSI Foundation",
  level: "Beginner to Intermediate",
  duration: "14 Hours",
  rating: 4.88,
  description: "Fundamentals of semiconductor physics: P-N junctions, MOS capacitor electrostatics, N-channel / P-channel MOSFET operation, threshold voltage ($V_{th}$), channel length modulation ($\lambda$), subthreshold leakage, FinFETs, and GAAFETs.",
  learningOutcomes: [
    "Understand semiconductor energy band diagrams, carrier drift/diffusion, and Fermi levels",
    "Analyze MOSFET linear, saturation, and cut-off operating regions",
    "Understand 3D transistor scaling: Planar MOSFET → FinFET → Gate-All-Around (GAAFET)"
  ],
  modules: [
    {
      id: "semi-mod-1",
      title: "Module 1: MOSFET Operating Physics",
      duration: "50 min",
      content: {
        summary: "Gate oxide capacitance ($C_{ox}$), inversion layer formation, and drain current equations.",
        sections: [{ type: "heading", text: "1. Linear vs Saturation Region" }, { type: "paragraph", text: "In saturation ($V_{DS} \\ge V_{GS} - V_{th}$), pinch-off occurs and drain current $I_D = \\frac{1}{2} \\mu C_{ox} \\frac{W}{L} (V_{GS} - V_{th})^2$." }],
        revisionPoints: ["Pinch-off marks transition into saturation region.", "FinFETs suppress short-channel effects at <16nm nodes."]
      }
    }
  ]
};

// Additional Future-Ready Modular Courses
export const uvmCourse = {
  id: "uvm-basics",
  title: "UVM (Universal Verification Methodology) Basics",
  category: "SystemVerilog / Verification",
  level: "Advanced",
  duration: "16 Hours",
  rating: 4.94,
  description: "Introduction to UVM architecture: uvm_component, uvm_object, uvm_driver, uvm_sequencer, uvm_monitor, uvm_agent, uvm_env, scoreboard, and factory overrides.",
  learningOutcomes: ["Understand UVM testbench component hierarchy", "Write reusable UVM sequences and drivers"],
  modules: [{ id: "uvm-1", title: "Module 1: UVM Class Hierarchy & Phasing", duration: "60 min", content: { summary: "UVM phases (build, connect, run, report).", sections: [{ type: "heading", text: "1. UVM Architecture" }], revisionPoints: ["Build phase runs top-down; connect phase runs bottom-up."] } }]
};

export const ambaBusCourse = {
  id: "amba-bus-protocols",
  title: "AMBA Bus Protocols: APB, AHB & AXI4-Lite",
  category: "Verilog / RTL",
  level: "Advanced",
  duration: "18 Hours",
  rating: 4.96,
  description: "Master ARM AMBA interconnect protocols: APB4 low-power peripheral bus, AHB-Lite high-performance bus, and AXI4-Lite memory mapped interface.",
  learningOutcomes: ["Design APB slave peripherals and AXI4-Lite memory controllers", "Understand outstanding transactions and bursts"],
  modules: [{ id: "amba-1", title: "Module 1: APB Protocol Specification", duration: "50 min", content: { summary: "PCLK, PRESETn, PADDR, PWRITE, PSEL, ENABLE, PREADY, PSLVERR.", sections: [{ type: "heading", text: "1. APB State Machine" }], revisionPoints: ["IDLE → SETUP → ACCESS state transitions."] } }]
};

export const digitalVerificationCourse = {
  id: "digital-verification",
  title: "Digital Verification & Testbench Architecture",
  category: "SystemVerilog / Verification",
  level: "Intermediate",
  duration: "15 Hours",
  rating: 4.90,
  description: "Verification concepts: Code coverage (line, branch, toggle, FSM), functional coverage, assertion-based verification (ABV), and constrained random testing.",
  learningOutcomes: ["Achieve 100% functional and code coverage", "Write SVA property checkers"],
  modules: [{ id: "verif-1", title: "Module 1: Code vs Functional Coverage", duration: "45 min", content: { summary: "Coverage metrics and testplan development.", sections: [{ type: "heading", text: "1. Verification Goals" }], revisionPoints: ["100% line coverage does NOT equal 100% bug-free RTL."] } }]
};

export const dftCourse = {
  id: "dft-basics",
  title: "DFT (Design for Testability) & Scan Chains",
  category: "VLSI Foundation",
  level: "Advanced",
  duration: "14 Hours",
  rating: 4.87,
  description: "Fundamentals of silicon testing: Fault models (Stuck-At 0/1, Transition Delay Fault), scan chain insertion, ATPG (Automatic Test Pattern Generation), BIST (Built-In Self-Test), and JTAG IEEE 1149.1.",
  learningOutcomes: ["Understand scan flop conversion and test modes", "Analyze stuck-at fault coverage metrics"],
  modules: [{ id: "dft-1", title: "Module 1: Scan Chain Architecture", duration: "50 min", content: { summary: "Multiplexed flip-flops (SE, SI, SO) and test modes.", sections: [{ type: "heading", text: "1. Stuck-At Fault Models" }], revisionPoints: ["Scan shifts test vectors into registers in test mode."] } }]
};

export const physicalDesignCourse = {
  id: "physical-design-fundamentals",
  title: "Physical Design & Layout Fundamentals",
  category: "VLSI Foundation",
  level: "Advanced",
  duration: "16 Hours",
  rating: 4.91,
  description: "Physical design pipeline: Netlist import, Floorplanning, Power network synthesis (PNS), Placement, Clock Tree Synthesis (CTS), Global/Detail Routing, DRC/LVS, and Parasitic Extraction (SPEF).",
  learningOutcomes: ["Perform floorplanning chip utilization calculations", "Analyze CTS latency and skew balancing"],
  modules: [{ id: "pd-1", title: "Module 1: Floorplanning & Power Mesh", duration: "55 min", content: { summary: "Core utilization, macro placement, rings and stripes.", sections: [{ type: "heading", text: "1. Core Area Definition" }], revisionPoints: ["Power mesh reduces IR drop across high-current regions."] } }]
};

export const lowPowerCourse = {
  id: "low-power-vlsi",
  title: "Low-Power VLSI Design Techniques",
  category: "VLSI Foundation",
  level: "Advanced",
  duration: "15 Hours",
  rating: 4.93,
  description: "Low-power design methodologies: Clock gating, Multi-VDD domain isolation, Power gating (sleep transistors), Multi-Vth cell swapping, Dynamic Voltage & Frequency Scaling (DVFS), and UPF/CPF intent standards.",
  learningOutcomes: ["Implement integrated clock gating (ICG) cells", "Write UPF power intent specifications"],
  modules: [{ id: "lp-1", title: "Module 1: Power Dissipation Breakdown", duration: "50 min", content: { summary: "Dynamic switching power vs subthreshold leakage power.", sections: [{ type: "heading", text: "1. Clock Gating Logic" }], revisionPoints: ["Clock gating disables clock trees to idle registers."] } }]
};
