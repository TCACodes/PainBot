const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "membercount",
  aliases: ["members"],
  description: "Tells you the amount of members that are in your server.",
  async execute(message, args, client) {
    let { guild } = message;
    let memberCount = guild.memberCount;

    const embed = new MessageEmbed()
      .setTitle("Members")
      .setDescription(memberCount)
      .setColor(client.color)
      .setFooter(
        client.user.username,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.channel.send(embed);
  },
};
