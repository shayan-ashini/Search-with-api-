let box = document.getElementsByClassName('box')[0]
let input = document.getElementById('input')
let temp = []


const load = async ()=>{
  const res = await fetch('https://hp-api.onrender.com/api/characters')
  temp = await res.json()

  console.log(temp)
  display(temp)

  
}

const display = (e)=>{

  // e.map(function(val){
  //   box.innerHTML += `
  //       <img src="${val.image}" alt="">
  //      <h1>${val.name}</h1>
  //     <h2>${val.alive}</h2>
    
  //   `
   
  // })

    const html = e.map((val)=>{
      return `

      <div class="sec mb-5 mt-5 col-10 col-sm-5">



      <img class ='col-6 col-lg-4' src="${val.image}" alt="">

      <div class = 'dis '>
      
      <h3>${val.name}</h3>
      <h5> gender : ${val.gender}</h5>
      <h5> yearOfBirth : ${val.yearOfBirth}</h5>
      <h5> alive : ${val.alive}</h5>
      
      
      </div>





      </div>

      
      `
    })

     box.innerHTML = html;

}

input.addEventListener('input',function(dot){

  search = dot.target.value
  console.log(search)

  const filter = temp.filter((character)=>{
    return (character.name.toLowerCase().includes(search) ) 
  })

  console.log(filter)

  display(filter)

})

load()











