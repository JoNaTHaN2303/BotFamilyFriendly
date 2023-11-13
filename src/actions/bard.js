const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios')

const bardCommand = new SlashCommandBuilder()
    .setName('jezus')
    .setDescription('Vraag alles aan Jezus')
    .addStringOption(option => option.setName('vraag').setDescription('Uw vraag voor Jezus').setRequired(true));

module.exports =  {
    data: bardCommand,

    async execute (interaction) {
        await interaction.deferReply({ ephemeral: true});

        const options = interaction.options;
        const question = options.getString('vraag');

        console.log('Beantwoord de volgende vraag alsof je jezus bent (en enkel als jezus, niet als bard): ' + question)

        const input = {
            method: 'GET',
            url: 'https://google-bard-best-api1.p.rapidapi.com/ask',
            params: {
              question: 'Beantwoord de volgende vraag alsof je jezus bent: ' + question,
              'bard___Secure-1PSID_cookie_value': 'cQhiyAMhekfMEmLeHyFekK9o8gXCmaq1Xep584eP8SFRE-wVlCO_aP0jlXoZcukOWHoCRg.',
              'bard___Secure-1PSIDTS_cookie_value': 'em6gMAqYYFT3uQGu/A21bxZaN5CQv6VaVF',
              'bard___Secure-1PSIDCC_cookie_value': 'ACA-OxNhp0Oy9Ca2egtyiR9E0lArrOGCY6WChHxuvOcS4NASfp1237Ly5VstG3zuzD8XXf1xYA'
            },
            headers: {
              'X-RapidAPI-Key': '2715aca4e6msh4ad94d616a7f425p184972jsndecb028df353',
              'X-RapidAPI-Host': 'google-bard-best-api1.p.rapidapi.com'
            }
          };

        try {
            const response = await axios.request(input);
            console.log('response:')
            console.log(response.data.response.drafts[0])
            
            const description = response.data.response.drafts[0].join('\n');
            const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setDescription(description);

            await interaction.editReply({ embeds: [embed] })
        } catch (error) {
            console.error(error);
            return await interaction.editReply({ content: 'Jezus is unavailable at the moment, come back later with some wine.'})
        }
    }
}