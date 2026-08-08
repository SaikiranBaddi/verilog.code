export const coursesData = [
  {
    id: "verilog-fundamentals",
    title: "Verilog HDL Fundamentals",
    category: "Verilog / RTL",
    level: "Beginner",
    duration: "4 Hours",
    moduleCount: 12,
    rating: 4.9,
    students: "12,450",
    description: "Master Verilog Hardware Description Language from ground up. Learn module syntax, data types, procedural blocks, combinational vs sequential design, and behavioral simulation.",
    learningOutcomes: [
      "Understand Verilog module architecture, ports, and data types (wire, reg, logic)",
      "Distinguish between continuous assignment (`assign`) and procedural blocks (`always`)",
      "Master blocking (`=`) vs non-blocking (`<=`) assignments with waveform behavior",
      "Design combinational logic: Multiplexers, Decoders, ALUs, and Adders",
      "Implement sequential circuits: Flip-Flops, Latches, Counters, and Shift Registers",
      "Construct Finite State Machines (Mealy & Moore FSMs)",
      "Write testbenches with `$display`, `$monitor`, clock generators, and test stimulus"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Introduction to Verilog HDL",
        duration: "20 min",
        content: {
          summary: "Introduction to Hardware Description Languages vs Software languages, modeling levels (Gate, Dataflow, Behavioral).",
          sections: [
            {
              type: "heading",
              text: "What is Verilog HDL?"
            },
            {
              type: "paragraph",
              text: "Verilog HDL is a Hardware Description Language used to model digital systems at various levels of abstraction, ranging from high-level algorithmic behavioral models down to gate-level structural circuits."
            },
            {
              type: "note",
              title: "Key Hardware Perspective",
              text: "Unlike software programming languages like C or Python which execute instructions sequentially, Verilog describes hardware components that operate concurrently in parallel silicon!"
            },
            {
              type: "heading",
              text: "Verilog Abstraction Levels"
            },
            {
              type: "table",
              headers: ["Abstraction Level", "Description", "Example Keyword/Construct"],
              rows: [
                ["Behavioral / RTL", "Describes algorithm & dataflow using always blocks", "always @(posedge clk)"],
                ["Dataflow", "Describes logic operations using expressions", "assign out = a & b;"],
                ["Gate Level", "Describes netlist using primitive logic gates", "and gate1 (out, a, b);"],
                ["Switch Level", "Describes transistor switches (MOSFETs)", "nmos (out, in, control);"]
              ]
            }
          ]
        }
      },
      {
        id: "module-2",
        title: "2. Modules and Ports",
        duration: "25 min",
        content: {
          summary: "Understanding Verilog module hierarchy, input/output/inout port declarations, and module instantiation.",
          sections: [
            {
              type: "heading",
              text: "Module Syntax & Structure"
            },
            {
              type: "paragraph",
              text: "The `module` is the fundamental building block in Verilog. Everything in Verilog is encapsulated inside modules."
            },
            {
              type: "code",
              language: "verilog",
              filename: "and_gate.v",
              code: `// Module declaration for 2-input AND gate
module and_gate (
    input  wire a,
    input  wire b,
    output wire y
);
    // Dataflow continuous assignment
    assign y = a & b;

endmodule`
            },
            {
              type: "tip",
              title: "Best Practice for Port Declarations",
              text: "Always use ANSI-style port declarations (declaring direction `input`/`output` and data type inside the parameter list) for cleaner, readable code."
            }
          ]
        }
      },
      {
        id: "module-3",
        title: "3. Data Types: wire vs reg",
        duration: "20 min",
        content: {
          summary: "Clarifying nets (wire) vs registers (reg), vector dimensions, and integer/parameter values.",
          sections: [
            {
              type: "heading",
              text: "Net Data Types (`wire`)"
            },
            {
              type: "paragraph",
              text: "A `wire` represents a physical connection in digital hardware. Wires do not hold or store values; they continuously reflect the value driven by their driver."
            },
            {
              type: "heading",
              text: "Register Data Types (`reg`)"
            },
            {
              type: "paragraph",
              text: "A `reg` holds its assigned value until another assignment updates it. **Crucial note**: A `reg` in Verilog does NOT always synthesize into a physical D flip-flop or register! In combinational procedural blocks, a `reg` synthesizes into pure wire logic."
            },
            {
              type: "code",
              language: "verilog",
              filename: "data_types.v",
              code: `wire [7:0] bus_a;   // 8-bit wire bus [7..0]
reg  [3:0] count;   // 4-bit register variable
parameter WIDTH = 16; // Parametric width constant`
            }
          ]
        }
      },
      {
        id: "module-4",
        title: "4. Blocking vs Non-Blocking Assignments",
        duration: "30 min",
        content: {
          summary: "The most tested Verilog concept in VLSI interviews! Understand '=' vs '<=' and prevent synthesis race conditions.",
          sections: [
            {
              type: "heading",
              text: "Golden Rule of Verilog Assignments"
            },
            {
              type: "important",
              title: "Synthesis Golden Rules",
              text: "1. Use Blocking assignments (`=`) for Combinational logic inside `always @(*)`.\n2. Use Non-Blocking assignments (`<=`) for Sequential logic inside `always @(posedge clk)`."
            },
            {
              type: "heading",
              text: "Difference Code Comparison"
            },
            {
              type: "code",
              language: "verilog",
              filename: "assignments_comparison.v",
              code: `// BLOCKING (=) : Executes sequentially like software (Creates a single shift chain or overwritten logic)
always @(posedge clk) begin
    q1 = d;
    q2 = q1; // q2 gets updated value of q1 immediately!
end

// NON-BLOCKING (<=) : Evaluated concurrently (Creates 2 cascaded D Flip-Flops!)
always @(posedge clk) begin
    q1 <= d;
    q2 <= q1; // q2 gets OLD value of q1 before clock edge!
end`
            }
          ]
        }
      },
      {
        id: "module-5",
        title: "5. Combinational Circuit Design",
        duration: "30 min",
        content: {
          summary: "Designing 4:1 Multiplexers, 3:8 Decoders, Priority Encoders, and Arithmetic Logic Units.",
          sections: [
            {
              type: "heading",
              text: "4:1 Multiplexer using Case Statement"
            },
            {
              type: "code",
              language: "verilog",
              filename: "mux4to1.v",
              code: `module mux4to1 (
    input  wire [3:0] in,
    input  wire [1:0] sel,
    output reg        out
);
    always @(*) begin
        case (sel)
            2'b00: out = in[0];
            2'b01: out = in[1];
            2'b10: out = in[2];
            2'b11: out = in[3];
            default: out = 1'b0;
        endcase
    end
endmodule`
            }
          ]
        }
      },
      {
        id: "module-6",
        title: "6. Sequential Circuit Design & FSMs",
        duration: "35 min",
        content: {
          summary: "Designing D-FF with async/sync reset, Shift Registers, and Finite State Machines.",
          sections: [
            {
              type: "heading",
              text: "D Flip-Flop with Active-Low Asynchronous Reset"
            },
            {
              type: "code",
              language: "verilog",
              filename: "dff_async_reset.v",
              code: `module dff_async (
    input  wire clk,
    input  wire rst_n, // Active-low reset
    input  wire d,
    output reg  q
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            q <= 1'b0;
        else
            q <= d;
    end
endmodule`
            }
          ]
        }
      },
      {
        id: "module-7",
        title: "7. Testbenches & Behavioral Simulation",
        duration: "25 min",
        content: {
          summary: "Creating non-synthesizable verification environments, clock generation, and stimulus driving.",
          sections: [
            {
              type: "heading",
              text: "Complete Testbench Architecture"
            },
            {
              type: "code",
              language: "verilog",
              filename: "tb_dff.v",
              code: `\`timescale 1ns/1ps

module tb_dff;
    reg  clk;
    reg  rst_n;
    reg  d;
    wire q;

    // Instantiate Unit Under Test (UUT)
    dff_async uut (
        .clk(clk),
        .rst_n(rst_n),
        .d(d),
        .q(q)
    );

    // Clock generator: 100MHz (10ns period)
    always #5 clk = ~clk;

    initial begin
        clk = 0;
        rst_n = 0;
        d = 0;
        #15 rst_n = 1;
        #10 d = 1;
        #10 d = 0;
        #20 $finish;
    end
endmodule`
            }
          ]
        }
      }
    ]
  },
  {
    id: "vlsi-fundamentals",
    title: "VLSI Fundamentals",
    category: "VLSI",
    level: "Beginner",
    duration: "5 Hours",
    moduleCount: 10,
    rating: 4.8,
    students: "9,820",
    description: "An essential roadmap into Very Large Scale Integration. Learn ASIC design flow, CMOS inverter operation, parasitic capacitance, delay calculations, and silicon scaling.",
    learningOutcomes: [
      "Understand the complete ASIC & FPGA design flow from RTL to GDSII",
      "Analyze CMOS inverter VTC (Voltage Transfer Characteristics) and noise margins",
      "Calculate dynamic and static power dissipation in deep submicron chips",
      "Understand delay models (Elmore delay, Logical Effort)",
      "Grasp physical synthesis, placement, routing, and DRC/LVS physical verification"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Overview of ASIC Design Flow",
        duration: "30 min",
        content: {
          summary: "From Specification to System-on-Chip (SoC) tapeout: Front-End RTL to Back-End Layout.",
          sections: [
            {
              type: "heading",
              text: "ASIC Design Flow Steps"
            },
            {
              type: "paragraph",
              text: "The modern ASIC flow is divided into Front-End (RTL design & verification) and Back-End (Synthesis, Floorplanning, Placement, Clock Tree Synthesis, Routing, and Signoff)."
            },
            {
              type: "table",
              headers: ["Phase", "Tool / Output", "Key Goal"],
              rows: [
                ["System Spec", "Architecture doc", "Define features, protocols & power targets"],
                ["RTL Design", "Verilog / SV (.v, .sv)", "Implement hardware description"],
                ["RTL Verification", "Questa / VCS / ModelSim", "Verify functionality with testbenches"],
                ["Logic Synthesis", "Design Compiler / Genus", "Translate RTL to Gate-Level Netlist (.v)"],
                ["Physical Design", "Innovus / IC Compiler", "Floorplan, Place, CTS, Route (GDSII)"]
              ]
            }
          ]
        }
      },
      {
        id: "module-2",
        title: "2. CMOS Transistor Theory & Inverter",
        duration: "35 min",
        content: {
          summary: "PMOS & NMOS switch operation, complementary static CMOS inverter VTC curve, and noise margins.",
          sections: [
            {
              type: "heading",
              text: "Why CMOS dominates VLSI"
            },
            {
              type: "paragraph",
              text: "CMOS (Complementary Metal-Oxide-Semiconductor) pairs N-channel and P-channel MOSFETs. In steady state (static), one transistor is ALWAYS OFF, leading to near-zero static power dissipation!"
            }
          ]
        }
      }
    ]
  },
  {
    id: "digital-electronics",
    title: "Digital Logic Fundamentals",
    category: "Digital Electronics",
    level: "Beginner",
    duration: "3.5 Hours",
    moduleCount: 8,
    rating: 4.9,
    students: "15,100",
    description: "Build a rock-solid foundation in binary arithmetic, Boolean algebra simplification, K-maps, logic gates, combinational logic, and sequential state machines.",
    learningOutcomes: [
      "Master binary, octal, hexadecimal, and two's complement arithmetic",
      "Simplify Boolean expressions using De Morgan's laws and Karnaugh Maps (K-Maps)",
      "Design combinational logic: Adders, Subtractors, MUX, DEMUX, Encoders",
      "Understand latch vs flip-flop timing (SR, D, JK, T flip-flops)",
      "Analyze synchronous sequential counters and state transition tables"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Binary Systems & Boolean Algebra",
        duration: "25 min",
        content: {
          summary: "Number systems representation, two's complement math, and fundamental logic theorems.",
          sections: [
            {
              type: "heading",
              text: "Boolean Laws & De Morgan's Theorems"
            },
            {
              type: "paragraph",
              text: "De Morgan's First Theorem: `~(A & B) = ~A | ~B`\nDe Morgan's Second Theorem: `~(A | B) = ~A & ~B`"
            }
          ]
        }
      }
    ]
  },
  {
    id: "static-timing-analysis",
    title: "Static Timing Analysis (STA)",
    category: "VLSI",
    level: "Intermediate",
    duration: "4.5 Hours",
    moduleCount: 9,
    rating: 4.9,
    students: "8,900",
    description: "Deep dive into Setup Time, Hold Time, Clock Skew, Jitter, Timing Paths, False Paths, and Multicycle Paths required for VLSI tapeout signoff.",
    learningOutcomes: [
      "Understand Setup Time ($t_{setup}$) and Hold Time ($t_{hold}$) constraints",
      "Calculate Maximum Operating Frequency ($F_{max}$) for any timing path",
      "Analyze Clock Skew, Clock Jitter, and On-Chip Variation (OCV)",
      "Fix Setup and Hold violations using buffer insertion and sizing",
      "Write SDC (Synopsys Design Constraints) timing constraints"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Setup & Hold Time Basics",
        duration: "30 min",
        content: {
          summary: "Definitions of Setup and Hold window, data path vs clock path delay equations.",
          sections: [
            {
              type: "heading",
              text: "Setup Time Equation"
            },
            {
              type: "code",
              language: "text",
              filename: "setup_equation.txt",
              code: "T_clk >= T_cq + T_comb + T_setup - T_skew"
            },
            {
              type: "heading",
              text: "Hold Time Equation"
            },
            {
              type: "code",
              language: "text",
              filename: "hold_equation.txt",
              code: "T_cq + T_comb >= T_hold + T_skew"
            }
          ]
        }
      }
    ]
  },
  {
    id: "fpga-fundamentals",
    title: "FPGA Fundamentals & Architecture",
    category: "FPGA",
    level: "Beginner",
    duration: "4 Hours",
    moduleCount: 8,
    rating: 4.8,
    students: "7,300",
    description: "Learn how Field Programmable Gate Arrays work internally. Explore LUT4/LUT6 structures, Configurable Logic Blocks (CLBs), BRAM, DSP48 slices, and Vivado synthesis.",
    learningOutcomes: [
      "Understand FPGA architecture vs ASIC silicon implementations",
      "Master Look-Up Table (LUT) logic implementation and SRAM configuration cells",
      "Configure Block RAM (BRAM) and DSP multiplier units",
      "Synthesize, implement, and run Bitstream generation in Xilinx Vivado",
      "Constrain I/O pins using XDC constraint files"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Introduction to FPGA Architecture",
        duration: "25 min",
        content: {
          summary: "LUTs, Flip-Flops, Multiplexers, and Programmable Interconnect Fabrics.",
          sections: [
            {
              type: "heading",
              text: "Inside an FPGA Configurable Logic Block (CLB)"
            },
            {
              type: "paragraph",
              text: "An FPGA does not contain hardwired gates for your design. Instead, it uses SRAM-based Look-Up Tables (LUTs) programmed as truth tables!"
            }
          ]
        }
      }
    ]
  },
  {
    id: "systemverilog-fundamentals",
    title: "SystemVerilog Fundamentals",
    category: "Verilog / RTL",
    level: "Intermediate",
    duration: "5 Hours",
    moduleCount: 10,
    rating: 4.9,
    students: "9,150",
    description: "Upgrade from Verilog to SystemVerilog. Master `logic` data type, `always_ff`, `always_comb`, packages, interfaces, dynamic arrays, assertions (SVA), and OOP concepts.",
    learningOutcomes: [
      "Understand key SV design enhancements (`always_comb`, `always_ff`, `logic`)",
      "Design clean modular buses using SystemVerilog Interfaces & Modports",
      "Use SystemVerilog Assertions (SVA) for protocol compliance testing",
      "Apply Object Oriented Programming (Classes, Inheritance, Randomization)",
      "Build constrained random verification environments"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. SystemVerilog Data Types & Constructs",
        duration: "30 min",
        content: {
          summary: "Replacing wire/reg with 4-state `logic`, enum, struct, and typed definitions.",
          sections: [
            {
              type: "heading",
              text: "SystemVerilog `logic` Type"
            },
            {
              type: "paragraph",
              text: "SystemVerilog unifies `wire` and `reg` into a single 4-state data type: `logic`. You can assign `logic` variables in continuous `assign` statements OR procedural `always` blocks."
            }
          ]
        }
      }
    ]
  }
];
