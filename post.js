

{
const outputContainer=$("#output-container");
$.ajax({
    type: "get",
    url: "https://api.spaceXdata.com/v3/launches?limit=100",
    success: function (data) {
        // console.log(data[2]);
        for(let i of data){
            outputContainer.append(`
            <div class="card">
            <div class="card-image-holder">
            <img src="${i.links.mission_patch_small}" alt="">
            </div>
            <div class="card-info">
                <span><h4>${i.mission_name}</h4></span>
            </div>
            <div class="card-info">
            <h4>Mission IDs:</h4>
                <ul id="table-${i.mission_name}">
                </ul>
            </div>
            <div class="card-info" style="text-align:left;">
                <span>Launch Year:${i.launch_year}</span>

            </div>
            <div class="card-info">
                <span>Successful launch:${i.launch_success}</span>
            </div>
            <div class="card-info">
                <span>Successful landing:${i.launch_landing}</span>
            </div>
        </div>`);
        if(i.mission_id.length!=0){
            let table=$(`#table-${i.mission_name}`);
            for(let j of i.mission_id){
                table.append(`<li>${j}</li>`)
            }
        }

        }
        
        
    }

});




}
{
const outputContainer=$("#output-container");
const filterInputs=$(".filter-container input");
const filter1Inputs=$("#filter-container-filter1 input");
const filter2Inputs=$("#filter-container-filter2 input");
const filter3Inputs=$("#filter-container-filter3 input");
console.log(filter1Inputs);
for(let i of filterInputs){
    $(i).click(function (e) { 
        var url="https://api.spaceXdata.com/v3/launches?limit=100";
        for(let k of filter2Inputs){
            if($(k).prop("checked")){
                let launchingStatus=$(k).prop("value");
                url=url+"&launch_success="+launchingStatus;
            }
        }
        for(let l of filter3Inputs){
            if($(l).prop("checked")){
                let landingStatus=$(l).prop("value");
                url=url+"&land_success="+landingStatus;
            }
        }
        for(let j of filter1Inputs){
            if($(j).prop("checked")){
                let yearVal=$(j).prop("value");
                url=url+"&launch_year="+yearVal;
            }
        }
        $.ajax({
            type: "get",
            url: url,
            success: function (data) {
                outputContainer.html("");;
                for(let i of data){
                    outputContainer.append(`
                    <div class="card">
                    <div class="card-image-holder">
                    <img src="${i.links.mission_patch_small}" alt="">
                    </div>
                    <div class="card-info">
                        <span><h4>${i.mission_name}</h4></span>
                    </div>
                    <div class="card-info">
                    <h4>Mission IDs:</h4>
                        <ul id="table-${i.mission_name}">
                        </ul>
                    </div>
                    <div class="card-info" style="text-align:left;">
                        <span>Launch Year:${i.launch_year}</span>
        
                    </div>
                    <div class="card-info">
                        <span>Successful launch:${i.launch_success}</span>
                    </div>
                    <div class="card-info">
                        <span>Successful landing:${i.launch_landing}</span>
                    </div>
                </div>`);
                if(i.mission_id.length!=0){
                    let table=$(`#table-${i.mission_name}`);
                    for(let j of i.mission_id){
                        table.append(`<li>${j}</li>`)
                    }
                }
        
                }
            }
        });
        
    });
}









}

