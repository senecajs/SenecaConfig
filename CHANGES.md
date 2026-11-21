# Changes

## 0.6.0 2026-11-21

First entry of this change log. Earlier versions are on npm and in the git
history.

* Seneca 4: the peer dependency is `seneca` `^4.0.0` (was
  `>=3||>=4.0.0-rc2`). Seneca 3 users stay on `@seneca/config@0.5`.
* The entity plugin peer is `@seneca/entity` `^29.0.0` (was
  `seneca-entity` `>=26`).
* Node.js 24 or later (`engines.node` `>=24`). The build targets ES2024.
* The peer dependencies `seneca-promisify` and `@seneca/entity-util` are
  removed. Seneca 4 has promises built in (D4), and the plugin does not use
  `@seneca/entity-util`.
* The messages and options are unchanged.
* The README install line and example name `@seneca/config`.
* The tests load the entity plugin by its full name (`@seneca/entity`, B14)
  and check the `canon` option.
