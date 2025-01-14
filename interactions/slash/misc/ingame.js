// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const ingame_embeds = require('../../buttons/category/ingame/ingame_embeds');
const buttons = require('../../buttons/category/ingame/v51/v51_buttons')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ingame')
        .setDescription('Info on how to solve ingame issues'),
    async execute(interaction,client ) {
        await interaction.reply({embeds: [embeds.v51],components: [buttons.v51],ephemeral: true });
    },
};