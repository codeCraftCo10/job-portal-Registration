document.addEventListener("DOMContentLoaded", () => {
    const jobTitle = document.getElementById("job-title");
    const companyName = document.getElementById("company-name");
    const location = document.getElementById("location");
    const jobDescription = document.getElementById("job-description");
    const addJobBtn = document.getElementById("add-job-btn");
    const jobsList = document.getElementById("jobs");
    const searchJobs = document.getElementById("search-jobs");

    const jobs = [];

    // Add Job
    addJobBtn.addEventListener("click", () => {
        const title = jobTitle.value.trim();
        const company = companyName.value.trim();
        const loc = location.value.trim();
        const desc = jobDescription.value.trim();

        if (!title || !company || !loc || !desc) {
            alert("Please fill all fields!");
            return;
        }

        const job = { title, company, loc, desc };
        jobs.push(job);

        renderJobs(jobs);

        // Clear input fields
        jobTitle.value = "";
        companyName.value = "";
        location.value = "";
        jobDescription.value = "";
    });

    // Render Jobs
    const renderJobs = (jobsToRender) => {
        jobsList.innerHTML = "";
        jobsToRender.forEach((job, index) => {
            const jobItem = document.createElement("li");
            jobItem.classList.add("job-item");

            jobItem.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.loc}</p>
                <p>${job.desc}</p>
                <button class="save-btn">Save</button>
                <button class="apply-btn">Apply</button>
            `;

            jobsList.appendChild(jobItem);
        });
    };

    // Search Jobs
    searchJobs.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredJobs = jobs.filter((job) =>
            job.title.toLowerCase().includes(query) ||
            job.company.toLowerCase().includes(query) ||
            job.loc.toLowerCase().includes(query)
        );
        renderJobs(filteredJobs);
    });
});
