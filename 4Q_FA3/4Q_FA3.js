// Part 1: Shape Generator
function askForNumber() 
{
  let num;
  while (true) 
  {
    let input = prompt("Please enter a number:");
    if (!isNaN(input) && input.trim() !== "") 
    {
      num = parseInt(input);
      break;
    } else 
    {
      alert("Invalid input. Please enter a numerical value.");
    }
  }

  let output = "";
  if (num % 2 === 0) 
 {
      for (let i = 1; i <= num; i++) 
   {
      for (let j = 1; j <= i; j++) 
      {
        output += j + " ";
      }
      output += "\n";
    }
  } else 
  {
    for (let i = 1; i <= num; i++) 
    {
      for (let j = 1; j <= num; j++) 
      {
        output += j + " ";
      }
      output += "\n";
    }
  }

  document.getElementById("shapeOutput").textContent = output;
}

// Part 2: Contacts List
let contacts = [];

function addContact() 
{
  const input = document.getElementById("contactInput");
  const name = input.value.trim();
  if (name === "") 
  {
    alert("Please enter a name.");
    return;
  }

  if (contacts.length >= 7) 
  {
    contacts.shift(); 
  }
  contacts.push(name);
  input.value = "";
  displayContacts();
}

function removeContact() 
{
  if (contacts.length > 0) 
  {
    contacts.pop();
    displayContacts();
  } else 
  {
    alert("Contact list is already empty.");
  }
}

function displayContacts() 
{
  document.getElementById("contactList").textContent = "Contacts: [" + contacts.join(", ") + "]";
}
