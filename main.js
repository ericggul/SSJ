function validateform(){
	var name = document.forms["#register"]["#name"].value;
	var tel = document.forms["#register"]["#tel"].value;

	if (name==null||name=" "){
	alert("Name is null")
	return false;
	} else if (tel==null||tel=""){
		alert("Telephone is null");
		return false;
	}

}
