require("../utils/firebaseAdmin");
const { getAuth } = require("firebase-admin/auth");

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // User find by email
    const userRecord = await getAuth().getUserByEmail(email);

    // Update password
    await getAuth().updateUser(userRecord.uid, {
      password: newPassword,
    });

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};