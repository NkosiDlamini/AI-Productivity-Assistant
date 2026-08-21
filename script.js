// --- Email Generation ---
function generateEmail(){
  let input = document.getElementById('emailInput')?.value || "";
  document.getElementById('output').innerText = "Generated Email:\n\nDear Client,\n\nThank you for bearing with us. Regarding: " + input + "\n\nWe are following up on the project delay and will update you shortly.\n\nBest regards,\nNkosi";
}

// --- Meeting Summarization ---
function summarizeMeeting(){
  let input = document.getElementById('meetingInput')?.value || "";
  document.getElementById('output').innerText = "Summary:\n\nKey Decisions: Approved timeline\nAction Items: 1. Update client 2. Fix CSS\nNext Steps: Deploy by Friday\n\nTranscript was: " + input.substring(0,100) + "...";
}

// --- Task Planning ---
function planTasks(){
  let input = document.getElementById('taskInput')?.value || "General Work";
  document.getElementById('output').innerText = "Weekly Plan for: " + input + "\n\nMon: Plan emails, Review code\nTue: Build research feature\nWed: Test chatbot\nThu: Update README\nFri: Final commit";
}

// --- Research Assistance ---
function doResearch(){
  let input = document.getElementById('researchInput')?.value || "AI Tools";
  document.getElementById('output').innerText = "Research Result for: " + input + "\n\n1. ChatGPT - Best for writing\n2. Gemini - Best for research\n3. Notion AI - Best for notes\n4. Claude - Best for long docs\n5. Perplexity - Best for citations";
}

// --- Chatbot ---
function sendChat(){
  let input = document.getElementById('chatInput').value;
  if(!input) return;
  document.getElementById('chatBox').innerHTML += "<p><b>You:</b> " + input + "</p><p><b>Bot:</b> Got it! I can help you with workplace tasks related to '" + input + "'.</p>";
  document.getElementById('chatInput').value = "";
}
