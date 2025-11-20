---
<%* 
let url = await tp.system.clipboard();
let question = await tp.user.getLeetcodeProblem(tp, url, true);
await tp.file.rename(question.questionId + ". " + question.title);
-%>
Date: <% tp.file.creation_date("YYYY-MM-DD") %>
Link: <% `https://leetcode.com/problems/${question.titleSlug}/` %>
Category: 
<%*
question.topicTags.forEach(item => {
	tR += `- ${item.name}\n`
})
-%>
Difficulty: <% question.difficulty %>
Completed: false
---

##Problem

<% question.content %>

<%*
question.hints.forEach(item => {
tR += `> [!note]- Hint\n> ${item}\n\n`
})
-%>

## Solution

## Notes