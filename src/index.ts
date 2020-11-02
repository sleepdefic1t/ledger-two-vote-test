
import { createARKTransport } from './transport'
import {
    getLedgerPublicKey,
    getLedgerAddress,
    getLedgerWalletNextNonce,
    getLedgerSignature,
    getLedgerWalletCurrentVote
} from './ledgerWallet'

import { addDoubleVoteSignature, getDoubleVoteTx } from './vote'
import { sendTransactionADN } from './connection';

async function main() {
    const arkTransport = await createARKTransport();

    const ledgerPublicKey = await getLedgerPublicKey(arkTransport);
    const ledgerAddress = await getLedgerAddress(ledgerPublicKey);
    const ledgerNonce = await getLedgerWalletNextNonce(ledgerAddress);

    const currentLedgerVote = await getLedgerWalletCurrentVote(ledgerAddress);

    const voteTx = getDoubleVoteTx(ledgerPublicKey, ledgerNonce, currentLedgerVote);
    const voteTxSignature = await getLedgerSignature(arkTransport, voteTx.serialized);
    const signedVoteTx = addDoubleVoteSignature(voteTx, voteTxSignature);

    await sendTransactionADN(signedVoteTx);
}

main();
