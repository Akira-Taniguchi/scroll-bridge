/* eslint-disable new-cap */

import { ethers } from 'hardhat'

async function main() {
	const greeter = await ethers.deployContract('Greeter')
	console.log('deployed to:', greeter.address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
// npx hardhat run --network sepolia_scroll scripts/deploy-greeter.ts
