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

Neither installs anything else: no Node, no Python, no toolchain, no setup step.
`eck` bundles its runtime and installs from a released archive this marketplace
pins by digest; the install is refused if what arrives is not that file.