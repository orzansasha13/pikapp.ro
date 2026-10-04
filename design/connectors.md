# connectors.md

The tools pikapp actually uses, what Claude may do with each, and what it must never do. Skills point at this file. Where Claude Code can enforce a line, the rule is also in `.claude/settings.json`.

| Tool | Access | Claude may | Claude must never |
|---|---|---|---|
| This folder (`design/` in the pikapp.ro repo) | read-write | Create and edit screens, reviews and skills. Git is the undo. | Push to GitHub. A person reviews and pushes. (Enforced: `Bash(git push *)` is denied.) |
| `materials/` | read, write on request | Read fonts, logos and copy | Change a file in `materials/` without asking. (Enforced: edits under `materials/` always ask.) |
| pikapp.ro live site (Framer) | read-only | Read the public page to extract copy or values | Publish or edit in Framer. Changes go to the site by hand after a review passes. |
| Canva (connected in Claude) | read-only | Read existing pikapp designs for reference | Edit, resize, export or publish a pikapp design |
| Google Drive (connected in Claude) | read-only | Read brand files and original photos | Share, move or trash a file |
| WhatsApp Business (+40 724 262 040) | never | Build a prefilled `wa.me` link that a person taps | Send any message to a client |
| SmartBill, iaBilet, LiveTickets, client list | never | Nothing | Read or write invoices, payments, ticket sales or client contact data |

## Not connected, and why

- **Figma** is connected in Claude but pikapp does not design in Figma. If that changes, it starts as read-only.
- **Illustrator** has no connector. Logos and posters are exported to `materials/` by hand, with a line in `LICENSES.md`.

## Rule for adding a tool

Start read-only. Move a tool to read-write only where every change can be undone, and write the reason here first.
