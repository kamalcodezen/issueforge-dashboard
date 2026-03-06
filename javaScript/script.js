// card container
const allIssuesContainer = document.getElementById("issue-all-card");
// filter btn 
const allIssueBtn = document.getElementById("all-btn");
const openIssueBtn = document.getElementById("open-btn");
const closedIssueBtn = document.getElementById("close-btn");

// count issue
const countIssue = document.getElementById("issue-count");

let issueALLCard = [];





// all issues data get api
const allIssuesApi = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    const res = await fetch(url)
    const data = await res.json()
    issueALLCard = data.data

    displayAllIssuesData(issueALLCard);

}


// new card label section array crad er bhetor label gulo array teke loop chaliye notun array baniye string a convert kore return korechi
const bugAndHelpLabels = (labels) => {

    let newArr = labels.map((label) =>
        `<span class="font-semibold text-[10px] px-2 py-[2px] rounded-2xl border ${label === "bug" ? "bg-red-100 text-red-400" : label === "help wanted" ? "bg-[#fff6d1] text-[#f59e0b]" : "bg-[#defce8] text-[#00a96e]"}">${label.toUpperCase()} </span>`);

    return newArr.join(" ")

}



// all filter btn toggle
function showFilterIssueBtn(id) {

    allIssueBtn.classList.remove("bg-[#422ad5]", "text-white")
    openIssueBtn.classList.remove("bg-[#422ad5]", "text-white")
    closedIssueBtn.classList.remove("bg-[#422ad5]", "text-white")

    let btn = document.getElementById(id);
    btn.classList.add("bg-[#422ad5]", "text-white");
    console.log(btn)

}



// all issue display show sob data show kora hlo total card
const displayAllIssuesData = (issues) => {

    allIssuesContainer.innerHTML = "";

    countIssue.innerText = issues.length;

    issues.forEach(issue => {

        const div = document.createElement("div");
        div.innerHTML = `
        <div id="issue-card" class="h-full shadow-md py-2 flex flex-col rounded-md border-t-[3px] ${issue.status === "open" ? "border-[#22b780]" : "border-[#a855f7]"}">

                  <div class="p-[10px]  flex flex-col flex-grow space-y-3 border-b border-gray-300">
                            <!-- icon & media -->
                            <div class="flex justify-between">
                            ${issue.status === "open" ? `<img class="h-[30px] w-[30px] rounded-full" src="./assets/Open-Status.png" alt="">` : `<img class="h-[30px] w-[30px] rounded-full" src="./assets/Closed- Status .png" alt="">`}
                              
                                <p class="font-semibold text-sm px-4 py-1 rounded-2xl">
                         ${issue.priority === "high" ? `<span class="font-semibold text-sm px-4 py-1 bg-red-100 text-red-400 rounded-2xl"> ${issue.priority.toUpperCase()}</span>`

                : issue.priority === "medium"
                    ? `<span class="font-semibold text-sm px-4 py-1 bg-[#fff6d1] text-[#f59e0b] rounded-2xl">${issue.priority.toUpperCase()}</span>`
                    : `<span class="font-semibold text-sm px-4 py-1 bg-[#eeeff2] text-[#abb1bb] rounded-2xl">${issue.priority.toUpperCase()}</span>`}
                                     </p>
                            </div>
                            <!--  Fix Navigation Menu  -->
                              <div class="min-h-[40px]">
                                  <p class="text-md font-semibold cursor-pointer">${issue.title}</p>
                              </div>
                            <!-- description -->
                            <div class="min-h-[40px]">
                                <p class="line-clamp-2 text-gray-500 text-xs">${issue.description}</p>
                            </div>
                            <!-- bug & help -->
                            <div class="flex flex-wrap gap-3 mt-auto">
                           ${bugAndHelpLabels(issue.labels)}
                          
                            </div>
                        </div>

                        <!-- footer -->
                        <div class=" flex justify-between  space-y-1 p-[14px] mt-auto">
                         <div>
                              <p class="text-[10px] text-gray-500">#${issue.id} by${issue.author}</p>
                            <p class="text-[10px] text-gray-500">Assignee: ${issue.assignee}</p>
                         </div>
                         <div>
                             <p class="text-[10px] text-gray-500 text-end">${new Date(issue.createdAt).toLocaleDateString()}</p>
                            <p class="text-[10px] text-gray-500">Updated: ${new Date(issue.updatedAt).toLocaleDateString()}</p>

                         </div>
                        
                        </div>

                    </div>
        
        `;

        allIssuesContainer.append(div);

    });


}



// // search issue function 
// const searchBtnIssues = document.getElementById("search-issue-btn")
//     .addEventListener("click", () => {

//         const searchIssues = document.getElementById("search-issue");
//         let issuesInputValue = searchIssues.value.trim();

//         fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=all")
//             .then((res) => res.json())
//             .then((data) => {
//                 const allData = data.data
//                 console.log(allData)
//                 const issueSearch = allData.filter((data) => data.includes(issuesInputValue))

//                 displayAllIssuesData(issueSearch)

//             })



//     })



function filterIssues(status) {

    if (status === "all") {
        displayAllIssuesData(issueALLCard);
    }

    if (status === "open") {
        const openIssues = issueALLCard.filter(issue => issue.status === "open");
        displayAllIssuesData(openIssues);
    }

    if (status === "closed") {
        const closedIssues = issueALLCard.filter(issue => issue.status === "closed");
        displayAllIssuesData(closedIssues);
    }

}

allIssuesApi();
showFilterIssueBtn('all-btn');