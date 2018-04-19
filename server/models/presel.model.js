const Sequelize = require('Sequelize')
const sequelize = require('../../config/mssql')
const PreSel = sequelize.define('Pre_SelTh_Rec', {
	'st_id': { type: Sequelize.STRING },
	'th_id': { type: Sequelize.INTEGER },
	'psr_state': { type: Sequelize.STRING },
	'mt_id': { type: Sequelize.STRING }
})
function crtateSel(payload) {
	return PreSel.create({
	'st_id': payload.st_id,
	'th_id': payload.th_id,
	'mt_id': payload.mt_id
})
}


module.exports = { PreSel, crtateSel }