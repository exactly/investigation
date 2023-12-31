export const SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/exactly/optimism';
export const FIRST_TIMESTAMP = 1692348373; // Aug-18-2023 08:46:13 AM +UTC (main hack contract deployment)
export const LAST_TIMESTAMP = 1692489101; // Aug-19-2023 11:51:41 PM +UTC (protocol unpause)

export const SAFE_RECEIVERS_NAMES: Record<`0x${string}`, string> = {
  // Uniswap pools used by Debt Manager
  '0x85149247691df622eaf1a8bd0cafd40bc45154a9': 'USDC/WETH UNISWAP',
  '0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36': 'USDC/OP UNISWAP',
  '0x766854992bd5363ebeeff0113f5a5795796befab': 'USDC/wstETH UNISWAP',
  '0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c': 'WETH/wstETH UNISWAP',
  '0x68f5c0a2de713a54991e01858fd27a3832401849': 'WETH/OP UNISWAP',
  // Contracts that interact with Protocol
  '0x675d410dcf6f343219aae8d1dde0bfab46f52106': 'Debt Manager',
  '0xba12222222228d8ba445958a75a0704d566bf2c8': 'BalancerVault by nventuro.eth',
  '0x0dbd485f80136bdeb4b1d69d294d6793b6cf83b2': 'Exa Liquidator',
  '0x29babff3eba7b517a75109ea8fd6d1eab4a10258': 'MarketETHRouter',
  // Mean Finance
  '0xa9cffe466ba8a72707d1104de239c9ab477e2493': 'ThirdPartyDCAHubSwapper by Mean Finance',
  '0x3fa18d0cbaf4c9d5078e758b3deade077ca525cb': 'ThirdPartyDCAHubSwapper by Mean Finance',
  '0x5ef74c1686455ca1b51893f5381847aa229e87a5': 'ThirdPartyDCAHubSwapper by Mean Finance',
  '0xca341351fa4d98a3ee7eb688796b796603128d85': 'Swap Proxy by Mean Finance',
  '0x227f070ed2afd8744ef059959b8a8b8e8edc6c0f': 'UniversalPermit2Adapter',
};

export const SAFE_RECEIVERS = Object.keys(SAFE_RECEIVERS_NAMES);

export const MALICIOUS_RECEIVERS_NAMES: Record<`0x${string}`, string> = {
  '0x6dd61c69415c8ecab3fefd80d079435ead1a5b4d': 'Custom  by 0xE4 (EPE2)',
  // UNIV3 by tiffa.eth'
  '0x1ffd370f9d01f75de2cc701956886acec9749e80': 'UNIV3 by tiffa.eth',
  '0x5738de8d0b864d5ef5d65b9e05b421b71f2c2eb4': 'UNIV3 by tiffa.eth',
  '0x282b7d6bef6c78927f394330dca297eca2bd18cd': 'UNIV3 by tiffa.eth',
  '0x5500721e5a063f0396c5e025a640e8491eb89aac': 'UNIV3 by tiffa.eth',
  // UNIV3 by 0x41 (EPE3)
  '0x9f066d380b8b99a7e37e7fec45128e1950a6bbdb': 'UNIV3 by 0x41 (EPE3)',
  '0x8a18b659c0099e8b347d240aa3ae0bb0d1053deb': 'UNIV3 by 0x41 (EPE3)',
  '0x19db126bd2ff455a68312842aa3658cb3d97b766': 'UNIV3 by 0x41 (EPE3)',
  '0xfc07fcf0a73845f280adc81c1d9b5bd9cc4e1b6e': 'UNIV3 by 0x41 (EPE3)',
  '0x1edcd09bc5f04c8b3007decbebee667d33b1015c': 'UNIV3 by 0x41 (EPE3)',
  '0xc6f851d9d9571ee37a0b42d651ac166e3f26808c': 'UNIV3 by 0x41 (EPE3)',
  '0x594a20b1e6b95450569fbe2714d7f0f9711eed30': 'UNIV3 by 0x41 (EPE3)',
  '0xb76d9eee8886439b940518addfe2e11ac69f41bc': 'UNIV3 by 0x41 (EPE3)',
  '0xb340678595b48d6c0b42f33d629680f3114295a9': 'UNIV3 by 0x41 (EPE3)',
  '0x6fcc4ca29c1bc38fc2f5730efd542931addccfb8': 'UNIV3 by 0x41 (EPE3)',
  '0x4348d4ee114cfb24d9055f606e91a6006a3d7066': 'UNIV3 by 0x41 (EPE3)',
  '0x6674ee812b650e98d134e7a39846ecffaa53f1d0': 'UNIV3 by 0x41 (EPE3)',
  '0xbc14d604f6dd21474195e9d5fc7f4d7b8376f848': 'UNIV3 by 0x41 (EPE3)',
  '0x4bae277ea81e6301115a67464ca53207112df1e2': 'UNIV3 by 0x41 (EPE3)',
  '0x2694cf8e4ef1ca15368ab911055aac8586b3e6a0': 'UNIV3 by 0x41 (EPE3)',
  '0xa63515b35ca617ab2e19cd67cf793dc53db0c985': 'UNIV3 by 0x41 (EPE3)',
  '0xa37cb9289f95152f922758407055e8d0acd89dab': 'UNIV3 by 0x41 (EPE3)',
  '0x240b069468c7c65ac331f71876b19852a1fc9b8b': 'UNIV3 by 0x41 (EPE3)',
  '0xd8c648df25d878c2d10d2068dc733d173a755112': 'UNIV3 by 0x41 (EPE3)',
  '0x9829c5f9f795193590b196fd9533fab49eadabb7': 'UNIV3 by 0x41 (EPE3)',
  '0x6134ca6b88e220125d8ce198d339c8337667cd96': 'UNIV3 by 0x41 (EPE3)',
  '0x2c20e5a6ebecc334d3adca0f92d9fb6d2a69a539': 'UNIV3 by 0x41 (EPE3)',
  '0x7f4656a9a2dce67e0340ed2356c3d2a805627d7a': 'UNIV3 by 0x41 (EPE3)',
  '0x9ebdac68e40d8eb85e569f1b4ba699b7e379c28a': 'UNIV3 by 0x41 (EPE3)',
  '0x85c17ab99e4e578a68621cac720486db6f5fc52b': 'UNIV3 by 0x41 (EPE3)',
  '0x73574b974184d0e8a7e04a20ffba0ebda4f10f6f': 'UNIV3 by 0x41 (EPE3)',
  '0xc70fd8d5efb724a42e5bc6b50154e5bc5b9ff2cb': 'UNIV3 by 0x41 (EPE3)',
  '0xf5addef95f7f8dfa27f1fc85ea24b91f78c49e60': 'UNIV3 by 0x41 (EPE3)',
  '0x2c62dc349be8836be148225fccf87c81eb8ec9c0': 'UNIV3 by 0x41 (EPE3)',
  '0xeaf498c890a060f6accec9865e4756fed679e6ee': 'UNIV3 by 0x41 (EPE3)',
  '0xbc1e492058ea352ab9f622915048d14c09d1262e': 'UNIV3 by 0x41 (EPE3)',
  '0x3a7e8cdb5d4bf669ffdc2d90e8dd5fe1c0a5ff9d': 'UNIV3 by 0x41 (EPE3)',
  '0xd9eb6b069acf029bc16a904c2f44817570e81a9a': 'UNIV3 by 0x41 (EPE3)',
  '0x3d3a62de2249733257a77b2a3daad9ac4981f809': 'UNIV3 by 0x41 (EPE3)',
  '0x25f61f09644d78a450a2eb5456ed51241db457d7': 'UNIV3 by 0x41 (EPE3)',
  '0xab7050d8eca544de085b36cc86b2caca9d8cb148': 'UNIV3 by 0x41 (EPE3)',
  '0x9d134f7894352997891077cbe91157e6b94e616c': 'UNIV3 by 0x41 (EPE3)',
  '0x1780a76f234b36115812c0c333b62b03ea718bd8': 'UNIV3 by 0x41 (EPE3)',
  '0x4aaf21ad452e76d6c2869593ab2f6b31c7636e1a': 'UNIV3 by 0x41 (EPE3)',
  '0x2c63ec8689ecda5716221b23e7b2af7d695e77fc': 'UNIV3 by 0x41 (EPE3)',
  '0x3154eaa447b44685bb2193885a68839a6f26772c': 'UNIV3 by 0x41 (EPE3)',
  '0x38ae5af3ef6f5e59635830c19a4ab412c7684940': 'UNIV3 by 0x41 (EPE3)',
  '0x3528149fe89b559e6a0e7601955c0a9e500e8f8f': 'UNIV3 by 0x41 (EPE3)',
  '0x4bb91912129e9294939f31d17d88c727102d867f': 'UNIV3 by 0x41 (EPE3)',
  '0x2ee10ebc2b6b9e15db4ab63b99ebd90b4454107f': 'UNIV3 by 0x41 (EPE3)',
  '0x6f48c84c8e319488370727ec8d3a600752fa2a5c': 'UNIV3 by 0x41 (EPE3)',
  '0x086491fc5509fb13823ee7727c13cef387869765': 'UNIV3 by 0x41 (EPE3)',
  '0xa414e880c7b98fe7586958d9ecee00c490ab34ea': 'UNIV3 by 0x41 (EPE3)',
  '0x0ac34a2c936e3a0e8479b27c6e8db4e5ae8e70a5': 'UNIV3 by 0x41 (EPE3)',
  '0xdd1a51cfca188d0d2807e6b9824f9363160e11aa': 'UNIV3 by 0x41 (EPE3)',
  '0x0dc5fed3fc2caf965d5f0cd4d09e0e71eae2f0ab': 'UNIV3 by 0x41 (EPE3)',
  '0xf91f5171eca19996387c6b27c4fea503238e14d8': 'UNIV3 by 0x41 (EPE3)',
  '0xb7ee349afd1f2d012d0fc74ade67dcf1fcd42ad3': 'UNIV3 by 0x41 (EPE3)',
  '0x4b7928948f26e720d24ccf6ffcd0feefa4490bc6': 'UNIV3 by 0x41 (EPE3)',
  '0xd5206f6dc2284dfe70d8c5fa90c3f0828cd76d55': 'UNIV3 by 0x41 (EPE3)',
  '0xb946000739333eecd54c6a01afd95b77913d518f': 'UNIV3 by 0x41 (EPE3)',
  '0x0915e0c8dec8efa1052884a855b386fcb29d3d05': 'UNIV3 by 0x41 (EPE3)',
  '0xf7c9b974564dc8883e177b732cac87efe82429e5': 'UNIV3 by 0x41 (EPE3)',
  '0x01c6648ee59a093ad5538e321ba754604c11b622': 'UNIV3 by 0x41 (EPE3)',
  '0x7454b72ce0674d35f53e5fd58142f2dea42c3bd1': 'UNIV3 by 0x41 (EPE3)',
  '0xc08cb084a07accd558e376e7a343551f39e256df': 'UNIV3 by 0x41 (EPE3)',
  '0x43880ae66cd4a75131d44a3988850dbf5528e4e0': 'UNIV3 by 0x41 (EPE3)',
  '0xbd5a7de419b01a47974db37a6180f97629178e44': 'UNIV3 by 0x41 (EPE3)',
  '0xadb40ede6b43928c94215ba5c93dc26544ae1416': 'UNIV3 by 0x41 (EPE3)',
  '0xa19cf42096d6c44c726420b21bff3c12b73cd084': 'UNIV3 by 0x41 (EPE3)',
  '0xb0d713953a7a9b4e3bc16a16c6c63859406db2d8': 'UNIV3 by 0x41 (EPE3)',
  '0x4e43bfe7b8b1dcbe7dcf6be98a041d0db3fbfb4a': 'UNIV3 by 0x41 (EPE3)',
  '0x43105ae1845598f89c278f198bef12d5bab1c5d3': 'UNIV3 by 0x41 (EPE3)',
  '0xc171c5a991d2e7949679dbfeade13886d4008e58': 'UNIV3 by 0x41 (EPE3)',
  '0x3a48bd29bce07b4c6eef51fea72ef5c39ceb2009': 'UNIV3 by 0x41 (EPE3)',
  '0x8f5bc8fc79941039a5b915db41dea66b05ea0627': 'UNIV3 by 0x41 (EPE3)',
  '0x9f97b1d2317b61fc38dff44122bfc5bab8c68b56': 'UNIV3 by 0x41 (EPE3)',
  '0x952c97302f08fb28f49a83538518d2a0f68fd0a6': 'UNIV3 by 0x41 (EPE3)',
  '0x8cda4b383ff5f3ca00813662f492841962d0fa99': 'UNIV3 by 0x41 (EPE3)',
  '0x89a11b2ba36a8e2302d5371b7ef4fac80d5b44e5': 'UNIV3 by 0x41 (EPE3)',
  '0x0ade5854492e4701acc34d021520c98a875cebf6': 'UNIV3 by 0x41 (EPE3)',
  '0x3059496b9587f8a7deccbd09cc1c372be34ae75d': 'UNIV3 by 0x41 (EPE3)',
  '0x0393410f54ff57631dd482af0ff8e9eaf4b5be5f': 'UNIV3 by 0x41 (EPE3)',
  '0x4129819223f4f7f572c267eda490bb0a919489e6': 'UNIV3 by 0x41 (EPE3)',
  '0x501a129107fc2ccbe1e508038a1cb291e6b640bb': 'UNIV3 by 0x41 (EPE3)',
  '0xd3924c93d3016081f72016c6978663ef62a31d73': 'UNIV3 by 0x41 (EPE3)',
  '0x291110fa25496168d7d336f9403dc6fe3e9c4fda': 'UNIV3 by 0x41 (EPE3)',
  '0x1cc46ca9e947f91a0af26f716f6e066b3ec43493': 'UNIV3 by 0x41 (EPE3)',
  '0x4f5cbef744cec467bedda2719a8bba0c39289c57': 'UNIV3 by 0x41 (EPE3)',
  '0x7582407ce7469e8ed862df991b684dcdabde3130': 'UNIV3 by 0x41 (EPE3)',
  '0x554bc950b73609399684e799de9f5c41fdf3577c': 'UNIV3 by 0x41 (EPE3)',
  '0x610ecdea4bce6281e474798ba0c0e37c47be99de': 'UNIV3 by 0x41 (EPE3)',
  '0x0b36769122f2de4f994a41c580ed3dcdb77e2c58': 'UNIV3 by 0x41 (EPE3)',
  '0x53e369a0eba2df9e1ff737c18feb2a92ff5d61db': 'UNIV3 by 0x41 (EPE3)',
  '0x67699d7412b42e48f805882825ce3a5c12ea9935': 'UNIV3 by 0x41 (EPE3)',
  '0x5e19fc0bc5b5e309e940a2394a8df915cfa3f107': 'UNIV3 by 0x41 (EPE3)',
  '0x4b3e95c211464c058b4495ed0449cd0d1fd832b9': 'UNIV3 by 0x41 (EPE3)',
  '0xd4d57c3bc9d632593fa015e4042a5ea2b54ea24f': 'UNIV3 by 0x41 (EPE3)',
  '0x6d39b271fe9516a6ac15b76c639f81d111a5aa39': 'UNIV3 by 0x41 (EPE3)',
  '0x3f7d2554129e6dc0550e5b9cfe54e82b185692c9': 'UNIV3 by 0x41 (EPE3)',
  '0xc533078356facd8c4a29d89bfe7671be75881fb2': 'UNIV3 by 0x41 (EPE3)',
  '0xf78b1191e7069536f4fbefeb8f9b903dea28ca92': 'UNIV3 by 0x41 (EPE3)',
  '0x9066aef970f4b0e4c3f78cb07e67dda82600629a': 'UNIV3 by 0x41 (EPE3)',
  '0x4007db30a1f82b606310ec2dfb1265c217450fb5': 'UNIV3 by 0x41 (EPE3)',
  '0xf534862f67c7df8682ce6f576531f3d18522f0fc': 'UNIV3 by 0x41 (EPE3)',
  '0xdc3e8ea362fd648fa69035a2919699a1ce09a5be': 'UNIV3 by 0x41 (EPE3)',
  '0x6a9e1ca76be8338bafe4a2ca2a9cf97bd53a8bc4': 'UNIV3 by 0x41 (EPE3)',
  '0x2a4710759a36d906926fcf9633036e19818f114c': 'UNIV3 by 0x41 (EPE3)',
  '0x80d6081e6f185e8248cbe124ac61631f212abdae': 'UNIV3 by 0x41 (EPE3)',
  '0xd62ca059c0d551a2d4d212f40730267d811df319': 'UNIV3 by 0x41 (EPE3)',
  '0x0c9729ccede95e8af5f912af10b5c9f7e1f4674c': 'UNIV3 by 0x41 (EPE3)',
  '0x8b43c0a56226ce45f0bc8eade9b9c2a5961a5ccd': 'UNIV3 by 0x41 (EPE3)',
  '0x1b9cb023405283aa6db6a6b0b9db46b08a001d05': 'UNIV3 by 0x41 (EPE3)',
  '0x33ad2e49d8a84dd3196da22353c92c64a1d0d603': 'UNIV3 by 0x41 (EPE3)',
  '0xfc159c435536b4cc5ba9de84e0df86a47cce1d31': 'UNIV3 by 0x41 (EPE3)',
  '0x889b0bfad63a03a9ae6f6238debdaf01b090117e': 'UNIV3 by 0x41 (EPE3)',
  '0x24d3c0a1de1948bb1159b8b936dd62e395b24c4b': 'UNIV3 by 0x41 (EPE3)',
  '0x6d536bf02e2e87fa143b89557bca45b02bcc9fc5': 'UNIV3 by 0x41 (EPE3)',
  '0x58cb8a5eee96649ae06d354bfcd6111b0f18c389': 'UNIV3 by 0x41 (EPE3)',
  '0xfa11a466cda9ae531cea72f4d96b77175e1e23f1': 'UNIV3 by 0x41 (EPE3)',
  '0x35fd84999b9e9c255887c15ace7eec54ddd30ca2': 'UNIV3 by 0x41 (EPE3)',
  '0x2262fd2cc593d7cb9829de8fd4b2a906ca274ae8': 'UNIV3 by 0x41 (EPE3)',
  '0xe437585c584b5c6fed109cdb8b56a140b7636200': 'UNIV3 by 0x41 (EPE3)',
  '0xb39b22016b026e4015f4894337a9144f8af7cd57': 'UNIV3 by 0x41 (EPE3)',
  '0x7ff2c5bf4ef6781888586a233a48d361db24856f': 'UNIV3 by 0x41 (EPE3)',
  '0x7c1e6deb06074922ac01d48a288ad0d0af4b729a': 'UNIV3 by 0x41 (EPE3)',
  '0xdba155aa16775185597ba298f694670e00ad411d': 'UNIV3 by 0x41 (EPE3)',
  '0x39c5720ab05bbcad997207ac404f2fee3923fcc3': 'UNIV3 by 0x41 (EPE3)',
  '0x6d7f138414c324c0158e6b1692bb2e37997b94e3': 'UNIV3 by 0x41 (EPE3)',
  '0x9c3c0f927a59b17a76ab314891c2531f449daf0b': 'UNIV3 by 0x41 (EPE3)',
  '0x63a22cbfe793d437e6abe6b96b0ad1ff541338df': 'UNIV3 by 0x41 (EPE3)',
  '0xdeed0df0518ced02ceb95841ba255ad1026132b6': 'UNIV3 by 0x41 (EPE3)',
  '0xfb6da2cc215cba3f96f636d189f61a2cdb5da473': 'UNIV3 by 0x41 (EPE3)',
  '0xb12594021450c2ee7e6a860e5c083e731113ddc7': 'UNIV3 by 0x41 (EPE3)',
  '0xdfa879a22b95ff8be6c30c9d801735d3bb5b9f20': 'UNIV3 by 0x41 (EPE3)',
  '0x97d24d220fba3b06a95b6283879df835f61b4916': 'UNIV3 by 0x41 (EPE3)',
  '0xcee3354a55148a5943116f0f1eef782d885e7870': 'UNIV3 by 0x41 (EPE3)',
  '0x218c3bd1afeb1f18cd9d5493b8539b0ccd648955': 'UNIV3 by 0x41 (EPE3)',
  '0x8f17cd2ca33328da147da7afaff1687457198c53': 'UNIV3 by 0x41 (EPE3)',
  '0x5346d6f452ea3b6d7633d328f5656eb0b7f3b2a0': 'UNIV3 by 0x41 (EPE3)',
  '0xae3830a0d677fa860115b4a7ecfaf4b353796950': 'UNIV3 by 0x41 (EPE3)',
  '0x07c898da849e48b0c5abd6a57917be330c5617c0': 'UNIV3 by 0x41 (EPE3)',
  '0x87b0e48bafbf541e2c873a87ac30b4f91e1c2171': 'UNIV3 by 0x41 (EPE3)',
  '0x7b9f9438d324aadee37fef75b594d5931975de4a': 'UNIV3 by 0x41 (EPE3)',
  '0x2486bbc9d9394c5345f90b4f7969f9ebc1753122': 'UNIV3 by 0x41 (EPE3)',
  '0x6c0e3e0115597be0d3d0ebb89d6db73974d1d876': 'UNIV3 by 0x41 (EPE3)',
  '0x7a391749b729c919a01fe809f98515ee0b4a6a26': 'UNIV3 by 0x41 (EPE3)',
  '0xc7d2d87c9c560b5e295e050f0f15cffa95d139cd': 'UNIV3 by 0x41 (EPE3)',
  '0xf77ffe51f06fae8573dfb32d2b08f3dbc9c9d6e9': 'UNIV3 by 0x41 (EPE3)',
  '0x347d7db0f5d8f3c20a85933b8b08d3e67633c87e': 'UNIV3 by 0x41 (EPE3)',
  '0xb48576bb375f5f2e082404cd1ea95deb74219030': 'UNIV3 by 0x41 (EPE3)',
  '0x057a89c2e0349a70f8074d384f85cd71e73348cf': 'UNIV3 by 0x41 (EPE3)',
  '0x96c3104a183b1a1d280d2d040dfa916c853e7596': 'UNIV3 by 0x41 (EPE3)',
  '0x5e2308e1f5a0b09e0fdf1d0e365507e34a658734': 'UNIV3 by 0x41 (EPE3)',
  '0x70be957d356b6b1ac694fe65d2124c1674a01d28': 'UNIV3 by 0x41 (EPE3)',
  '0x1d2278a59c18a56e74b08e2f858c5b83743758e9': 'UNIV3 by 0x41 (EPE3)',
  '0x8dd46b6a5933f8afa72212fb8ea22c244234724a': 'UNIV3 by 0x41 (EPE3)',
  '0xd74b5e5089bb2ff2f51cb295361a8593fec47947': 'UNIV3 by 0x41 (EPE3)',
  '0x8791602a60357a2255b7e4cf6fa309a6818eca7c': 'UNIV3 by 0x41 (EPE3)',
  '0xfe41e097dfe0e656667ef2d4cc6433915c1e2306': 'UNIV3 by 0x41 (EPE3)',
  '0x593fc910db761992fa1cb499e3736798e6ce7b68': 'UNIV3 by 0x41 (EPE3)',
  '0x0700752cf5071bfd7be62e0810b9f97ade224401': 'UNIV3 by 0x41 (EPE3)',
  '0x169a0b5f14e3eb197441c9b224379637fbbb54ec': 'UNIV3 by 0x41 (EPE3)',
  '0x1350bdd9f77deed20ba7443a9d6c24ef29fdbe9d': 'UNIV3 by 0x41 (EPE3)',
  '0x99602beba0c49962f0a0535a6480a58065cad0d0': 'UNIV3 by 0x41 (EPE3)',
  '0x12f274969425aa8fd0b07a8637daf9f83d317221': 'UNIV3 by 0x41 (EPE3)',
  '0x19d2ff15485b43bacfd72d2695a25208ff65c52a': 'UNIV3 by 0x41 (EPE3)',
  '0x6ec59e2bdd5d57bd74c36513407501d2e4404d9a': 'UNIV3 by 0x41 (EPE3)',
  '0x33482d28560c48eeedf7573b4452296c9143dc70': 'UNIV3 by 0x41 (EPE3)',
  '0xab62dbba3645ad9d89ce57e2a60ccfab764f7c21': 'UNIV3 by 0x41 (EPE3)',
  '0x775b1f4ad84d0c83a42612a3bbb1e89194ef7c77': 'UNIV3 by 0x41 (EPE3)',
  '0xd0eccfa8f1ffd4472fd15ce0967c6bef19f9c71d': 'UNIV3 by 0x41 (EPE3)',
  '0x99f1393b8bd3e30d3a1fe7347e185c43c9729aec': 'UNIV3 by 0x41 (EPE3)',
  '0xb028108c73dce6d9fc63201f13799fe7cf526936': 'UNIV3 by 0x41 (EPE3)',
  '0x4c07ba8b87d651cc77ae7d31f09f4fdd07be8103': 'UNIV3 by 0x41 (EPE3)',
  '0x343cdfd74d17254227ddf2e5f3070faa09ea2d08': 'UNIV3 by 0x41 (EPE3)',
  '0x6068c5c5a9c451571bfa0ac1688265dde3242ecf': 'UNIV3 by 0x41 (EPE3)',
  '0x2d327a10bd55292ad9429d1d48f5c0ada9e0cf1d': 'UNIV3 by 0x41 (EPE3)',
  '0x297f728780fd9f023d255f6b69db4293f6e14763': 'UNIV3 by 0x41 (EPE3)',
  '0xb41597ecc82a582f3b582e7e2785cd4403a0b09a': 'UNIV3 by 0x41 (EPE3)',
  '0x5254e9c5bb0ae48feeb47e38a9bc47579977e004': 'UNIV3 by 0x41 (EPE3)',
  '0x6a340392b7732460e57d12943b982f4d333affc9': 'UNIV3 by 0x41 (EPE3)',
  '0xac3e4635a34dec4e891c627365f06c6a279c6b12': 'UNIV3 by 0x41 (EPE3)',
  '0x7f15891556fa1f882e900fc1d47b830d32a2ed2b': 'UNIV3 by 0x41 (EPE3)',
  '0x8667ad73588d021194a75b0862021c2f130e2c56': 'UNIV3 by 0x41 (EPE3)',
  '0x482f4c22c704d54e79b19eff8c9908770b1aab56': 'UNIV3 by 0x41 (EPE3)',
  '0xd4267334d0c322ed7a803ca83765d1f4eb121a4a': 'UNIV3 by 0x41 (EPE3)',
  '0x36f2cbd70426acaee3ca0038b8d20e3f6800464e': 'UNIV3 by 0x41 (EPE3)',
  '0xb440d8bd06bc6bae5e0a577dd139d1759b2375a2': 'UNIV3 by 0x41 (EPE3)',
  '0xda23692466fad986e5c7e584e7162aedca0d0374': 'UNIV3 by 0x41 (EPE3)',
  '0xdca3df27cf7be46eae5c7fb7d829460863eb2658': 'UNIV3 by 0x41 (EPE3)',
  '0x54c97d6fd4d120fda9060350f3cf7ae8ac205f1c': 'UNIV3 by 0x41 (EPE3)',
  '0x1d27f4dca6784ff61a342a5a0aeeeb86697eec0a': 'UNIV3 by 0x41 (EPE3)',
  '0x784fc42dbc7f919194e48dbe2d9be1d0fdcce4c2': 'UNIV3 by 0x41 (EPE3)',
  '0xec0a662a11d35b21981857311222bd98d7fb7798': 'UNIV3 by 0x41 (EPE3)',
  '0x425e390187527edefa36b8bbc90ede7e422173f7': 'UNIV3 by 0x41 (EPE3)',
  '0x3f0593c470f9cd97fdfa22f0e874b6650b2e1e33': 'UNIV3 by 0x41 (EPE3)',
  '0x9879c7162ce4de71a97295c0d0ec7213a54c2e69': 'UNIV3 by 0x41 (EPE3)',
  '0xb853fed81d53b7dad09643805e2593c2eeabeb53': 'UNIV3 by 0x41 (EPE3)',
  '0xbbe44d9a7158eccd09cf00ee551f61497e04f0b6': 'UNIV3 by 0x41 (EPE3)',
  '0xbe9d7cfe60d1e53d8b5f38c2462d1bd6390cd197': 'UNIV3 by 0x41 (EPE3)',
  '0x159f51e8e6d8235ce1f7b2552d050d073172d4f7': 'UNIV3 by 0x41 (EPE3)',
  '0xa6778ad9d1325c42eb21dc6c27f15737f38e6e02': 'UNIV3 by 0x41 (EPE3)',
  '0x70f0c90aa6f697d1ac29ac4c28859b1b03b443d3': 'UNIV3 by 0x41 (EPE3)',
  '0xd8f202fab516810b30f5481e8df4c41c6af7b85e': 'UNIV3 by 0x41 (EPE3)',
  '0xa2fc86d50480e23eb74eb510d95a40b0e2326e69': 'UNIV3 by 0x41 (EPE3)',
  '0x1cd2c822d45aab1003c35d4a404f6e75a31915d0': 'UNIV3 by 0x41 (EPE3)',
  '0x527a581679bb288b59eb72ba2fd869ef12c2dd87': 'UNIV3 by 0x41 (EPE3)',
  '0xd0af330ce603851b8072d80a4d802c9a136fdf59': 'UNIV3 by 0x41 (EPE3)',
  '0x34894f60d4c54ac6186dc8e6158502db50ebeb46': 'UNIV3 by 0x41 (EPE3)',
  '0xdae71d446ce87066b5cf2494c1c5073576dada26': 'UNIV3 by 0x41 (EPE3)',
  '0x041de38e19b60d3e67b4234d3476021ad75390ed': 'UNIV3 by 0x41 (EPE3)',
  '0xf86d8bfbfa460dcd94e1899140483aabe0e20203': 'UNIV3 by 0x41 (EPE3)',
  '0x0f8456e4269bad6758e3707c4b2f45c12be2121a': 'UNIV3 by 0x41 (EPE3)',
  '0xe525736a5777758cd9981fd9f5867f6e1e2ea8d5': 'UNIV3 by 0x41 (EPE3)',
  '0xbbe942eca9f279094737238c99fd4d29eae74bf1': 'UNIV3 by 0x41 (EPE3)',
  '0xf9400bc185faa178f27e1659638a45f52877db3b': 'UNIV3 by 0x41 (EPE3)',
  '0x475ace064c60facbafabc6199fc9cf5e4c1cab95': 'UNIV3 by 0x41 (EPE3)',
  '0x15b31094876153049e949b62e323714564fb5be1': 'UNIV3 by 0x41 (EPE3)',
  '0x9471fbce382ce2c2eeae6ba4dffd3a09e3cf53cb': 'UNIV3 by 0x41 (EPE3)',
  '0xc51af258f6dc7bcc3441f2e15e5b6a14a05c4d13': 'UNIV3 by 0x41 (EPE3)',
  '0xb3f465bbc5733fecdaf5c141ccb7ad809bdc5bf1': 'UNIV3 by 0x41 (EPE3)',
  '0x7dc191f4038b895f9dcfff96b60817c6fc249c54': 'UNIV3 by 0x41 (EPE3)',
  '0xd7839db768e8c4f9b53e7467cfcd26d7cce02197': 'UNIV3 by 0x41 (EPE3)',
  '0xa92b418b2bd2e454c938b1a8ad6a6c192822d340': 'UNIV3 by 0x41 (EPE3)',
  '0xfaaf3ede5b407292366c21e8400ea3c5537c823a': 'UNIV3 by 0x41 (EPE3)',
  '0x65763e4af5576abaac53e0ae9caa13ddc5bf0ee4': 'UNIV3 by 0x41 (EPE3)',
  '0x6aa7a164ed088498813db3ba52694cbd050ae509': 'UNIV3 by 0x41 (EPE3)',
  '0x48e75ef9f9e524b6cca4901ed1c10878c3735ce1': 'UNIV3 by 0x41 (EPE3)',
  '0x6490690c5fd35cd451f5e0bcd44a7089205e346f': 'UNIV3 by 0x41 (EPE3)',
  '0x2d889b91e7b15415ecdcedd44715fd4f00785b94': 'UNIV3 by 0x41 (EPE3)',
  '0x688502bf51d5fa8176accb472cc249428fe33b15': 'UNIV3 by 0x41 (EPE3)',
  '0xc5371fc4229267edf44fa98dc1fab5e7981265e4': 'UNIV3 by 0x41 (EPE3)',
  '0x28896e61e5988fb5da1b5181671cc4171f3bb8de': 'UNIV3 by 0x41 (EPE3)',
  '0xc498e4e891c1db38b492d70d7c1bb4a1a515375a': 'UNIV3 by 0x41 (EPE3)',
  '0x2f18b7786900afd7aee33174e6a920c6fa6494e6': 'UNIV3 by 0x41 (EPE3)',
  '0x1d3a22702c3f9ca1ac33b763594fe8092086d67c': 'UNIV3 by 0x41 (EPE3)',
  '0x4d8e5c069dc430e5e059182bd7e6bb5503edb620': 'UNIV3 by 0x41 (EPE3)',
  '0xf4248bcd7a082fc1b4adf254ace054a9a0ba3e96': 'UNIV3 by 0x41 (EPE3)',
  '0xbb0a0bbe7f92619b2233af47f2aafaa0a627c133': 'UNIV3 by 0x41 (EPE3)',
  '0xa426da52b504af0a089544c5d28b637172ce64a6': 'UNIV3 by 0x41 (EPE3)',
  '0x0edecb9aba3c11f42bc30e37d5b3761fe07c1272': 'UNIV3 by 0x41 (EPE3)',
  '0x2689a778364c6b1b1ac8205fe0aa8f8d36eb5cd8': 'UNIV3 by 0x41 (EPE3)',
  '0x8ac2f9c9b94ddd6e614ddcfc65755fae3a2f4b3d': 'UNIV3 by 0x41 (EPE3)',
  '0xbfcd6ac97df5f0aef5f63c9a0b71c68001d21e73': 'UNIV3 by 0x41 (EPE3)',
  '0xaf409159760f5243f1a3fbff7e65902375f8cf89': 'UNIV3 by 0x41 (EPE3)',
  '0x2aa7263530bd23fac38173ed520baca8f045f334': 'UNIV3 by 0x41 (EPE3)',
  '0xf8ba8373113e71586d79e19700648ce691d931dc': 'UNIV3 by 0x41 (EPE3)',
  '0xc319aea1c964acaad4ba929f9ea40457d6424825': 'UNIV3 by 0x41 (EPE3)',
  '0xb9896b72c9f6d4813e41715066a9fd746e643bf1': 'UNIV3 by 0x41 (EPE3)',
  '0x88e214a3c545bb5d575d08b2052953e7a872a4ae': 'UNIV3 by 0x41 (EPE3)',
  '0x9dd7c719ffe77ff3f4158393cfe6dce042d320f7': 'UNIV3 by 0x41 (EPE3)',
  '0xbfe7a89d019767737e863c40ff67c2c9142b7b12': 'UNIV3 by 0x41 (EPE3)',
  '0x7088f2da44c6bfc22bf9bc0e0c2402c2844ded6b': 'UNIV3 by 0x41 (EPE3)',
  '0xd30a2496d0a719b28ccc60c24046223daec9d56a': 'UNIV3 by 0x41 (EPE3)',
  '0xbc085a09cbff99ddaf8ed83a74e10c3daa083559': 'UNIV3 by 0x41 (EPE3)',
  '0x54e0fd146d9d395144834d14eb05421fc4a8ec43': 'UNIV3 by 0x41 (EPE3)',
  '0xc81ff2f3e99b32e220e17b93dc947f7bc02300aa': 'UNIV3 by 0x41 (EPE3)',
  '0x094509f6abb2149e1cc31d5e06d1af5c3c935f4d': 'UNIV3 by 0x41 (EPE3)',
  '0x6338109aa729730643597a107f467259b1cacdf8': 'UNIV3 by 0x41 (EPE3)',
  '0xda8a41d8649570ccdf7cb6110dd3116cb687064a': 'UNIV3 by 0x41 (EPE3)',
  '0x48e71d9ab4e323497709016e738b92e01df0cca8': 'UNIV3 by 0x41 (EPE3)',
  '0x9a3066658e246d60ca3c0b60a6eef497d3f06a43': 'UNIV3 by 0x41 (EPE3)',
  '0xc1b121c9ef1742677eb046d21e5b81bca8f26a44': 'UNIV3 by 0x41 (EPE3)',
  '0x60299a3f7090a45a809e8565c0f424e349007c06': 'UNIV3 by 0x41 (EPE3)',
  '0xe11da0d03c80336a1db940057bf3545fb69a513c': 'UNIV3 by 0x41 (EPE3)',
  '0x062e3bc57a084e9d4d388580e1855e7af9c342b6': 'UNIV3 by 0x41 (EPE3)',
  '0x8ebf45a09d2c5d637d60766dfba190e357cfc6a3': 'UNIV3 by 0x41 (EPE3)',
  '0x8672bdd58c1510dd1d204a21e97676740f40d7b1': 'UNIV3 by 0x41 (EPE3)',
  '0xb75a8549abae92dfdd58518927fb4b9165eb94b0': 'UNIV3 by 0x41 (EPE3)',
  '0xcfc61f3a093ae1accc2276b5262f808fc46799c4': 'UNIV3 by 0x41 (EPE3)',
  '0xc30c1d52c97d7261e7d7100ffb8fe370a0dbfd6c': 'UNIV3 by 0x41 (EPE3)',
  '0x82f82259531d5ee6fa456b6353e94119480ecf3e': 'UNIV3 by 0x41 (EPE3)',
  '0x43113ef31f7a0781fcd314a6d71b9011cdd7827b': 'UNIV3 by 0x41 (EPE3)',
  '0xc9d0004569ae3f04b14b5465326eebef91e69670': 'UNIV3 by 0x41 (EPE3)',
  '0xbb64c27423e9fe463be15689a1263561ad199fc5': 'UNIV3 by 0x41 (EPE3)',
  '0x7454895c5f0ce8ee79d2ee861e57138ad61214da': 'UNIV3 by 0x41 (EPE3)',
  '0x6e3f5387edabc02b046ec655ef5ccd61713669cc': 'UNIV3 by 0x41 (EPE3)',
  '0x31e206d9382157a678f9abdcab506f3a23740ad6': 'UNIV3 by 0x41 (EPE3)',
  '0x1300b9c0a4c58d18300f65d174dc700e9de3ab16': 'UNIV3 by 0x41 (EPE3)',
  '0x5daa50d3eae82c93a53a62f1d099b18c13669c14': 'UNIV3 by 0x41 (EPE3)',
  '0x50f3f5965eeb8f7015d46f03c4f9786bb031e377': 'UNIV3 by 0x41 (EPE3)',
  '0x72604d015bfe8829e3901ec5ec0a5b1ae1330196': 'UNIV3 by 0x41 (EPE3)',
  '0x87b46a12d87eecf3e00c015bd762afd1738387d1': 'UNIV3 by 0x41 (EPE3)',
  '0x4121d2112aeb573f178b1beeaffdc69c4d4209fb': 'UNIV3 by 0x41 (EPE3)',
  '0x351415f021d44523767eeb194a172ff423d4fe29': 'UNIV3 by 0x41 (EPE3)',
  '0x16a5157d948f120ce4fe162d2a436950443e0c1e': 'UNIV3 by 0x41 (EPE3)',
  '0x68baf3e19e82c38eaec87f80af24442c85776545': 'UNIV3 by 0x41 (EPE3)',
  '0xe7eed4228f7b185e9a1708b2f2dab544a43e6dce': 'UNIV3 by 0x41 (EPE3)',
  '0x03cb6b49e57cb783215387abe43e8bbaf86ae6b0': 'UNIV3 by 0x41 (EPE3)',
  '0x60a646411af54aa737bb6a9fce33ad3f621e19c3': 'UNIV3 by 0x41 (EPE3)',
  '0xdcfaed6c86e52a86db6ff0a65471e05b4a02b8ff': 'UNIV3 by 0x41 (EPE3)',
  '0xd400864540c883ae55cfe2c81dbfc04df6a85a0b': 'UNIV3 by 0x41 (EPE3)',
  '0x3c85731486d167c573136d6a66f4fca5c07990d6': 'UNIV3 by 0x41 (EPE3)',
  '0x09c880d70088a156c3dcf05e15ab3df1455caa0f': 'UNIV3 by 0x41 (EPE3)',
  '0x51836ef1f0746b88fbe98abd1490bb60bee42edc': 'UNIV3 by 0x41 (EPE3)',
  '0x0a89b4891992f62ac46696f30dbebb5d50009dcf': 'UNIV3 by 0x41 (EPE3)',
  '0xd4d54575b9c0bd3824c153a96aa534307344be3f': 'UNIV3 by 0x41 (EPE3)',
  '0x2b70aa212cd9afe7bc4dfd8996ff16b3245c4a42': 'UNIV3 by 0x41 (EPE3)',
  '0x11dc9a68e7274cd4967c8f55ba08319f614a617b': 'UNIV3 by 0x41 (EPE3)',
  '0x765774001d715b9ea65ab01e5c0017e1fcbc9721': 'UNIV3 by 0x41 (EPE3)',
  '0xf174727c94fb61e8de399b97a8db2484b4e81377': 'UNIV3 by 0x41 (EPE3)',
  '0xeab1e16b7f9dd35d80646613c4607d6a7b5ed079': 'UNIV3 by 0x41 (EPE3)',
  '0x4c344e3e42e441a302af4f7e8e2c333bb6166a3f': 'UNIV3 by 0x41 (EPE3)',
  '0x3461979776f4db705148779b0b9f8d5cd75be10e': 'UNIV3 by 0x41 (EPE3)',
  '0xdf97b23fba287fe402e4a367976609cfbd2c86c6': 'UNIV3 by 0x41 (EPE3)',
  '0x4b0928a83af0d99dac206cde175f3e16bccd237d': 'UNIV3 by 0x41 (EPE3)',
  '0x28010301fd66287502b849ac6128d7bef9adabe2': 'UNIV3 by 0x41 (EPE3)',
  '0x6e10175b0971d2a5ef068793c25528772fad6212': 'UNIV3 by 0x41 (EPE3)',
  '0x8eb3da798f0fa29ffa047b194502a87e4006cddd': 'UNIV3 by 0x41 (EPE3)',
  '0x964f203ca33aa90170e083a9b792c84c1d2e08da': 'UNIV3 by 0x41 (EPE3)',
  '0x0522bd564f0bbf277b14d746d959e25c18704861': 'UNIV3 by 0x41 (EPE3)',
  '0x1ce16590dd637282168300a0177823f8273ee57b': 'UNIV3 by 0x41 (EPE3)',
  '0x00f3a3efa151db571b39fa2ed5bff231d2b62102': 'UNIV3 by 0x41 (EPE3)',
  '0x2268c697ecead81a922adde2f9e3a27958c81b3f': 'UNIV3 by 0x41 (EPE3)',
  '0xdddc5cd0496119b03fd5ddbbeb3276bbb7026700': 'UNIV3 by 0x41 (EPE3)',
  '0x60a3e0334cdfd9af9a30865c9fd7e565005c71a5': 'UNIV3 by 0x41 (EPE3)',
  '0x62df168faf1628c4592b1cd35e703cb461878e58': 'UNIV3 by 0x41 (EPE3)',
  '0x18665a8a44c896f8b614c5f017eb3a51fcbe5127': 'UNIV3 by 0x41 (EPE3)',
  '0xd2069f1ccfb19caba343549b0e37394af72a880d': 'UNIV3 by 0x41 (EPE3)',
  '0xe765300307974c1bf8f2d1e272f24a90712e4f63': 'UNIV3 by 0x41 (EPE3)',
  '0xf9efb92119ce66e0169d6d3b350a866d9ae5c600': 'UNIV3 by 0x41 (EPE3)',
  '0xa45dfc4e6ed367398c08f8343d40e06bd252434f': 'UNIV3 by 0x41 (EPE3)',
  '0x6c31c94da777ce00d1719d2330e32b8de65c8013': 'UNIV3 by 0x41 (EPE3)',
  '0xaf02360b6e9db06496b4fc2d92aefe95d42b3910': 'UNIV3 by 0x41 (EPE3)',
  '0x185f50010b9f6c733f169bb2ea23c751ec99248b': 'UNIV3 by 0x41 (EPE3)',
  '0x05378315f7517e20f0028bc563d60e62a28a43ef': 'UNIV3 by 0x41 (EPE3)',
  '0x495ef6618f65bbe4b8669c4ecf57c6befec96883': 'UNIV3 by 0x41 (EPE3)',
  '0x3bf46a1bd12a1255b471c2b7c2ef6e22abaced8b': 'UNIV3 by 0x41 (EPE3)',
  '0x038d958d405f61d26d81ba47667f0e337ca7644e': 'UNIV3 by 0x41 (EPE3)',
  '0xeddd3a8c424cc0eb521db5cd89b2228735895bad': 'UNIV3 by 0x41 (EPE3)',
  '0x2267035b696ea562caff0fdb3acd540238271751': 'UNIV3 by 0x41 (EPE3)',
  '0x907039bbe1ca12dfc8ad4591578283c8693eaaa4': 'UNIV3 by 0x41 (EPE3)',
  '0xe416e0bc952569cfb07887b786e4d8a348354ac3': 'UNIV3 by 0x41 (EPE3)',
  '0xd1d6af1b39d21979ef1695018630d8ae0eceb365': 'UNIV3 by 0x41 (EPE3)',
  '0x180eaa5926604bacbe35dcb68ab53d1d616870b6': 'UNIV3 by 0x41 (EPE3)',
  '0x5a2311862c7377b8c97bcf758ad55d60b5b29a1f': 'UNIV3 by 0x41 (EPE3)',
  '0x1e316f303bc9e6e5fa6f5ecf610aeaed92660082': 'UNIV3 by 0x41 (EPE3)',
  '0x8465539c35ea1c3e00e93e9c7d73db3e5b1b3592': 'UNIV3 by 0x41 (EPE3)',
  '0xed961c64a1a62bb38080a8e03b0d69d6cbdf90dc': 'UNIV3 by 0x41 (EPE3)',
};

export const MALICIOUS_RECEIVERS = Object.keys(MALICIOUS_RECEIVERS_NAMES);
