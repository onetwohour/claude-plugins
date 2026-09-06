# onetwohour — a Claude Code plugin marketplace

```
/plugin marketplace add onetwohour/claude-plugins
```

| Plugin | What it does | Source |
| --- | --- | --- |
| `engineering-doctrine` | Guides Claude Code to trace root causes, change only what the task requires, verify with evidence, and review before claiming completion. | [Engineering-Doctrine](https://github.com/onetwohour/Engineering-Doctrine) |
| `eck` | Compiles a project's notes, decisions and code into knowledge you can be held to: every answer carries what it rests on, and nothing is written without someone seeing exactly what it would write. | [Epistemic-Compiler-Kernel](https://github.com/onetwohour/Epistemic-Compiler-Kernel) |

```
/plugin install engineering-doctrine@onetwohour
/plugin install eck@onetwohour
```

Neither plugin installs anything else. `eck` bundles its runtime, so there is no
separate binary to fetch, no toolchain to have, and no setup step before it works.

## Why this repository holds nothing but the marketplace

The marketplace used to live in the Engineering-Doctrine repository, which meant
installing any plugin — including one with nothing to do with engineering
doctrine — began by typing that repository's name. A marketplace with more than
one member should not be reached through the name of one of them.

So each plugin stays in the repository it is built and released from, and this
one carries only the list. Adding a third plugin does not touch either of the
existing two.
