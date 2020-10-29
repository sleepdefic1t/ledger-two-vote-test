# ledger-two-vote-test
 
*\*\*NOT FOR PRODUCTION!\*\**

1) connect Ledger
   - connection via USB
   - unlock with device pin
   - open the ARK Ledger App
2) Install & Run this project
   - `yarn && yarn start`

## Sample (annotated) console output:

```bash
# from the ledger device
Ledger PublicKey:  03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a 

# using core-crypto
Ledger Address:  DChFAqbF5yFx79HRiTTVptN7eFoMgr8ysv 

# using the core-client api
Ledger Nonce:  35 

# using the core-client api
Ledger Current Vote:  023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359 

# create a two-vote transaction automatically
# - vote->unvote: genesis_51 delegate if NOT already voting
# - unvote->vote: current delegate if the wallet IS already voting
Unsigned Tx:  {
    "version": 2,
    "network": 30,
    "type": 3,
    "nonce": "35",
    "senderPublicKey": "03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a",
    "fee": "100000000",
    "amount": "0",
    "asset": {
        "votes": [
            "-023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359",
            "+023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359"
        ]
    },
    "id": "b9f29cad064bf4ff47781b9bce5b1d742359b9a6a3e2c7170f2757469d0b5462"
} 

##
# At this point, the Ledger Device will prompt for Transaction Approval.
##

# info from ledger approval
Ledger Signature:  fbf64c386b0cfacb6741bc326db8253327d629db863964822699f83ddd6644153be87aaf1f0fc2f50d210d8744ecedc45d2baa8e20fcae0cbe1cd598833fe59b 
For Payload:  ff021e010000000300230000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a00e1f50500000000000200023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f735901023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359 

# signed/final tx
Signed Tx:  {
    "version": 2,
    "network": 30,
    "type": 3,
    "nonce": "35",
    "senderPublicKey": "03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a",
    "fee": "100000000",
    "amount": "0",
    "asset": {
        "votes": [
            "-023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359",
            "+023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359"
        ]
    },
    "id": "b9f29cad064bf4ff47781b9bce5b1d742359b9a6a3e2c7170f2757469d0b5462",
    "signature": "fbf64c386b0cfacb6741bc326db8253327d629db863964822699f83ddd6644153be87aaf1f0fc2f50d210d8744ecedc45d2baa8e20fcae0cbe1cd598833fe59b"
} 


is Signed Tx Valid?:  true 

# send to devnet
ADN Response:  {
  data: {
    accept: [
      'b9f29cad064bf4ff47781b9bce5b1d742359b9a6a3e2c7170f2757469d0b5462'
    ],
    broadcast: [
      'f3b1f5fa90a1f8df8082b81691a5fbde76c78f995e06d86dc1c15642b56e3bab'
    ],
    excess: [],
    invalid: []
  }
} 

✨  Done in 14.75s.
```
