require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember snake include enroll bridge gaze'; 
let testAccounts = [
"0x1719b343c440aa95944fd3ba9c816b0a7c03277256c522da6ad79310751f0cbd",
"0x65d40ae58adca326ed1e2f9eb81005fe0786c5ed24ca1df49553f4d6edf0c764",
"0x624097816cfd8dc60affa400ba7d66b540c6dfe0f820133a1f6eb189e35609de",
"0x8d6635a2ae1e1597eec681a486a7b183c636d4aac686eb8f39f5ba0ecb6e5d9f",
"0x8bd1d1d2470187605f85969501246d617987ea576e19b8a6c1667340b0f47ba2",
"0x74d5493208bf247ee3b8dc01141a19d54a36b6266ff13732193a955403354f89",
"0x73e2f985fe750d394e48897b7836d377b0dfb4fa9451efa7d06da2b3696d6de1",
"0xf4885f59e3867caf04831c4515c5d3b55ad6bcbf73a35b29f7351880605383dd",
"0x33da250e56e78e6151b9572e409f905d49a7c1bba1190dab6fd596af63bebf4f",
"0x2d24b8123e0f08b4c4d826be84d60c6f5fbf4f1f3defecb90ac23405ad361e27"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

