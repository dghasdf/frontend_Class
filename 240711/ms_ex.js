const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  gnb.classList.tog("on");
  sns.classList.tog("on");
  this.classList.toggle("active");
});
