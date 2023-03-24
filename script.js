function load() {
  var locData = JSON.parse(localStorage.getItem("user"));
  tableData(locData);
}
function save() {
  let username, email, mobile, state, button1;
  username = document.getElementById("username");
  email = document.getElementById("email");
  mobile = document.getElementById("mobile");
  state = document.getElementById("state");
  button1 = document.getElementById("button");
  let record = new Array();
  record = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  record.push({
    id: Math.random(),
    username: username.value,
    email: email.value,
    mobile: mobile.value,
    state: state.value,
  });

  localStorage.setItem("user", JSON.stringify(record));

  tableData(record);
}
function deleteData(id) {
  var locData = JSON.parse(localStorage.getItem("user"));
  var updatedData = locData.filter((data) => data.id != id);
  localStorage.setItem("user", JSON.stringify(updatedData));
  tableData(updatedData);
}

function editChanges(id) {
  var locData = JSON.parse(localStorage.getItem("user"));
  var save = locData.find((data) => data.id == id);
  document.getElementById("username").value = save.username;
  document.getElementById("id").value = save.id;
  document.getElementById("email").value = save.email;
  document.getElementById("mobile").value = save.mobile;
  document.getElementById("state").value = save.state;
  const button1 = document.getElementById("btn");
  const button2 = document.getElementById("updatebtn");
  button1.style.visibility = "hidden";
  button2.style.visibility = "visible";
}
function update() {
  var locData = JSON.parse(localStorage.getItem("user"));
  var u = document.getElementById("username").value;
  var e = document.getElementById("email").value;
  var m = document.getElementById("mobile").value;
  var s = document.getElementById("state").value;
  var i = document.getElementById("id").value;

  console.log(s);

  locData.forEach((elem) => {
    if (elem.id == i) {
      elem.username = u;
      elem.email = e;
      elem.mobile = m;
      elem.state = s;
    }
  });

  console.log(locData);

  localStorage.setItem("user", JSON.stringify(locData));
}

function tableData(datas) {
  var tableid = document.getElementById("tbody");
  var tableid2 = document.getElementById("test");

  // tableid.empty();
  var locData = JSON.parse(localStorage.getItem("user"));

  if (locData.length > 0) {
    tableid2.style.display = "block";
  }

  let tabledata = "";
  datas.map((data) => {
    tabledata += `<tr>
          <td>${data.username}</td>
          <td>${data.email}</td>
          <td>${data.mobile}</td>
          <td>${data.state}</td>
          <td><input type="button" name="button" id="btn" value="Delete" onclick="deleteData(${data.id})"></td>
          <td><input type="button" name="edit" id="edit" value="Edit" onclick="editChanges(${data.id})"></td>
          </tr>`;
  });

  tableid.innerHTML = tabledata;
}

