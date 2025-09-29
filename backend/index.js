// Path: our-shop-backend/server.js

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const twilio = require("twilio");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // ---------------- MongoDB ----------------
// mongoose.connect("mongodb://127.0.0.1:27017/krishnaPaintAndHardwareDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   email: String,
//   otp: Number,
// });

// const User = mongoose.model("User", userSchema);

// // ---------------- Twilio ----------------
// // Replace these with your Twilio credentials
// const accountSid = "AC1301ad5a156ddb5d6370fff73eb0b15f";
// const authToken = "17a2b97537636988f1a87700656c6acb";
// const krishnaPaintAndHardware = "+1 510 439 9577"; // e.g., "+1234567890"
// const client = new twilio(accountSid, authToken);

// // ---------------- Routes ----------------

// // Request OTP
// app.post("/request-otp", async (req, res) => {
//   const { name, phone, email } = req.body;
//   if (!name || !phone || !email)
//     return res.status(400).json({ success: false, message: "All fields required" });

//   const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

//   // Save user + OTP in MongoDB
//   await User.findOneAndUpdate(
//     { email },
//     { name, phone, email, otp },
//     { upsert: true }
//   );

//   // Send OTP via Twilio SMS
//   try {
//     await client.messages.create({
//       body: `Your OTP for Krishna Paint & Hardware is ${otp}. Do not share it with anyone.`,
//       from: krishnaPaintAndHardware,
//       to: phone
//     });

//     console.log(`OTP for ${email}: ${otp}`);
//     res.json({ success: true, message: `OTP sent to ${phone}` });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ success: false, message: "SMS failed to send" });
//   }
// });

// // Verify OTP
// app.post("/verify-otp", async (req, res) => {
//   const { email, otp } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) return res.status(404).json({ success: false, message: "User not found" });

//   if (user.otp === Number(otp)) {
//     await User.findOneAndUpdate({ email }, { otp: null }); // clear OTP
//     return res.json({ success: true, message: "Login successful" });
//   } else {
//     return res.status(401).json({ success: false, message: "Invalid OTP" });
//   }
// });

// // Start server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const User = require("./models/User");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/krishnaPaintAndHardwareDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ Error: " + err));

// // ✅ API for saving user data
// app.post("/api/user", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.json({ message: "✅ User details saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "❌ Error saving details", error });
//   }
// });

// //  Start Server
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });
