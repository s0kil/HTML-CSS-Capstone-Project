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

  window.loadjs(
    "https://cdn.jsdelivr.net/gh/s0kil/inputyper@6e03fc2fe660bf1c75fc70eb320c0f6dd77ed61e/index.js",
    () => {
      PlaceholderTypingEffect({
        element: document.getElementById("school-search"),
        strings: Kenya_Popular_Schools,
        prepend: 'e.g. "',
        append: '"',
      }).begin({ delay: 1000 });
    }
  );
})();
