function addHome() {
  let homeContainer = document.createElement("div");
  let video = document.createElement("iframe");
  let homeDesc = document.createElement("div");
  homeDesc.textContent =
    "This song of the week is brought to you by costumer of the week Andrea Lizarraga!";
  let vidURL = "https://www.youtube.com/embed/FFnjZY1vRzk";
  homeContainer.classList.add("vid-container");
  video.title = "Song of the week";
  video.src = vidURL;
  video.setAttribute("frameborder", 0);
  video.classList.add("video");
  homeDesc.classList.add("home-desc");
  homeContainer.append(video);
  homeContainer.append(homeDesc);
  return homeContainer;
}

export default addHome;
