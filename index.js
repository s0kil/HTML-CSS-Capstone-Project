(() => {
  const Kenya_Popular_Schools = [
    "Banda School",
    "Braeburn School Nairobi",
    "Greensteds International School",
    "Hillcrest International Schools",
    "International School of Kenya",
    "Kenton College Preparatory School",
    "Pembroke House",
    "Peponi House Preparatory School",
    "Pangani Girls High School",
    "Alliance Girls",
    "Mangu High",
    "Alliance High",
    "Maseno School",
    "Kapsabet Boys",
    "Limuru Girls",
    "Moi Girls Eldoret",
    "Lenana School",
    "MaryHill High School",
    "Nairobi School",
    "Nakuru Girls",
    "Kenya High",
    "Starehe Boys",
    "Maranda High",
  ];

  const inputPlaceholderTypingEffect = (inputElement, futurePlaceholder) => {
    inputElement.placeholder = 'e.g. "';
    const characters = futurePlaceholder.split("");
    const typingInterval = setInterval(() => {
      if (!characters.length) {
        inputElement.placeholder = inputElement.placeholder + '"';
        clearInterval(typingInterval);
        return;
      } else {
        inputElement.placeholder =
          inputElement.placeholder + characters.shift();
      }
    }, 100);
  };

  setTimeout(() => {
    const schoolSearch = document.getElementById("school-search");
    const randomSchool =
      Kenya_Popular_Schools[
        Math.floor(Math.random() * Kenya_Popular_Schools.length)
      ];
    inputPlaceholderTypingEffect(schoolSearch, randomSchool);
  }, 1000);
})();
