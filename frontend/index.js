'use strict';

const baseUrl = `http://localhost:3000`;

const inputName = document.querySelector('.input-name');
const inputAdj = document.querySelector('.input-adj');
const error = document.querySelector('.error');
const addBtn = document.querySelector('.btn');
const deleteBtn = document.querySelector('.delete-btn');
const crewMembersList = document.querySelector('.member-list');

const getCrewMembers = async () => {
  try {
    const res = await axios.get(baseUrl);
    res.data.crewsMembers.forEach((crewMember) => {
      const html = `<div class="member-item">${crewMember.name}${
        crewMember.description && `, ${crewMember.description}`
      }</div>`;

      crewMembersList.insertAdjacentHTML('afterbegin', html);
    });
  } catch (err) {
    console.error(err);
  }
};

const addCrewMember = async (crewMemberName, crewMemberDescription) => {
  if (crewMemberName) {
    try {
      await axios.post(
        baseUrl,
        {
          name: crewMemberName,
          description: crewMemberDescription && crewMemberDescription,
        },
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  } else {
    error.innerHTML = `<p>Veuillez renseigner le nom de l'Argonaute</p>`;
  }
};

const removeAllCrewMembers = () => {
  try {
    const res = axios.delete(baseUrl);
  } catch (err) {
    console.error(err);
  }
};

getCrewMembers();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addCrewMember(inputName.value, inputAdj?.value);
});

deleteBtn.addEventListener('click', () => {
  removeAllCrewMembers();
});
