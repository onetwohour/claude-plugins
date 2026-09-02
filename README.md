# onetwohour — a Claude Code plugin marketplace

```
/plugin marketplace add onetwohour/claude-plugins
```

| Plugin | What it does | Source |
| --- | --- | --- |
| `engineering-doctrine` | Guides Claude Code to trace root causes, change only what the task requires, verify with evidence, and review before claiming completion. | [Engineering-Doctrine](https://github.com/onetwohour/Engineering-Doctrine) |
| `eck` | Answers questions about a codebase with the evidence behind them, says `UNKNOWN` rather than guessing, and refuses a policy-sensitive edit until the agent declares what it rests on. | [ECK](https://github.com/onetwohour/ECK) |

```
/plugin install engineering-doctrine@onetwohour
/plugin install eck@onetwohour
```

`eck` runs a compiled binary that is released separately; its
[README](https://github.com/onetwohour/ECK#claude-code-plugin) says how to get one.

## Why this repository holds nothing but the marketplace

The marketplace used to live in the Engineering-Doctrine repository, which meant
installing any plugin — including one with nothing to do with engineering
doctrine — began by typing that repository's name. A marketplace with more than
one member should not be reached through the name of one of them.

So each plugin stays in the repository it is built and released from, and this
one carries only the list. Adding a third plugin does not touch either of the
existing two.
