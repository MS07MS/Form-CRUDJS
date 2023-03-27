function load() {
  var locData = JSON.parse(localStorage.getItem("user"));
  tableData(locData);
}
function save() {
  let username, email, mobile, state, button1;
  username = $("#username");
  email = $("#email");
  mobile = $("#mobile");
  state = $("#state");
  button1 = $("#button");
  let record = new Array();
  record = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  record.push({
    id: Math.random(),
    username: username.val(),
    email: email.val(),
    mobile: mobile.val(),
    state: state.val(),
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
  $("#username").val(save.username)  ;
  $("#id").val (save.id);
  $("#email").val(save.email);
  $("#mobile").val(save.mobile);
  $("#state").val(save.state);
  const button1 = $("#btn");
  const button2 = $("#updatebtn");
  button1.hide();
  button2.show();
}
function update() {
  var locData = JSON.parse(localStorage.getItem("user"));
  var u = $("#username").val();
  var e = $("#email").val();
  var m = $("#mobile").val();
  var s = $("#state").val();
  var i = $("#id").val();

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

  var locData1 = JSON.parse(localStorage.getItem("user"));

  tableData(locData1);
}

function tableData(datas) {
  var tableid = $("#tbody");
  var tableid2 = $("#test");

  // tableid.empty();
  var locData = JSON.parse(localStorage.getItem("user"));

  if (locData.length > 0) {
    tableid2.show();
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

  tableid.html(tabledata);
}

