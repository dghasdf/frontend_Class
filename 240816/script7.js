const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let = tweeText = document.querySelector("#tweeTextArea").value;
  tweeText += `#david #sns #js`;
  console.log(tweeText);

  const encodedText = encodeURIComponent(tweeText);
  const tweeURL = `https://twitter.com/intent/tweet?text=$(encodeText)`;

  window.open(tweeURL);
});
