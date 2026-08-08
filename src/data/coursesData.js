export const coursesData = [
  {
    id: "verilog-fundamentals",
    title: "Verilog HDL Fundamentals",
    category: "Verilog / RTL",
    level: "Beginner",
    duration: "6 Hours",
    moduleCount: 10,
    rating: 4.9,
    students: "18,450",
    description: "Master Verilog Hardware Description Language from ground up. Learn module syntax, data types, procedural blocks, combinational vs sequential design, blocking vs non-blocking assignments, testbenches, and synthesizable RTL coding rules.",
    learningOutcomes: [
      "Understand Verilog module architecture, ANSI port declarations, and net vs register data types",
      "Distinguish between continuous assignment (`assign`) and procedural blocks (`always`)",
      "Master blocking (`=`) vs non-blocking (`<=`) assignments with simulation waveform behavior",
      "Design combinational logic: Multiplexers, Decoders, Encoders, Priority Encoders, ALUs, and Adders",
      "Implement sequential circuits: Flip-Flops, Latches, Counters, and Shift Registers",
      "Construct Finite State Machines (Mealy & Moore FSMs) using synthesizable 3-block templates",
      "Write professional verification testbenches with `$display`, `$monitor`, clock generators, and test stimulus",
      "Avoid unintended transparent latches and race conditions in simulation"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Introduction to Verilog HDL & Abstraction Levels",
        duration: "30 min",
        content: {
          summary: "Learn what Verilog HDL is, why hardware description languages differ from software, simulation vs synthesis, and the 4 main levels of abstraction.",
          sections: [
            {
              type: "heading",
              text: "1. What is Verilog HDL?"
            },
            {
              type: "paragraph",
              text: "Verilog HDL (Hardware Description Language) is a standardized language used by semiconductor engineers to model, simulate, and design digital electronic systems at various levels of abstraction—from high-level algorithmic architecture down to individual gate netlists and transistor switches."
            },
            {
              type: "heading",
              text: "2. Why is Verilog HDL Important?"
            },
            {
              type: "paragraph",
              text: "Modern microprocessors, GPUs, and System-on-Chip (SoC) devices contain billions of transistors. It is physically impossible to draw circuit schematics for such massive systems manually. Hardware Description Languages allow engineers to describe complex hardware concurrently in text, simulate its behavior on a computer, and automatically synthesize it into physical silicon gates using EDA (Electronic Design Automation) tools like Synopsys Design Compiler or Xilinx Vivado."
            },
            {
              type: "heading",
              text: "3. Hardware Perspective: Verilog vs Software (C/Python)"
            },
            {
              type: "important",
              title: "Fundamental Mindset Shift",
              text: "Software programming languages (C, C++, Python) execute instructions sequentially line-by-line on a single CPU core.\nVerilog HDL describes PHYSICAL SILICON HARDWARE components that operate concurrently in parallel! All modules and continuous assignments run at the same exact time."
            },
            {
              type: "heading",
              text: "4. The 4 Levels of Abstraction in Verilog"
            },
            {
              type: "table",
              headers: ["Abstraction Level", "Description", "Example Construct", "Synthesizable?"],
              rows: [
                ["Behavioral / RTL", "Describes algorithms & register data transfers using procedural always blocks", "always @(posedge clk) q <= d;", "Yes"],
                ["Dataflow", "Describes logic flow via continuous assignment expressions", "assign y = (a & b) | c;", "Yes"],
                ["Gate Level", "Describes netlists using built-in logic gate primitives", "and g1 (out, a, b);", "Yes"],
                ["Switch Level", "Describes MOS transistor switches (NMOS / PMOS)", "nmos n1 (out, in, control);", "Rarely"]
              ]
            },
            {
              type: "heading",
              text: "5. Real-World Applications"
            },
            {
              type: "paragraph",
              text: "Verilog HDL is used across the entire semiconductor industry to design CPUs (RISC-V, ARM), GPUs (NVIDIA, AMD), automotive ICs, telecom router chips, and custom FPGA acceleration boards."
            },
            {
              type: "heading",
              text: "6. Common Beginner Mistakes"
            },
            {
              type: "important",
              title: "Mistakes to Avoid",
              text: "• Thinking `always` blocks execute like a software `while(1)` loop.\n• Forgetting that variables assigned inside `always` blocks must be declared as `reg` (or `logic` in SystemVerilog).\n• Writing non-synthesizable time delays like `#10` inside production RTL code."
            },
            {
              type: "heading",
              text: "7. Quick Revision Checklist"
            },
            {
              type: "note",
              title: "Key Takeaways",
              text: "✓ Verilog describes parallel hardware, not sequential software execution.\n✓ Simulation verifies functionality; Synthesis converts RTL into gate netlists.\n✓ The 4 levels of abstraction are Behavioral, Dataflow, Gate Level, and Switch Level.\n✓ ANSI-style module declarations are the modern industry standard."
            }
          ],
          revisionPoints: [
            "Verilog describes concurrent physical hardware operating in parallel.",
            "RTL (Register Transfer Level) is the primary abstraction used for chip synthesis.",
            "Never use time delays (#5) in code intended for silicon synthesis."
          ],
          nextTopics: [
            { title: "Modules & Port Declarations", link: "/courses/verilog-fundamentals/modules/module-2" },
            { title: "Wire vs Reg Data Types", link: "/courses/verilog-fundamentals/modules/module-3" },
            { title: "Blocking vs Non-Blocking Assignments", link: "/courses/verilog-fundamentals/modules/module-4" }
          ]
        }
      },
      {
        id: "module-2",
        title: "2. Verilog Modules & ANSI Port Declarations",
        duration: "30 min",
        content: {
          summary: "Master the structure of Verilog modules, port directions (input, output, inout), ANSI vs non-ANSI syntax, and module instantiation rules.",
          sections: [
            {
              type: "heading",
              text: "1. What is a Module?"
            },
            {
              type: "paragraph",
              text: "In Verilog, a `module` is the fundamental building block. It acts like an integrated circuit black box with defined input and output pins (ports). Everything in a Verilog design is contained inside modules."
            },
            {
              type: "heading",
              text: "2. Module Syntax (ANSI Style)"
            },
            {
              type: "code",
              language: "verilog",
              filename: "full_adder.v",
              code: `// ANSI-style Module Declaration for a 1-bit Full Adder
module full_adder (
    input  wire a,      // First input bit
    input  wire b,      // Second input bit
    input  wire cin,    // Carry input bit
    output wire sum,    // Sum output bit
    output wire cout    // Carry output bit
);
    // Dataflow continuous assignments
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (b & cin) | (a & cin);

endmodule`
            },
            {
              type: "heading",
              text: "3. Line-by-Line Code Explanation"
            },
            {
              type: "paragraph",
              text: "• `module full_adder`: Defines the module name `full_adder`.\n• `input wire a, b, cin`: Specifies 1-bit scalar input ports of net type `wire`.\n• `output wire sum, cout`: Specifies 1-bit scalar output ports driven by continuous assignment.\n• `assign sum = a ^ b ^ cin`: Uses XOR operator `^` to compute 3-input sum.\n• `assign cout = ...`: Computes carry output using AND `&` and OR `|` gates.\n• `endmodule`: Marks the end of the module boundary."
            },
            {
              type: "heading",
              text: "4. Module Instantiation (Named Connection)"
            },
            {
              type: "paragraph",
              text: "To build hierarchical designs, top-level modules instantiate lower-level sub-modules. Always use named port connections (`.port_name(signal_name)`) rather than positional connections!"
            },
            {
              type: "code",
              language: "verilog",
              filename: "top_level.v",
              code: `// Top-level module connecting 2 full adders
module adder_2bit (
    input  wire [1:0] a,
    input  wire [1:0] b,
    input  wire       cin,
    output wire [1:0] sum,
    output wire       cout
);
    wire c1; // Intermediate internal carry wire

    // Instantiate first bit adder (LSB)
    full_adder fa0 (
        .a(a[0]),
        .b(b[0]),
        .cin(cin),
        .sum(sum[0]),
        .cout(c1)
    );

    // Instantiate second bit adder (MSB)
    full_adder fa1 (
        .a(a[1]),
        .b(b[1]),
        .cin(c1),
        .sum(sum[1]),
        .cout(cout)
    );

endmodule`
            },
            {
              type: "heading",
              text: "5. Truth Table: 1-Bit Full Adder"
            },
            {
              type: "table",
              headers: ["A", "B", "Cin", "Sum", "Cout"],
              rows: [
                ["0", "0", "0", "0", "0"],
                ["0", "0", "1", "1", "0"],
                ["0", "1", "0", "1", "0"],
                ["0", "1", "1", "0", "1"],
                ["1", "0", "0", "1", "0"],
                ["1", "0", "1", "0", "1"],
                ["1", "1", "0", "0", "1"],
                ["1", "1", "1", "1", "1"]
              ]
            }
          ],
          revisionPoints: [
            "Modules are bounded by `module` and `endmodule` keywords.",
            "Always use ANSI-style port declarations for readability and lint compliance.",
            "Use named port instantiation (.port(signal)) to avoid pin swapping bugs."
          ],
          nextTopics: [
            { title: "Wire vs Reg Data Types", link: "/courses/verilog-fundamentals/modules/module-3" },
            { title: "Blocking vs Non-Blocking Assignments", link: "/courses/verilog-fundamentals/modules/module-4" },
            { title: "Combinational Circuit Design", link: "/courses/verilog-fundamentals/modules/module-5" }
          ]
        }
      },
      {
        id: "module-3",
        title: "3. Data Types: wire vs reg vs logic",
        duration: "35 min",
        content: {
          summary: "Comprehensive clarification of Verilog net types (wire), register variables (reg), vectors, parameters, and SystemVerilog's unified logic type.",
          sections: [
            {
              type: "heading",
              text: "1. Net Data Types (`wire`)"
            },
            {
              type: "paragraph",
              text: "A `wire` represents a physical copper connection wire on a silicon chip. Wires DO NOT store state. They continuously drive whatever value is driven onto them by an active driver (such as an `assign` statement or logic gate output). If left undriven, a `wire` defaults to high impedance (`z`)."
            },
            {
              type: "heading",
              text: "2. Variable Data Types (`reg`)"
            },
            {
              type: "important",
              title: "CRITICAL INTERVIEW QUESTION: Does 'reg' mean D-Flip-Flop?",
              text: "NO! A `reg` in Verilog is purely a variable declaration requirement for signals assigned inside procedural blocks (`always` or `initial`).\n• Inside `always @(*)` (combinational), a `reg` synthesizes into pure WIRE logic!\n• Inside `always @(posedge clk)` (sequential), a `reg` synthesizes into D-Flip-Flops!"
            },
            {
              type: "heading",
              text: "3. Detailed Comparison: wire vs reg vs logic"
            },
            {
              type: "table",
              headers: ["Property", "wire", "reg", "logic (SystemVerilog)"],
              rows: [
                ["Storage Ability", "No (Continuous driver required)", "Yes (Holds value inside procedural block)", "Universal (Acts as net or variable)"],
                ["Assignment Methods", "Continuous `assign` or Gate outputs", "Procedural `always` or `initial` blocks", "Both continuous `assign` and `always`"],
                ["Default Simulation Value", "z (High Impedance)", "x (Unknown state at time 0)", "x (Unknown state at time 0)"],
                ["Multiple Drivers Permitted?", "Yes (Tri-state buses)", "No (Single procedural driver only)", "No (Enforces single driver check)"]
              ]
            },
            {
              type: "heading",
              text: "4. Vectors & Bit Selection Syntax"
            },
            {
              type: "code",
              language: "verilog",
              filename: "vectors.v",
              code: `wire [7:0] bus_a;    // 8-bit bus [7, 6, 5, 4, 3, 2, 1, 0]
reg  [15:0] data_reg; // 16-bit register

// Bit Slicing
wire [3:0] lsb_nibble = bus_a[3:0];  // Extract bits 3..0
wire       msb_bit    = bus_a[7];     // Extract bit 7`
            }
          ],
          revisionPoints: [
            "Use `wire` for continuous `assign` statements.",
            "Use `reg` for procedural assignments inside `always` blocks.",
            "SystemVerilog's `logic` replaces both `wire` and `reg` for single-driver signals."
          ],
          nextTopics: [
            { title: "Blocking vs Non-Blocking Assignments", link: "/courses/verilog-fundamentals/modules/module-4" },
            { title: "Combinational Circuit Design", link: "/courses/verilog-fundamentals/modules/module-5" },
            { title: "Sequential Circuit Design", link: "/courses/verilog-fundamentals/modules/module-6" }
          ]
        }
      },
      {
        id: "module-4",
        title: "4. Blocking (=) vs Non-Blocking (<=) Assignments",
        duration: "40 min",
        content: {
          summary: "The single most critical Verilog topic in semiconductor interviews! Understand '=' vs '<=', simulation event queue scheduling, and preventing race conditions.",
          sections: [
            {
              type: "heading",
              text: "1. What is the Difference?"
            },
            {
              type: "paragraph",
              text: "• **Blocking Assignment (`=`)**: Evaluates the right-hand side (RHS) expression and immediately updates the left-hand side (LHS) variable BEFORE moving to the next line of code. It blocks subsequent lines in the procedural block.\n• **Non-Blocking Assignment (`<=`)**: Evaluates the RHS expressions of all statements in the block concurrently at the current simulation time step, but defers updating LHS variables until the Active/NBA event queue region at the end of the time step."
            },
            {
              type: "heading",
              text: "2. The Golden Rules of Verilog Synthesis"
            },
            {
              type: "important",
              title: "Golden Rules to Memorize for Life",
              text: "1. Use BLOCKING (`=`) assignments for Combinational logic inside `always @(*)`.\n2. Use NON-BLOCKING (`<=`) assignments for Sequential logic inside `always @(posedge clk)`.\n3. NEVER mix `=` and `<=` inside the same `always` block.\n4. NEVER assign to the same variable from multiple `always` blocks."
            },
            {
              type: "heading",
              text: "3. Hardware Waveform Comparison: Cascaded Flip-Flops"
            },
            {
              type: "code",
              language: "verilog",
              filename: "blocking_vs_nonblocking.v",
              code: `// INCORRECT SEQUENTIAL DESIGN using Blocking (=)
// Synthesizes to a SINGLE D-FF instead of 2 cascaded D-FFs! (Race condition)
always @(posedge clk) begin
    q1 = d;
    q2 = q1; // q2 gets NEW value of q1 in the SAME clock edge!
end

// CORRECT SEQUENTIAL DESIGN using Non-Blocking (<=)
// Synthesizes into TWO cascaded D-Flip-Flops (Shift Register)!
always @(posedge clk) begin
    q1 <= d;
    q2 <= q1; // q2 gets OLD value of q1 before clock edge!
end`
            }
          ],
          revisionPoints: [
            "Blocking (=) executes sequentially like software; Non-Blocking (<=) updates concurrently at end of clock cycle.",
            "Use = for combinational always @(*); Use <= for sequential always @(posedge clk).",
            "Mixing assignment styles causes simulation vs synthesis mismatches."
          ],
          nextTopics: [
            { title: "Combinational Circuit Design", link: "/courses/verilog-fundamentals/modules/module-5" },
            { title: "Sequential Circuit Design & Reset Strategies", link: "/courses/verilog-fundamentals/modules/module-6" }
          ]
        }
      },
      {
        id: "module-5",
        title: "5. Combinational Verilog Design (MUX, Decoder, ALU)",
        duration: "45 min",
        content: {
          summary: "Learn synthesizable combinational RTL modeling techniques using assign statements, case blocks, if-else structures, and latch prevention rules.",
          sections: [
            {
              type: "heading",
              text: "1. 4-to-1 Multiplexer (Case Statement)"
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
    // Combinational always block with wildcard sensitivity list
    always @(*) begin
        case (sel)
            2'b00:   out = in[0];
            2'b01:   out = in[1];
            2'b10:   out = in[2];
            2 me:    out = in[3];
            default: out = 1'b0; // Default case prevents latch inference!
        endcase
    end
endmodule`
            },
            {
              type: "heading",
              text: "2. Unintended Latch Prevention"
            },
            {
              type: "important",
              title: "What causes inferred latches?",
              text: "In combinational logic, if an output variable is NOT assigned a value under ALL possible input conditions (missing else branch or missing default case item), synthesis infers a transparent latch to remember the previous output value!"
            }
          ],
          revisionPoints: [
            "Combinational logic MUST assign outputs in every execution path.",
            "Always include `default` in `case` statements.",
            "Use wildcard `always @(*)` to avoid missing sensitivity signals."
          ],
          nextTopics: [
            { title: "Sequential Circuit Design & Reset Strategies", link: "/courses/verilog-fundamentals/modules/module-6" },
            { title: "Verilog Testbenches & Simulation", link: "/courses/verilog-fundamentals/modules/module-7" }
          ]
        }
      }
    ]
  },
  {
    id: "vlsi-fundamentals",
    title: "VLSI Fundamentals & Semiconductor Physics",
    category: "VLSI",
    level: "Beginner",
    duration: "7 Hours",
    moduleCount: 8,
    rating: 4.9,
    students: "14,200",
    description: "Comprehensive roadmap into Very Large Scale Integration. Explore ASIC design flow from specification to tapeout, semiconductor P-N junctions, MOSFET operation, static CMOS inverters, parasitics, dynamic power scaling, and static timing signoff.",
    learningOutcomes: [
      "Understand the complete ASIC & FPGA design flow from RTL to GDSII tapeout",
      "Analyze semiconductor doping, carrier transport, and P-N junction breakdown",
      "Master MOSFET terminal behavior, threshold voltage ($V_{th}$), and linear/saturation channel physics",
      "Analyze static CMOS inverter VTC (Voltage Transfer Characteristics) and noise margins ($NM_H, NM_L$)",
      "Calculate dynamic ($P_{dyn} = \\alpha C V_{dd}^2 f$) and static leakage power dissipation",
      "Master setup time ($t_{setup}$) and hold time ($t_{hold}$) constraints in Static Timing Analysis"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Overview of ASIC Design Flow: Specification to GDSII Tapeout",
        duration: "45 min",
        content: {
          summary: "Complete step-by-step walkthrough of modern front-end RTL design and back-end physical design steps.",
          sections: [
            {
              type: "heading",
              text: "1. Introduction to ASIC Design Flow"
            },
            {
              type: "paragraph",
              text: "An Application-Specific Integrated Circuit (ASIC) is a microchip customized for a specific application rather than general-purpose use. The ASIC flow transforms human-written architectural specifications into physical silicon masks ready for foundry manufacturing."
            },
            {
              type: "heading",
              text: "2. Front-End vs Back-End ASIC Flow Steps"
            },
            {
              type: "table",
              headers: ["Phase", "Step Name", "Primary Output", "Industry Standard Tools"],
              rows: [
                ["Front-End", "Specification & Architecture", "Architecture Spec Doc", "SystemC / Python"],
                ["Front-End", "RTL Coding", "Verilog / SV Files (.v, .sv)", "VS Code / Emacs"],
                ["Front-End", "RTL Verification", "Waveforms & Coverage (.vcd)", "Synopsys VCS / Cadence Xcelium"],
                ["Front-End", "Logic Synthesis", "Gate-Level Netlist (.v)", "Synopsys Design Compiler / Genus"],
                ["Back-End", "Floorplanning & Placement", "Placed Standard Cells", "Cadence Innovus / Synopsys ICC2"],
                ["Back-End", "Clock Tree Synthesis (CTS)", "Balanced Clock Net", "Innovus / ICC2"],
                ["Back-End", "Routing & Signoff", "GDSII / OASIS Mask File", "Calibre (DRC/LVS) / PrimeTime (STA)"]
              ]
            }
          ],
          revisionPoints: [
            "Front-End transforms Specs -> Verified Gate Netlist.",
            "Back-End transforms Gate Netlist -> Physical GDSII Silicon Layout.",
            "Physical verification includes DRC (Design Rule Checking) and LVS (Layout vs Schematic)."
          ],
          nextTopics: [
            { title: "Semiconductor Fundamentals & P-N Junctions", link: "/courses/vlsi-fundamentals/modules/module-2" },
            { title: "MOSFET Transistor Physics", link: "/courses/vlsi-fundamentals/modules/module-3" },
            { title: "CMOS Inverter VTC & Power", link: "/courses/vlsi-fundamentals/modules/module-4" }
          ]
        }
      }
    ]
  },
  {
    id: "digital-electronics",
    title: "Digital Logic & Sequential Fundamentals",
    category: "Digital Electronics",
    level: "Beginner",
    duration: "5 Hours",
    moduleCount: 8,
    rating: 4.9,
    students: "19,800",
    description: "Build a rock-solid foundation in binary arithmetic, 2's complement logic, Boolean simplification, K-maps, logic gate implementations, combinational circuits, flip-flops, counters, and registers.",
    learningOutcomes: [
      "Master binary, octal, hexadecimal, and two's complement arithmetic with overflow checking",
      "Simplify Boolean expressions using De Morgan's laws and 2/3/4-variable Karnaugh Maps (K-Maps)",
      "Design combinational logic: Half/Full Adders, Subtractors, MUX, DEMUX, Encoders, Decoders",
      "Understand latch vs flip-flop timing (SR, D, JK, T flip-flops)",
      "Analyze synchronous and asynchronous sequential counters and shift registers"
    ],
    modules: [
      {
        id: "module-1",
        title: "1. Number Systems & Two's Complement Arithmetic",
        duration: "35 min",
        content: {
          summary: "Learn binary, octal, hex conversions, signed number representations, 1's and 2's complement arithmetic, and overflow conditions.",
          sections: [
            {
              type: "heading",
              text: "1. Two's Complement Representation"
            },
            {
              type: "paragraph",
              text: "To represent negative integers in digital hardware without needing separate addition/subtraction circuits, computers use Two's Complement notation. To find the 2's complement of a binary number: invert all bits (1's complement) and add 1."
            },
            {
              type: "code",
              language: "text",
              filename: "twos_complement_example.txt",
              code: `Number: +5 in 4-bit binary = 0101
1's Complement (Invert bits)  = 1010
Add 1                        = 1011 (-5 in 2's complement)`
            }
          ],
          revisionPoints: [
            "MSB 0 denotes positive numbers; MSB 1 denotes negative numbers in 2's complement.",
            "2's Complement = 1's Complement + 1.",
            "Overflow occurs when adding two positive numbers yields a negative result or vice versa."
          ],
          nextTopics: [
            { title: "Boolean Algebra & K-Maps", link: "/courses/digital-electronics/modules/module-2" },
            { title: "Combinational Circuits", link: "/courses/digital-electronics/modules/module-3" }
          ]
        }
      }
    ]
  }
];
