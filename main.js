import { config } from "./config.js";

// Update link hrefs from config
document.addEventListener("DOMContentLoaded", () => {
  const friendLink = document.getElementById("friendLink");
  const telegramMainLink = document.getElementById("telegramMainLink");
  const telegramBotLink = document.getElementById("telegramBotLink");
  const noMetaLink = document.getElementById("noMetaLink");
  const activityLink = document.getElementById("activityLink");
  const designProjectLink = document.getElementById("designProjectLink");
  const bloodCloudLink = document.getElementById("bloodCloudLink");
  const shopLink = document.getElementById("shopLink");

  if (friendLink) friendLink.href = config.links.friend;
  if (telegramMainLink) telegramMainLink.href = config.links.telegramMain;
  if (telegramBotLink) telegramBotLink.href = config.links.telegramBot;
  if (noMetaLink) noMetaLink.href = config.links.noMeta;
  if (activityLink) activityLink.href = config.links.activity;
  if (designProjectLink) designProjectLink.href = config.links.designProject;
  if (bloodCloudLink) bloodCloudLink.href = config.links.bloodCloud;
  if (shopLink) shopLink.href = config.links.shop;
});