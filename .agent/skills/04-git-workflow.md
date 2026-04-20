# Skill: Git Workflow and Commits

**Purpose**: Maintains a clean, automated, and descriptive version history for the Mango store project.

## Directives
1. **Auto-Commit Trigger**: Immediately following the completion of any functional block, milestone, major refactoring, or bug fix, you MUST automatically run the git commands to save work.
   - Command: `git add .`
   - Command: `git commit -m "[type]: [descriptive message]"`
   - Use conventional commit types like `feat:`, `fix:`, `style:`, `refactor:`, `chore:`.
2. **Branching Protocol**:
   - BEFORE you write or generate any code for a completely **NEW page** (i.e., creating a new directory and `page.tsx` within `app/`), you must PAUSE and ask the user verbally:
     *"Do you want me to create a new git branch for this page?"*
   - Do not proceed with the file creation until the user responds. If they say yes, execute `git checkout -b <branch-name>` before coding.
