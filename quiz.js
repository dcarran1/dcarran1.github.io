// JavaScript for grading the quiz and displaying results
    function gradeQuiz() {
      let score = 0;
      const totalQuestions = 5;
      let resultsHTML = "<h3>Quiz Results</h3>";

      // Question 1
      let q1 = document.getElementById("q1").value.trim().toLowerCase();
      let q1Correct = q1 === "browser";
      if (q1Correct) score++;
      resultsHTML += "<p><strong>Question 1:</strong> " +
        (q1Correct ? "<span class='correct'>Correct</span>" : "<span class='incorrect'>Incorrect</span>") +
        " | Your answer: " + (q1 || "No answer") +
        " | Correct answer: browser</p>";

      // Question 2
      let q2 = document.querySelector('input[name="q2"]:checked');
      let q2Answer = q2 ? q2.value : "No answer";
      let q2Correct = q2Answer === "B";
      if (q2Correct) score++;
      resultsHTML += "<p><strong>Question 2:</strong> " +
        (q2Correct ? "<span class='correct'>Correct</span>" : "<span class='incorrect'>Incorrect</span>") +
        " | Your answer: " + q2Answer +
        " | Correct answer: B (Google Chrome)</p>";

      // Question 3
      let q3 = document.querySelector('input[name="q3"]:checked');
      let q3Answer = q3 ? q3.value : "No answer";
      let q3Correct = q3Answer === "C";
      if (q3Correct) score++;
      resultsHTML += "<p><strong>Question 3:</strong> " +
        (q3Correct ? "<span class='correct'>Correct</span>" : "<span class='incorrect'>Incorrect</span>") +
        " | Your answer: " + q3Answer +
        " | Correct answer: C (Retrieves and displays webpages)</p>";

      // Question 4
      let q4 = document.querySelector('input[name="q4"]:checked');
      let q4Answer = q4 ? q4.value : "No answer";
      let q4Correct = q4Answer === "C";
      if (q4Correct) score++;
      resultsHTML += "<p><strong>Question 4:</strong> " +
        (q4Correct ? "<span class='correct'>Correct</span>" : "<span class='incorrect'>Incorrect</span>") +
        " | Your answer: " + q4Answer +
        " | Correct answer: C (Safari)</p>";

      // Question 5
      let q5Selections = document.querySelectorAll('input[name="q5"]:checked');
      let selectedValues = Array.from(q5Selections).map(item => item.value).sort();
      let correctValues = ["bookmarks", "privacy", "tabs"].sort();

      let q5Correct = JSON.stringify(selectedValues) === JSON.stringify(correctValues);
      if (q5Correct) score++;
      resultsHTML += "<p><strong>Question 5:</strong> " +
        (q5Correct ? "<span class='correct'>Correct</span>" : "<span class='incorrect'>Incorrect</span>") +
        " | Your answer: " + (selectedValues.length > 0 ? selectedValues.join(", ") : "No answer") +
        " | Correct answer: tabs, bookmarks, privacy</p>";

      let percent = (score / totalQuestions) * 100;
      let passFail = percent >= 70
        ? "<p class='correct'><strong>Result: Pass</strong></p>"
        : "<p class='incorrect'><strong>Result: Fail</strong></p>";

      resultsHTML =
        passFail +
        "<p><strong>Total Score:</strong> " + score + " / " + totalQuestions + " (" + percent.toFixed(0) + "%)</p>" +
        resultsHTML;

      document.getElementById("results").innerHTML = resultsHTML;
    }

    function resetQuiz() {
      document.getElementById("browserQuiz").reset();
      document.getElementById("results").innerHTML = "";
    }
