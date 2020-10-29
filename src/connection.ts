const { Connection } = require("@arkecosystem/client");
import { Managers } from "@arkecosystem/crypto"

Managers.configManager.setFromPreset("devnet");
Managers.configManager.setHeight(4006000);

export const ADN_HD_PATH = "44'/1'/0'/0/0";
export const ADN_VERSION = 0x1e;
export const ADN_CONNECTION = "https://dexplorer.ark.io/api";

export async function getConnectionADN(): Promise<typeof Connection> {
    return new Connection(ADN_CONNECTION);
}

export async function sendTransactionADN(tx: any): Promise<typeof Connection> {
    const client = await getConnectionADN();
    const response = await client.api("transactions").create({ transactions: [tx.toJson()] });

    console.log('\nADN Response: ', response.body, '\n');

    return response;
}
