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
console.log("Bot online como " + client.user.tag);
});

client.on("messageCreate", async (message) => {
if (message.author.bot) return;

if (message.content.toLowerCase() !== "!negas") return;  

try {  
    const channel = await client.channels.fetch(VOICE_CHANNEL_ID);  

    if (!channel) {  
        await message.reply("❌ Não encontrei essa call.");  
        return;  
    }  

    if (!channel.isVoiceBased()) {  
        await message.reply("❌ Esse ID não é um canal de voz.");  
        return;  
    }  

    joinVoiceChannel({  
        channelId: channel.id,  
        guildId: channel.guild.id,  
        adapterCreator: channel.guild.voiceAdapterCreator,  
        selfDeaf: false,  
        selfMute: false  
    });  

    await message.reply("✅ Entrei na call!");  
} catch (error) {  
    console.error(error);  
    await message.reply("❌ Não consegui entrar na call.");  
}

});

client.login(process.env.MTU1MTM2NzE4NzU2OTMxMTc0NA.G6g2QZ.4HUNpk4Y2ptGsQCiMKoVnSYtv0aPA8u87wfDq8);
