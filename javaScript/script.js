
const allIssuesContainer = document.getElementById("issue-all-card");

let allIssueBtn = document.getElementById("all-btn");
let openIssueBtn = document.getElementById("open-btn");
let closedIssueBtn = document.getElementById("close-btn");











// all filter btn
function showFilterIssueBtn(id) {

    allIssueBtn.classList.remove("bg-[#422ad5]", "text-white")
    openIssueBtn.classList.remove("bg-[#422ad5]", "text-white")
    closedIssueBtn.classList.remove("bg-[#422ad5]", "text-white")

    let btn = document.getElementById(id);
    btn.classList.add("bg-[#422ad5]", "text-white");
    console.log(btn)

}

