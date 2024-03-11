document.addEventListener("DOMContentLoaded", function () {
  var tableBody = document.querySelector("tbody");
  for (var i = 0; i < 11; i++) {
    var row = document.createElement("tr");
    row.innerHTML = `
            <td>Name name</td>
            <td>
                <img
                    src="/assets/img/student.png"
                    alt="A student takes an exam"
                    width="80px"
                    height="60px"
                />
            </td>
            <td>MD1</td>
            <td>online</td>
            <td>08:30 AM</td>
            <td>00:31:05</td>
            <td>80</td>
            <td>75%</td>
            <td>82%</td>
            <td><img
            src="/assets/img/comment.png"
            width="30px"
            height="30px"
        />
        <img
            src="/assets/img/stop.png"
            width="30px"
            height="30px"
        />
        <img
            src="/assets/img/player.png"
            width="30px"
            height="30px"
        />
        <img
            src="/assets/img/microphone.png"
            width="30px"
            height="30px"
        />
        </td>
        `;
    row.onclick = function () {
      toggleDetail("userDetails3");
    };
    tableBody.appendChild(row);
  }
});
function toggleDetail(detailId) {
  var detailElement = document.getElementById(detailId);
  if (detailElement.classList.contains("show")) {
    detailElement.classList.remove("show");
  } else {
    var allDetails = document.querySelectorAll(".collapse.show");
    allDetails.forEach(function (detail) {
      detail.classList.remove("show");
    });
    detailElement.classList.add("show");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const switchInput = document.getElementById("flexSwitchCheckChecked");
  const tableSection = document.querySelector(".information_Table");
  const camGridSection = document.querySelector(".camGrid");

  switchInput.addEventListener("change", function () {
    if (this.checked) {
      tableSection.style.display = "none";
      camGridSection.style.display = "block";
    } else {
      tableSection.style.display = "block";
      camGridSection.style.display = "none";
    }
  });
});
