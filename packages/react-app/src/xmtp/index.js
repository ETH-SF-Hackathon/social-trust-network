import { Client } from "@xmtp/xmtp-js";

export const sendMessage = async (wallet, message, address) => {
  const client = await Client.create(wallet);
  const conversation = await client.conversations.newConversation(address);
  await conversation.send(message);
};
