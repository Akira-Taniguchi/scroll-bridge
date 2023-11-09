/* eslint-disable new-cap */

import { ethers } from 'hardhat'

// IL1ScrollMessenger.jsonを読み込む
import IL1ScrollMessenger from '../artifacts/@scroll-tech/contracts/L1/IL1ScrollMessenger.sol/IL1ScrollMessenger.json'

async function main() {
	console.log('start')
	const l1Messenger = await ethers.getContractAt(
		IL1ScrollMessenger.abi,
		'0x50c7d3e7f7c656493D1D76aaa1a836CedfCBB16A'
	)
	console.log('2')
	const message =
		'0xa4136862000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000066368616e67650000000000000000000000000000000000000000000000000000'
	// messageをcontractのbytes型に渡せるように変換する
	const messageBytes = ethers.toUtf8Bytes(message)
	console.log(messageBytes)
	const proof =
		'0x000000000000000000000000000000000000000000000000000000000000000098292bc9e51899b900c346ea0620d49c087026c15ac6b4d86659d543dea33b962edfdcc9309edd361ff1f9d674351482ad17e0e311c466800c2f2249c701f28e21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba85e6c3dc3ab34e05257384ca4049ce8323f07cd76c7b829170cba763f1b6613b610eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d2ad62df394cda3b6a8abb46782e437e377e26c33e4b6c84397ecf79085a6f928ffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8384be457ab2c9b9d867c0be3ab6d64798b494f0426a66d7db72dab76fcaac29abcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e0f9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a5f8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8923490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99cc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8beccda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d27874b09783cef2e7750f7ea24f6090c9ce47f33cf25ca5e16a1207b4a50fda2be1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a1ef973d30ca636d922d10ae577c73bc4fe92699225f30c0c2e9d6727bceb256d'
	const proofBytes = ethers.toUtf8Bytes(proof)
	console.log(proofBytes)
	const tx = await l1Messenger.relayMessageWithProof(
		'0x4cfc7B65f906adAd9D78e7AAd5382c46ba100662',
		'0x74F703b1A0F077bbE31D83Faf00E807a58EE433E',
		0,
		328022,
		messageBytes,
		[53542, proofBytes]
	)
	console.log('3')
	const t = await tx.wait()
	console.log('4')
	console.log(t)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})

// npx hardhat run --network sepolia_scroll scripts/deploy-greeter-operator.ts
