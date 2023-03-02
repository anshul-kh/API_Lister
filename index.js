const conatiner = document.getElementById('container');
const CountConatiner = document.getElementById('countContent');
const search = document.getElementById('search');
const keyword = document.getElementById('keyword');

const request = new XMLHttpRequest();

request.open('GET','https://api.publicapis.org/entries')
request.send();
request.addEventListener('load',function (){
    const data = JSON.parse(this.responseText);
    console.log(data);

    var count = data.count;
    // console.log(count);

    const countContent = `It Contains upto ${count} free API `
   
    CountConatiner.innerHTML= countContent;

    var i=0;

    var entries = data.entries;

    

     function getdata(i){
        
    // console.log(entries[0].API);
    

   
    if(entries[i]==undefined){
        // console.log('Keyword not found'); 
        const Error =`<p>Keyword "${keyword.value}" are not found , Make sure you have enetered first letter in Capital e.g (Anime).
                       OR
        List is Ended
        </p>`

        return Error;
    }else{

    const apiName=entries[i].API;
    const apiDes=entries[i].Description;
    const apiAuth=entries[i].Auth;
    const apiHttps=entries[i].HTTPS;
    const apiCors=entries[i].Cors;
    const apiLink=entries[i].Link;
    const apiCat=entries[i].Category;
    

    const cardData=`<p><span>API:</span>${apiName}</p>
    <p><span>Auth:</span>${apiAuth}</p>
    <p><span>Desciption:</span>${apiDes}</p>
    <p><span>HTTPS:</span>${apiHttps}</p>
    <p><span>Cors:</span>${apiCors}</p>
    <p><span>Link:</span><a href="${apiLink}">${apiLink}</a></p>
    <p><span>Category:</span>${apiCat}</p>`

    
    return cardData;
    
  
     }


     }


     
      const setData=getdata(i);
      conatiner.insertAdjacentHTML('afterbegin',setData);

    
   
    const button = document.getElementById('button');

    button.onclick = () =>{
       
        

        const newData=getdata(++i);
        conatiner.innerHTML= newData ; 
        
        
    }

    Prev.onclick = () =>{
        if(i==-1){

            const prevData=getdata(0);
            conatiner.innerHTML=prevData;

        }else{
        const prevData=getdata(--i);
        conatiner.innerHTML= prevData ; 
        }
        
        
    }

    // button.addEventListener('click',function() {
    //     set(i++);
    // })

     
    search.onclick =()=>{
        // console.log(keyword.value)

        var newArray = entries.filter( entries =>
        {
            return entries.API.includes(`${keyword.value}`);
        }

        );
        // console.log(newArray);

        entries = newArray;
        i=0;

        const filterData=getdata(i);
        conatiner.innerHTML=filterData;

    }




    
})