---
layout: base.njk
---

#### Steps to the Installation

- Stable version

```sh
deno install -Afn dpm --unstable --import-map=https://deno.land/x/dpm/import_map.json https://deno.land/x/dpm/cli.ts && dpm doc -d && dpm tools install
```
- Canary ( Ultimate features )

```
deno install -qAf --unstable --import-map=https://denopkg.com/dpmland/dpm@dev/import_map.json https://denopkg.com/dpmland/dpm@dev/dpm.ts && dpm doc -d && dpm tools install
```
