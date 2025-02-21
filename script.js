let tasks = {}; // 日付ごとのタスクを保存するオブジェクト

function addTask() {
    let date = document.getElementById("date-picker").value;
    let taskInput = document.getElementById("task-input");

    if (date && taskInput.value.trim() !== "") {
        if (!tasks[date]) {
            tasks[date] = [];
        }
        tasks[date].push(taskInput.value);
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (let date in tasks) {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${date}</strong>: ${tasks[date].join(", ")}
                        <button onclick="removeTask('${date}')">削除</button>`;
        taskList.appendChild(li);
    }
}

function removeTask(date) {
    delete tasks[date];
    displayTasks();
}


function updateProgress() {
  let progressValue = document.getElementById("progress-input").value;
  let progressFill = document.getElementById("progress-fill");

  // 0〜100の範囲に制限
  progressValue = Math.max(0, Math.min(100, progressValue));

  progressFill.style.width = progressValue + "%";
  progressFill.innerText = progressValue + "%";

  // 進捗が50%未満ならオレンジ、80%以上なら緑、それ以外は青
  if (progressValue < 50) {
      progressFill.style.backgroundColor = "#ff9800"; // オレンジ
  } else if (progressValue >= 80) {
      progressFill.style.backgroundColor = "#28a745"; // 緑
  } else {
      progressFill.style.backgroundColor = "#007bff"; // 青
  }
}


function addPost() {
  const postInput = document.getElementById('post-input');
  const postList = document.getElementById('post-list');
  
  // 入力が空でない場合のみ投稿
  if (postInput.value.trim() !== "") {
      const newPost = document.createElement('li');
      newPost.textContent = postInput.value;
      postList.appendChild(newPost);
      postInput.value = "";  // 投稿後に入力フィールドをクリア
  } else {
      alert("投稿内容を入力してください！");
  }
}


function search() {
  const searchInput = document.getElementById('search-input').value;
  if (searchInput.trim() !== "") {
      alert("検索キーワード: " + searchInput);
  } else {
      alert("検索キーワードを入力してください！");
  }
}
