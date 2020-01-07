// get baby
const getBaby = async (req, res) => {
  const babyId = req.body.babyId || req.params.babyId;
  if (!babyId) return null;
  let baby = await res.user.getBabyInformation({
    where: { id: babyId },
    limit: 1
  });
  return baby ? baby[0] : null;
};

module.exports = {
  getBaby
};
