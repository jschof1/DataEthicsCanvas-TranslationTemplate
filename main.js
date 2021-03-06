const en = './lang/en.json';
const fr = './lang/fr.json'
//CHANGE CODE BELOW 
// let apiUrl = './lang/'+ en +'.json';
// './lang/'+ lang + '.json';

async function getJson(url) {
  return await fetch(url).then(response => response.json()).then(json => json);
}

const bubble = ["NA"]

for(let i = 1; i<16; i++){
  bubble.push(document.getElementById(`container-${i}`))
}

function main(collection) {
  getJson(collection).then(data => {

    for (let i = 0; i < 15; i++) {
      let div = document.createElement('div')
      div.id = `data-container${i+1}`

      let listContainer = document.createElement('ul')
      listContainer.setAttribute("class", "list-container")
//Storing Data
      let newArr = Object.values(data)
//Printing Titles
      let h3 = document.createElement('h3')
      let titles = newArr[i].title
      h3.innerHTML = titles
      div.appendChild(h3)
//Printing Questions
      let questions = newArr[i].questions
      questions.map((props) => {
        let li = document.createElement('li')
        li.innerHTML = props
        listContainer.appendChild(li)
        div.appendChild(listContainer)
        document.body.appendChild(div)
      })
    }
    

    let info = Object.values(data.corners)
    let largeTitle = info[1]
    let logo = info[0]
    let bottomLeftText = info[2]
    let link = info[3]
    let date = info[4]
    let licenseLogo = info[5][0]
  
    let licenseText = info[5][1]

    // const corners = [
    //   info, 
    //   largeTitle, 
    //   logo, 
    //   bottomLeftText, 
    //   link, 
    //   date, 
    //   licenseLogo, 
    //   licenseText
    // ]

    let topRight = document.getElementById("top-right")
    let topRightDate = document.getElementById("top-right-date")
    let topLeft = document.getElementById("top-left")
    let bottomLeft = document.getElementById("bottom-left")
    let bottomRightLogo = document.getElementById("license-logo")
    let bottomRightLink = document.getElementById("bottom-right-link")
    let bottomRightText = document.getElementById("bottom-right-license")
    
  
    topRight.append(largeTitle)
    topRightDate.append(date)
    topLeft.src = logo
    bottomLeft.append(bottomLeftText)
    bottomRightLogo.src = licenseLogo
    bottomRightLink.append(link)
    bottomRightText.append(licenseText)
    
    // let info = Object.values(data.corners)[0]

    let dataContainer = ["NA"]

    for(let i = 1; i<16; i++){
      dataContainer.push(document.getElementById(`data-container${i}`))
    }
   

//CHANGE CODE HERE
    // bubble[BUBBLE POSITION].appendChild(dataContainer[CONTAINER POSITION IN YOUR CANVAS JSON])
   
    bubble[1].appendChild(dataContainer[13])
    bubble[2].appendChild(dataContainer[14])
    bubble[3].appendChild(dataContainer[1])
    bubble[4].appendChild(dataContainer[2])
    bubble[5].appendChild(dataContainer[11])
    bubble[6].appendChild(dataContainer[4])
    bubble[7].appendChild(dataContainer[5])
    bubble[8].appendChild(dataContainer[6])
    bubble[9].appendChild(dataContainer[3])
    bubble[10].appendChild(dataContainer[12])
    bubble[11].appendChild(dataContainer[10])
    bubble[12].appendChild(dataContainer[9])
    bubble[13].appendChild(dataContainer[7])
    bubble[14].appendChild(dataContainer[8])
    bubble[15].appendChild(dataContainer[15])
   


    return data;
  });
}

main(en);

