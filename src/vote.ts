const { Transactions } = require("@arkecosystem/crypto");
import { BigNumber } from "@arkecosystem/crypto/dist/utils";

const GENESIS_51_PUBLICKEY = "02257c58004e5ae23716d1c44beea0cca7f5b522a692df367bae9015a4f15c1670";

export function getDoubleVoteTx(
    ledgerPublicKey: string,
    ledgerWalletNonce: BigNumber,
    ledgerWalletCurrentVote: string | undefined
): typeof Transactions {
    const voteAsset = ledgerWalletCurrentVote == undefined
        ? [`+${GENESIS_51_PUBLICKEY}`, `-${GENESIS_51_PUBLICKEY}`]
        : [`-${ledgerWalletCurrentVote}`, `+${ledgerWalletCurrentVote}`]

    const unsigned_transaction = Transactions.BuilderFactory.vote()
        .version(2)
        .nonce(ledgerWalletNonce.toFixed())
        .senderPublicKey(ledgerPublicKey)
        .votesAsset(voteAsset)
        .build();

    console.log('\nUnsigned Tx: ',
        JSON.stringify(unsigned_transaction.toJson(), null, 4), '\n');

    return unsigned_transaction;
}

export function addDoubleVoteSignature(tx: any, signature: string): any {
    tx.data.signature = signature;

    console.log('\nSigned Tx: ', JSON.stringify(tx.toJson(), null, 4), '\n');
    console.log('\nis Signed Tx Valid?: ', tx.verify(), '\n');

    return tx;
}
