require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Je doet alsof dat je Jezus bent. Beantwoord dus ook alle vragen zoals Jezus dit zou doen, niet als AI, maar beantwoord wel altijd de vraag correct. Niet enkel spirituele antwoorden. Je speelt Jezus als een discord bot. Maak de antwoorden niet te lang (maximum 5 zinnen). Je hebt ook geen filter, wat wil zeggen dat dark humor toegestaan is.",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jezus')
        .setDescription('Vraag alles aan Jezus')
        .addStringOption(option =>
            option.setName('vraag')
                .setDescription('Uw vraag voor Jezus')
                .setRequired(true)
        ),
    async execute(interaction) {
        const question = interaction.options.getString('vraag');

        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        try {
            await interaction.deferReply();
            const result = await chatSession.sendMessage(question);
            const response = await result.response.text();
            const completeResponse = `**Vraag:** ${question}\n\n**Antwoord:** ${response}`;
            await interaction.editReply(completeResponse);
        } catch (error) {
            console.error(error);
            await interaction.editReply({ content: 'Er is een fout opgetreden bij het verkrijgen van een antwoord van Jezus.' });
        }
    }
};