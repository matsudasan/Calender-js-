const year=document.getElementById("year")
const month=document.getElementById("month")
const calender=document.getElementById("calender")
const button =document.getElementById("button")
const name=document.getElementById("name")
const days=["日","月","火","水","木","金","土"]

button.addEventListener("click",()=>{
    if(month.value>=13){
        alert("入力できるのは1~12月です")
    }else if(year.value==="" || month.value===""){
        alert("空白があります")
    }else{
        name.textContent=`${year.value}年${month.value}月`
        calender.innerHTML=""
        const firstday=new Date(year.value,month.value-1,1).getDay()
        const lastday=new Date(year.value,month.value,0).getDate()
        const row=document.createElement("tr")
        row.setAttribute("align","center")
        days.map(i=>{
            const header=document.createElement("th")
            header.textContent=i
            row.appendChild(header)
        })
        calender.appendChild(row)

        let count=1
        loop:
        for(let i=0; i<6; i++){
            const week=document.createElement("tr")
            week.setAttribute("align","center")
            for(let j=0; j<7; j++){
                if(i==0 && j<firstday){
                    week.innerHTML+='<td></td>'
                }else if(count>lastday){
                    if(j==0){
                        calender.appendChild(week)
                        break loop;
                    }
                    else{
                        for(let k=0;k<7-j; k++){
                            week.innerHTML+='<td></td>'
                        }
                        calender.appendChild(week)
                        break loop;
                    }
                }else{
                    week.innerHTML+='<td>'+count+'</td>'
                    count+=1
                }
            }
            calender.appendChild(week)
        }
    }
})

