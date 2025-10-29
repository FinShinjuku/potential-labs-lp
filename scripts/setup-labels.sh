#!/bin/bash

# Miyabi 53-Label System Setup Script
# Source: https://github.com/ShunsukeHayashi/Miyabi

set -e

echo "🏷️  Setting up Miyabi 53-label system..."

# Delete default GitHub labels
echo "Deleting default GitHub labels..."
gh label delete "bug" --yes 2>/dev/null || true
gh label delete "documentation" --yes 2>/dev/null || true
gh label delete "duplicate" --yes 2>/dev/null || true
gh label delete "enhancement" --yes 2>/dev/null || true
gh label delete "good first issue" --yes 2>/dev/null || true
gh label delete "help wanted" --yes 2>/dev/null || true
gh label delete "invalid" --yes 2>/dev/null || true
gh label delete "question" --yes 2>/dev/null || true
gh label delete "wontfix" --yes 2>/dev/null || true

echo "Creating Miyabi labels..."

# STATE LABELS (8)
gh label create "📥 state:pending" --color "E4E4E4" --description "Issue created, awaiting triage" --force
gh label create "🔍 state:analyzing" --color "0E8A16" --description "CoordinatorAgent analyzing dependencies and complexity" --force
gh label create "🏗️ state:implementing" --color "1D76DB" --description "Specialist Agents actively working on implementation" --force
gh label create "👀 state:reviewing" --color "FBCA04" --description "ReviewAgent conducting quality checks" --force
gh label create "✅ state:done" --color "2EA44F" --description "Completed successfully, merged to main" --force
gh label create "🔴 state:blocked" --color "D73A4A" --description "Blocked - requires Guardian intervention" --force
gh label create "🛑 state:failed" --color "B60205" --description "Execution failed - error occurred" --force
gh label create "⏸️ state:paused" --color "D4C5F9" --description "Paused - waiting for dependencies or approval" --force

# AGENT ASSIGNMENT LABELS (6)
gh label create "🤖 agent:coordinator" --color "FF79C6" --description "Assigned to CoordinatorAgent" --force
gh label create "🤖 agent:codegen" --color "00D9FF" --description "Assigned to CodeGenAgent" --force
gh label create "🤖 agent:review" --color "00FF88" --description "Assigned to ReviewAgent" --force
gh label create "🤖 agent:issue" --color "8B88FF" --description "Assigned to IssueAgent" --force
gh label create "🤖 agent:pr" --color "FF79C6" --description "Assigned to PRAgent" --force
gh label create "🤖 agent:deployment" --color "FF4444" --description "Assigned to DeploymentAgent" --force

# PRIORITY LABELS (4)
gh label create "🔥 priority:P0-Critical" --color "B60205" --description "Critical - Security, Production Down, Data Loss" --force
gh label create "⚠️ priority:P1-High" --color "D93F0B" --description "High - Major feature, significant bug" --force
gh label create "📊 priority:P2-Medium" --color "FBCA04" --description "Medium - Standard feature or bug" --force
gh label create "📝 priority:P3-Low" --color "0E8A16" --description "Low - Nice-to-have, minor improvement" --force

# TYPE LABELS (7)
gh label create "✨ type:feature" --color "00D9FF" --description "New feature or enhancement" --force
gh label create "🐛 type:bug" --color "D73A4A" --description "Bug fix" --force
gh label create "📚 type:docs" --color "0075CA" --description "Documentation improvement" --force
gh label create "🔧 type:refactor" --color "FBCA04" --description "Code refactoring" --force
gh label create "🧪 type:test" --color "00FF88" --description "Test addition or improvement" --force
gh label create "🏗️ type:architecture" --color "8B88FF" --description "Architecture design or system-level change" --force
gh label create "🚀 type:deployment" --color "FF4444" --description "Deployment or infrastructure" --force

# SEVERITY LABELS (4)
gh label create "🚨 severity:Sev.1-Critical" --color "B60205" --description "Critical - Immediate Guardian escalation required" --force
gh label create "⚠️ severity:Sev.2-High" --color "D93F0B" --description "High - TechLead/CISO escalation recommended" --force
gh label create "📊 severity:Sev.3-Medium" --color "FBCA04" --description "Medium - Monitor closely" --force
gh label create "📝 severity:Sev.4-Low" --color "0E8A16" --description "Low - Normal handling" --force

# PHASE LABELS (5)
gh label create "🎯 phase:planning" --color "D4C5F9" --description "Planning phase" --force
gh label create "🏗️ phase:implementation" --color "1D76DB" --description "Implementation phase" --force
gh label create "🧪 phase:testing" --color "00FF88" --description "Testing phase" --force
gh label create "🚀 phase:deployment" --color "FF4444" --description "Deployment phase" --force
gh label create "📊 phase:monitoring" --color "0E8A16" --description "Monitoring phase" --force

# SPECIAL OPERATION LABELS (7)
gh label create "🔐 security" --color "B60205" --description "Security-related issue - CISO escalation" --force
gh label create "💰 cost-watch" --color "FBCA04" --description "High cost operation - budget monitoring" --force
gh label create "🔄 dependencies" --color "8B88FF" --description "Has dependencies - must resolve first" --force
gh label create "🎓 learning" --color "7057FF" --description "Learning task - may take longer" --force
gh label create "🔬 experiment" --color "D4C5F9" --description "Experimental - may fail" --force
gh label create "🚫 wontfix" --color "E4E4E4" --description "Will not be fixed - closed" --force
gh label create "🔁 duplicate" --color "CFD3D7" --description "Duplicate of another issue" --force

# AUTOMATED TRIGGER LABELS (4)
gh label create "🤖 trigger:agent-execute" --color "FF79C6" --description "Trigger: Execute autonomous agents" --force
gh label create "📊 trigger:generate-report" --color "0E8A16" --description "Trigger: Generate weekly report" --force
gh label create "🚀 trigger:deploy-staging" --color "FBCA04" --description "Trigger: Deploy to staging environment" --force
gh label create "🚀 trigger:deploy-production" --color "D73A4A" --description "Trigger: Deploy to production (requires Guardian approval)" --force

# QUALITY LABELS (4)
gh label create "⭐ quality:excellent" --color "2EA44F" --description "Quality Score: 90-100 (Excellent)" --force
gh label create "✅ quality:good" --color "00FF88" --description "Quality Score: 80-89 (Good)" --force
gh label create "⚠️ quality:needs-improvement" --color "FBCA04" --description "Quality Score: 60-79 (Needs Improvement)" --force
gh label create "🔴 quality:poor" --color "D73A4A" --description "Quality Score: <60 (Poor - Requires Rework)" --force

# COMMUNITY LABELS (4)
gh label create "👋 good-first-issue" --color "7057FF" --description "Good for newcomers" --force
gh label create "🙏 help-wanted" --color "0E8A16" --description "Community help wanted" --force
gh label create "❓ question" --color "D4C5F9" --description "Question or discussion" --force
gh label create "💬 discussion" --color "D4C5F9" --description "Open discussion" --force

echo "✅ Successfully created 53 Miyabi labels!"
echo ""
echo "Verifying labels..."
gh label list --limit 100 | wc -l
echo ""
echo "🎉 Miyabi 53-label system setup complete!"
