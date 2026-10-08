# User Question: Skills visible in Opencode settings but not via /skill command

## The Problem
You see all added skills in Opencode settings, but when trying to activate them via `/skill`, they're not visible.

## Root Cause Analysis

After examining your OpenCode configuration at `~/.config/opencode/skills/skills-for-open-code-main/`, here's what's likely happening:

### 1. Skills Directory Structure
OpenCode discovers skills from the `skills/` directory. Skills must be in proper directory format:
```
~/.config/opencode/skills/skills-for-open-code-main/.opencode/skills/{skill-name}/
└── SKILL.md
```

Each skill requires a `SKILL.md` file with YAML frontmatter containing a `name` field:
```markdown
---
name: your-skill-name
description: Brief description
origin: ECC
---
```

### 2. Installation Method Matters
- **Filesystem skills**: Skills placed in `~/.config/opencode/skills/` are automatically loaded
- **Settings UI skills**: If you installed skills via the Opencode settings interface, they may be stored in a different location or format that the `/skill` command doesn't recognize

### 3. The `/skill` Command
The `/skill` command typically:
- Lists available skills from the `skills/` directory
- Can activate skills by name
- Requires skills to have proper `SKILL.md` metadata

### Common Issues
1. **Skills installed via settings UI** might not be copied to the `skills/` directory
2. **Missing `name` field** in SKILL.md frontmatter
3. **Skills in wrong directory** - not in the expected `~/.config/opencode/skills/` path
4. **OpenCode needs restart** - new skills require a reload

## Solution

### Checklist to Make Skills Visible via `/skill`:

1. **Verify skill directory exists**:
   ```
   ls ~/.config/opencode/skills/
   ```

2. **Ensure each skill has SKILL.md with `name` field**:
   - The `name` field in YAML frontmatter is critical
   - Example: `name: accessibility`

3. **Restart OpenCode** after adding new skills

4. **Use `/skill list`** to see all loaded skills

5. **Use `/skill accessibility`** to test activating a specific skill

### If skills were installed via settings UI:
You may need to manually copy or reconfigure them to appear in the `skills/` directory, or check if there's an "export" option in the settings that places them in the correct location.

Would you like me to help you:
- Check your current skills directory structure?
- Verify a specific skill's SKILL.md format?
- List what skills are currently loaded?