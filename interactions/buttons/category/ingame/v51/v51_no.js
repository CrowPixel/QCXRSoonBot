
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');
const buttons = require('../mods/mods_buttons');

module.exports = {
	id: "v51_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.mods], components: [buttons.mods]});
		return;
	},
};