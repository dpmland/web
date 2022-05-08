---
layout: base.njk
---

#### Steps to the Installation

> Unstable version

If you want test dpm in the development version **NOT DOCUMENTATION PROVIDED** and **NO
COMPLETE FEATURES** can you install with:

> Stable not ultimate features!

**Only the CLI Installation**:

```sh
deno install -Afn dpm --unstable --import-map=https://deno.land/x/dpm/import_map.json https://deno.land/x/dpm/cli.ts
```

**Complete installation**: :fire:

```sh
deno install -Afn dpm --unstable --import-map=https://deno.land/x/dpm/import_map.json https://deno.land/x/dpm/cli.ts && dpm doc -d && dpm tools install
```

> Canary ( Ultimate features ) :bird:

**Only the CLI Installation:** :star:

```
deno install -qAf --unstable --import-map=https://denopkg.com/dpmland/dpm@nightly/import_map.json https://denopkg.com/dpmland/dpm@nightly/dpm.ts
```

**Complete installation:** :fire:

```
deno install -qAf --unstable --import-map=https://denopkg.com/dpmland/dpm@nightly/import_map.json https://denopkg.com/dpmland/dpm@nightly/dpm.ts && dpm doc -d && dpm tools install
```
