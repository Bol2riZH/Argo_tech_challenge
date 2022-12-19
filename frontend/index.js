'use strict';

const baseUrl = `http://localhost:3000`;

const input = document.querySelector('.input-name');
const error = document.querySelector('.error');

const addBtn = document.querySelector('.btn');
const deleteBtn = document.querySelector('.delete-btn');

const crewMembersList = document.querySelector('.member-list');

const getCrewMembers = async () => {
  try {
    const res = await axios.get(baseUrl);
    res.data.crewsMembers.forEach((crewMember) => {
      const html = `<div class="member-item">${crewMember.name}</div>`;
      crewMembersList.insertAdjacentHTML('afterbegin', html);
    });
  } catch (err) {
    console.error(err);
  }
};

const addCrewMember = async (crewMemberName) => {
  if (crewMemberName) {
    try {
      await axios.post(
        baseUrl,
        { name: crewMemberName },
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
  addCrewMember(input.value);
});

deleteBtn.addEventListener('click', () => {
  removeAllCrewMembers();
});
