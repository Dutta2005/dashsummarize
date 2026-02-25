chrome.commands.onCommand.addListener(async (command) => {
  if (command === "summarize-page") {
    await chrome.storage.session.set({ autoSummarize: true });
    chrome.action.openPopup();
  }
});
