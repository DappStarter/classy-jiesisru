require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name release pitch purpose harvest oppose outer giant'; 
let testAccounts = [
"0xf2126368fbe3580f8a95bf006a8f89d59898a387cd86893a06311d442062f3f8",
"0xd3aac126bf4fe59955902cdc6110e41659b96c1ad700971a8900d7ec8d4d4158",
"0xf4bf8bd0268b072f5bf4f5ef56bc2d564768ebd9fb0f6f4ea00df616a693eb90",
"0x5155c317d419d2be1b800242e52026143b0cee513dba7e26157b22e0171bc2b1",
"0xaf0abf8a0be622fc67f04b186b962ddc7b7581a1b9dd68c4a379b5d0e2b37fec",
"0x5db6c99f7d66f14ea35a7e5ab4fc49ced56bbf1dcb878f0b11c8a3ac06d9dee3",
"0x78bbd3ff21324df048f919145926e47435548eba819c91b531d19a50f0464e17",
"0x2a81e9964546b4391f7d0ff8969f3d2fedbb598240fdeeabb9fdfb9dfbf1626c",
"0xe62788cb61ccc6cbec9a5004906e2226300a1e8fca2e62a698710961d75faca9",
"0x7a9cd58e0923a13e4f33fe962c931855cf96573305a124e9552efd20b73a8549"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
