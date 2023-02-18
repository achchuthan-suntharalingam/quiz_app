const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission

  let correctAnswers = 0;
  // let questionsdone = 0;

  //question 1
  const q1ans = document.querySelector('input[name="q1"]:checked');
  if (q1ans && q1ans.value === 'b') {
    correctAnswers++;
    // questionsdone++;
  }

  //question 2
  const q2ans = document.querySelector('input[name="q2"]:checked');
  if (q2ans && q2ans.value === 'a') {
    correctAnswers++;
    // questionsdone++;
  }

  //question 3
  const q3ans = document.querySelector('input[name="q3"]:checked');
  if (q3ans && q3ans.value === 'd') {
    correctAnswers++;
    // questionsdone++;
  }

  //question 4
  const q4ans = document.querySelector('input[name="q4"]:checked');
  if (q4ans && q4ans.value === 'b') {
    correctAnswers++;
    // questionsdone++;
  }

  //question 5
  const q5ans = document.querySelector('input[name="q5"]:checked');
  if (q5ans && q5ans.value === 'd') {
    correctAnswers++;
    // questionsdone++;
  }




  

  alert(`You got ${correctAnswers} out of 5 questions correct.`);
});
