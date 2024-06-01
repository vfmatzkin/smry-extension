chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "smryAI",
    title: "Open with SMRY.AI",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "smryAI") {
    const url = `https://www.smry.ai/proxy?url=${encodeURIComponent(info.linkUrl)}`;
    chrome.tabs.create({ url });
  }
});
