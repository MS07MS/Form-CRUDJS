
function save(){
    let username,email,mobile,state;
    username = document.getElementById('username');
    email = document.getElementById('email');
    mobile = document.getElementById('mobile');
    state = document.getElementById('state');

    let record = new Array();
    record = JSON.parse( localStorage.getItem("user"))?JSON.parse( localStorage.getItem("user")):[]
    record.push({
        "id":record.length,
        "username":username.value,
        "email"   :email.value,
        "mobile"  :mobile.value,
        "state"  :state.value
    });


    localStorage.setItem("user",JSON.stringify(record));

    tableData(record);
   
}
function deleteData(id){
    var locData = JSON.parse( localStorage.getItem("user"));
    var updatedData = locData.filter(data => data.id !=id);
    localStorage.setItem("user",JSON.stringify(updatedData));
    tableData(updatedData);
    
}
function Update(id){
    
    var locData = JSON.parse( localStorage.getItem("user"));
    var updated = locData.filter(data => data.id !=id);
    
    document.getElementById('username').value = updated[id];
    document.getElementById('email').value = updated[id].email;
    document.getElementById('mobile').value = updated[id];
    document.getElementById('state').value = updated[id].state;
    localStorage.setItem("user",JSON.stringify(updated));
    tableData(updated);
    
}

function tableData(datas)
{
    let tabledata = "";
    datas.map(data=>
        {
          tabledata+=`<tr>
          <td>${data.username}</td>
          <td>${data.email}</td>
          <td>${data.mobile}</td>
          <td>${data.state}</td>
          <td><input type="button" name="button" id="btn" value="Delete" onclick="deleteData(${data.id})"></td>
          <td><input type="button" name="editbutton" id="edit" value="Edit" onclick="Update(${data.id})"></td>
          </tr>`
        }
        )

        document.getElementById("tbody").innerHTML=tabledata;

}


    // var list1 = [];
	// 	var list2 = [];
	// 	var list3 = [];
	// 	var list4 = [];

	// 	var n = 1;
	// 	var x = 0;

	// 	function AddRow(){

	// 		var AddRown = document.getElementById('show');
	// 		var NewRow = AddRown.insertRow(n);

	// 		list1[x] = document.getElementById("username").value;
	// 		list2[x] = document.getElementById("email").value;
	// 		list3[x] = document.getElementById("mobile").value;
	// 		list4[x] = document.getElementById("state").value;

	// 		var cel1 = NewRow.insertCell(0);
	// 		var cel2 = NewRow.insertCell(1);
	// 		var cel3 = NewRow.insertCell(2);
	// 		var cel4 = NewRow.insertCell(3);

	// 		cel1.innerHTML = list1[x];
	// 		cel2.innerHTML = list2[x];
	// 		cel3.innerHTML = list3[x];
	// 		cel4.innerHTML = list4[x];

	// 		n++;
	// 		x++;
	// 	}