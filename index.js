const Discord = require('discord.js')
const bot = new Discord.Client()
const TOKEN = 'ODY4MTQwMjg4MDU5NzcyOTc5.YPrUpQ.ULNclEaWCJDBcELvqZobIp3fnHc'
const prefix = '.'

bot.on('ready', () => {
    console.log('Der Bot ist nun Online!')

    bot.user.setPresence({
        activity: {
            name: 'Suizid Squad',
            type: 'WATCHING',
        }
    })
})
bot.on('message' , (message) =>{
    if(!message.member.user.bot && message.guild){
        if(message.content == '!test'){
            message.channel.send('Test!')
            console.log(message.member.user,tag + ' executed command !test!')
        }else if(message.content.startsWith('.avatar')){
            if(message.mentions.user.first()){
                var user = message.mentions.users.first()
                var attachment = new Discord.MessageAttachment(user.avatarURL())
                message.reply(attachment)
            }else{
            var attachment = new Discord.MessageAttachment(message.member.user.avatarURL())
            message.reply(attachment)
            }
            console.log(message.member.user.tag + 'executed command !avatar!')
            }
}})

bot.on('message', async message => {
    let parts = message.content.split(" ");

    if(parts[0] == '.help') {
        message.channel.send('**Hier meine Befehle**\n**.clear**/**.purge** - Löscht bis zu 100 Nachrichten\n**.member** - Sagt dir, wieviele Mitglieder der Server hat, auf dem du dich befindest.\n**.owner** - Sagt dir, wer der die Eigentumsrechte von einem Server hat.\n**.userinfo <@>** - Damit kannst du dir die Benutzerinfo von dir oder jmd anderes anzeigen lassen')
    }
    else if(parts[0] == '.clear' || parts[0] == '.purge') {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Du brauchst die Berechtigung, Nachrichten zu löschen!')
        if(!parts[1]) return message.channel.send('Du musst angeben, wieviele Nachrichten du löschen möchtest!')
        if(isNaN(parts[1])) return message.channel.send('Die Angabe, wieviele Nachrichten du löschen möchtest, muss eine Zahl sein!')
        if(parts[1] > 50) return message.channel.send('Du kannst nicht mehr als 50 Nachrichten löschen!')
        if(parts[1] < 2) return message.channel.send('Du kannst nicht weniger als 2 Nachricht löschen')
        message.channel.bulkDelete(parts[1])
        message.channel.send(`Ich habe erfolgreich **${parts[1]}** Nachrichten gelöscht!`).then(m => m.delete({timeout: 3000}))
    }})






bot.login(Tprocess.env.token)