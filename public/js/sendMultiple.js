const form = document.querySelector("form");
const input = document.getElementById("recipients");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedEmail = document.getElementById("select-email").value;
  const recipients = parseRecipients(input.value);
  callAPI(recipients, selectedEmail);
  input.value = "";
});

function parseRecipients(input) {
  const recipients = input.split("\\n").map((pair) => {
    const [name, email] = pair.split(",");
    return { name, email };
  });
  return recipients;
}

async function callAPI(recipients, selectedEmail) {
  await fetch(`/email/send-multiple`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ recipients, selectedEmail }),
  });
}

// (function copiedCode() {
//   let recipientList = [];
//   let captureNext = false;
//   let isFirstItem = true;
//   const [...tds] = document.querySelectorAll("td");
//   const tdList = tds.reverse();

//   tdList.forEach((td) => {
//     if (td.textContent.includes("@")) {
//       const email = td.textContent;
//       if (isFirstItem) {
//         recipientList.unshift(email);
//         isFirstItem = false;
//       } else {
//         recipientList.unshift(`${email}\\n`);
//       }
//       captureNext = true;
//     } else if (captureNext) {
//       const name = td.textContent;
//       let parsedName = "";

//       if (name.includes(" ")) {
//         [parsedName] = name.split(" ");
//       } else {
//         for (let i = 0; i < name.length; i++) {
//           if (parsedName) break;
//           else if (parseInt(name[i])) {
//             parsedName = name.slice(0, i);
//           }
//         }
//       }
//       recipientList.unshift(`${parsedName.toString()},`);
//       captureNext = false;
//     }
//   });
//   recipientList.shift();

//   let finalParse = "";
//   recipientList.forEach((item) => {
//     finalParse += item;
//   });
//   console.log(finalParse);
// })()
