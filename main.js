const form = document.getElementById("itemForm");
    const input = document.getElementById("itemInput");
    const list = document.getElementById("itemList");

    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach(addItemToDOM);

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const value = input.value.trim();
      if (value === "") return;

      items.push(value);
      localStorage.setItem("items", JSON.stringify(items));
      addItemToDOM(value);
      input.value = "";
    });

    function addItemToDOM(text) {
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    }