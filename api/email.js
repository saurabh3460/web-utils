const { verifyEmailToken } = require("../email/config");
let ConfirmEmail = model => async (req, res) => {
  const data = await verifyEmailToken(req.params.token);
  console.log(data.email);
  let result;
  const user = await model.findOne({
    where: { email: data.email }
  });
  if (!user) result = false;
  else {
    const Allowuser = await user.update({ can_login: true });
    result = Allowuser.can_login;
  }
  res.render("email/email_confirm", { result });
};
module.exports = { ConfirmEmail };

// call it like thise ConfirmEmail(model)()
