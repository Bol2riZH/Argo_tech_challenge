'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input-name');
const crewMembersList = document.querySelector('.member-list');

const getCrewMembers = async () => {
  try {
    const res = await axios.get('http://localhost:3000');
    res.data.crewsMembers.map((crewMember) => {
      const html = `<div class="member-item">${crewMember.name}</div>`;
      crewMembersList.insertAdjacentHTML('beforeend', html);
    });
  } catch (err) {
    console.error(err);
  }
};

const addCrewMember = async (memberName) => {
  try {
    const res = await axios.post('http://localhost:3000', memberName, {
      headers: {
        'content-type': 'application/json',
      },
    });
    console.log(res);
  } catch (err) {
    console.error(`ERROR: ${err}`);
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(input.value);
  addCrewMember(input.value);
});

getCrewMembers();
