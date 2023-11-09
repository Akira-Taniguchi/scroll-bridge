import '@nomicfoundation/hardhat-toolbox'
import '@openzeppelin/hardhat-upgrades'
import '@nomicfoundation/hardhat-chai-matchers'
import * as dotenv from 'dotenv'

dotenv.config()

const privateKey =
	typeof process.env.PRIVATE_KEY === 'undefined'
		? '0000000000000000000000000000000000000000000000000000000000000000'
		: process.env.PRIVATE_KEY

const config = {
	solidity: {
		version: '0.8.19',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	networks: {
		sepolia: {
			url: 'https://eth-sepolia-public.unifra.io',
			accounts: [privateKey],
		},
		sepolia_scroll: {
			url: 'https://sepolia-rpc.scroll.io/',
			accounts: [privateKey],
		},
	},
}

export default config
