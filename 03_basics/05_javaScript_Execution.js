/*
========================================================
         JAVASCRIPT EXECUTION CONTEXT NOTES
========================================================


WHAT IS EXECUTION CONTEXT ?

-> Execution Context means:
   "Environment where JavaScript code is executed."

It contains:
1. Variables
2. Functions
3. Scope
4. this keyword
5. Memory allocation
6. Execution thread



========================================================
TYPES OF EXECUTION CONTEXT
========================================================

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context



--------------------------------------------------------
1. GLOBAL EXECUTION CONTEXT
--------------------------------------------------------

-> Created first whenever JavaScript program starts.

-> Only ONE global execution context exists.

-> In browser:

        this === window

-> In Node.js:

        this === global



--------------------------------------------------------
2. FUNCTION EXECUTION CONTEXT
--------------------------------------------------------

-> Whenever a function is called,
   JavaScript creates a NEW execution context.

Example:

        myFunc()

-> Every function call gets:
   1. New memory space
   2. New execution thread



--------------------------------------------------------
3. EVAL EXECUTION CONTEXT
--------------------------------------------------------

-> Created when using eval()

Example:

        eval("console.log('Hello')")

-> Rarely used in real projects.



========================================================
JAVASCRIPT EXECUTES CODE IN TWO PHASES
========================================================


--------------------------------------------------------
PHASE 1 -> MEMORY CREATION PHASE
(Creation Phase)
--------------------------------------------------------

-> In this phase memory is allocated.

-> No actual execution happens here.

RULES:

1. Variables -> undefined
2. Functions -> full definition stored


Example:

        var a = 10

During memory phase:

        a -> undefined



--------------------------------------------------------
PHASE 2 -> EXECUTION PHASE
--------------------------------------------------------

-> Actual code execution happens.

1. Values assigned
2. Calculations happen
3. Functions called
4. Operations performed



========================================================
COMPLETE EXAMPLE
========================================================


1   let val1 = 10
2   let val2 = 5
3
4   function addNum(num1, num2){
5       let total = num1 + num2
6       return total
7   }
8
9   let result1 = addNum(val1, val2)
10  let result2 = addNum(10, 2)



========================================================
STEP 1 -> GLOBAL EXECUTION CONTEXT CREATED
========================================================

-> JavaScript first creates:

        Global Execution Context

-> In browser:

        this -> window



========================================================
STEP 2 -> MEMORY CREATION PHASE (GLOBAL)
========================================================

JavaScript scans whole code before execution.


--------------------------------------------------------
LINE 1
--------------------------------------------------------

        let val1 = 10

Memory Allocation:

        val1 -> undefined



--------------------------------------------------------
LINE 2
--------------------------------------------------------

        let val2 = 5

Memory Allocation:

        val2 -> undefined



--------------------------------------------------------
LINE 4
--------------------------------------------------------

        function addNum(num1, num2)

Entire function definition stored:

        addNum -> function definition

NOTE:
Functions are fully hoisted.



--------------------------------------------------------
LINE 9
--------------------------------------------------------

        let result1

Memory Allocation:

        result1 -> undefined



--------------------------------------------------------
LINE 10
--------------------------------------------------------

        let result2

Memory Allocation:

        result2 -> undefined



--------------------------------------------------------
FINAL MEMORY STATE AFTER MEMORY PHASE
--------------------------------------------------------

        val1      -> undefined
        val2      -> undefined
        addNum    -> function definition
        result1   -> undefined
        result2   -> undefined



========================================================
STEP 3 -> EXECUTION PHASE STARTS
========================================================


--------------------------------------------------------
LINE 1 EXECUTES
--------------------------------------------------------

        let val1 = 10

Now:

        val1 -> 10



--------------------------------------------------------
LINE 2 EXECUTES
--------------------------------------------------------

        let val2 = 5

Now:

        val2 -> 5



--------------------------------------------------------
LINE 4
--------------------------------------------------------

Function already stored.

No execution yet.



========================================================
LINE 9 EXECUTES
========================================================

        let result1 = addNum(val1, val2)

becomes:

        addNum(10, 5)


NOW JavaScript creates:

        NEW FUNCTION EXECUTION CONTEXT



========================================================
FUNCTION EXECUTION CONTEXT FOR addNum(10,5)
========================================================



--------------------------------------------------------
PHASE 1 -> MEMORY PHASE (FUNCTION)
--------------------------------------------------------

Parameters and local variables get memory.


Memory Allocation:

        num1  -> undefined
        num2  -> undefined
        total -> undefined



--------------------------------------------------------
FUNCTION MEMORY STATE
--------------------------------------------------------

        num1   -> undefined
        num2   -> undefined
        total  -> undefined



--------------------------------------------------------
PHASE 2 -> EXECUTION PHASE (FUNCTION)
--------------------------------------------------------


Parameter Assignment:

        num1 = 10
        num2 = 5



--------------------------------------------------------
LINE 5 EXECUTES
--------------------------------------------------------

        let total = num1 + num2

Calculation:

        10 + 5 = 15

Now:

        total = 15



--------------------------------------------------------
LINE 6 EXECUTES
--------------------------------------------------------

        return total

Returns:

        15


Now:

        result1 = 15



--------------------------------------------------------
IMPORTANT
--------------------------------------------------------

-> After function completes,
   Function Execution Context gets DELETED
   from Call Stack.

-> Only returned value survives.



========================================================
LINE 10 EXECUTES
========================================================

        let result2 = addNum(10, 2)

Again NEW execution context created.



========================================================
FUNCTION EXECUTION CONTEXT FOR addNum(10,2)
========================================================



--------------------------------------------------------
MEMORY PHASE
--------------------------------------------------------

        num1  -> undefined
        num2  -> undefined
        total -> undefined



--------------------------------------------------------
EXECUTION PHASE
--------------------------------------------------------

        num1 = 10
        num2 = 2



Calculation:

        total = 10 + 2
        total = 12



Return:

        return 12


Now:

        result2 = 12



========================================================
FINAL GLOBAL MEMORY STATE
========================================================

        val1 = 10
        val2 = 5
        result1 = 15
        result2 = 12



========================================================
CALL STACK FLOW
========================================================

        Global Execution Context
                    ↓
              addNum(10,5)
                    ↓
                 Deleted
                    ↓
              addNum(10,2)
                    ↓
                 Deleted



========================================================
IMPORTANT INTERVIEW POINTS
========================================================


--------------------------------------------------------
1. FUNCTIONS ARE FULLY HOISTED
--------------------------------------------------------

Example:

        sayHello()

        function sayHello(){
            console.log("Hello")
        }

-> Works because function definition is stored
   during memory phase.



--------------------------------------------------------
2. VARIABLES GET undefined
--------------------------------------------------------

Example:

        console.log(a)

        var a = 10

Output:

        undefined

Reason:

During memory phase:

        a -> undefined



--------------------------------------------------------
3. EVERY FUNCTION CALL CREATES
   A NEW EXECUTION CONTEXT
--------------------------------------------------------

-> New Memory
-> New Variables
-> New Execution Thread



--------------------------------------------------------
4. AFTER FUNCTION EXECUTION
   CONTEXT GETS DELETED
--------------------------------------------------------

-> Only returned value remains.



========================================================
VISUAL FLOW
========================================================

        JS Program Starts
                 ↓
     Global Execution Context
                 ↓
      Memory Creation Phase
                 ↓
          Execution Phase
                 ↓
        Function Call Happens
                 ↓
    Function Execution Context
                 ↓
      Memory Creation Phase
                 ↓
          Execution Phase
                 ↓
             return value
                 ↓
        Context gets deleted



========================================================
MOST IMPORTANT LINE
========================================================

-> JavaScript first allocates memory,
   then executes code.

This single line explains the whole
Execution Context concept.

========================================================
*/
























