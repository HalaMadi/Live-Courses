// document.addEventListener('DOMContentLoaded', function() {
//     var tableBody = document.querySelector('tbody');

//     for (var i = 0; i < 11; i++) {
//         var row = document.createElement('tr');
//         row.innerHTML = `
//             <td>Name name</td>
//             <td>
//                 <img
//                     src="/assets/img/student.png"
//                     alt="A student takes an exam"
//                     width="80px"
//                     height="60px"
//                 />
//             </td>
//             <td>MD1</td>
//             <td>online</td>
//             <td>08:30 AM</td>
//             <td>00:31:05</td>
//             <td>80</td>
//             <td>75%</td>
//             <td>82%</td>
//             <td>Actions</td>
//         `;
//         tableBody.appendChild(row);
//     }
// });

function toggleDetail(detailId) {
    var detailElement = document.getElementById(detailId);
    if (detailElement.classList.contains("show")) {
      detailElement.classList.remove("show");
    } else {
      // Optional: Hide all other details
      var allDetails = document.querySelectorAll(".collapse.show");
      allDetails.forEach(function (detail) {
        detail.classList.remove("show");
      });

      // Show the selected detail
      detailElement.classList.add("show");
    }
  }