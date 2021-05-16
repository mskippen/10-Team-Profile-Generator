const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function initApp() {
  createHtmltemplate();
  addNewMember();
}

function addNewMember() {
  inquirer
    .prompt([
      {
        message: "Enter member's name",
        name: "name",
      },
      {
        type: "list",
        message: "Select= member's role",
        choices: ["Intern", "Engineer", "Manager"],
        name: "role",
      },
      {
        message: "Enter member's id",
        name: "id",
      },
      {
        message: "Enter team member's email address",
        name: "email",
      },
    ])
    .then(function (data) {
      const { name, role, id, email } = data;
      let tempRole = "";
      if (role === "Engineer") {
        tempRole = "GitHub username";
      } else if (role === "Intern") {
        tempRole = "school name";
      } else {
        tempRole = "office phone number";
      }
      inquirer
        .prompt([
          {
            message: `Enter team member's ${tempRole}`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Do you want to add more team members?",
            choices: ["yes", "no"],
            name: "moreMembers",
          },
        ])
        .then(function (info) {
          const { roleInfo, moreMembers } = info;
          let tempMember;
          if (role === "Engineer") {
            tempMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            tempMember = new Intern(name, id, email, roleInfo);
          } else {
            tempMember = new Manager(name, id, email, roleInfo);
          }
          appendHtml(tempMember);
          if (moreMembers === "yes") {
            addNewMember();
          } else {
            completeHtmltemplate();
          }
        })
        .catch((err) => console.log(err));
    });
}

function createHtmltemplate() {
  const output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <title>Profile Generator</title>
    </head>
    <body>
        <nav>
            <h1>Profile Generator</h1>
        </nav>
        <div class="wrapper">
            <div>`;

  fs.writeFile("./dist/team.html", output, function (err) {
    if (err) {
      console.log(err);
    } else console.log("file created");
  });
  console.log("start");
}

function appendHtml(member) {
  console.log(member, "from member");
  const email = member.getEmail();
  const role = member.getRole();
  const id = member.getId();
  const name = member.getName();
  let data = "";
  if (role === "Intern") {
    const school = member.getSchool();
    data = `
            <article>
            <h5 >${name}</h5>
            <h5 ><span><i class="fas fa-user-graduate"></i></span> Intern</h5>
            <ul>
                <li>ID ${id}</li>
                <li>Email Address ${email}</li>
                <li>School ${school}</li>
            </ul>
            </article>
        `;
  } else if (role === "Engineer") {
    const gitHub = member.getGithub();
    data = `
            <article>
            <h5 >${name}</h5>
            <h5 ><span><i class="fas fa-glasses"></i></span>Engineer</h5>
            <ul>
                <li>ID ${id}</li>
                <li>GitHub ${gitHub}</li>
                <li>Email Address ${email}</li>
            </ul>
            </article>
        `;
  } else {
    const contact = member.getOfficeNumber();
    data = `
            <article>
            <h5>${name}</h5>
            <h5><span><i class="fa fa-mug-hot"></i><span> Manager</h5>
            <ul>
                <li>ID: ${id}</li>
                <li>Email Address: ${email}</li>
                <li>Office Phone: ${contact}</li>
            </ul>
            </article>
        `;
  }
  console.log("adding team member");
  fs.appendFile("./dist/team.html", data, function (err) {
    if (err) {
      return console.log(err);
    }
    return console.log("done! done!! done!!!");
  });
}

function completeHtmltemplate() {
  const html = ` </div>
                    </div>
                </body>
                </html>`;

  fs.appendFile("./dist/team.html", html, function (err) {
    if (err) console.log(err);
  });
  console.log("profile generated");
}

initApp();
