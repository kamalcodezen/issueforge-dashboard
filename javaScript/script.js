
const allIssuesContainer = document.getElementById("issue-all-card");

let allIssueBtn = document.getElementById("all-btn");
let openIssueBtn = document.getElementById("open-btn");
let closedIssueBtn = document.getElementById("close-btn");





// all issues data get api
const allIssuesApi = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    const res = await fetch(url)
    const data = await res.json()
    displayAllIssuesData(data.data);

}



// all filter btn
function showFilterIssueBtn(id) {

    allIssueBtn.classList.remove("bg-[#422ad5]", "text-white")
    openIssueBtn.classList.remove("bg-[#422ad5]", "text-white")
    closedIssueBtn.classList.remove("bg-[#422ad5]", "text-white")

    let btn = document.getElementById(id);
    btn.classList.add("bg-[#422ad5]", "text-white");
    console.log(btn)

}

