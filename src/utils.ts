import {bech32} from 'bech32';

export function baseAddrToStakeAddr(baseAddress: string) {
  // the last 56 bytes of the base address is the stake address
  const decodedAddr = baseAddress.substring(baseAddress.length - 56);
  return bech32.encode(
   'stake',
   bech32.toWords(Uint8Array.from(Buffer.from('e1' + decodedAddr, 'hex')))
  );
}
