// Learning Roadmaps Data
export const roadmapsData = [
  {
    id: "beginner-vlsi-path",
    title: "Beginner VLSI Path",
    description: "Ideal starting point for students and engineers transitioning into VLSI and chip design.",
    color: "from-blue-500 to-indigo-600",
    steps: [
      { name: "Digital Electronics", desc: "Gates, K-Maps, Boolean Algebra, Counters, FSM" },
      { name: "Semiconductor Fundamentals", desc: "P-N Junctions, MOSFET Physics, FinFET, GAAFET" },
      { name: "CMOS & VLSI Fundamentals", desc: "CMOS Inverter, VTC, Power Dissipation, Layout Rules" },
      { name: "Verilog HDL Masterclass", desc: "Synthesizable Verilog, Blocking vs Non-Blocking, Modules" },
      { name: "Verilog RTL Design", desc: "FIFOs, Handshaking, Pipelining, Arbiters, CDC Synchronizers" },
      { name: "SystemVerilog Basics", desc: "Logic types, Structs, Interfaces, Assertions, OOP" }
    ]
  },
  {
    id: "rtl-design-path",
    title: "RTL Design & Architecture Path",
    description: "Designed for aspiring RTL Design Engineers working on CPUs, GPUs, and SoC peripherals.",
    color: "from-cyan-500 to-teal-600",
    steps: [
      { name: "Digital Electronics", desc: "Boolean Simplification, Flip-Flops, Combinational/Sequential" },
      { name: "Verilog HDL", desc: "Syntax, Procedural blocks, Synthesis rules, Waveform debug" },
      { name: "RTL Design Architectures", desc: "Valid/Ready protocols, Async FIFO, Multi-flop CDC" },
      { name: "Computer Architecture", desc: "RV32I ISA, 5-stage pipeline, Hazard forwarding, Caches" },
      { name: "RISC-V CPU Core RTL", desc: "32-bit RISC-V Single-cycle & Pipelined CPU design" },
      { name: "Advanced Projects", desc: "AXI4-Lite memory controller, APB slave, Sobel accelerator" }
    ]
  },
  {
    id: "verification-path",
    title: "Digital Verification Path",
    description: "Structured path for Design Verification (DV) engineers building testbenches with SV & UVM.",
    color: "from-purple-500 to-pink-600",
    steps: [
      { name: "Verilog Testbenches", desc: "Clock generation, stimulus, $display, $monitor, VCD dump" },
      { name: "SystemVerilog OOP", desc: "Classes, Inheritance, Virtual methods, Polymorphism" },
      { name: "Constrained Random Verification", desc: "Randomization constraints, pre/post_randomize" },
      { name: "Assertions & Functional Coverage", desc: "SVA properties, Covergroups, Coverpoints, Crosses" },
      { name: "UVM Framework", desc: "UVM Components, Sequencers, Drivers, Scoreboards, Phasing" }
    ]
  },
  {
    id: "fpga-path",
    title: "FPGA Engineering Path",
    description: "Specialized roadmap for FPGA hardware designers targetting Xilinx Vivado and Intel Quartus.",
    color: "from-amber-500 to-orange-600",
    steps: [
      { name: "Digital Fundamentals", desc: "Combinational and Sequential logic design" },
      { name: "Verilog HDL", desc: "RTL design, FSM templates, Testbenches" },
      { name: "FPGA Hardware Architecture", desc: "SRAM LUT6, CLBs, Carry chains, BRAM, DSP48" },
      { name: "Vivado Toolchain & XDC", desc: "Timing constraints, Synthesis, Implementation, Bitstream" },
      { name: "FPGA Projects", desc: "UART loopback, SPI master, VGA video, DSP filters" }
    ]
  }
];
