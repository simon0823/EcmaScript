function input() {
	var inputList = document.getElementById("inputList");

	if(inputList.value.trim() == "") {
		alert("계획을 입력해주셔야합니다.");
	}else {
		var time = new Date().toLocaleString();

		var listContainer = document.querySelector('ul');
		var list = document.createElement('li');
		var check = document.createElement('input');
		var list_time = document.createElement('span');
		var listDel = document.createElement('span');

		check.setAttribute("type", "checkbox");

		list.classList.add("listContent");
		check.classList.add("checkbox");
		list_time.classList.add("listTime");
		listDel.classList.add("listDel");

		var listContent = document.createTextNode(inputList.value);
		list.appendChild(check);
		list.appendChild(listContent);
		list.appendChild(list_time);
		list.appendChild(listDel);
		
		listContainer.appendChild(list);

		var timeContent = document.createTextNode(time);
		list_time.appendChild(timeContent);

		listDel.addEventListener("click", del);

		function del() {
			list.style.display = "none";
		}

		inputList.value = "";
		inputList.focus();
	}
}