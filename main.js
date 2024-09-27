let defSelect= 'country-name';
const mediaQuery = window.matchMedia('(min-width: 768px)')


let cname=document.querySelector('.name');
let ccode=document.querySelector('.ccode');
let ccity=document.querySelector('.city');

cname.style.transform='scale(1.1)';
ccity.style.transform='scale(1)';
ccode.style.transform='scale(1)';
ccode.style.filter='blur(1px)';
ccity.style.filter='blur(1px)';

cname.addEventListener('click',()=>{
    defSelect='country-name';
    if (defSelect=='country-name'){
        ccode.style.filter='blur(1px)';
        ccity.style.filter='blur(1px)';
        cname.style.filter='none';
        cname.style.transform='scale(1.1)';
        ccity.style.transform='scale(1)';
        ccode.style.transform='scale(1)';
    }
    
})
ccity.addEventListener('click',()=>{
    defSelect='capital-city';
    console.log(defSelect)
    if (defSelect=='capital-city'){
        ccode.style.filter='blur(1px)';
        cname.style.filter='blur(1px)';
        ccity.style.filter='none';
        ccity.style.transform='scale(1.1)';
        cname.style.transform='scale(1)';
        ccode.style.transform='scale(1)';
    }
})
ccode.addEventListener('click',()=>{
    defSelect='country-code';
    if (defSelect=='country-code'){
        cname.style.filter='blur(1px)';
        ccity.style.filter='blur(1px)';
        ccode.style.filter='none';
        ccode.style.transform='scale(1.1)';
        ccity.style.transform='scale(1)';
        cname.style.transform='scale(1)';
        
    }
})



//api stuff

//api=https://restcountries.com/v3.1/

let nations = function(e){

    if (defSelect=='country-name')
        
            
        fetch(`https://countryinfoapi.com/api/countries/name/${e}`)
        
        .then(data => data.json())
        .then(item => {
            if (!mediaQuery.matches) {
                
                document.querySelector('.card').style.marginTop='110%';
            }
            
            
            
            document.querySelector('.e').style.display='none';
            document.querySelector('.data').style.display='flex';
            document.querySelector('#emblem').style.display='flex';
            document.querySelector('#flag').style.display='flex';
            document.querySelector('.cname').innerText=item.name+' '; //
            //document.querySelector('.flag').innerText=item[0].flag; 
            document.querySelector('.pop').innerText=item.population;//
            document.querySelector('.landlocked').innerText=item.landlocked;//
            document.querySelector('.code').innerText=item.cca2;  //
            document.querySelector('.capital').innerText=item.capital;
            document.querySelector('.area').innerText=item.area + ' square km';//
            document.querySelector('.continent').innerText=item.continents;
            document.querySelector('.independent').innerText=item.independent;
            document.querySelector('.region').innerText=item.subregion;
            document.querySelector('.flag').src=`https://flagcdn.com/160x120/${item.cca2.toLowerCase()}.png`;
            document.querySelector('.coat').src=item.coatOfArms;
            document.querySelector('.imgs').width=document.querySelector('#emblem').width;
            document.querySelector('.data').height=document.querySelector('.card').height;
            document.querySelector('.data').style.height = `${document.querySelector('.card').clientHeight}px`;
            document.querySelector('#emblem').style.height = `${document.querySelector('.card').clientHeight/2.1}px`;
            document.querySelector('#flag').style.height = `${document.querySelector('.card').clientHeight/2.1}px`;
        }).catch(function(err)
        {
            document.querySelector('.e').style.display='block';
            document.querySelector('#emblem').style.display='none'
            document.querySelector('.data').style.display='none'
            document.querySelector('#flag').style.display='none'

            document.querySelector('.e').innerText='Not Valid!'
        });
        
        
    if (defSelect=='country-code')
        fetch(`https://countryinfoapi.com/api/countries/${e}`)
        
        .then(data => data.json())
        .then(item => {
            if (!mediaQuery.matches) {
                
                document.querySelector('.card').style.marginTop='110%';
            }

            document.querySelector('.e').style.display='none';
            document.querySelector('.data').style.display='flex';
            document.querySelector('#emblem').style.display='flex';
            document.querySelector('#flag').style.display='flex';
            document.querySelector('.cname').innerText=item.name+' '; //
            //document.querySelector('.flag').innerText=item[0].flag; 
            document.querySelector('.pop').innerText=item.population;//
            document.querySelector('.landlocked').innerText=item.landlocked;//
            document.querySelector('.code').innerText=item.cca3;  //
            document.querySelector('.capital').innerText=item.capital;
            document.querySelector('.area').innerText=item.area + ' square km';//
            document.querySelector('.continent').innerText=item.continents;
            document.querySelector('.independent').innerText=item.independent;
            document.querySelector('.region').innerText=item.subregion;
            document.querySelector('.flag').src=`https://flagcdn.com/160x120/${item.cca2.toLowerCase()}.png`;
            document.querySelector('.coat').src=item.coatOfArms;
            document.querySelector('.imgs').width=document.querySelector('#emblem').width;
            document.querySelector('.data').style.height = `${document.querySelector('.card').clientHeight}px`;
            document.querySelector('#emblem').style.height = `${document.querySelector('.card').clientHeight/2.1}px`;
            document.querySelector('#flag').style.height = `${document.querySelector('.card').clientHeight/2.1}px`;

        }).catch(function(err)
        {
            document.querySelector('.e').style.display='block';
            document.querySelector('.e').innerText='Not Valid!';
            document.querySelector('#emblem').style.display='none'
            document.querySelector('.data').style.display='none'
            document.querySelector('#flag').style.display='none'
        });
    if (defSelect=='capital-city')
        fetch(`https://countryinfoapi.com/api/countries/capital/${e}`)
        
        .then(data => data.json())
        .then(item => {
            
            
            if (!mediaQuery.matches) {
                
                document.querySelector('.card').style.marginTop='110%';
            }
            document.querySelector('.e').style.display='none';
            document.querySelector('.data').style.display='flex';
            document.querySelector('#emblem').style.display='flex';
            document.querySelector('#flag').style.display='flex';
            document.querySelector('.cname').innerText=item.name+' '; //

            document.querySelector('.pop').innerText=item.population;//
            document.querySelector('.landlocked').innerText=item.landlocked;//
            document.querySelector('.code').innerText=item.cca2;  //
            document.querySelector('.capital').innerText=item.capital;
            document.querySelector('.area').innerText=item.area + ' square km';//
            document.querySelector('.continent').innerText=item.continents;
            document.querySelector('.independent').innerText=item.independent;
            document.querySelector('.region').innerText=item.subregion;
            document.querySelector('.flag').src=`https://flagcdn.com/160x120/${item.cca2.toLowerCase()}.png`;
            document.querySelector('.coat').src=item.coatOfArms;
            document.querySelector('.imgs').width=document.querySelector('#emblem').width;
            
            document.querySelector('.data').style.height = `${document.querySelector('.card').clientHeight}px`;
            document.querySelector('#emblem').style.height = `${document.querySelector('.card').clientHeight/2.1}px`;
            document.querySelector('#flag').style.height = `${document.querySelector('.card').clientHeight/2.1}px`;
        }).catch(function(err)
        {
            document.querySelector('.e').style.display='block';
            document.querySelector('.e').innerText='Not Valid!';
            document.querySelector('#emblem').style.display='none'
            document.querySelector('.data').style.display='none'
            document.querySelector('#flag').style.display='none'
        });


}
document.querySelector('.search').addEventListener('click',()=>{
    if (defSelect=='country-code'){      
        document.querySelector('input').value=document.querySelector('input').value.toUpperCase()
        nations(document.querySelector('input').value)
    }else{
        nations(document.querySelector('input').value)
    }
    

    
})

let webMode= 0;
let modebtn= document.querySelector('.mode');
modebtn.addEventListener('click',()=>{
    if (webMode>4){
        webMode=0
    }else{
        webMode++
    }
    if (webMode==0){
        document.querySelector('.def').innerText='Default';
        document.body.style.backgroundColor='white';
        document.body.style.backgroundImage='radial-gradient(circle, #c21b69 1px, transparent 1px)';
        document.querySelector('.card').style.boxShadow='20px 20px 60px #bebebe,-20px -20px 60px #ffffff ';
        document.querySelector('.card2').style.boxShadow='  20px 20px 60px #d8d8d8,-20px -20px 60px #ffffff ';
        document.querySelector('.data').style.boxShadow='  20px 20px 60px #d8d8d8,-20px -20px 60px #ffffff ';
        document.querySelector('#emblem').style.boxShadow='  20px 20px 60px #d8d8d8,-20px -20px 60px #ffffff ';
        document.querySelector('.card3').style.boxShadow='  20px 20px 60px #d8d8d8,-20px -20px 60px #ffffff ';
        document.querySelector('.searchx').style.boxShadow=' 10px 10px 60px #b4b4b4,-10px -10px 60px #ffffff ';

    }
    else if (webMode==1){
        document.querySelector('.def').innerText='Theme #1';
        document.body.style.backgroundColor='rgb(8,0,6)';
        //document.body.style.backgroundImage='radial-gradient(circle, white 1px, transparent 1px)';
        document.querySelector('.card').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card2').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.data').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('#emblem').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card3').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.searchx').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';

        console.log(webMode)
    }else if (webMode==2){
        document.body.style.backgroundColor='#1e0000';
        document.querySelector('.def').innerText='Theme #2';
        //document.body.style.backgroundImage='radial-gradient(circle, white 1px, transparent 1px)';
        document.querySelector('.card').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card2').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.data').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('#emblem').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card3').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.searchx').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';

    }
    else if (webMode==3){
        document.querySelector('.def').innerText='Theme #3';
        document.body.style.backgroundColor='rgb(28,0,10)';
       //  document.body.style.backgroundImage='radial-gradient(circle, white 1px, transparent 1px)';
        document.querySelector('.card').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card2').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.data').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('#emblem').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card3').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.searchx').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.buttonsx').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
    }
    else if (webMode==4){
        document.querySelector('.def').innerText='Theme #4';
        document.body.style.backgroundColor='rgb(30,0,28)';
        //document.body.style.backgroundImage='radial-gradient(circle, white 1px, transparent 1px)';
        document.querySelector('.card').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card2').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.data').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('#emblem').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.card3').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.searchx').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
        document.querySelector('.buttonsx').style.boxShadow='20px 20px 60px #410020,-20px -20px 60px #0f000a';
    }
    else if (webMode==5){
        document.querySelector('.def').innerText='Theme #5';
        document.body.style.backgroundColor='rgb(30,19,30)';
        //document.body.style.backgroundImage='radial-gradient(circle, white 1px, transparent 1px)';
        document.querySelector('.card').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
        document.querySelector('.card2').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
        document.querySelector('.data').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
        document.querySelector('#emblem').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
        document.querySelector('.card3').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
        document.querySelector('.searchx').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
        document.querySelector('.buttonsx').style.boxShadow='20px 20px 60px rgb(31,31,31),-20px -20px 60px #0f000a';
    }

    
    
})
//rgb(8, 0, 6)