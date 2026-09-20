const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});

const VOICE_CHANNEL_ID = "1548062908557172786";

client.once("ready", () => {
    console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() !== "!negas") return;

    try {
        const channel = await client.channels.fetch(VOICE_CHANNEL_ID);

        if (!channel || !channel.isVoiceBased()) {
            return message.reply("❌ Canal de voz não encontrado.");
        }

        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: false
        });

        message.reply("✅ Entrei na call!");
    } catch (error) {
        console.error(error);
        message.reply("❌ Não consegui entrar na call.");
    }
});

client.login(process.env.MTU1MTM2NzE4NzU2OTMxMTc0NA.G6g2QZ.4HUNpk4Y2ptGsQCiMKoVnSYtv0aPA8u87wfDq8;
