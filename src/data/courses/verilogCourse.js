// 20 Detailed Modules for Verilog HDL Masterclass Course
export const verilogCourse = {
  id: "verilog-fundamentals",
  title: "Verilog HDL Masterclass & RTL Design",
  category: "Verilog / RTL",
  level: "Beginner to Advanced",
  duration: "24 Hours",
  rating: 4.95,
  description: "Comprehensive end-to-end Verilog HDL course covering basic module structure, 4-state data types, procedural blocks, blocking vs non-blocking execution semantics, synthesizable combinational/sequential logic, FSM design, RAM/ROM memories, testbenches, simulation waveforms, synthesis rules, and 100 interview masterclass questions.",
  learningOutcomes: [
    "Understand Verilog module architecture, ANSI port declarations, and net vs register data types",
    "Distinguish between continuous assignment (`assign`) and procedural blocks (`always`)",
    "Master blocking (`=`) vs non-blocking (`<=`) assignments with simulation waveform behavior",
    "Design combinational logic: Multiplexers, Decoders, Encoders, Priority Encoders, ALUs, and Adders",
    "Implement sequential circuits: Flip-Flops, Latches, Counters, Frequency Dividers, and Shift Registers",
    "Construct Finite State Machines (Mealy & Moore FSMs) using synthesizable 2-block and 3-block templates",
    "Design synchronous/asynchronous RAMs, ROMs, and Register Files with memory initialization",
    "Write professional self-checking verification testbenches with `$display`, `$monitor`, clock generators, and stimulus",
    "Avoid unintended transparent latches, multiple drivers, and race conditions in simulation",
    "Understand RTL synthesis semantics, inferred hardware components, and industry RTL coding standards"
  ],
  modules: [
    {
      id: "module-1",
      title: "Module 1: Introduction to Verilog HDL",
      duration: "45 min",
      content: {
        summary: "What is HDL?, Verilog history, hardware vs software mindset, simulation vs synthesis, RTL concepts, abstraction levels, and typical VLSI design flow.",
        sections: [
          { type: "heading", text: "1. What is Hardware Description Language (HDL)?" },
          { type: "paragraph", text: "Verilog HDL is a standardized textual language used by digital VLSI engineers to specify, model, simulate, and synthesize electronic circuits containing millions to billions of transistors. Unlike software languages, Verilog models physical silicon structures running concurrently." },
          { type: "important", title: "Hardware vs Software Mindset", text: "Software code (C, Python, Java) is executed sequentially instruction-by-instruction on a single processor core.\nVerilog HDL describes physical silicon hardware operating concurrently in parallel! Continuous assignments and always blocks run simultaneously." },
          { type: "heading", text: "2. The 4 Levels of Abstraction in Verilog" },
          {
            type: "table",
            headers: ["Abstraction Level", "Description", "Primary Construct", "Synthesizable?"],
            rows: [
              ["Behavioral / RTL", "Describes hardware algorithms & register data transfers", "always @(posedge clk)", "Yes"],
              ["Dataflow", "Describes combinational logic flow via equations", "assign out = a & b;", "Yes"],
              ["Gate Level", "Describes netlist connections of logic gates", "and g1 (out, a, b);", "Yes"],
              ["Switch Level", "Describes MOS transistor switch primitives", "nmos n1 (out, in, ctrl);", "Rarely"]
            ]
          },
          { type: "heading", text: "3. Typical VLSI Design Flow" },
          { type: "paragraph", text: "1. System Specification → 2. RTL Architecture (Verilog) → 3. Functional Simulation (ModelSim/Icarus) → 4. Logic Synthesis (Synopsys DC/Vivado) → 5. Static Timing Analysis (STA) → 6. Place & Route (P&R) → 7. GDSII Tapeout." },
          { type: "note", title: "Key Takeaways", text: "✓ Verilog models concurrent physical hardware, not sequential software execution.\n✓ Simulation verifies functionality; Synthesis converts RTL into physical logic gates.\n✓ Always avoid non-synthesizable constructs (`#10`, `$display`) in production RTL." }
        ],
        revisionPoints: [
          "Verilog represents concurrent physical hardware.",
          "RTL stands for Register Transfer Level.",
          "Delays (#10) are used only in testbenches, never in synthesizable RTL."
        ]
      }
    },
    {
      id: "module-2",
      title: "Module 2: Verilog Module Structure",
      duration: "50 min",
      content: {
        summary: "Module declaration, endmodule, ports (input, output, inout), ANSI vs non-ANSI declarations, named port mapping vs positional mapping, and hierarchical design.",
        sections: [
          { type: "heading", text: "1. Basic Module Syntax" },
          { type: "paragraph", text: "A Verilog module is the fundamental building block of digital design. It encapsulates ports, local declarations, combinational equations, sequential blocks, and sub-module instantiations." },
          {
            type: "code",
            language: "verilog",
            code: `// Modern ANSI-style Module Declaration
module full_adder (
    input  wire a,
    input  wire b,
    input  wire cin,
    output wire sum,
    output wire cout
);
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (b & cin) | (a & cin);
endmodule`
          },
          { type: "heading", text: "2. Positional vs Named Port Mapping" },
          { type: "important", title: "Best Practice Rule", text: "Always use Named Port Mapping (`.port_name(signal_name)`) when instantiating sub-modules. Positional mapping (`(a, b, sum, cout)`) is extremely prone to silent bug propagation if port order changes in sub-modules!" },
          {
            type: "code",
            language: "verilog",
            code: `// Instantiating full_adder inside a top module using Named Mapping
full_adder fa_inst (
    .a    (sig_a),
    .b    (sig_b),
    .cin  (1'b0),
    .sum  (sum_out),
    .cout (carry_out)
);`
          }
        ],
        revisionPoints: [
          "ANSI style declarations combine port direction and data type in header.",
          "Named port mapping prevents connectivity bugs when ports change.",
          "Inout ports represent bidirectional tri-state buses."
        ]
      }
    },
    {
      id: "module-3",
      title: "Module 3: Data Types & 4-State Logic",
      duration: "55 min",
      content: {
        summary: "wire, reg, integer, time, parameter, localparam, vectors, memories, signed vs unsigned, 4-state logic values (0, 1, X, Z).",
        sections: [
          { type: "heading", text: "1. 4-State Logic System" },
          { type: "paragraph", text: "Verilog uses a 4-value logic system to model physical hardware states:" },
          {
            type: "table",
            headers: ["State", "Meaning", "Hardware Interpretation"],
            rows: [
              ["0", "Logic Low / Ground", "0V (VSS)"],
              ["1", "Logic High / VDD", "Supply Voltage (VDD)"],
              ["X", "Unknown / Conflict", "Multiple drivers contending or uninitialized reg"],
              ["Z", "High Impedance / Tri-state", "Disconnected / Floating node"]
            ]
          },
          { type: "heading", text: "2. Net (`wire`) vs Register (`reg`)" },
          { type: "important", title: "Wire vs Reg Rules", text: "• `wire`: Represents physical connections (wires). Driven continuously by `assign` or gate outputs. Cannot hold a state.\n• `reg`: Represents data storage targets inside procedural blocks (`always`, `initial`). Does NOT automatically imply a flip-flop unless inferred inside a clocked `always` block!" },
          {
            type: "code",
            language: "verilog",
            code: `reg [7:0] memory_array [0:255]; // 256-word by 8-bit RAM array
parameter WIDTH = 16;            // Overridable module parameter
localparam CONST_VAL = 8'hFF;    // Local constant (cannot be overridden)`
          }
        ],
        revisionPoints: [
          "wire is driven continuously; reg is assigned in procedural blocks.",
          "Default value of reg in simulation at time 0 is X.",
          "localparam cannot be overridden during instantiation."
        ]
      }
    },
    {
      id: "module-4",
      title: "Module 4: Operators in Verilog",
      duration: "60 min",
      content: {
        summary: "Arithmetic, relational, equality, logical, bitwise, reduction, shift, concatenation, replication, and conditional ternary operators with examples.",
        sections: [
          { type: "heading", text: "1. Operator Reference & Examples" },
          {
            type: "code",
            language: "verilog",
            code: `wire [3:0] a = 4'b1010;
wire [3:0] b = 4'b1100;

// Bitwise AND: 4'b1000
wire [3:0] bitwise_and = a & b; 

// Logical AND: 1'b1 (True && True)
wire logical_and = (a != 0) && (b != 0); 

// Reduction OR: 1'b1 (1|0|1|0 = 1)
wire red_or = |a; 

// Concatenation: 8'b10101100
wire [7:0] concat = {a, b}; 

// Replication: 8'b11111111 (Replicate b[3] 8 times)
wire [7:0] sign_ext = {{4{a[3]}}, a};`
          },
          { type: "warning", title: "Logical vs Bitwise Pitfall", text: "Bitwise operators (`&`, `|`, `^`) operate bit-by-bit across vectors.\nLogical operators (`&&`, `||`, `!`) treat entire vectors as boolean true (non-zero) or false (zero), returning a 1-bit result (`1'b0` or `1'b1`)." }
        ],
        revisionPoints: [
          "Reduction operators evaluate all bits of a single vector down to 1 bit.",
          "Replication operator syntax is {N{vector}}.",
          "Conditional operator (cond ? a : b) synthesizes into a 2:1 Multiplexer."
        ]
      }
    },
    {
      id: "module-5",
      title: "Module 5: Continuous Assignment (`assign`)",
      duration: "40 min",
      content: {
        summary: "assign statement, continuous evaluation, combinational logic design, multiple continuous assignments, and limitations.",
        sections: [
          { type: "heading", text: "1. Continuous Assignment Semantics" },
          { type: "paragraph", text: "A continuous assignment statement drives a net (`wire`) with the result of a boolean expression. It evaluates continuously in parallel whenever any operand on the RHS changes state." },
          {
            type: "code",
            language: "verilog",
            code: `// Continuous assignment modeling a 2-to-1 MUX
module mux21 (
    input  wire a,
    input  wire b,
    input  wire sel,
    output wire y
);
    assign y = sel ? b : a; // Synthesizes directly to a 2:1 MUX gate
endmodule`
          },
          { type: "important", title: "Multiple Drivers Warning", text: "Driving the same `wire` with multiple `assign` statements causes logic contention, resulting in an `X` (unknown state) in simulation!" }
        ],
        revisionPoints: [
          "assign statements drive wire data types continuously.",
          "LHS target cannot be a reg.",
          "Multiple assign statements to the same wire create short circuits (X)."
        ]
      }
    },
    {
      id: "module-6",
      title: "Module 6: Procedural Blocks (`always` & `initial`)",
      duration: "55 min",
      content: {
        summary: "always blocks, initial blocks, sensitivity lists, always @(*), always @(posedge clk), and asynchronous reset strategies.",
        sections: [
          { type: "heading", text: "1. Procedural Block Fundamentals" },
          { type: "paragraph", text: "Procedural blocks execute when triggered by events specified in their sensitivity list. Variables assigned inside procedural blocks MUST be declared as `reg`." },
          {
            type: "code",
            language: "verilog",
            code: `// Combinational Always Block with Wildcard Sensitivity List
always @(*) begin
    out = a & b;
end

// Sequential Always Block triggered on Rising Clock Edge
always @(posedge clk or negedge rst_n) begin
    if (!rst_n)
        q <= 1'b0;  // Asynchronous active-low reset
    else
        q <= d;     // Normal D Flip-Flop update
end`
          },
          { type: "warning", title: "Incomplete Sensitivity List Danger", text: "In Verilog-1995, writing `always @(a)` without including `b` causes simulation to freeze updates until `a` changes, while synthesis synthesizes a pure combinational gate! Always use `always @(*)` or `always @*` to prevent simulation vs synthesis mismatches." }
        ],
        revisionPoints: [
          "initial blocks execute once at t=0; non-synthesizable, used in testbenches.",
          "always @(*) automatically includes all read signals in the sensitivity list.",
          "Sequential always blocks respond to posedge or negedge clock triggers."
        ]
      }
    },
    {
      id: "module-7",
      title: "Module 7: Blocking (`=`) vs Non-Blocking (`<=`) Assignments",
      duration: "75 min",
      content: {
        summary: "Execution semantics, simulation scheduling regions, race conditions, combinational usage, sequential usage, waveforms, and interview traps.",
        sections: [
          { type: "heading", text: "1. The Golden Rules of Assignments" },
          { type: "important", title: "Golden Rules for Silicon Engineers", text: "1. Use Blocking assignments (`=`) inside combinational `always @(*)` blocks.\n2. Use Non-Blocking assignments (`<=`) inside sequential `always @(posedge clk)` blocks.\n3. NEVER mix blocking and non-blocking assignments inside the same always block!\n4. NEVER assign the same variable from multiple always blocks!" },
          { type: "heading", text: "2. Execution Semantics Comparison" },
          {
            type: "code",
            language: "verilog",
            code: `// INCORRECT: Blocking (=) inside sequential block causes RACE CONDITION!
// Synthesizes to a SINGLE Flip-Flop instead of 2 cascaded flops!
always @(posedge clk) begin
    q1 = d;
    q2 = q1; // q2 gets NEW q1 immediately!
end

// CORRECT: Non-Blocking (<=) inside sequential block!
// Synthesizes to TWO cascaded D Flip-Flops (2-stage Shift Register)!
always @(posedge clk) begin
    q1 <= d;
    q2 <= q1; // q2 gets OLD q1 value before clock edge!
end`
          }
        ],
        revisionPoints: [
          "Blocking (=) updates LHS immediately during step execution.",
          "Non-Blocking (<=) evaluates RHS concurrently and defers LHS updates to end of time step.",
          "Using = in sequential blocks causes simulation race conditions."
        ]
      }
    },
    {
      id: "module-8",
      title: "Module 8: Conditional Statements (`if-else` & `case`)",
      duration: "60 min",
      content: {
        summary: "if, if-else, nested if, case, casez, casex, unique/priority concepts, and default cases to prevent latches.",
        sections: [
          { type: "heading", text: "1. Preventing Latch Inference" },
          { type: "paragraph", text: "A transparent latch is inferred when a variable assigned inside a combinational block is not assigned in every single conditional branch." },
          {
            type: "code",
            language: "verilog",
            code: `// Latch-Free Priority Encoder using default assignments
module priority_encoder_42 (
    input  wire [3:0] in,
    output reg  [1:0] code,
    output reg        valid
);
    always @(*) begin
        // Default assignments prevent latches!
        code  = 2'b00;
        valid = 1'b1;

        if (in[3])      code = 2'b11;
        else if (in[2]) code = 2'b10;
        else if (in[1]) code = 2'b01;
        else if (in[0]) code = 2'b00;
        else            valid = 1'b0;
    end
endmodule`
          }
        ],
        revisionPoints: [
          "Omitted branches in combinational if-else or case infer transparent latches.",
          "casez treats 'z' bits as don't cares; casex treats both 'x' and 'z' as don't cares.",
          "Always provide a default case in combinational case statements."
        ]
      }
    },
    {
      id: "module-9",
      title: "Module 9: Loops in Verilog",
      duration: "50 min",
      content: {
        summary: "for, while, repeat, forever loops, generate loops, and practical synthesizable examples.",
        sections: [
          { type: "heading", text: "1. Synthesizable `for` Loops" },
          { type: "paragraph", text: "For loops inside synthesizable code must have compile-time static bounds so the synthesis compiler can unroll the loop hardware instances." },
          {
            type: "code",
            language: "verilog",
            code: `// Bit Reversal using a synthesizable for loop
module bit_reverser #(parameter WIDTH = 8) (
    input  wire [WIDTH-1:0] in,
    output reg  [WIDTH-1:0] out
);
    integer i;
    always @(*) begin
        for (i = 0; i < WIDTH; i = i + 1) begin
            out[i] = in[WIDTH - 1 - i];
        end
    end
endmodule`
          }
        ],
        revisionPoints: [
          "for loops in RTL must have fixed compile-time loop bounds.",
          "forever loops run infinitely; non-synthesizable, used for testbench clock generation.",
          "repeat loops execute a fixed integer number of times in testbenches."
        ]
      }
    },
    {
      id: "module-10",
      title: "Module 10: Combinational RTL Circuits",
      duration: "65 min",
      content: {
        summary: "AND, OR, MUX, DEMUX, Decoder, Encoder, Priority Encoder, Comparator, Ripple Carry Adder, CLA Adder, ALU implementation.",
        sections: [
          { type: "heading", text: "1. Parametric Arithmetic Logic Unit (ALU)" },
          {
            type: "code",
            language: "verilog",
            code: `module alu #(parameter N = 8) (
    input  wire [N-1:0] a, b,
    input  wire [2:0]   op,
    output reg  [N-1:0] result,
    output wire         zero,
    output reg          carry
);
    always @(*) begin
        carry = 1'b0;
        case (op)
            3'b000: {carry, result} = a + b; // ADD
            3'b001: {carry, result} = a - b; // SUB
            3'b010: result = a & b;          // AND
            3'b011: result = a | b;          // OR
            3'b100: result = a ^ b;          // XOR
            3'b101: result = a << 1;         // SHL
            3'b110: result = a >> 1;         // SHR
            default: result = {N{1'b0}};
        endcase
    end
    assign zero = (result == {N{1'b0}});
endmodule`
          }
        ],
        revisionPoints: [
          "ALU combines arithmetic operations and bitwise boolean functions.",
          "Zero flag is asserted high when the output result is zero.",
          "Bit concatenation {carry, result} captures arithmetic overflow."
        ]
      }
    },
    {
      id: "module-11",
      title: "Module 11: Sequential RTL Circuits",
      duration: "70 min",
      content: {
        summary: "D Flip-Flop, reset strategies (sync vs async), enable control, binary counters, Johnson counters, ring counters, shift registers, and clock dividers.",
        sections: [
          { type: "heading", text: "1. Universal Binary Counter with Synchronous Reset & Enable" },
          {
            type: "code",
            language: "verilog",
            code: `module counter #(parameter WIDTH = 8) (
    input  wire             clk,
    input  wire             rst_n, // Asynchronous active-low reset
    input  wire             enable,
    output reg  [WIDTH-1:0] count
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            count <= {WIDTH{1'b0}};
        else if (enable)
            count <= count + 1'b1;
    end
endmodule`
          }
        ],
        revisionPoints: [
          "Asynchronous reset triggers immediately regardless of clock edge.",
          "Synchronous reset updates output state only on active clock edge.",
          "Shift registers convert parallel data into serial streams and vice versa."
        ]
      }
    },
    {
      id: "module-12",
      title: "Module 12: Finite State Machine (FSM) Design",
      duration: "80 min",
      content: {
        summary: "FSM fundamentals, Moore vs Mealy machines, state encoding (Binary, One-Hot, Gray), 2-process vs 3-process styles, Sequence Detector, Traffic Light Controller, Vending Machine.",
        sections: [
          { type: "heading", text: "1. Moore vs Mealy Architecture" },
          { type: "paragraph", text: "• **Moore Machine**: Outputs depend solely on the current state. Safe from input glitches.\n• **Mealy Machine**: Outputs depend on both current state and current inputs. Responds 1 clock cycle faster, but input glitches propagate directly to outputs." },
          { type: "heading", text: "2. Synthesizable 3-Process FSM Template" },
          {
            type: "code",
            language: "verilog",
            code: `module seq_detector_101 (
    input  wire clk, rst_n, in_bit,
    output reg  detected
);
    typedef enum logic [1:0] {S_RESET, S_1, S_10} state_t;
    reg [1:0] current_state, next_state;

    // Process 1: State Register
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) current_state <= S_RESET;
        else        current_state <= next_state;
    end

    // Process 2: Next State Logic
    always @(*) begin
        next_state = current_state;
        case (current_state)
            S_RESET: next_state = in_bit ? S_1 : S_RESET;
            S_1:     next_state = in_bit ? S_1 : S_10;
            S_10:    next_state = in_bit ? S_1 : S_RESET;
            default: next_state = S_RESET;
        endcase
    end

    // Process 3: Output Logic
    always @(*) begin
        detected = (current_state == S_10) && in_bit;
    end
endmodule`
          }
        ],
        revisionPoints: [
          "Moore outputs depend on state only; Mealy outputs depend on state + inputs.",
          "One-Hot encoding uses 1 flip-flop per state; ideal for high-speed FPGAs.",
          "3-process FSM style separates state register, next-state logic, and output logic."
        ]
      }
    },
    {
      id: "module-13",
      title: "Module 13: Memory Design (RAM, ROM & Register Files)",
      duration: "65 min",
      content: {
        summary: "Single-port RAM, Dual-port RAM, ROM, Register File, synchronous RAM, asynchronous read, memory initialization with $readmemh/$readmemb.",
        sections: [
          { type: "heading", text: "1. Synchronous Dual-Port Block RAM" },
          {
            type: "code",
            language: "verilog",
            code: `module dual_port_ram #(
    parameter DATA_WIDTH = 8,
    parameter ADDR_WIDTH = 6
) (
    input  wire                  clk,
    input  wire                  we,
    input  wire [ADDR_WIDTH-1:0] waddr, raddr,
    input  wire [DATA_WIDTH-1:0] din,
    output reg  [DATA_WIDTH-1:0] dout
);
    reg [DATA_WIDTH-1:0] mem [(1<<ADDR_WIDTH)-1:0];

    always @(posedge clk) begin
        if (we)
            mem[waddr] <= din;
        dout <= mem[raddr];
    end
endmodule`
          }
        ],
        revisionPoints: [
          "$readmemh(\"init.hex\", mem) loads hex files into memory arrays at simulation initialization.",
          "Block RAMs (BRAM) in FPGAs require synchronous read operations.",
          "Register files provide multi-port simultaneous read and write capabilities."
        ]
      }
    },
    {
      id: "module-14",
      title: "Module 14: Verilog Functions & Tasks",
      duration: "50 min",
      content: {
        summary: "Function syntax, task syntax, input/output arguments, return values, functions vs tasks, synthesizability rules, and practical helper utilities.",
        sections: [
          { type: "heading", text: "1. Functions vs Tasks Comparison" },
          {
            type: "table",
            headers: ["Feature", "Verilog Function", "Verilog Task"],
            rows: [
              ["Execution Time", "Executes in 0 simulation time", "Can contain time delays (#10, @posedge)"],
              ["Return Value", "Returns a single value", "Can have multiple input/output/inout ports"],
              ["Synthesizability", "Synthesizable if purely combinational", "Synthesizable only if no delays"],
              ["Calling Ability", "Can call other functions", "Can call other tasks and functions"]
            ]
          }
        ],
        revisionPoints: [
          "Functions execute in zero simulation time and return a single value.",
          "Tasks can contain time delays (#delay, @posedge) and drive multiple outputs.",
          "Automatic functions/tasks dynamically allocate memory per call."
        ]
      }
    },
    {
      id: "module-15",
      title: "Module 15: Parameterized Generate Constructs",
      duration: "55 min",
      content: {
        summary: "generate, genvar, conditional generate (if-generate, case-generate), loop generate, and building scalable parameterized hardware.",
        sections: [
          { type: "heading", text: "1. Loop Generate for Scalable Hardware" },
          {
            type: "code",
            language: "verilog",
            code: `// Parameterized N-bit Ripple Carry Adder using Generate Loop
module ripple_carry_adder #(parameter N = 4) (
    input  wire [N-1:0] a, b,
    input  wire         cin,
    output wire [N-1:0] sum,
    output wire         cout
);
    wire [N:0] carry;
    assign carry[0] = cin;
    assign cout     = carry[N];

    genvar i;
    generate
        for (i = 0; i < N; i = i + 1) begin : fa_loop
            full_adder fa (
                .a(a[i]), .b(b[i]), .cin(carry[i]),
                .sum(sum[i]), .cout(carry[i+1])
            );
        end
    endgenerate
endmodule`
          }
        ],
        revisionPoints: [
          "genvar is an integer variable evaluated exclusively at compile-time elaboration.",
          "generate blocks replicate module instances or conditional RTL paths.",
          "Generates enable highly reusable, parameterized silicon IP cores."
        ]
      }
    },
    {
      id: "module-16",
      title: "Module 16: Testbench Development & Verification",
      duration: "70 min",
      content: {
        summary: "Testbench structure, stimulus generation, DUT instantiation, clock & reset generators, system tasks ($display, $monitor, $time, $finish, $dumpfile, $dumpvars), self-checking testbenches.",
        sections: [
          { type: "heading", text: "1. Self-Checking Testbench Template" },
          {
            type: "code",
            language: "verilog",
            code: `\`timescale 1ns/1ps

module tb_counter;
    reg        clk, rst_n, enable;
    wire [7:0] count;

    // Instantiate Device Under Test (DUT)
    counter #(.WIDTH(8)) dut (
        .clk(clk), .rst_n(rst_n), .enable(enable), .count(count)
    );

    // Clock Generator (100MHz = 10ns period)
    always #5 clk = ~clk;

    initial begin
        clk = 0; rst_n = 0; enable = 0;
        $dumpfile("counter_tb.vcd"); $dumpvars(0, tb_counter);

        #15 rst_n = 1; // Release reset
        #10 enable = 1;

        #100;
        if (count == 8'd10)
            $display("[PASS] Counter verified successfully!");
        else
            $display("[FAIL] Expected 10, got %d", count);

        $finish;
    end
endmodule`
          }
        ],
        revisionPoints: [
          "`timescale 1ns/1ps sets simulation time unit and precision.",
          "$dumpfile and $dumpvars generate VCD files for GTKWave waveform viewing.",
          "Self-checking testbenches compare DUT outputs against golden models automatically."
        ]
      }
    },
    {
      id: "module-17",
      title: "Module 17: Simulation & Debugging Waveforms",
      duration: "60 min",
      content: {
        summary: "Compilation, elaboration, simulation phases, waveform analysis, X propagation, Z debugging, race conditions, and common simulation mistakes.",
        sections: [
          { type: "heading", text: "1. Simulation Event Regions & Debugging" },
          { type: "paragraph", text: "Verilog event simulator schedules events into distinct regions per time step: Active, Inactive, Non-Blocking Assign (NBA), Postponed." },
          { type: "warning", title: "Debugging 'X' Propagation", text: "Uninitialized registers or floating inputs propagate 'X' values across downstream combinational logic. Check reset assertion duration and uninitialized RAM words!" }
        ],
        revisionPoints: [
          "Compilation checks syntax; Elaboration builds hierarchy; Simulation evaluates events.",
          "NBA queue holds non-blocking assignment updates till the end of the time step.",
          "Floating wire inputs evaluate to Z; uninitialized reg data types default to X."
        ]
      }
    },
    {
      id: "module-18",
      title: "Module 18: Synthesis & RTL Coding Rules",
      duration: "65 min",
      content: {
        summary: "RTL synthesis concept, inferred hardware mapping, synthesizable vs non-synthesizable constructs, latch inference, flip-flop inference, memory inference, synthesis warnings.",
        sections: [
          { type: "heading", text: "1. Non-Synthesizable Verilog Constructs" },
          {
            type: "table",
            headers: ["Construct", "Usage", "Why Non-Synthesizable?"],
            rows: [
              ["#delay (#10)", "Time delays", "Physical silicon gates have fixed intrinsic cell delays"],
              ["initial block", "Testbench setup", "Silicon power-on states require explicit reset lines"],
              ["$display / $finish", "Console reporting", "Simulation software commands have no hardware equivalent"],
              ["=== / !===", "Case equality with X/Z", "Gates cannot detect X/Z states explicitly in silicon"]
            ]
          }
        ],
        revisionPoints: [
          "Synthesis tools transform high-level RTL into technology gate netlists.",
          "Always eliminate synthesis warnings regarding inferred latches and unused inputs.",
          "Sensitivity list omissions lead to functional post-synthesis mismatches."
        ]
      }
    },
    {
      id: "module-19",
      title: "Module 19: RTL Coding Guidelines & Clean Hardware Design",
      duration: "60 min",
      content: {
        summary: "Clean RTL style, reset strategies (synchronous vs asynchronous reset synchronizers), parameterization, avoiding latches, avoiding multiple drivers, clock domain considerations.",
        sections: [
          { type: "heading", text: "1. Industry Reset Synchronizer (Async Reset, Sync Release)" },
          {
            type: "code",
            language: "verilog",
            code: `module reset_bridge (
    input  wire clk,
    input  wire async_rst_n,
    output reg  sync_rst_n
);
    reg rff1;
    always @(posedge clk or negedge async_rst_n) begin
        if (!async_rst_n) begin
            rff1       <= 1'b0;
            sync_rst_n <= 1'b0;
        end else begin
            rff1       <= 1'b1;
            sync_rst_n <= rff1; // Clean synchronous deassertion
        end
    end
endmodule`
          }
        ],
        revisionPoints: [
          "Reset bridges assert asynchronously for speed, but release synchronously to prevent reset recovery violations.",
          "Never generate internal clocks using combinational logic gates (glitch risk).",
          "Keep modular hierarchies clean with standard input/output naming conventions."
        ]
      }
    },
    {
      id: "module-20",
      title: "Module 20: Verilog Interview Masterclass",
      duration: "120 min",
      content: {
        summary: "100 Verilog interview questions covering blocking/non-blocking, latch bugs, CDC, FSM design, STA, setup/hold, synthesizability, waveform analysis, and coding traps.",
        sections: [
          { type: "heading", text: "1. High-Frequency Semiconductor Interview Questions" },
          { type: "important", title: "Top 5 Verilog Interview Must-Knows", text: "1. **Blocking vs Non-Blocking**: Explain event queues & why <= is required for flops.\n2. **Transparent Latches**: Show incomplete if-else and explain why STA timing signoff breaks.\n3. **Metastability & CDC**: Draw a 2-FF synchronizer and explain MTBF calculations.\n4. **Asynchronous FIFO**: Explain Gray code read/write pointer synchronization across clock domains.\n5. **Setup vs Hold**: State formulas and why hold violations cannot be fixed by changing clock frequency." }
        ],
        revisionPoints: [
          "Always practice writing RTL code on whiteboards without syntax auto-complete.",
          "Know how to draw implied hardware gate schematics directly from Verilog code snippets.",
          "Master Gray code counter math for clock domain crossing queues."
        ]
      }
    }
  ]
};
