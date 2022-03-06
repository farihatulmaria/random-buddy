const teamsSeaction = document.querySelector(".team-section .row");
const teamsBtn = document.querySelector("#team-btn");
teamsBtn.addEventListener("click", function () {
  loadTeams();
});

// loading buddies
const loadTeams = () => {
  const teamsUrl = "https://randomuser.me/api/?results=500";
  fetch(teamsUrl)
    .then((response) => response.json())
    .then((data) => displayTeams(data.results));
};
// displaying Buddies
const displayTeams = (teams) => {
  teams.forEach((member) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
       <div class="card h-100">
          <img src=${member.picture.large} class="card-img-top" alt=" ${member.name.title} ${member.name.first} ${member.name.last}" />
          <div class="card-body">
            <div class="card-text">
             <h3>Name: ${member.name.title} ${member.name.first} ${member.name.last}</h3>
             <p>
                <ul>
                    <li>Age: ${member.registered.age}</li>
                    <li>Date of Birth: ${member.registered.date}</li>
                    <li>Gender: ${member.gender}</li>
                </ul>

                <h4>Location:-</h4>
                <ul>
                    <li>Country: ${member.location.country}</li>
                    <li> City: ${member.location.city}</li>
                </ul>

                <h4>Contacts:-</h4>
                <ul>
                    <li>Email: ${member.email}</li>
                    <li>Phone Number: ${member.phone}</li>
                </ul>
             </p>
            </div>
          </div>
        </div>`;
    teamsSeaction.appendChild(div);
  });
};
