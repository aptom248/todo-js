import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromList = (id, deleteTarget) => {
  document.getElementById(id).removeChild(deleteTarget);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(戻す)タグ生成
  const restoreButton = document.createElement("button");
  restoreButton.innerText = "戻す";
  restoreButton.addEventListener("click", () => {
    /**
     * 押された戻すボタンの親タグ(div)を削除して、完了リストに戻す。
     */
    const deleteTarget = restoreButton.parentNode;
    deleteFromList("complete-list", deleteTarget);

    // TODO内容テキストを取得(一番最初にテキストがある前提)
    const text = restoreButton.parentNode.firstElementChild.innerText;

    createIncompleteList(text);
  });

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    /**
     *  押された完了ボタンの親タグ(div)を完了リストから削除し、
     *  完了したリストへテキストを移動し、戻すボタンを追加
     *  */
    deleteFromList("incomplete-list", deleteButton.parentNode);
    const addTarget = deleteButton.parentNode;
    // TODO内容テキストを取得(一番最初にテキストがある前提)
    const text = addTarget.firstElementChild.innerText;
    // div 以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    addTarget.appendChild(li);
    addTarget.appendChild(restoreButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を完了リストから削除
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
