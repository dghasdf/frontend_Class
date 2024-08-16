const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#userEmail");

  if (email.value !== "") {
    const useName = email.value.split("@")[0];
    useName = useName.slice(0, 2);
    const domain = email.value.split("@")[1];
    document.querySelector("#result").innerText = `${useName}***@${domain}`;
    email.value = "";
  }
});
