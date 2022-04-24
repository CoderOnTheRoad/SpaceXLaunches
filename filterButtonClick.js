{
    let radioButtons= $(".filter-button-filter1 input");
    let buttonContainers=$(".filter-button-filter1");
    // console.log(buttonContainers);
    for(let i=0;i<radioButtons.length;i++){
        let button=$(radioButtons[i]);
        let container=$(buttonContainers[i]);
        button.change(function (e) { 
            // e.preventDefault();
            // container.style.backgroundColor="blue";
            for(let r of radioButtons){
                $(r).prop("checked", false);
            }
            for(let c of buttonContainers){
            $(c).css("backgroundColor", "lightgreen");
            }
            button.prop("checked", true);
            if(button.prop("checked")){  

                container.css("backgroundColor", "greenyellow");
            }else{
                container.css("backgroundColor", "lightgreen");
            }
        });
    }
}

{
    let radioButtons= $(".filter-button-filter2 input");
    let buttonContainers=$(".filter-button-filter2");
    // console.log(buttonContainers);
    for(let i=0;i<radioButtons.length;i++){
        let button=$(radioButtons[i]);
        let container=$(buttonContainers[i]);
        button.change(function (e) { 
            // e.preventDefault();
            // container.style.backgroundColor="blue";
            for(let r of radioButtons){
                $(r).prop("checked", false);
            }
            for(let c of buttonContainers){
            $(c).css("backgroundColor", "lightgreen");
            }
            button.prop("checked", true);
            if(button.prop("checked")){  

                container.css("backgroundColor", "greenyellow");
            }else{
                container.css("backgroundColor", "lightgreen");
            }
        });
    }
}

{
    let radioButtons= $(".filter-button-filter3 input");
    let buttonContainers=$(".filter-button-filter3");
    // console.log(buttonContainers);
    for(let i=0;i<radioButtons.length;i++){
        let button=$(radioButtons[i]);
        let container=$(buttonContainers[i]);
        button.change(function (e) { 
            // e.preventDefault();
            // container.style.backgroundColor="blue";
            for(let r of radioButtons){
                $(r).prop("checked", false);
            }
            for(let c of buttonContainers){
            $(c).css("backgroundColor", "lightgreen");
            }
            button.prop("checked", true);
            if(button.prop("checked")){  

                container.css("backgroundColor", "greenyellow");
            }else{
                container.css("backgroundColor", "lightgreen");
            }
        });
    }
}