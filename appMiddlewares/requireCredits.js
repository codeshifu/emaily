module.exports = (req, res, next) => {
  const {credits = 0} = req.user
  if (!credits || credits < 1) return res.status(403).send('Not enough credits')
  return next()
}
