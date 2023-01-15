import { CeramicClient } from '@ceramicnetwork/http-client';
import KeyDidResolver from 'key-did-resolver'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { DID } from 'dids';

// https://developers.ceramic.network/run/nodes/community-nodes/
// const API_URL = 'https://ceramic-clay.3boxlabs.com'; // test
const API_URL = 'https://gateway.ceramic.network'; // main

const ceramic = new CeramicClient(API_URL);
const resolver = {
  ...KeyDidResolver.getResolver(),
  ...ThreeIdResolver.getResolver(ceramic),
};
const did = new DID({ resolver });
ceramic.did = did;

