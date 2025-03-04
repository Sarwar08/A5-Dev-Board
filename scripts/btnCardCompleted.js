
document.getElementById('card-container').addEventListener('click', function(event){
    event.preventDefault();
    const btnCompleted = event.target.parentNode.childNodes[1];

    console.log(btnCompleted);

    console.log(event.target.innerText);
    
    if (event.target.innerText === 'Completed' &&  btnCompleted.disabled === false){
        alert('Board Updated Successfully');

        // Task Assigned Update
        const taskAssigned = document.getElementById('task-assigned');
        
        const taskAssignedText = taskAssigned.innerText;

        console.log(taskAssignedText);
        
        console.log(typeof taskAssignedText);
        
        const taskCount = parseInt(taskAssignedText) - 1;
        
        console.log(taskCount);

        taskAssigned.innerText = taskCount;

        // navbar task increase
        const navTask = document.getElementById('nav-task-count');
        
        const navTaskText = navTask.innerText;
        
        console.log(navTaskText);

        let navTaskCount = parseInt(navTaskText);

        navTaskCount += 1;

        console.log(navTaskCount);
        
        navTask.innerText = navTaskCount;

        // Activity log update
        
        // create element
        const paraEl = document.createElement('p');
        paraEl.classList.add('bg-slate-200');
        paraEl.classList.add('p-3');
        paraEl.classList.add('rounded-lg');
        paraEl.classList.add('mt-4');

        // get title
        const title = event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
        
        // console.log(title);

        // get time
        const now = new Date();
        const am_pm = now.toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
        
        // get the message 
        const message = `You have completed the task ${title} at ${am_pm}.`;
        
        paraEl.innerText = message;
        
        // get the parent 
        const messageParent = document.getElementById('activity-log-message');

        messageParent.appendChild(paraEl);

        // button disabled
        

        btnCompleted.disabled = true;

        if (taskCount === 0){
            alert("Congrates!!! You have completed all the current task.");
        }
    }   
})