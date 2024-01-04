const url = "http://universities.hipolabs.com/search?name=";

const btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("#list");

btn.addEventListener("click", async () => {
  let country = input.value;
  let result = await getColleges(country);
  show(result);
});

const show = (colleges) => {
  input.value = "";
  ul.innerText = "";
  for (const college of colleges) {
    const li = document.createElement("li");
    li.innerText = college.name;
    ul.appendChild(li);
  }
};

const getColleges = async (country) => {
  try {
    let res = await fetch(url + country);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
