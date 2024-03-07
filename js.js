const people = async () => {
  const URL = `https://randomuser.me/api/`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    console.log(res);
    const data = await res.json();
    dipslayPerson(data.results);
  } catch (error) {
    console.log(error);
  }
};
const dipslayPerson = (person) => {
  const personArticle = document.getElementById("people");
  person.forEach(({ picture, gender, name, email, phone }) => {
    personArticle.innerHTML = `
        <div class="card col-sm-6 col-md-4 col-lg-3 bg-black text-info text-center p-4">
            <img src="${picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${Object.values(name).join(" ")}</h5>
                <p class="card-text">${email}</p>
                <p class="card-text">${phone}</p>
                <p class="card-text">${gender}</p>                
            </div>
        </div>`;
  });
};
people()