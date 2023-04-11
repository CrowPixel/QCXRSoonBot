/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');

module.exports = {
	id: "immersivemc_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.send_logs], components: []});
		return;
	},
};