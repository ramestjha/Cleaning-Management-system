window.onload = () => {
  const el = document.getElementById("date");
  el.innerHTML = new Date().toISOString().split("date")[0];
};
<div id="customDate">waiting...</div>;
