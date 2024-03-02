// list of pubs with associated hyperlinks
const names = [
  { name: 'PYG', link: 'https://goo.gl/maps/21zWP7ZK7Rqmn5kF6' },
  { name: 'THE LONG HAUL', link: 'https://goo.gl/maps/3R3pHFJqwfR2eBgH6' },
  { name: 'DEVITTS', link: 'https://goo.gl/maps/Jmyrcm62GjnS4TsK9' },
  { name: 'GROGANS', link: 'https://goo.gl/maps/emtvwoQftMa8r6m17' },
  { name: 'NO NAME', link: 'https://goo.gl/maps/uJejbs9qJqRZbNKz6' },
  { name: 'CASSIDYS', link: 'https://goo.gl/maps/rtJN7Hi7N1y8ioKV8' },
  { name: 'MARYS BAR', link: 'https://goo.gl/maps/eCmThjCTtqQjVau49' },
  { name: 'WHELANS', link: 'https://goo.gl/maps/ZDjDLsX1xnLqFk3P6' },
  { name: 'TAPPED', link: 'https://goo.gl/maps/XGagPobWsUWXoZH6A' },
  { name: '4 DAME LANE', link: 'https://goo.gl/maps/mvN6jMD5rXSffhsQ8' },
  { name: 'THE WOOL SHED', link: 'https://goo.gl/maps/t3sov5XTJtZMS4jE6' },
  { name: 'SIN E', link: 'https://goo.gl/maps/vvcHKfdNimswsR5t8' },
  { name: 'FLANNERYS', link: 'https://goo.gl/maps/rnCNfPHpLcpcV6o36' },
  { name: 'STAGS HEAD', link: 'https://goo.gl/maps/AkZgizjsmxcsQXjW9' },
  { name: 'KEHOES PUB', link: 'https://goo.gl/maps/Gqq3awQDAhDeDsqd7' },
  { name: 'HOGANS', link: 'https://goo.gl/maps/yDVMHgVoGpisuK5e6' },
  { name: 'DOYLES', link: 'https://goo.gl/maps/hT3ntGK9gqxZAWzp8' },
  { name: 'SINNOTS BAR', link: 'https://goo.gl/maps/Yz2JL8iMvoUre2Qx9' },
  { name: 'THE CELT', link: 'https://goo.gl/maps/gJsQou8HNRm5uYUA6' },
  { name: 'SILVER PENNY', link: 'https://goo.gl/maps/oDqHqqpH5qxhXEecA' },
  { name: 'BLEEDING HORSE', link: 'https://goo.gl/maps/UQ2fmp7ofzGrRkJ5A' },
  { name: 'HAIRY LEMON', link: 'https://goo.gl/maps/HyLKMu9rRuy9CrW78' },
  { name: 'THE BREW DOCK', link: 'https://goo.gl/maps/WSH5Xq1SKYR3rFg46' },
  { name: 'SLATTERYS BAR', link: 'https://goo.gl/maps/2nTiExXZGffrUoHNA' },
  { name: 'WIGWAM', link: 'https://goo.gl/maps/FYTuTR1t7TqFt37M9' },
  { name: 'LIVING ROOM', link: 'https://goo.gl/maps/MrWPWKoT7rrgaL8D8' },
  { name: 'BRAZEN HEAD', link: 'https://goo.gl/maps/SPMNkFEBtoXCjLRt7' },
  { name: 'PALACE BAR', link: 'https://goo.gl/maps/497s4x8zRMm5Xj7MA' },
  { name: 'RYANS BAR', link: 'https://goo.gl/maps/TGaGDuCCxZHCp9oN6' },
  { name: 'PORTER HOUSE', link: 'https://goo.gl/maps/Np4YE2DnAfc1VUDN8' },
  { name: 'SEARSONS', link: 'https://goo.gl/maps/enszG5ZaMLwo6yy99' },
  { name: 'THE CAMDEN', link: 'https://goo.gl/maps/Wnj931UWRts2zWNCA' }
  
];

function selectRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const selectedName = names[randomIndex];

  const selectedNameElement = document.getElementById('selectedName');
  selectedNameElement.innerHTML = `<a href="${selectedName.link}">${selectedName.name}</a>`;
}


// list of pubs with associated hyperlinks galway
const galway = [
  { name: 'OCONNELLS BAR', link: 'https://maps.app.goo.gl/gvZQ55Anre4Qrrah7' },
  { name: 'TIGH NEACHTAIN', link: 'https://maps.app.goo.gl/VF4VtXs3tgd9tY1j9' },
  { name: 'TAAFFES BAR', link: 'https://maps.app.goo.gl/G4vx5SfkBxXvZX79A' },
  { name: 'AN Púcán', link: 'https://maps.app.goo.gl/94cVrPnBTPHHXYFf9' },
  { name: 'THE FRONT DOOR', link: 'https://maps.app.goo.gl/gVS95fw3PUmgRMDL6' },
  { name: 'Tig Cóilí', link: 'https://maps.app.goo.gl/fp6rAq7C71BbCk6x7' },
  { name: 'OConnors', link: 'https://maps.app.goo.gl/uUk7wgwT4BZQEE98A' },
  { name: 'The Crane Bar', link: 'https://maps.app.goo.gl/QR6iGvX7Q5jhzb4s9' },
  { name: 'Bunch Of Grapes', link: 'https://maps.app.goo.gl/aNY6GjF8enNTjpGY8' },
  { name: 'Hole in the Wall', link: 'https://maps.app.goo.gl/8Vb5HUpYQdvdid4r5' },
  { name: 'The Dáil Bar', link: 'https://maps.app.goo.gl/xRPTSfq1bZHrKDGNA' },
  { name: 'Quays Bar', link: 'https://maps.app.goo.gl/eNE5L36wuHTPN7Ta8' },
  { name: 'Barr An Chaladh', link: 'https://maps.app.goo.gl/x1oAUovT3ni7DZ6g7' }
  
];

function selectGalway() {
  const randomIndex = Math.floor(Math.random() * galway.length);
  const selectedName = galway[randomIndex];

  const selectedNameElement = document.getElementById('selectedGalway');
  selectedNameElement.innerHTML = `<a href="${selectedName.link}">${selectedName.name}</a>`;
}


// Dropdown

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
