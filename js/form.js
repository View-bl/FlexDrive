const formContainer = document.getElementById('form-container');

const cities = ['Kyiv', 'Lviv', 'Odessa'];
const times = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];

const today = new Date();
const dates = [];
for (let i = 0; i < 7; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  dates.push({
    value: date.toISOString().split('T')[0],
    label: date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  });
}

function createBlock(type, isChecked = false) {
  const block = document.createElement('div');
  block.classList.add('block');
  block.innerHTML = `
    <label>
      <input type="radio" name="pickup-type" ${isChecked ? 'checked' : ''} />
      ${type}
    </label>

    <label for="${type
      .toLowerCase()
      .replace(/\s|-/g, '')}-location">Locations</label>
    <select id="${type
      .toLowerCase()
      .replace(/\s|-/g, '')}-location" name="${type
    .toLowerCase()
    .replace(/\s|-/g, '')}_location" required>
      <option value="" disabled selected>Select your city</option>
      ${cities.map(city => `<option value="${city}">${city}</option>`).join('')}
    </select>

    <label for="${type.toLowerCase().replace(/\s|-/g, '')}-date">Date</label>
    <select id="${type.toLowerCase().replace(/\s|-/g, '')}-date" name="${type
    .toLowerCase()
    .replace(/\s|-/g, '')}_date" required>
      <option value="" disabled selected>Select your date</option>
      ${dates
        .map(d => `<option value="${d.value}">${d.label}</option>`)
        .join('')}
    </select>

    <label for="${type.toLowerCase().replace(/\s|-/g, '')}-time">Time</label>
    <select id="${type.toLowerCase().replace(/\s|-/g, '')}-time" name="${type
    .toLowerCase()
    .replace(/\s|-/g, '')}_time" required>
      <option value="" disabled selected>Select your time</option>
      ${times.map(time => `<option value="${time}">${time}</option>`).join('')}
    </select>
  `;
  return block;
}

formContainer.appendChild(createBlock('Pick - Up', true));
formContainer.appendChild(createBlock('Drop - Off'));
