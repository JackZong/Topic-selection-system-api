const Sequelize = require('Sequelize')
const sequelize = require('../../config/mssql')
const Def_St_Th = sequelize.define('Def_St_Th', {
  'st_id': { type: Sequelize.STRING },
  'th_id': { type: Sequelize.INTEGER },
  'mentor_score': { type: Sequelize.INTEGER },
  'judge_score': { type: Sequelize.INTEGER },
  'committee_score': { type: Sequelize.INTEGER },
  'is_pass': { type: Sequelize.STRING },
  'mt_id': { type: Sequelize.STRING }
},{
  tableName: 'Def_St_Th',
  underscored: true
})
function list(payload) {
  return Def_St_Th.findAll({
  	attributes: ['log_id','log_userid','log_username','log_optype','log_logintime','log_outtime','log_loginip'],
  	where: {'log_userid': payload.username},
  	raw: true,
    order: [['log_id','DESC']]
  })
}
module.exports = { list, Def_St_Th }