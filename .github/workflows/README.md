# GitHub Actions Workflows

This directory contains automated workflows for the Miyabi Autonomous Operations system.

## 📋 Workflows

### 1. Issue Auto-Label (`issue-auto-label.yml`)

Automatically labels new issues based on their title and body content.

**Triggers:**
- When a new issue is opened

**Actions:**
- Analyzes issue title and body
- Assigns appropriate labels:
  - Type: `✨ type:feature`, `🐛 type:bug`, `📚 type:docs`, etc.
  - Priority: `🔥 priority:P0-Critical`, `⚠️ priority:P1-High`, etc.
  - State: `📥 state:pending`
  - Phase: `🎯 phase:planning`
- Posts a welcome comment with instructions

### 2. Miyabi Auto Execute (`miyabi-auto-execute.yml`)

Automatically executes the Miyabi Agent system to implement solutions.

**Triggers:**
- Label `🤖 trigger:agent-execute` is added to an issue
- Comment contains `/agent` or `@miyabi`
- Manual workflow dispatch

**Actions:**
1. Analyzes the issue
2. Executes CoordinatorAgent
3. Generates code implementation
4. Creates a new branch
5. Commits changes
6. Creates a Pull Request
7. Comments on the issue with results

**Requirements:**
- `GITHUB_TOKEN`: Automatically provided
- `ANTHROPIC_API_KEY`: Must be set in repository secrets

## 🔧 Setup

### Required Secrets

Add these secrets in your GitHub repository settings:

1. **ANTHROPIC_API_KEY**
   - Go to: Settings → Secrets and variables → Actions → New repository secret
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key (starts with `sk-ant-`)

### Optional Configuration

The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

## 🚀 Usage

### Trigger Automatic Execution

**Method 1: Add Label**
1. Open an issue
2. Add the label: `🤖 trigger:agent-execute`
3. The workflow will start automatically

**Method 2: Comment**
1. Open an issue
2. Comment: `/agent` or `@miyabi`
3. The workflow will start automatically

**Method 3: Manual Trigger**
1. Go to: Actions → Miyabi Auto Execute
2. Click "Run workflow"
3. Enter the issue number
4. Click "Run workflow"

## 📊 Workflow Status

Check the status of workflows:
- Go to the "Actions" tab in your repository
- Click on a workflow run to see detailed logs

## 🔍 Troubleshooting

### Workflow doesn't trigger
- Check if the repository has Actions enabled
- Verify the label name matches exactly: `🤖 trigger:agent-execute`
- Ensure `ANTHROPIC_API_KEY` secret is set

### Agent execution fails
- Check the workflow logs for error messages
- Verify the API key is valid
- Check if the issue has sufficient context

### No code changes generated
- The agent may determine no changes are needed
- Add more context to the issue description
- Try running manually with more details

## 📚 More Information

- [Miyabi Documentation](https://github.com/ShunsukeHayashi/Miyabi)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Claude Code Documentation](https://claude.com/claude-code)
# Updated 2025年 10月29日 水曜日 16時10分04秒 JST
