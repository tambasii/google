const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;

  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&oq=" +
    input +
    "&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyBwgCEAAYgAQyDQgDEAAYgwEYsQMYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEC4YgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxMDQ1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8";
}
