const FetchModule = (function () {
     // Function to fetch data
    async function fetchData(url, type) {
      try {
        // Fetch data from API
        const response = await fetch(url);
         // Check for error
        if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
// Convert to JSON
        const data = await response.json();
        let output = "";
// Loop through data
        for (let i = 0; i < data.length; i++) {
          // Show Todos
          if (type === "Todos") {
            output += `
              <p>
                UserId: ${data[i].userId}<br>
                Id: ${data[i].id}<br>
                Title: ${data[i].title}<br>
                Completed: ${data[i].completed}
              </p>`;
          } 
          
        // Show Posts
          else {
            output += `
              <p>
                UserId: ${data[i].userId}<br>
                Id: ${data[i].id}<br>
                Title: ${data[i].title}<br>
                Body: ${data[i].body}
              </p>`;
          }
        }
// Display result

        document.getElementById("output").innerHTML = output;
      }
      // Show error message 
      catch (error) {
        document.getElementById("output").innerHTML = "Error fetching data: " + error;
      }
    }

    return {
      showTodos: () => fetchData("https://jsonplaceholder.typicode.com/todos", "Todos"),
      showPosts: () => fetchData("https://jsonplaceholder.typicode.com/posts", "Posts")
    };
  })();

//     async function todolists()
//     {
//         try{
//             const response=await fetch("https://jsonplaceholder.typicode.com/todos");
//             const data=await response.json();
//            let output="";
//            for(let i=0;i<data.length;i++)
//            {
//             output+=`
//             <p>UserId: ${data[i].userId} <br>
//             Id: ${data[i].id} <br>
//             Title: ${data[i].title} <br>
//             Completed: ${data[i].completed}
//             </p>
//             `
//            }
      
//            document.getElementById("output").innerHTML=output;
//         }
//         catch(error)
//         {
//             document.getElementById("output").innerHTML="Error Fetching data"+error;
//         }
//     }

//   async function blogposts()
//     {
//         try{
//             const response=await fetch("https://jsonplaceholder.typicode.com/posts");
//             const data=await response.json();
//            let output="";
//            for(let i=0;i<data.length;i++)
//            {
//             output+=`
//             <p>UserId: ${data[i].userId} <br>
//             Id: ${data[i].id} <br>
//             Title: ${data[i].title} <br>
//             Body: ${data[i].body}
//             </p>
//             `
//            }
      
//            document.getElementById("output").innerHTML=output;
//         }
//         catch(error)
//         {
//             document.getElementById("output").innerHTML="Error Fetching data"+error;
//         }
//     }

