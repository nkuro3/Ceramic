# Ceramic

## getting start
https://blog.ceramic.network/getting-started-with-ceramic/

## quick start
https://developers.ceramic.network/build/cli/quick-start/

```node
// ノードの起動
> ceramic daemon

// 初回はタイムアウトエラー
Ceramic daemon failed to start up:
FetchError: request to https://cas-clay.3boxlabs.com/api/v0/service-info/supported_chains failed, reason: connect ETIMEDOUT 18.190.9.122:443

// 再度実行すると成功
[2022-11-30T00:32:27.018Z] IMPORTANT: Starting Ceramic Daemon at version 2.15.0 with config: 
{
  "anchor": {},
  "http-api": {
    "cors-allowed-origins": [
      ".*"
    ],
    "admin-dids": []
  },
  "ipfs": {
    "mode": "bundled"
  },
  "logger": {
    "log-level": 2,
    "log-to-files": false
  },
  "metrics": {
    "metrics-exporter-enabled": false,
    "metrics-port": 9090
  },
  "network": {
    "name": "testnet-clay"
  },
  "node": {},
  "state-store": {
    "mode": "fs",
    "local-directory": "/Users/naoyukikuroda/.ceramic/statestore/"
  },
  "indexing": {
    "db": "sqlite:///Users/naoyukikuroda/.ceramic/indexing.sqlite",
    "allow-queries-before-historical-sync": true,
    "models": []
  }
}
...
[2022-11-30T00:37:23.796Z] IMPORTANT: Ceramic API running on 0.0.0.0:7007'

// Streamの作成
> glaze tile:create --key ab...f0 --content '{"Foo":"Bar"}'

// ノードが立ってない時は以下のエラー
ℹ Using DID did:key:z6Mkf3......
✖ request to http://localhost:7007/api/v0/streams failed, reason: connect ECONNREFUSED 127.0.0.1:7007

// ノードが立っている状態で実行
ℹ Using DID did:key:z6Mkf3......
✔ Created stream kjzl6cwe1jw14a91opqe2g23xbka1d4rpp8qfpgtpvag3mamix46pf9k9lqjw75.
{
  streamID: 'kjzl6cwe1jw14a91opqe2g23xbka1d4rpp8qfpgtpvag3mamix46pf9k9lqjw75',
  content: { Foo: 'Bar' }
}

> glaze tile:show {streamID}
> glaze stream:state {streamID}
> glaze tile:update {streamID} --key ab...f0 --content '{"Foo":"Baz"}'

// schemeの作成（json-schemeというタイプのTileDocument）
> glaze tile:create --key ab...f0 --content '{
   "$schema": "http://json-schema.org/draft-07/schema#",
   "title": "Reward",
   "type": "object",
   "properties": {
     "title": {"type": "string"},
     "message": {"type": "string"}
   },
   "required": [
     "message",
     "title"
   ]
 }'

// scheme付きのstreamを作成
> glaze tile:create --key ab...f0 --content '{
    "title": "My first document with schema",
    "message": "Hello World"
  }' --metadata '{"schema":"k3y52l7qbv1frxu8co1hjrivem5cj2oiqtytlku3e4vjo92l67fkkvu6ywuzfxvy8"}'

```

https://developers.ceramic.network/build/javascript/http/
https://developers.ceramic.network/reference/accounts/did-session/

## compose db
https://composedb.js.org/

## Ref
- https://www.w3.org/TR/did-core/#dfn-did-documents
- https://developers.ceramic.network/learn/glossary