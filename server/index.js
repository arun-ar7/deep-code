const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
// const fetch = require("node-fetch");
const { execSync, exec } = require("child_process");
const app = express();

app.use(cors());
app.use(express.json());
const tempDB = [
  {
    email: "abc@abc.com",
    password: "abc",
  },
];

app.post("/login", (req, res) => {
  //hardcoded logics
  for (const credentials of tempDB) {
    if (
      req.body.email == credentials.email &&
      req.body.password === credentials.password
    ) {
      res.status(200).json({
        email: req.body.email,
      });
      return;
    }
  }
  res.status(401).json({
    message: "unauthorized",
  });
});

app.post("/register", (req, res) => {
  //hardcoded logics
  if (req.body.email && req.body.password && req.body.confirmPassword) {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(req.body.email);
    if (!result) {
      res.status(400).json({ message: "Must email's validation" });
    } else {
      if (req.body.password === req.body.confirmPassword) {
        tempDB.push({ email: req.body.email, password: req.body.password });
        res.status(200).json({
          email: req.body.email,
        });
      } else {
        res.status(400).json({
          message: "Password and confirm password must be same",
        });
      }
    }
  } else {
    res.status(400).json({
      message: "All fields required",
    });
  }
});

app.post("/run", (req, res) => {
  console.log(req.body);
});

app.post("/execute", async (req, res) => {
  let result;
  const { code, inputs, language } = req.body;
  console.log(`code : ${code}, inputs : ${inputs}, language : ${language}`);
  try {
    let result = "";

    if (language === "java") {
      // Compile and execute Java code
      const userJavaCode = code;

      // Create a temporary Java file
      const javaFilename = "Main.java";
      const fs = require("fs");
      fs.writeFileSync(javaFilename, userJavaCode);

      // Compile and execute the Java program
      // exec(`javac ${javaFilename} && java Main`, (error, stdout, stderr) => {
      //   if (error) {
      //     console.error("Error:", error);
      //     return;
      //   }

      //   console.log("Java Output:", stdout);
      //   console.error("Java Error Output:", stderr);

      //   // Clean up: Delete the temporary Java file
      //   fs.unlinkSync(javaFilename);
      // });

      // Provide input to the Java program
      // const input = "Alice\n"; // Replace with your desired input
      const process = exec(
        `javac ${javaFilename} && java Main`,
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error:", error);
            res.status(400).send({ message: error });
            return;
          }

          console.log("Java Output:", stdout);
          res.status(200).send(stdout);
          console.error("Java Error Output:", stderr);

          // Clean up: Delete the temporary Java file
          fs.unlinkSync(javaFilename);
        }
      );

      process.stdin.write(inputs);
      process.stdin.end();
    } else if (language === "c") {
      // Compile and execute C code
      result = execSync(`gcc -o output - && echo "${inputs}" | ./output`, {
        input: code,
      }).toString();
    } else if (language === "javascript") {
      // Execute JavaScript code using Node.js
      // (assuming input is not applicable for JavaScript)
      try {
        // Capture console.log() output
        let capturedOutput = "";
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          capturedOutput += args.join(" ") + "\n";
        };

        // Execute the front-end JavaScript code
        try {
          eval(code);
          console.log = originalConsoleLog;
          console.log("Captured Output:\n", capturedOutput);
        } catch (error) {
          console.error("Error:", error);
        }

        // Restore the original console.log()
        res.status(200).json(capturedOutput);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    } else {
      throw new Error("Unsupported language");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/test", (req, res) => {
  // const axios = require("axios");
  // User-provided Java code (received from the front-end)
});

app.listen(8080, (err) => {
  if (!err) {
    console.log("Server Started successfully at 8080");
  } else {
    console.log("There is an error in starting the server");
  }
});
